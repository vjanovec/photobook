import React, { Component, useState, useEffect } from 'react'
import imgIconArrowLeft from "../../assets/img/icons/interface/icon-arrow-left.svg";
import imgIconArrowRight from "../../assets/img/icons/interface/icon-arrow-right.svg";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectPhoto } from '../../actions/media';
import { useHistory } from 'react-router-dom';
import SelectGrid from './grid-templates/selectGrid';
import imgSelectGridSVG from '../../assets/img/icons/selectGrid.svg';


const SelectGridWindow = () => {
  const history = useHistory();

  useEffect(() => {
    const squares = document.querySelectorAll('.editor-square');
    for(var i=0; i<squares.length; i++) {
      squares[i].style.minHeight = squares[i].clientWidth+"px";
    }
    console.log(squares)
      
    
    window.addEventListener("resize", function () {
      for(var i=0; i<squares.length; i++) {
        squares[i].style.height = squares[i].clientWidth+"px";
      }
    });

  })



 // <div class="card card-body shadow-sm h-100">
      //   <div className="container-fluid">
      //     <div className="row">
      //       <div className="col-6">
      //         <SelectGrid />
      //       </div>
      //       <div className="col-6">
      //         <SelectGrid />
      //       </div>
      //     </div>
      //     <div className="row pt-4">
      //       <div className="col-6">
      //         <SelectGrid />
      //       </div>
      //       <div className="col-6">
      //         <SelectGrid />
      //       </div>
      //     </div>
      //   </div>

  return (
      <div class="card card-body shadow-sm h-100">
      <div className="container min-vh-50 w-100">
        <div className="p-0 m-0 row h-50">
          <div className="h-100 col-6 position-relative p-0 editor-square"><div className="editor-page-inner-90 editor-inner-border"><img class='editor-page-insert-image' src={imgSelectGridSVG}></img></div></div>
          <div className="h-100 col-6 position-relative p-0 editor-square "><div className="editor-page-inner-90 editor-inner-border"><img class='editor-page-insert-image' src={imgSelectGridSVG}></img></div></div>
        </div>
        <div className="p-0 m-0 row h-50">
          <div className="h-100 col-6 position-relative p-0 editor-square"><div className="editor-page-inner-90 editor-inner-border"><img class='editor-page-insert-image' src={imgSelectGridSVG}></img></div></div>
          <div className="h-100 col-6 position-relative p-0 editor-square"><div className="editor-page-inner-90 editor-inner-border"><img class='editor-page-insert-image' src={imgSelectGridSVG}></img></div></div>
        </div>
      </div>
        <div class="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pl-2 pr-2 pt-2">
          <a href="#" class="btn btn-primary w-100" onClick={() => history.push('/upload')}>
            Upload
                    </a>
        </div>
      </div>

      
      )

};
SelectGridWindow.propTypes = {
        media: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  selectPhoto: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
        media: state.media,
  auth: state.auth,
})

export default connect(mapStateToProps, {})(SelectGridWindow);
