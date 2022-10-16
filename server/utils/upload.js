import multer from 'multer'
import dotenv from 'dotenv';
import {GridFsStorage} from 'multer-gridfs-storage'

dotenv.config();

const URL=process.env.MONGO_URL;
const storage=new GridFsStorage({
    url:URL,
    file:(req,file)=>{
        const match= ["image/png","image/jpg","image/jpeg"];

        if(match.indexOf(file.memeType)===-1){
            return `${Date.now()}-file-${file.originalname}`;
        }
        return {
            bucketName:"photos",
            filename: `${Date.now()}-file-${file.originalname}`
        }
    }
})

export default multer({storage})
