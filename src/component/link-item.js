import React from 'react';
import {Link} from 'react-router-dom';
function LinkItem(props) {
  return (
    <ul>
      <h4>{props.api}</h4>
      {
        props.data.map((item,key)=>{
          return(
            <li key={key}>
              <div className="sub-menu">
                <Link to={item.path}>{item.api}</Link>
              </div>
            </li>
          )
        })
      }
    </ul>
  );
}

export default LinkItem