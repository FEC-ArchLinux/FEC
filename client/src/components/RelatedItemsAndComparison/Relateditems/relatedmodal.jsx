/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
// import axios from "axios";
// import GH_TOKEN from '../../../../../token.js';

function RelatedModal(props) {
  return (
    <table>
      <th>COMPARING</th>
      <span><button type="button" onClick={() => { props.closeModal(false); }}>x</button></span>
      <thead>
        <th>Current Product Name</th>
        <th> </th>
        <th>Compared Product Name</th>
      </thead>
      <tbody />
    </table>
  );
}

export default RelatedModal;
