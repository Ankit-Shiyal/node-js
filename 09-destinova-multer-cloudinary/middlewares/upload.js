
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "DestiNova",
    format: "webp",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
    transformation: [
      { width: 1000, height: 1000, crop: "limit" },
      {
        quality: "auto",
      }
    ],
  },
});

const uploads = multer({ storage, limits: { fileSize: 20 * 1024 * 1024 } });

export default uploads;