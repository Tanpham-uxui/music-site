import axios from "axios";

const CLOUDINARY_API_UPLOAD ='https://api.cloudinary.com/v1_1/dqi4kar06/video/upload'
class FileService {
  static upload(audio){
    const formData = new FormData();
    formData.append("file", audio);
    formData.append("upload_preset", "deaetg30deaetg30")
    return axios.post(CLOUDINARY_API_UPLOAD,formData)
  }
}

export default FileService;