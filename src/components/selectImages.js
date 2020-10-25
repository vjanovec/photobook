import React, { Component, useState, useEffect } from 'react'
import imgIconArrowLeft from "../assets/img/icons/interface/icon-arrow-left.svg";
import imgIconArrowRight from "../assets/img/icons/interface/icon-arrow-right.svg";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectPhoto } from '../actions/media';
import { useHistory } from 'react-router-dom';

const SelectImages = ({ auth, media, selectPhoto }) => {
  const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    if (media) {   
      if (media.media.length % 4 === 0) {
        setTotalPages(media.media.length / 4)
      } else {
        setTotalPages(Math.floor(media.media.length / 4) + 1);
      }
    } else {
    }
  }, [media])

const history = useHistory();

  return (
    <div class="card card-body shadow-sm h-100">
      {/* <div class="display-4 text-primary mb-3" data-countup="" data-start="20" data-end="24" data-duration="1" data-decimal-places="" data-prefix="" data-separator="" data-grouping="" data-suffix="/7" data-easing="false">24/7</div>
                    <div>Our support experts are ready to assist anytime</div> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">  
          
            {media.media[page * 4 - 4] ? <div className={media.media[page *4 -4].selected ? 'img-overlay overlay-primary' : null}><img
              src={media.media[page * 4 - 4].thumbnail_url} className='img-fluid' className={media.media[page *4 -4].selected ? 'img-fluid img-overlay' : 'img-fluid'} onClick={() => selectPhoto(page*4-4, media.media[page * 4 - 4])}
            ></img></div> : <p>No image</p>}
          </div>
          <div className="col-6">
          
            {media.media[page * 4 - 3] ? <div className={media.media[page *4 -3].selected ? 'img-overlay overlay-primary' : null}><img
              src={media.media[page * 4 - 3].thumbnail_url} className='img-fluid' onClick={() => selectPhoto(page*4-3, media.media[page * 4 - 3])}
            ></img></div> : <p>No image</p>}
          </div>
          
        </div>
        <div className="row pt-4">
          <div className="col-6">
          
            {media.media[page * 4 - 2] ? <div className={media.media[page *4 -2].selected ? 'img-overlay overlay-primary' : null}><img
              src={media.media[page * 4 - 2].thumbnail_url} className='img-fluid' onClick={() => selectPhoto(page*4-2, media.media[page * 4 - 2])}
            ></img></div> : <p>No image</p>}
            </div>
          
          <div className="col-6">
            
            {media.media[page * 4 - 1] ? <div className={media.media[page *4 -1].selected ? 'img-overlay overlay-primary' : null}><img
              src={media.media[page * 4 - 1].thumbnail_url} className='img-fluid' onClick={() => selectPhoto(page*4-1, media.media[page * 4 - 1])}
            ></img></div> : <p>No image</p>}
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div class="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pl-2 pr-2 pt-2">
          <nav>
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <a
                  class="page-link rounded"
                  aria-label="Previous"
                  onClick={page !== 1 ? (() => setPage(page - 1)) : null}
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
              <li className={page === 1 ? 'page-item active' : 'page-item'}>
                {page == 1 ? <a class="page-link" onClick={() => setPage(1)}>
                  1
                </a> : null}
                {page == totalPages ? <a class="page-link" onClick={() => setPage(page - 2)}>
                  {page - 2}
                </a> : null}
                {page !== 1 && page !== totalPages ? <a class="page-link" onClick={() => setPage(page - 1)}>
                  {page - 1}
                </a> : null}
              </li>
              <li className={page !== 1 && page !== totalPages ? 'page-item active' : 'page-item'}>
              {page == 1 ? <a class="page-link" onClick={() => setPage(2)}>
                  2
                </a> : null}
                {page == totalPages ? <a class="page-link" onClick={() => setPage(page - 1)}>
                  {page - 1}
                </a> : null}
                {page !== 1 && page !== totalPages ? <a class="page-link" onClick={() => setPage(page)}>
                  {page}
                </a> : null}
              </li>
              <li className={page === totalPages ? 'page-item active' : 'page-item'}>
              {page == 1 ? <a class="page-link" onClick={() => setPage(3)}>
                  3
                </a> : null}
                {page == totalPages ? <a class="page-link" onClick={() => setPage(page)}>
                  {page}
                </a> : null}
                {page !== 1 && page !== totalPages ? <a class="page-link" onClick={() => setPage(page+1)}>
                  {page+1}
                </a> : null}
              </li>
              <li class="page-item">
                <a class="page-link rounded" aria-label="Next" onClick={page !== totalPages ? (() => setPage(page + 1)) : null} >
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
        <div class="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pl-2 pr-2 pt-2">
          <a href="#" class="btn btn-primary w-100" onClick={() => history.goBack()}>
            Upload
                </a>
        </div>
      </div>
    </div>
  )
}
SelectImages.propTypes = {
  media: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  selectPhoto: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
  media: state.media,
  auth: state.auth,
})

export default connect(mapStateToProps, { selectPhoto })(SelectImages);
