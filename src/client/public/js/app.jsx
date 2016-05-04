import React from 'react';
import ReactDOM from 'react-dom';

import components from 'shared/components';
import StandardPage from 'shared/templates/StandardPage';

function run() {

  const Component = components[window.__STATE__.app];

  ReactDOM.render(<StandardPage><Component { ...window.__STATE__} /></StandardPage>,
    document.getElementById('js-react-container')
  );
}

window.addEventListener('DOMContentLoaded', run, false);
