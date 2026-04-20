function getScoreValue(scores, key) {
    if (!scores) return 0;
    const variants = [
        key,
        key.toLowerCase(),
        key.toUpperCase(),
        key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()
    ];

    for (const variant of variants) {
        if (scores[variant] !== undefined) {
            return scores[variant];
        }
    }

    return 0;
}

function parseCareerSuggestions(result) {
    if (!result) return [];
    if (Array.isArray(result.recommendedCareers) && result.recommendedCareers.length > 0) {
        return result.recommendedCareers;
    }
    if (typeof result.recommendedCareer === 'string' && result.recommendedCareer.trim().length > 0) {
        return result.recommendedCareer.split(',').map(c => c.trim()).filter(Boolean);
    }
    return [];
}

function initResult() {
    let scores = JSON.parse(localStorage.getItem('cp_quiz_result'));
    const mlResult = JSON.parse(localStorage.getItem('cp_quiz_result_ml'));
    const lastResult = JSON.parse(localStorage.getItem('cp_last_result'));

    if (!scores && !mlResult && !lastResult) {
        window.location.href = 'quiz.html';
        return;
    }

    let topStreamName = '';
    let matchPercent = 0;
    let recommendedCareer = '';
    let recommendedCareers = [];

    if (lastResult) {
        scores = {
            science: getScoreValue(lastResult.scores || lastResult, 'science'),
            commerce: getScoreValue(lastResult.scores || lastResult, 'commerce'),
            arts: getScoreValue(lastResult.scores || lastResult, 'arts')
        };
        recommendedCareers = parseCareerSuggestions(lastResult);
        topStreamName = lastResult.recommendedStream || getStreamNameFromScores(scores);
        matchPercent = lastResult.matchPercentage || getScoreValue(scores, getStreamKey(topStreamName));
        recommendedCareer = lastResult.recommendedCareer || recommendedCareers[0] || '';
    } else if (mlResult) {
        scores = {
            science: getScoreValue(mlResult.scores || mlResult, 'science'),
            commerce: getScoreValue(mlResult.scores || mlResult, 'commerce'),
            arts: getScoreValue(mlResult.scores || mlResult, 'arts')
        };
        recommendedCareers = parseCareerSuggestions(mlResult);
        topStreamName = mlResult.recommendedStream || getStreamNameFromScores(scores);
        matchPercent = mlResult.matchPercentage || getScoreValue(scores, getStreamKey(topStreamName));
        recommendedCareer = mlResult.recommendedCareer || recommendedCareers[0] || '';
    } else {
        const streamName = getStreamNameFromScores(scores);
        topStreamName = streamName;
        matchPercent = getScoreValue(scores, getStreamKey(streamName));
    }

    if (recommendedCareer || recommendedCareers.length > 0) {
        document.getElementById('ml-insight-box').style.display = 'block';
        const careerElement = document.getElementById('ml-career');
        const careerLabel = document.getElementById('ml-career-label');

        const suggestions = recommendedCareers.length > 0 ? recommendedCareers : [recommendedCareer];
        careerElement.innerHTML = suggestions.map(c => `<span>${c}</span>`).join(' <span style="opacity:0.6;">/</span> ');
        careerLabel.textContent = suggestions.length > 1 ? 'Our model suggests these career options:' : 'Our model identifies your ideal career path as:';
    }

    const colorMap = {
        Science: 'var(--color-science)',
        Commerce: 'var(--color-commerce)',
        'Arts & Humanities': 'var(--color-arts)'
    };

    document.getElementById('stream-name').textContent = topStreamName;
    document.getElementById('stream-name').style.color = colorMap[topStreamName] || 'var(--color-primary)';
    document.getElementById('match-percent').textContent = matchPercent + '%';
    document.getElementById('stream-description').textContent = getStreamDescription(topStreamName);

    setTimeout(() => {
        document.getElementById('bar-science').style.width = getScoreValue(scores, 'science') + '%';
        document.getElementById('bar-commerce').style.width = getScoreValue(scores, 'commerce') + '%';
        document.getElementById('bar-arts').style.width = getScoreValue(scores, 'arts') + '%';

        document.getElementById('val-science').textContent = getScoreValue(scores, 'science') + '%';
        document.getElementById('val-commerce').textContent = getScoreValue(scores, 'commerce') + '%';
        document.getElementById('val-arts').textContent = getScoreValue(scores, 'arts') + '%';
    }, 500);

    renderDegrees(getStreamKey(topStreamName));
    setupActions({ name: topStreamName });
}

function getStreamKey(streamName) {
    if (!streamName) return 'science';
    const lower = streamName.toLowerCase();
    if (lower.includes('art')) return 'arts';
    if (lower.includes('comm')) return 'commerce';
    return 'science';
}

function getStreamNameFromScores(scores) {
    const streams = [
        { name: 'Science', value: scores.science || scores.SCIENCE || 0 },
        { name: 'Commerce', value: scores.commerce || scores.COMMERCE || 0 },
        { name: 'Arts & Humanities', value: scores.arts || scores.ARTS || 0 }
    ];
    streams.sort((a, b) => b.value - a.value);
    return streams[0].name;
}

function getStreamDescription(streamName) {
    const descriptions = {
        Science: 'You have a strong affinity for logical reasoning, technology, and innovation. Explore science and engineering paths that match your analytical mindset.',
        Commerce: 'You enjoy numbers, strategy, and business thinking. Commerce careers are a great fit for finance, accounting and management roles.',
        'Arts & Humanities': 'You are creative, people-focused, and enjoy storytelling. Arts pathways work well for design, psychology, law and communication careers.'
    };
    return descriptions[streamName] || descriptions.Science;
}

function renderDegrees(stream) {
    const grid = document.getElementById('degree-grid');
    const filteredDegrees = degreesData.filter(d => d.stream === stream);

    if (!filteredDegrees.length) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px;"><h3>No recommended degrees found for this stream yet.</h3></div>`;
        return;
    }

    grid.innerHTML = filteredDegrees.map(d => `
        <div class="degree-card" style="border-top-color: var(--color-${stream})">
            <h3 class="degree-name">${d.name}</h3>
            <div class="degree-meta">
                <span><i class="fas fa-clock"></i> ${d.duration}</span> | 
                <span><i class="fas fa-money-bill-wave"></i> ${d.salary}</span>
            </div>
            <p style="font-size: 14px; margin-bottom: 15px;">${d.description}</p>
            <div class="career-tags">
                ${d.careers.map(c => `<span class="career-tag">${c}</span>`).join('')}
            </div>
            <a href="degree-detail.html?id=${d.id}" class="btn" style="margin-top: 20px; color: var(--color-${stream}); font-weight: 700;">
                View Details <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    `).join('');
}

function setupActions(topStream) {
    document.getElementById('btn-share-whatsapp').onclick = () => {
        const text = `Hey! I just found out my ideal career stream is ${topStream.name} using StreamSmart. Check yours too! https://streamsmart.in`;
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    };

    document.getElementById('btn-save-result').onclick = () => {
        const user = JSON.parse(localStorage.getItem('cp_user'));
        if (!user) {
            alert('Please Login or Register to save your results!');
            window.location.href = 'login.html';
        } else {
            alert('Result saved to your dashboard!');
        }
    };
}

document.addEventListener('DOMContentLoaded', initResult);
