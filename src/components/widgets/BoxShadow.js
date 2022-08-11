import React, { useState, useEffect } from "react";

function BoxShadow() {
  const [hOffset, setHOffset] = useState(6);
  const [vOffset, setVOffset] = useState(12);
  const [blur, setBlur] = useState(22);
  const [spread, setSpread] = useState(-4);

  useEffect(() => {
    console.log(hOffset);
  }, [hOffset]);

  return (
    <div className="box-shadow">
      <h1>Box Shadow</h1>
      <div
        className="box-shadow-wrapper"
        style={{
          boxShadow: `${hOffset}px ${vOffset}px ${blur}px ${spread}px black`,
        }}
      >
        <label>Horizontal Offset</label>
        <input
          onChange={(e) => setHOffset(e.target.value)}
          type="range"
          min="-100"
          max="100"
          value={hOffset}
        />
        <label>Vertical Offset</label>
        <input
          onChange={(e) => setVOffset(e.target.value)}
          type="range"
          min="-100"
          max="100"
          value={vOffset}
        />
        <label>Blur Radius</label>
        <input
          onChange={(e) => setBlur(e.target.value)}
          type="range"
          min="-100"
          max="100"
          value={blur}
        />
        <label>Spread</label>
        <input
          onChange={(e) => setSpread(e.target.value)}
          type="range"
          min="-100"
          max="100"
          value={spread}
        />
      </div>
    </div>
  );
}

export default BoxShadow;
