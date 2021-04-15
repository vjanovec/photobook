import React from 'react';
import SelectPhoto from './selectPhoto';


const gridFourOne = () => {
    return (
        <div className="p-0 m-0 w-100 h-100">
            <div className="p-0 m-0 row h-50">
                <div className="h-100 col-6 position-relative p-0"><SelectPhoto/></div>
                <div className="h-100 col-6 position-relative p-0"><SelectPhoto/></div>
            </div>
            <div className="p-0 m-0 row h-50">
                <div className="h-100 col-6 position-relative p-0"><SelectPhoto/></div>
                <div className="h-100 col-6 position-relative p-0"><SelectPhoto/></div>
            </div>
        </div>
    );
};

export default gridFourOne;