import React from 'react';

import './Backdrop.sass';

const backdrop = props => {
  return props.show ? (
    <div className="backdrop" onClick={props.closeModal}>
      <div className="backdrop-close">
        <span className="backdrop-close--first" />
        <span className="backdrop-close--second" />
      </div>
    </div>
  ) : null;
};

export default backdrop;
