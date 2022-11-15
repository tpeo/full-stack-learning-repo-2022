// Backend Routes that handle file upload and downloads
// Google API Documentation: https://cloud.google.com/nodejs/docs/reference/storage/latest

const express = require("express");
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const bucket = require("../middleware/firebase");
const cors = require("cors");

// Route Handler
const files = express.Router();
files.use(cors());

// Download file from bucket
files.get("/get_files/:file_name", async (req, res) => {
  try {
    // Specify where to download the file to
    const file_name = req.params.file_name;
    const file_location = path.join(__dirname, "../files", file_name);
    const downloadOption = {
      destination: file_location,
    };
    // Checks if the file exists on the server, retrieves from bucket if it doesn't
    if (!fs.existsSync(file_location)) {
      // Downloads the File from the bucket, throws an exception if it doesn't exist
      await bucket.file(file_name).download(downloadOption);
    }

    // Return the file
    return res.status(200).sendFile(file_location);
  } catch (e) {
    return res.status(404).send("No such file exists");
  }
});

// Upload File via Memory: https://github.com/googleapis/nodejs-storage/blob/main/samples/uploadFromMemory.js
files.post("/", multer().single("demo_image"), async (req, res) => {
  const file = req.file;
  if (file !== undefined) {
    // Upload via buffers
    const c = await bucket.file(req.file.originalname).save(req.file.buffer);
    return res.status(201).json({ msg: "Successful Uploaded" });
  }
  return res.status(400).json({ msg: "File could not be loaded" });
});

// Upload File from Disk: https://github.com/googleapis/nodejs-storage/blob/main/samples/uploadFile.js
files.post("/disk", multer().single("demo_image"), async (req, res) => {
  const file = req.file;

  if (file !== undefined) {
    // First download the file to disk: make sure you have a /files_demo/files directory
    const file_location = path.join(__dirname, "../files", file.originalname);
    fs.writeFileSync(file_location, file.buffer);

    // Then upload the file: file_location is where the file is locally
    const options = { destination: file.originalname };
    await bucket.upload(file_location, options);
    return res.status(201).json({ msg: "Successful Uploaded" });
  }
  return res.status(400).json({ msg: "File could not be loaded" });
});

/*
    TODO: Multi-File Upload Example In Memory, allow up to 3 files at most
    Hint
    1. Find what multer middleware you need for multiple files: https://www.npmjs.com/package/multer
    2. Upload multiple files (via promises)
*/
// Upload File via Memory: https://github.com/googleapis/nodejs-storage/blob/main/samples/uploadFromMemory.js
files.post("/multi", multer().array("demo_image", 3), async (req, res) => {
  //TODO
  const files = req.files;
  return res.status(400).json({ msg: "File could not be loaded" });
});

/*
    Bonus TODO: Listing files their sizes, and mime type in the bucket
    Check this out: https://github.com/googleapis/nodejs-storage/blob/main/samples/listFiles.js
*/
files.get("/list", async (req, res) => {
  //TODO
  return res.status(400).json({ msg: "File could not be loaded" });
});

module.exports = files;
