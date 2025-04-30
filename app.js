// // const express = require('express');
// // const cors = require('cors'); // ✅ CORS import
// // const multer = require('multer');
// // const path = require('path');
// // const app = express();
// // const port = 3000;

// // app.use(cors()); // ✅ Enable CORS

// // // Configure Multer storage
// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, 'uploads/');
// //   },
// //   filename: function (req, file, cb) {
// //     cb(null, Date.now() + path.extname(file.originalname)); // timestamp + original extension
// //   }
// // });

// // const upload = multer({ storage: storage });

// // // Serve uploaded files statically
// // app.use('/uploads', express.static('uploads'));

// // // Simple HTML upload form
// // app.get('/', (req, res) => {
// //   res.send(`
// //     <h2>File Upload Form</h2>
// //     <form action="/upload" method="POST" enctype="multipart/form-data">
// //       <input type="file" name="myFile" />
// //       <button type="submit">Upload</button>
// //     </form>
// //   `);
// // });

// // // Handle file upload POST request
// // app.post('/upload', upload.single('myFile'), (req, res) => {
// //   if (!req.file) {
// //     return res.send('No file uploaded!');
// //   }
// //   res.send(`File uploaded: <a href="/uploads/${req.file.filename}" target="_blank">${req.file.filename}</a>`);
// // });

// // app.listen(port, () => {
// //   console.log(`Server running at http://localhost:${port}`);
// // });

// // Import required modules
// const express = require('express'); // Express module to create server
// const bodyParser = require('body-parser'); // To parse request body
// const cors = require('cors'); // To enable CORS
// const multer = require('multer'); // To handle file uploads
// const path = require('path'); // Path module to work with file paths

// const app = express(); // Create Express application
// const PORT = 5040; // Server port

// // Enable CORS for all routes
// app.use(cors());

// // Body-parser middleware
// app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
// app.use(bodyParser.json()); // Parse JSON bodies

// // Multer storage configuration
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'myimage/'); // Folder where uploaded images will be stored
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Use timestamp for filename to avoid overwriting
//   },
// });

// const upload = multer({ storage: storage }); // Create multer instance with storage config

// // Route to handle image upload
// app.post('/uploadimage', upload.single('file'), (req, res) => {
//   if (!req.file) {
//     return res.status(400).send('No file uploaded!'); // If no file uploaded
//   }
//   res.send('File uploaded successfully'); // Send success response
// });

// // Route to retrieve image from server
// app.get('/getimage/:picname', (req, res) => {
//   const filePath = path.join(__dirname, 'myimage', req.params.picname); // Construct file path
//   res.sendFile(filePath); // Send file back to client
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`); // Log the server URL
// });


const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 5040;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'myimage/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// ✅ Root route added here
app.get('/', (req, res) => {
  res.send('Backend server is running.');
});

app.post('/uploadimage', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded!');
  }
  res.send('File uploaded successfully');
});

app.get('/getimage/:picname', (req, res) => {
  const filePath = path.join(__dirname, 'myimage', req.params.picname);
  res.sendFile(filePath);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
