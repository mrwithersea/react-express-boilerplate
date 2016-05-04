import React from 'react';

function StandardPage(props) {
  return (
    <div>
      <h1>React Express Boilerplate</h1>
      { props.children }
    </div>
  );
}

export default StandardPage;
