
import multer from "multer";

import path from "path";

import HttpError from "./HttpError.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },

 filename: function (req, file, cb) {

    const EventImages = req.file?.req.files.map((file) => file.path) || null
    const EventPoster= req.file?.req.files[0].path || null
    const EventSpiker = req.file?.req.files.map((file) => file.path) || null
 }


})