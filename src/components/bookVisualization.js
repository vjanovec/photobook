import React, { Component, useEffect, Fragment} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


const BookVisualization = ({ media }) => {

    useEffect(() => {
        var pages = document.getElementsByClassName("page");
        const book = document.querySelector(".book");
        const bookContainer = document.querySelector(".book-container");
      if(book &&  bookContainer) {
        for (var i = 0; i < pages.length; i++) {
          var page = pages[i];
          if (i % 2 === 0) {
            page.style.zIndex = pages.length - i;
          }
        }
          for (var i = 0; i < pages.length; i++) {
            //Or var page = pages[i];
            pages[i].pageNum = i + 1;
            pages[i].onclick = function () {
              if (this.pageNum % 2 === 0) {
                this.classList.remove("flipped");
                this.previousElementSibling.classList.remove("flipped");
              } else {
                this.classList.add("flipped");
                this.nextElementSibling.classList.add("flipped");
              }
            };
            pages[i].style.height = book.clientWidth / 2 + "px";
            pages[i].style.width = book.clientWidth / 2 + "px";
            bookContainer.style.paddingBottom = (book.clientWidth / 2 + 50) + "px";
            bookContainer.style.paddingTop = (book.clientWidth / 10)+"px";
          }
      }
        
          window.addEventListener("resize", function () {
            if(book) {
              for (var i = 0; i < pages.length; i++) {
                pages[i].style.height = book.clientWidth / 2 + "px";
                pages[i].style.width = book.clientWidth / 2 + "px";
                
              }
              bookContainer.style.paddingBottom = (book.clientWidth / 2 + 50) + "px";
            }
          });
        });



        return (
            <Fragment>
            {media.media.length > 1 ? (<div class="book-container">
            <div class="book">
                <div id="pages" class="pages">
                  <div class="page cover-front-f"><img src={media.media[0].thumbnail_url} class='flipbook-image'></img></div>
                  <div class="page cover-front-b"><div class="cover-window"></div></div>
                  <div class="page first-page"><img src={media.media[0].thumbnail_url} class='flipbook-image'></img></div>
                  {media.media.filter(img => media.media.indexOf(img) !== 0 && img.selected == true).map(img => <div class="page"><img src={img.thumbnail_url} class='flipbook-image'></img></div>)}
                  <div class="page cover-back-f"></div>
                  <div class="page cover-back-b"></div>

                </div>
              </div>
              </div>) : null}
              </Fragment>
        )
    
}
BookVisualization.propTypes = {
  media: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
  media: state.media
})
export default connect(mapStateToProps, {})(BookVisualization);
