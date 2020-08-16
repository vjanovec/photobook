import React, { Component, Fragment } from 'react'
import Book from "./book";

const smallBookPreview = () => {
        return (
            <Fragment>
            <Book />
            <a href="#" class="lead ml-lg-4">
              Cover color
            </a>
            <div class="row justify-content-center col-sm-12 col-xs-12 col-md-12 ml-auto mr-auto">
              <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 pl-2 pr-2 pt-2">
                <a href="#" class="btn btn-primary bg-light text-primary w-100">
                  Antracit
                </a>
              </div>
              <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 pl-2 pr-2 pt-2">
                <a href="#" class="btn btn-primary w-100">
                  Sand
                </a>
              </div>
            </div>
            </Fragment>
        )
    }

export default smallBookPreview;