import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb){
        const filename = `${Date.now()}-${file.originalname}`
        cb(null, filename)
    }
})

const filefilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpg' || file.mimetype === 'image/png'){
        cb(null, true)
    } else {
        cb(null, false)
    }
}

export const upload = multer({storage, filefilter})