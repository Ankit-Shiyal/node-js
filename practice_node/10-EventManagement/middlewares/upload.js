
import multer from "multer"

import fs from "fs"
import { fileURLToPathBuffer } from "url"

const storage = new multer.diskStorage({
    destination:(req, file ,cb)=>{
        let  folderName = "upload/"


        if(file.filename === "EventImages"){
            folderName+= "EventImages"
        }else if(file.fieldname === "EventBanner"){
            folderName+= "EventBanner"
        }
        else if(file.fieldname === "EventPoster"){
            folderName+= "EventPoster"
        }
        else if(file.fieldname === "EventSpeaker"){
            folderName+= "EventSpeaker"
        }
        else if(file.fieldname === "EventDocument"){
            folderName+= "EventDocument"
        }
        else{
            folderName ="other"
        }

        fs.mkdirSync(folderName, {recursive:true})

        cb(null, folderName)
    }
})

const fileFilter=(req, file, cb)=>{
    const allowed=["image/jpj", "image/png", "image/jpeg", "application/pdf"]

    if(allowed.includes(file.mimetype)){
        cb(null, true)
    }else{
        cb(new Error("only allowed file can app", 404), false)
    }

}

const upload = multer({
    storage,
    fileFilter,
    limits: {fileSize: 10 * 1024 * 1024}
})

export default upload;