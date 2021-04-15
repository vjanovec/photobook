import React, { Component } from 'react';
import EditorLayout from '../editorLayout';
import NewEditor from '../newEditor';
import BookTemplateEditor from '../bookTemplateEditor';


const newEditorPage = () => {

        return (
            <div>
                <EditorLayout a={null} b={null} c={<BookTemplateEditor/>}/>
            </div>
        )
    
}

export default newEditorPage;
