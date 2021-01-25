const URI = "http://localhost:8081";
export const getImageSRC = (imageName) =>
  imageName ? `${URI}/images/${imageName}` : "";
