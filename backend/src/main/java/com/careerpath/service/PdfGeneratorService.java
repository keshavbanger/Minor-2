package com.careerpath.service;

import com.careerpath.model.User;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Table;
import com.itextpdf.layout.properties.TextAlignment;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;

@Service
public class PdfGeneratorService {

    public byte[] generateCareerGuide(User user) {
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        
        try {
            PdfWriter writer = new PdfWriter(out);
            PdfDocument pdf = new PdfDocument(writer);
            Document document = new Document(pdf);

            // Title
            Paragraph title = new Paragraph("StreamSmart - Personal Career Guide")
                    .setTextAlignment(TextAlignment.CENTER)
                    .setFontSize(20)
                    .setBold();
            document.add(title);

            document.add(new Paragraph("\n"));
            document.add(new Paragraph("Student Name: " + user.getFullName()));
            document.add(new Paragraph("Current Class: " + user.getCurrentClass()));
            document.add(new Paragraph("Date Generated: " + java.time.LocalDate.now()));

            document.add(new Paragraph("\n"));
            document.add(new Paragraph("Recommended Path:").setBold());
            document.add(new Paragraph("Based on your assessment, you show high aptitude for the " + user.getStream() + " stream."));

            document.add(new Paragraph("\n"));
            document.add(new Paragraph("Next Steps:").setBold());
            Table table = new Table(new float[]{1, 3});
            table.addCell("Step 1");
            table.addCell("Explore relevant degrees in our database.");
            table.addCell("Step 2");
            table.addCell("Check eligibility for national entrance exams.");
            table.addCell("Step 3");
            table.addCell("Apply for state scholarships to fund your education.");
            document.add(table);

            document.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return out.toByteArray();
    }
}
