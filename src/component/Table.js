import React from 'react';

function Table(props) {
  return(
    <table class="table table-responsive color-white">
      <thead className="bg-dark">
        {props.thParent}
        {props.th}
      </thead>
      <tbody>
        {props.td}
      </tbody>
    </table>
  )
}

export default Table