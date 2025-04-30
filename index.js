// npm install multer --save : multer library provides function to upload file from client to server,
// it provides function to store file at server.
// image/file uploading and downloading from client to server

// Import required modules
const fs = require('fs');   // File system module for file operations
const express = require('express'); // Express framework for creating the server
const app = express(); // Create an Express application
const bodyParser = require('body-parser'); // Middleware to parse request bodies
const cors = require('cors'); // Middleware to enable CORS (Cross-Origin Resource Sharing)
const multer = require('multer'); // Middleware for handling multipart/form-data (file uploads)
const PORT = 5040; // Port number the server will listen on

// Middleware setup
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(bodyParser.json()); // Parse JSON bodies

// Code to save image to server

// diskStorage(): Multer function used to store files in server-side permanent memory
const st = multer.diskStorage({
    // destination: Function to determine where uploaded files should be stored
    destination: (req, file, cb) => {
        cb(null, 'myimage/') // Set path of folder/directory ('myimage/')
        // First parameter is for error (null means no error)
        // Second parameter is the destination path
    },
    // filename: Function to determine what the file should be named
    filename: (req, file, cb) => {
        cb(null, file.originalname) // Use the original file name
        // First parameter is for error (null means no error)
        // Second parameter is the filename to use
    },
});

// Create multer instance with the storage configuration
const upload = multer({ storage: st }); // 'storage' option tells multer where/how to store files

// Route to handle file upload
app.post('/uploadimage', upload.single('file'), (req, res) => {
    // upload.single('file'): Middleware to process a single file upload
    // 'file' is the name of the field in the form that contains the file
    
    res.send("File uploaded Successfully...."); // Send success response
    res.end(); // End the response
});

// Route to handle file download/retrieval
app.get('/getimage/:picname', (req, res) => {
    const fullPath = "C:/Users/PC/OneDrive/Desktop/PROGRAMING/EXPRESSJS/Express4/myimage/"
    // Construct full path to the image file
    
    // Send the file back to the client
    res.sendFile(fullPath + req.params.picname);
    // req.params.picname gets the filename from the URL parameter
});

// Start the server
app.listen(PORT, function () {
    console.log("Server is running http://localhost:" + PORT)
});