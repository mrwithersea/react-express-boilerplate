import React from 'react';
import components from 'shared/components';
import StandardPage from 'shared/templates/StandardPage';

function renderMiddleware(app) {
  return (req, res) => {

    const Component = components[app];

    res.locals.state = { app, ...req.params };

    res.locals.state = `window.__STATE__ = ${JSON.stringify(res.locals.state)};`;

    res.locals.app = React.renderToString(<StandardPage><Component { ...req.params }/></StandardPage>);

    res.render('index');
  };
}

export default renderMiddleware;
