import React from 'react';
import Layout from '../../layout';
import SelectGridWindow from '../SelectGridWindow';

const selectGridPage = () => {
    return (
        <div>
            <Layout a={null} b={null} c={<SelectGridWindow/>}></Layout>
        </div>
    );
};

export default selectGridPage;