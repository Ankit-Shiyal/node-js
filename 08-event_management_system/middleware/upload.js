import multer from "multer";
import fs from "fs";

const storage = multer.diskStorage({

  destination: (req, file, cb) => {

    let folderName = "uploads/";

    if (file.fieldname === "EventImages") {
      folderName += "EventImages";
    } 
    else if (file.fieldname === "EventPoster") {
      folderName += "EventPoster";
    } 
    else if (file.fieldname === "EventBanner") {
      folderName += "EventBanner";
    } 
    else if (file.fieldname === "EventSpiker") {
      folderName += "EventSpiker";
    } 
    else if (file.fieldname === "EventDocument") {
      folderName += "EventDocument";
    } 
    else {
      folderName += "others";
    }

    fs.mkdirSync(folderName, { recursive: true });

    cb(null, folderName);
  },

  filename: (req, file, cb) => {

    const uniqueName =
      file.fieldname + "-" + Date.now() + "-" + file.originalname;

    cb(null, uniqueName);
  },

});

const fileFilter = (req, file, cb) => {

  const allowedTypes = [   
    "image/jpg",
    "image/jpeg",
    "image/png",
    "application/pdf",
    
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type"), false);
  }
};

const upload = multer({
     storage, 
    fileFilter,  
    limits: { fileSize: 5 * 1024 * 1024 },
 });

export default upload;