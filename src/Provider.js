import React from "react";

const Provider = ({ children, index, length }) => (
  <React.Fragment>
    {children}

    <div
      style={{
        position: "absolute",
        width: "100vw",
        bottom: "1em",
        display: "flex",
        padding: "0 50px",
        justifyContent: "space-between"
      }}
    >
      <span>The Cake is a Lie @ Klarna</span>
      <a
        style={{ color: "#f00", textDecoration: "none" }}
        href="https://twitter.com/robinpokorny"
      >
        @robinpokorny
      </a>
    </div>

    <div
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0
      }}
    >
      <div
        style={{
          background: "#f00",
          height: 3,
          width: `${(100 * (index + 1)) / length}%`
        }}
      />
    </div>
  </React.Fragment>
);

export default Provider;
