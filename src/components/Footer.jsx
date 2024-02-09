import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Foot>
      <p className="footer">
        Designed with <span>&#9829;</span> by Obilomania
      </p>
    </Foot>
  );
};

const Foot = styled.div`
  width: 100%;
  .footer {
    font-size: 0.8rem;
    padding: 1rem 0;
    text-align:center;
    span{
        color:red;
    }
  }
`;
export default Footer;
