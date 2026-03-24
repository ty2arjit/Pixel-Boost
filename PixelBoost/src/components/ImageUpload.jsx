import React from "react";

const ImageUpload = ({ UploadImageHandler }) => {

  const ShowImageHandler = (e) => {
    const file = e.target.files[0];
    console.log(e.target.files[0]);

    if(file) {
      UploadImageHandler(file);
    }
  }
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-width-2xl">
      <label
        htmlFor="fileInput"
        className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg text-center p-6 hover:border-blue-500 transition-colors duration-300"
      >
        <input type="file" id="fileInput" className="hidden" onChange={ShowImageHandler}></input>
        <span className="text-lg font-medium text-gray-600">
          Click and Upload your image
        </span>
      </label>
    </div>
  );
};

export default ImageUpload;
