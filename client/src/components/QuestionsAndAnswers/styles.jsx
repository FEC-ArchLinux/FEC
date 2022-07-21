import React from "react";
const styled = require("styled-components");

export const LinkButton = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
fontSize: medium;
color: grey;
text-decoration: none;
&:hover {
  fontStyle: bold;
  text-decoration: underline;
}
`;

// module.exports.LinkButton = LinkButton;
// export default LinkButton;
