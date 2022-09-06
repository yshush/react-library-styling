import React from "react";
import "./SassExample.scss";

export default function SassExample() {
  return (
    <div>
      <p>Example</p>
      <p className="font">Example</p>
      <nav>
        <ul>
          <li>123</li>
          <li>
            <a href="#">456</a>
          </li>
        </ul>
      </nav>
      <ul>
        <li>123</li>
        <li>
          <a href="#">456</a>
        </li>
      </ul>
      <p className="base">Hello</p>
      <p className="inverse">Hello</p>
      <p className="info">Hello</p>
      <p className="alert">Hello</p>
      <p className="success">Hello</p>
      <p className="message">Hello</p>
      <p className="success2">Hello</p>
      <p className="error">Hello</p>
      <p className="warning">Hello</p>
      <div className="square-av"></div>
      <div className="circle-av"></div>
      <div className="sidebar"></div>
      <div className="gray">Gray</div>
      <div className="button">button</div>
      <div className="pulse">pulse</div>
    </div>
  );
}
