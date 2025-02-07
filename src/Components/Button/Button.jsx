import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className='button__btn'>
        <a href="#contact" className="button button--flex box">
            say hello <i className='bx bxs-send'></i>
        </a>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
.button__btn{
    margin:0;
    border-radius:5px;
}
  .box {
    // width: 140px;
    height: auto;
    float: left;
    transition: .5s linear;
    position: relative;
    display: block;
    overflow: hidden;
    // padding: 15px;
    text-align: center;
    margin: 0 5px;
    // background: transparent;
    text-transform: uppercase;
    font-weight: 900;
  }

  .box:before {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    height: 4px;
    width: 100%;
    border-bottom: 4px solid transparent;
    border-left: 4px solid transparent;
    box-sizing: border-box;
    transform: translateX(100%);

  }

  .box:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    border-top: 4px solid transparent;
    border-right: 4px solid transparent;
    box-sizing: border-box;
    transform: translateX(-100%);
  }

  .box:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }

  .box:hover:before {
    border-color:white;
    // height: 100%;
    transform: translateX(0);
    transition: .3s transform linear, .3s height linear .3s;
  }

  .box:hover:after {
    border-color: white;
    // height: 100%;
    transform: translateX(0);
    transition: .3s transform linear, .3s height linear .5s;
  }

  button {
    color: black;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    border: none;
    background: transparent;
  }`;

export default Button;
