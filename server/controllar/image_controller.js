const url = `http://localhost:8000`;

export const uploadImages = (req, res) => {
  try {
    if (!req.file) return req.status(404).json("file not found");
    const imageURL = `${url}/file/${res.file.filename}`;
    res.status(200).json(imageURL);
  } catch (error) {
    res.status(200).json(error);
  }
};
