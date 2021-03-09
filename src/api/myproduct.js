import axios from "axios";

export const Getmyproduct = async () => {
  const formData = new FormData();
  formData.append("request", "getmyproduct");
  try {
    const response = await axios.post("/php/myproduct.php", formData);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const OffGame = async gameId => {
  const formData = new FormData();
  formData.append("request", "offgame");
  formData.append("GameNo", gameId);
  try {
    const response = await axios.post("/php/myproduct.php", formData);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const LaunchGame = async gameId => {
  const formData = new FormData();
  formData.append("request", "launchgame");
  formData.append("GameNo", gameId);
  try {
    const response = await axios.post("/php/myproduct.php", formData);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const UploadFile = async fileObj => {
  const formData = new FormData();
  formData.append("image", fileObj);
  try {
    const response = await axios.post("/php/uploadFile.php", formData);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const PublishProduct = async product => {
  const formData = new FormData();
  formData.append("request", "publish");
  formData.append("name", product.name);
  formData.append("price", product.price);
  formData.append("category", product.category);
  formData.append("description", product.description);
  formData.append("inventory", product.inventory);
  formData.append("link", product.imageLink);
  try {
    const response = await axios.post("/php/publish.php", formData);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
