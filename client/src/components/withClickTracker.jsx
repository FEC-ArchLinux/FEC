import React from 'react';
import axios from 'axios';
import GH_TOKEN from '../../../token.js';

function withClickTracker(OriginalComponent) {
  function clickTracker(e, module) {
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/interactions',
      {
        element: e.target.outerHTML,
        widget: module,
        time: new Date(),
      },
      {
        headers: {
          authorization: GH_TOKEN,
        },
      },
    )
      .catch(err => console.error(err));
  }
  return (props) => <OriginalComponent {...props} clickTracker={clickTracker} />;
}

export default withClickTracker;
