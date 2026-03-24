import React from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview' 
import { useState } from 'react'

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const UploadImageHandler = (file) => {
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);


  }

  return (
    <div>
      <ImageUpload UploadImageHandler={UploadImageHandler}/>
      <ImagePreview 
      loading={loading}
      uplaoded={uploadImage} 
      enhanced={enhancedImage}/>
    </div>
  )
}

export default Home
