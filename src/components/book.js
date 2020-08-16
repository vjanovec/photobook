import React, { Component, useEffect } from 'react'

const Book = () => {

    useEffect(() => {
        var pages = document.getElementsByClassName("page");
        const book = document.querySelector(".book");
        const bookContainer = document.querySelector(".book-container");
    
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
          window.addEventListener("resize", function () {
            for (var i = 0; i < pages.length; i++) {
              pages[i].style.height = book.clientWidth / 2 + "px";
              pages[i].style.width = book.clientWidth / 2 + "px";
              
            }
            bookContainer.style.paddingBottom = (book.clientWidth / 2 + 50) + "px";
          });
        });



        return (
            <div class="book-container">
            <div class="book">
                <div id="pages" class="pages">
                  <div class="page cover-front-f"><img src='https://picsum.photos/800/800' class='flipbook-image'></img></div>
                  <div class="page cover-front-b"><div class="cover-window"></div></div>
                  <div class="page first-page"><img src='https://picsum.photos/800/800' class='flipbook-image'></img></div>
                  <div class="page"><img src='https://picsum.photos/800/800' class='flipbook-image'></img></div>
                  <div class="page"><img src='https://picsum.photos/800/800' class='flipbook-image'></img></div>
                  <div class="page"><img src='https://picsum.photos/800/800' class='flipbook-image'></img></div>
                  <div class="page"><img src='https://picsum.photos/800/800' class='flipbook-image'></img></div>
                  <div class="page"><img src='https://picsum.photos/800/800' class='flipbook-image'></img></div>
                  <div class="page"><img src='https://picsum.photos/800/800' class='flipbook-image'></img></div>
                  <div class="page"><img src='https://picsum.photos/800/800' class='flipbook-image'></img></div>
                  <div class="page"><img src='https://picsum.photos/800/800' class='flipbook-image'></img></div>
                  <div class="page"><img src='https://picsum.photos/800/800' class='flipbook-image'></img></div>
                  <div class="page"><img src='https://picsum.photos/800/800' class='flipbook-image'></img></div>
                  <div class="page"><img src='https://picsum.photos/800/800' class='flipbook-image'></img></div>
                  <div class="page cover-back-f"></div>
                  <div class="page cover-back-b"></div>

                </div>
              </div>
              </div>
        )
    
}

export default Book;
