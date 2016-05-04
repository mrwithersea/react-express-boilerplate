import React from 'react';

function ListOfThings(props) {

  const items = [ 'one', 'two', 'three' ];

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href={`/things/${item}`}
               onClick={(event) => validate(item, index, event)}>
              { item } thing
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function validate(name, index, event) {
  if (index == 2) {
    event.preventDefault();
    alert(`Thing ${name} not allowed!`);
  }
}

export default ListOfThings;
