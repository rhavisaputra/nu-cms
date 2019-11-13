import React from 'react';

function Card(props) {
  return (
    <div id="card" className="card slide-card">
      <div className="card-header">
        {props.title}
      </div>
      <div className="card-body">
        <ul className="nav flex-column">
          {props.content}
        </ul>
      </div>
    </div>
  );
}

export default Card