import React, { Component, useEffect, Fragment, useState} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import imgIconArrowLeft from "../assets/img/icons/interface/icon-arrow-left.svg";
import imgIconArrowRight from "../assets/img/icons/interface/icon-arrow-right.svg";
import imgPlaceHolderSVG from "../assets/img/icons/imgPlaceHolder.svg";
import GridFourOne from './newEditor/grid-templates/gridFourOne';
import SelectGrid from './newEditor/grid-templates/selectGrid'


const BookTemplateEditor = ({media}) => {
  const [page, setPage] = useState(0);
  const [singlePage, setSinglePage] = useState(false);

  useEffect(() => {
    var pages = document.getElementsByClassName("editor-page");
    const book = document.querySelector(".book");
    const bookContainer = document.querySelector(".book-container");
    for(let i=0; i<pages.length; i++) {
            pages[i].style.height = book.clientWidth / 2 + "px";
            pages[i].style.width = book.clientWidth / 2 + "px";
            bookContainer.style.paddingBottom = (book.clientWidth / 10) + "px";
            bookContainer.style.paddingTop = (book.clientWidth / 10)+"px";
    }
    window.addEventListener("resize", function () {
      for(let i=0; i<pages.length; i++) {
        pages[i].style.height = book.clientWidth / 2 + "px";
        pages[i].style.width = book.clientWidth / 2 + "px";
        bookContainer.style.paddingBottom = (book.clientWidth / 10) + "px";
        bookContainer.style.paddingTop = (book.clientWidth / 10)+"px";
      }
    })
  })

  

        return (
            <Fragment><div class="row align-items-center justify-content-center">
            <div class="book-container">
              
            <div class="editor-book book">
              {singlePage ? <Fragment>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className='editor-page'><img src={media.media[0].thumbnail_url} class='flipbook-image'></img></div>
                </div>
              </Fragment> : <Fragment> 
                <div className='editor-page editor-page-left'><SelectGrid/></div>
                <div className='editor-page editor-page-right'><GridFourOne></GridFourOne></div>
              </Fragment>}
              {/* <img src={media.media[0].thumbnail_url} class='flipbook-image'></img> */}
                
                   {/* <div class="page cover-front-f"><img src={media.media[0].thumbnail_url} class='flipbook-image'></img></div>
                  // <div class="page cover-front-b"><div class="cover-window"></div></div>
                  // <div class="page first-page"><img src={media.media[0].thumbnail_url} class='flipbook-image'></img></div> */}
                   {/* {media.media.filter(img => media.media.indexOf(img) !== 0 && img.selected == true).map(img => <div class="page"><img src={img.thumbnail_url} class='flipbook-image'></img></div>)} */}
                   {/* <div class="page flipped"><img src={media.media[0].thumbnail_url} class='flipbook-image'></img></div>
                   <div class="page"><img src={media.media[1].thumbnail_url} class='flipbook-image'></img></div> */}
                   {/* <div class="page cover-back-f"></div>
                  // <div class="page cover-back-b"></div> */}

                
              </div>
      </div>
              <nav>
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <a
                  class="page-link rounded"
                  aria-label="Previous"
                 
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="injected-svg icon icon-xs bg-primary"
                    data-src={imgIconArrowLeft}
                  >
                    <path
                      d="M12 5L5 12L12 19M19 12H6H19Z"
                      stroke="#2C3038"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </li>
              {/* FIST COLUMN */}
              <li className='page-item active'>
              <a class="page-link">{page}</a>
              </li>
              <li class="page-item">
                <a class="page-link rounded" aria-label="Next">  
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="injected-svg icon icon-xs bg-primary"
                    data-src={imgIconArrowRight}
                  >
                    <path
                      d="M12 5L19 12L12 19M5 12H18H5Z"
                      stroke="#2C3038"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
              </div>
              </Fragment>
        )
    
}
BookTemplateEditor.propTypes = {
  media: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  media: state.media
})
export default connect(mapStateToProps, {})(BookTemplateEditor);
