import multer from "multer";

const storage = multer.memoryStorage();
const filefilter = (req, file, cb) => {
    switch(file.mimetype.split("/")[1]){
        case "doc" :
        case "docx" :
        case "pdf" :
        case "jpg" :
        case "jpeg" :
        case "png" :
        case "gif" :
        cb(null, true);
        break;
        default : 
        cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"),false)
    }
};
const upload = multer({
    storage,
    filefilter
});

const singleUpload = upload.single('file');
const multiplebyField = upload.fields();

export { singleUpload, multiplebyField };