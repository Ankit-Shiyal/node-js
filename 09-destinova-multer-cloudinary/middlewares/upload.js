
// import { CloudinaryStorage } from "multer-storage-cloudinary";
// import multer from "multer";

// import cloudinary from "../config/cloudinary.js";

// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "DestiNova",
//     format: "webp",
//     allowed_formats: ["jpg", "jpeg", "png", "webp"],
//     transformation: [
//       { width: 1000, height: 1000, crop: "limit" },
//       {
//         quality: "auto",
//       }
//     ],
//   },
// });

// const uploads = multer({ storage, limits: { fileSize: 20 * 1024 * 1024 } });

// export default uploads;


import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";


const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "destiNova",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
    transformation: [
      {
        height: 800,
        width: 800,
        crop: "limit",
      },
      {
        fetch_format: "webp",
      },
      {
        quality: "auto",
      },
    ],
  },
});

const uploads = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

export default uploads;