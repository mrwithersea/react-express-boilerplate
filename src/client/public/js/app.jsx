import React from 'react';
import ReactDOM from 'react-dom';

import Page from 'shared/Page';

function run() {
     ReactDOM.render(<Page header={window.headerDefinition} {...window.pageDefinition} />,
        document.getElementById('js-react-container')
    );
}

window.addEventListener('DOMContentLoaded', run, false);
