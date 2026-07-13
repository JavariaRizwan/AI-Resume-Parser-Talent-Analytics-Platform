const multer = require('multer');
const mammoth = require('mammoth');
const pdfParse = require('pdf-parse');
if (typeof pdfParse !== 'function' && pdfParse.default) {
    pdfParse = pdfParse.default;
}
const geminiAI = require('./gen-ai-initialization')



const analyzeResume = async (req, res) => {
    const { file } = req;

    try {
        if (!file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        let resume = '';

        if (file.mimetype === 'application/pdf') {
            const result = await pdfParse(file.buffer);
            resume = result.text; // ✅ Fixed: assigned directly to outer variable
        }
        else if (file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
            const result = await mammoth.extractRawText({ buffer: file.buffer });
            resume = result.value; // ✅ Fixed: assigned directly to outer variable
        }
        else {
            return res.status(400).json({ error: 'Only PDF or DOCX allowed' });
        }

        if (!resume || !resume.trim()) {
            return res.status(400).json({ error: 'Could not extract text from file' });
        }

        const prompt = `You are an ATS(Application tracking Score) resume analyzer. Analyze the resume below
and respond only in valid JSON. No markdown, no extra text, in this exact format:
{
"ats_Score": <number 0-100>,
"strengths":["...", "..."],
"weaknesses":["...", "..."], 
"suggestions":["...", "..."],
"missingKeywords": ["...", "..."],
"summary": "2 - 3 lines sentence overall verdict"
}

Resume: ${resume};
`;

        const response = await geminiAI.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                maxOutputTokens: 350,  
                temperature: 0.1       
            }
        });

        let cleaned_text = response.text.replace(/```json|```/g, '').trim();
        const analysis = JSON.parse(cleaned_text);

        res.status(200).json(analysis);

    } catch (error) {
        console.json(error.message)
        res.status(500).json({ error: "Error happened", details: error.message });
    }
}

module.exports = { analyzeResume };