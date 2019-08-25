import React from "react";
import { useDeck } from "mdx-deck";
import { swiss, syntaxHighlighter } from "@mdx-deck/themes";

const Provider = ({ children }) => {
  const { index, length } = useDeck();

  return (
    <>
      {children}

      <div
        style={{
          boxSizing: "border-box",
          position: "absolute",
          width: "100vw",
          bottom: "1em",
          display: "flex",
          padding: "0 50px",
          justifyContent: "space-between",
          fontFamily: "system-ui,sans-serif"
        }}
      >
        <span>Node.js Meetup #34</span>
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
    </>
  );
};

export default [swiss, syntaxHighlighter, { Provider }];
