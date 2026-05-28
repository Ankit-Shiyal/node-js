
import multer from "multer";

import fs from "fs";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // cb(null, "uploads");

        let folderName = "uploads/";

        if (file.foldername === "EventImages"){
           foldername += "EventImages"
        } else if (file.foldername === "EventPoster"){
            foldername += "EventPoster"
        }else if (file.foldername === "EventBanner"){
            foldername += "EventBanner"
        }else if(file.foldername === "EventSpiker"){
            foldername += "EventSpiker"
        }else if(file.foldername === "EventDocument"){
            foldername += "EventDocument"
        }else{
            foldername = "others"
        }

    fs.mkdirSync(foldername, { recursive: true });

    cb(null, foldername);

    },
})