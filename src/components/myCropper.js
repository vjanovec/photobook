import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Cropper from 'react-easy-crop'
import { Fragment } from 'react';
import getCroppedImg from './cropImage';
import useWindowDimensions from './useWindowDimensions';
import useCropperDimensions from './useCropperDimensions';
import imgIconArrow from "../assets/img/icons/interface/icon-arrow-right.svg";
import imgIconCheck from "../assets/img/icons/interface/icon-check.svg";
import imgIconReload from "../assets/img/icons/interface/iconmonstr-refresh-3.svg";

const MyCropper = (state) => {
  // WINDOW DIMENSIONS
  const { height, width } = useWindowDimensions();
  const { cropperWidth, cropperHeight } = useCropperDimensions();

  function refreshPage() {
    window.location.reload(false);
    // setImage(img);
  }


  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [croppedImage, setCroppedImage] = useState(null)

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels)
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        state.img,
        croppedAreaPixels,
        rotation
      )
      console.log('donee', { croppedImage })
      setCroppedImage(croppedImage)
    } catch (e) {
      console.error(e)
    }
  }, [croppedAreaPixels, rotation])

  return (
    <Fragment>
       <a
        href="#top"
        class="btn btn-lg btn-primary rounded-circle btn-save-crop"
        onClick={showCroppedImage}
      >
        <img
          src={imgIconCheck}
          alt="Icon"
          class="icon"
  
        ></img>
      </a>
      <a
        href="#top"
        class="btn btn-lg btn-primary rounded-circle btn-reload-page"
        onClick={refreshPage}
      >
        <img
          src={imgIconReload}
          alt="Icon"
          class="icon"
        ></img>
      </a>
      <div className="crop-container position-relative" style={{width: cropperWidth, height: height}}>
        <Cropper
          image={state.img}
          crop={crop}
          zoom={zoom}
          aspect={1 / 1}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          zoomSpeed={0.5}
          style={{
            containerStyle: {overflow: 'visible'}
          }}
        />
      </div>
        {/* <button onClick={showCroppedImage}>Crop</button> */}
      {croppedImage ? <img src={croppedImage} style={{marginTop: '150px'}}></img> : null}
      </Fragment>

    )
};


export default MyCropper;