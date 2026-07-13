
import React, { useRef, useState } from 'react';
import axios from "axios"

const Body = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading]=useState(false);
  const [analysisResult, setAnalysisResult] = useState(null); //Add this line!

  const fileInputRef = useRef(null);
  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    const allowedTypes = 'application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document';

    if (droppedFile && allowedTypes.includes(droppedFile.type)) {
      setFile(droppedFile);
      alert("Processing has started. Wait a few minutes!")
    }
    else {
      setFile(null);
      alert("Invalid file type. Drop another one!")
    }

  }

const handleAnalyze= async()=>{
  
  if(!file){
      return alert('No file seleccted to analyse!');
    }

    const formData= new FormData();
    formData.append('file', file)

  
  try {
    setLoading(true);
    const response = await axios.post('http://localhost:5000/api/analyze_resume', formData,
{
  headers: {
    'Content-Type': 'multipart/form-data' // 👈 Force multipart parsing format
  }
}

    );
    
    setAnalysisResult(response.data);
    alert("Analysis is completed");
    console.log("Analysis complete", response.data);
    

  } 
  catch (error) {
    console.error(error.message);
  }
  finally {
    setLoading(false); // 👈 3. Turn off loading when request terminates
  }
}


  return (
    <div>
      <div
        onDragOver={(e) => { e.preventDefault() }}
        onDrop={handleDrop}
        className="p-12 border-2 border-dashed h-[75vh] border-slate-800 flex flex-col justify-center items-center  bg-slate-500/40 text-center"
      >

        <label htmlFor="fileInput" className="block m-3">
          {file ? `Selected: ${file.name}` : "Drop your resume here or click to browse"}
        </label>

        <input
          type="file"
          //  className="w-fit bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-medium py-2 px-4 rounded-xl shadow-lg shadow-indigo-500/20 hover:opacity-90 transition-opacity text-sm cursor-pointer" 
          id="fileInput"
          className='hidden'
          accept=".pdf, .docx"
          ref={fileInputRef}
          // onChange={(e) => {
          //   if (e.target.files[0]) setFile(e.target.files[0]);
          // }}
          onChange={(e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    const allowedTypes = 'application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    
    if (allowedTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
    } else {
      setFile(null); // 👈 Clear state
      alert("Invalid file type. Please choose a .pdf or .docx file!");
      e.target.value = ""; // Clear input DOM value
    }
  }}
        />


<div className='flex justify-around w-1/4'>
        <button
          type="button"
          onClick={() => fileInputRef.current.click()}
          className="w-fit bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-medium py-2 px-4 rounded-xl shadow-lg shadow-indigo-500/20 hover:opacity-90 transition-opacity text-sm cursor-pointer mt-2"
        >
          {file ? "Change File" : "Browse File"}
        </button>
        <button
          type="button"
          onClick={handleAnalyze}
          disabled={!file || loading}
className={`w-fit bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-medium py-2 px-4 rounded-xl shadow-lg shadow-indigo-500/20 transition-opacity text-sm mt-2 
    ${(!file || loading) 
      ? 'opacity-50 cursor-not-allowed' 
      : 'hover:opacity-90 cursor-pointer' // Hover effect only active if valid!
    }`}
        >
          {loading? "Analysing" : file ? "Analyze Resume" : "No file to analyze"}
        </button>
     
     </div>
     
      </div>

{/* --- Loading Spinner Section --- */}
{loading && (
  <div className="flex flex-col items-center justify-center p-12 space-y-4">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
    <p className="text-slate-600 font-medium">Analyzing resume, please wait...</p>
  </div>
)}


{/* --- Beautiful Results Section --- */}
{analysisResult && !loading && (
  <div className="bg-white border border-slate-100 shadow-xl rounded-2xl p-8 mt-8 space-y-6">
    
    {/* Headline & Score Header */}
    <div className="flex justify-between items-center pb-4 border-b border-slate-100">
      <h2 className="text-2xl font-bold text-slate-800">Match Dashboard</h2>
      <div className="bg-indigo-50 px-4 py-2 rounded-xl text-indigo-600 font-extrabold text-xl">
        Score: {analysisResult.ats_Score || 0}%
      </div>
    </div>

    {/* Dynamic Grid Layout for lists */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Strengths mapping */}
      <div>
        <h3 className="font-bold text-slate-700 mb-2">✅ Key Strengths</h3>
        <div className="flex flex-wrap gap-2">
          {(analysisResult.strengths || []).map((skill, index) => (
            <span key={index} className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-md">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Weaknesses mapping */}
      <div>
        <h3 className="font-bold text-slate-700 mb-2">⚠️ Key Weaknesses</h3>
        <div className="flex flex-wrap gap-2">
          {(analysisResult.weaknesses || []).map((skill, index) => (
            <span key={index} className="bg-rose-50 text-rose-700 text-xs font-semibold px-2.5 py-1 rounded-md">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Missing Keywords Section */}
    <div className="mt-4">
      <h3 className="font-bold text-slate-700 mb-2">🔍 Missing Keywords</h3>
      <div className="flex flex-wrap gap-2">
        {(analysisResult.missingKeywords || []).map((keyword, index) => (
          <span key={index} className="bg-amber-50 text-amber-700 text-xs font-semibold px-2.5 py-1 rounded-md border border-amber-100">
            {keyword}
          </span>
        ))}
      </div>
    </div>

    {/* Suggestions List */}
    <div className="bg-blue-50/50 p-4 rounded-xl mt-4">
      <h3 className="font-bold text-slate-800 text-sm mb-1">💡 Suggestions for Improvement</h3>
      <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1">
        {(analysisResult.suggestions || []).map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>

    {/* AI Summary Statement */}
    <div className="bg-slate-50 p-4 rounded-xl mt-4">
      <h3 className="font-bold text-slate-800 text-sm mb-1">Overall Verdict Summary</h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        {analysisResult.summary || "Your resume has been processed successfully."}
      </p>
    </div>

  </div>
)}


    </div>
  );
};

export default Body;
