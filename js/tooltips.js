const careerDefinitions = {
    "actuary": "A professional who analyzes financial risk using mathematics and statistics, mainly for insurance.",
    "ias-officer": "Indian Administrative Service officer - a top civil servant managing administration.",
    "data-analyst": "Processes and interprets large datasets to help organizations make decisions.",
    "forensic-scientist": "Applies scientific methods to analyze criminal evidence for law enforcement.",
    "ux-designer": "Focuses on making digital products easy and enjoyable to use for humans.",
    "b-tech": "Bachelor of Technology, an undergraduate engineering degree.",
    "merit-scholarship": "Financial aid awarded based on academic or extracurricular excellence.",
    "post-matric": "Scholarships available for students after they finish 10th grade (matriculation)."
};

function initTooltips() {
    const elements = document.querySelectorAll('.career-name, .term-tooltip');

    elements.forEach(el => {
        const term = el.textContent.toLowerCase().trim().replace(/ /g, '-');
        const definition = careerDefinitions[term];

        if (definition) {
            el.classList.add('tooltip-trigger');
            const tooltip = document.createElement('span');
            tooltip.className = 'tooltip-pane';
            tooltip.textContent = definition;
            el.appendChild(tooltip);
        }
    });
}

const tooltipStyles = document.createElement('style');
tooltipStyles.textContent = `
    .tooltip-trigger {
        position: relative;
        text-decoration: underline dotted var(--color-primary);
        cursor: help;
    }
    .tooltip-pane {
        visibility: hidden;
        width: 200px;
        background-color: #334155;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 8px;
        position: absolute;
        z-index: 1001;
        bottom: 125%;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: opacity 0.3s;
        font-size: 12px;
        line-height: 1.4;
        font-weight: normal;
        pointer-events: none;
    }
    .tooltip-trigger:hover .tooltip-pane {
        visibility: visible;
        opacity: 1;
    }
`;
document.head.appendChild(tooltipStyles);

window.addEventListener('DOMContentLoaded', initTooltips);
