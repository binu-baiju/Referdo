import express, { Router } from "express";
import { addDev, sample } from "../controllers/formController";
const router: Router = express.Router();

require("dotenv").config();
import multer from "multer";
import multerS3 from "multer-s3";
import AWS from "aws-sdk";

// AWS.config.update({
//   accessKeyId : process.env.AWS_ACCESS_KEY || "",
//   secretAccessKey : process.env.AWS_ACCESS_SECRET || "",
//   region: process.env.AWS_REGION || "" 
// });
// const s3 = new AWS.S3();

// const myBucket = process.env.AWS_BUCKET || "";

// // const s3Client = new S3Client({ region: s3.config.region });


// const upload = multer({
//   storage:multerS3({
//     s3:s3 as any,
//     bucket: myBucket,
//     acl: "public-read",
//     contentType: multerS3.AUTO_CONTENT_TYPE,
//     key: function (req,file,cb) {
//       cb(null,file.originalname)
//     }
//   }),
//   fileFilter: function (req, file, cb) {
//     const allowedFileTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
//     if (allowedFileTypes.includes(file.mimetype) && (file.originalname.toLowerCase().endsWith(".pdf") || file.originalname.toLowerCase().endsWith(".doc") || file.originalname.toLowerCase().endsWith(".docx"))) {
//       cb(null, true);
//     } else {
//       cb(new Error("Invalid file type. Only PDF, DOC, and DOCX files are allowed."));
//     }
//   },
//   limits: {
//     fileSize: 10 * 1024 * 1024 // Specify the maximum file size in bytes (e.g., 10MB)
//   }
// })

AWS.config.update({
  accessKeyId : process.env.AWS_ACCESS_KEY || "",
  secretAccessKey : process.env.AWS_ACCESS_SECRET || "",
  region: process.env.AWS_REGION || "" 
});
const s3 = new AWS.S3();

const myBucket = process.env.AWS_BUCKET || "";

const uploadResume = multer({
  storage:multerS3({
    s3:s3 as any,
    bucket: myBucket,
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req,file,cb) {
      cb(null,file.originalname)
    }
  }),
  fileFilter: function (req, file, cb) {
    const allowedFileTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (allowedFileTypes.includes(file.mimetype) && (file.originalname.toLowerCase().endsWith(".pdf") || file.originalname.toLowerCase().endsWith(".doc") || file.originalname.toLowerCase().endsWith(".docx"))) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only PDF, DOC, and DOCX files are allowed."));
    }
  },
  limits: {
    fileSize: 10 * 1024 * 1024 // Specify the maximum file size in bytes (e.g., 10MB)
  }
});

const photoUpload = multer({
  storage: multerS3({
    s3: s3 as any,
    bucket: myBucket,
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      cb(null, "photos/" + file.originalname); // Save the photo with a specific prefix "photos/"
    }
  }),
  fileFilter: function (req, file, cb) {
    const allowedFileTypes = ["image/jpeg", "image/png", "image/gif"];
    if (allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only JPEG, PNG, and GIF images are allowed."));
    }
  },
  limits: {
    fileSize: 10 * 1024 * 1024 // Specify the maximum file size in bytes (e.g., 10MB)
  }
});


// const aFunction = (req:any,res:any) => {
//   console.log(req);
  
  
//   // const s3Client = new S3Client({ region: s3.config.region }); 
// }


// router.post("/form/user/:userId/dev",upload.single("resume"), addDevs);
router.post( '/form/user/:userId/dev/:linkName',uploadResume.array('resume', 1), photoUpload.array('image', 1),addDev);

export default router;

// [uploadResume.single("resume"), photoUpload.single("image")]