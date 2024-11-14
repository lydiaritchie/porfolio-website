import React from "react";

export function Footer({ bgColor }) {
  return (
    <div
      className="d-flex justify-content-center"
      style={{ background: bgColor, color: "#425c77" }}
    >
      <div className="mx-3 my-2 font-center small">
        &copy; {new Date().getFullYear()} Lydia Ritchie. All rights
        reserved.
      </div>
    </div>
  );
}
