import { useState, useEffect } from 'react';


function getCropperDimensions() {
    if(document.getElementById('cropper-size')) {
      const { clientWidth: width, clientHeight: height } = document.getElementById('cropper-size');
      console.log(width, height)
      return {
        cropperWidth: width, 
        cropperHeight: height,
      }
    } else {
      return {
        cropperHeight: 0,
        cropperHeight: 0,
      }
    }
   
}

export default function useCropperDimensions() {
    const [cropperSize, setCropperSize] = useState(getCropperDimensions())
  
    useEffect(() => {
      function handleResize2() {
        setCropperSize(getCropperDimensions())
      }
  
      window.addEventListener('resize', handleResize2);
      return () => window.removeEventListener('resize', handleResize2);
    }, []);
  
    return cropperSize;
  }