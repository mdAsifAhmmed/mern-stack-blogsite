import mongoose from "mongoose";

const Connection = async () => {
  try {
    const URL =
      "mongodb+srv://user:user4321@blogweb.qpj8f.mongodb.net/BLOG?retryWrites=true&w=majority";

    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("database connected sucessfully");
  } catch (error) {
    console.log("Error while connection to MongoDB", error);
  }
};
export default Connection;
