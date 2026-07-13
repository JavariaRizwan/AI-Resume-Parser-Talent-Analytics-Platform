# AI Resume Parser & Talent Analytics Platform

An end-to-end, full-stack web application designed to automate the talent acquisition pipeline. The system ingests unstructured multi-format resumes (PDF/Docx), parses raw text, and utilizes advanced Large Language Model (LLM) orchestration to extract, clean, and structure data into validated JSON formats for seamless database integration and candidate evaluation.

## 🚀 Features
* **Multi-Format Document Ingestion:** Secure file uploading and raw text extraction from PDFs and Word documents.
* **LLM-Powered Structured Extraction:** Uses optimized prompt engineering and schema enforcement to extract candidate names, contact details, technical skills, professional experience, and education history.
* **Interactive Dashboard UI:** Clean, intuitive interface to review parsed data, compare candidate profiles, and export structured JSON datasets.
* **Secure Data Management:** Dynamic environment configuration preventing exposure of API keys and database credentials.

## 🛠️ Tech Stack
* **Frontend:** React.js – Dynamic, responsive user dashboard.
* **Backend:** Node.js (Express) – RESTful API architecture, file processing, and service orchestration.
* **AI & NLP Pipeline:** Gemini API – Core LLM orchestration, structured data generation, and context management.
* **Text Extraction:** pdf-parse / mammoth / multer – High-fidelity text scraping and multi-part form data handling from raw binary documents.

---

## 🏗️ System Architecture & Data Flow

```text
[ User Uploads PDF ] 
         │
         ▼
[ Backend Storage / Buffer ] ──► [ Text Extraction Layer ]
                                             │
                                             ▼
[ Structured JSON Output ]  ◄─── [ LLM Orchestration & Schema Validation ]
         │
         ▼
[ Frontend Dashboard UI ]
```
## 📝 Breakdown of the Flow
Upload: The user submits a resume file via the frontend dashboard using multer.

Extraction: The backend processes the file buffer using pdf-parse or mammoth, stripping away styling to isolate raw, unformatted text.

Orchestration: The extracted text is passed into a structured prompt pipeline where the Gemini API parses the data against a strict JSON schema.

Delivery: The validated JSON object is returned to the client-side React UI for rendering and analytical filtering.

## ⚙️ Setup and Installation
Prerequisites
Node.js installed locally (v18+ recommended)

A Gemini API Key from Google AI Studio
