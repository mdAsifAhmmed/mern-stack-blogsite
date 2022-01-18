import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

const storage = new GridFsStorage({
  url: "mongodb+srv://user:user4321@blogweb.qpj8f.mongodb.net/BLOG?retryWrites=true&w=majority",
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  file: (req, file) => {
    const match = ["image/png", "image/jpg", "image/jpeg"];

    if (match.indexOf(file.mimeType) === -1)
      return `${Date.now()}.blog.${file.name}`;
    return {
      bucketName: "photos",
      filename: `${Date.now()}.blog.${file.name}`,
    };
  },
});

export default multer({ storage });
