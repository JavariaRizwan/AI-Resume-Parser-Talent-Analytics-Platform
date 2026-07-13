
const express=require('express');
const multer=require('multer');

const upload = multer({ storage: multer.memoryStorage() });
const router= express.Router();
const { analyzeResume } =require('./components/post_functions');


router.post('/analyze_resume', upload.single('file'), analyzeResume)


module.exports = router;