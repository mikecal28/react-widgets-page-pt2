import React, { useState, useEffect } from "react";

function Piano() {
  const handleAudio = (id) => {
    let audio = new Audio(`/assets/audio/key${id}.mp3`);

    audio.play();
  };

  return (
    <div className="piano">
      <h1>Piano</h1>
      <div className="piano-wrapper">
        <div
          className="white-key"
          id="01"
          onClick={(e) => handleAudio(e.target.id)}
        ></div>
        <div
          className="black-key"
          id="02"
          onClick={(e) => handleAudio(e.target.id)}
        ></div>
        <div
          className="white-key"
          id="03"
          onClick={(e) => handleAudio(e.target.id)}
        ></div>
        <div
          className="black-key"
          id="04"
          onClick={(e) => handleAudio(e.target.id)}
        ></div>
        <div
          className="white-key"
          id="05"
          onClick={(e) => handleAudio(e.target.id)}
        ></div>
        <div
          className="white-key"
          id="06"
          onClick={(e) => handleAudio(e.target.id)}
        ></div>
        <div
          className="black-key"
          id="07"
          onClick={(e) => handleAudio(e.target.id)}
        ></div>
        <div
          className="white-key"
          id="08"
          onClick={(e) => handleAudio(e.target.id)}
        ></div>
        <div
          className="black-key"
          id="09"
          onClick={(e) => handleAudio(e.target.id)}
        ></div>
        <div
          className="white-key"
          id="10"
          onClick={(e) => handleAudio(e.target.id)}
        ></div>
        <div
          className="black-key"
          id="11"
          onClick={(e) => handleAudio(e.target.id)}
        ></div>
        <div
          className="white-key"
          id="12"
          onClick={(e) => handleAudio(e.target.id)}
        ></div>
        <div
          className="white-key"
          id="13"
          onClick={(e) => handleAudio(e.target.id)}
        ></div>
        <div
          className="black-key"
          id="14"
          onClick={(e) => handleAudio(e.target.id)}
        ></div>
        <div
          className="white-key"
          id="15"
          onClick={(e) => handleAudio(e.target.id)}
        ></div>
        <div
          className="black-key"
          id="16"
          onClick={(e) => handleAudio(e.target.id)}
        ></div>
        <div
          className="white-key"
          id="17"
          onClick={(e) => handleAudio(e.target.id)}
        ></div>
        <div
          className="white-key"
          id="18"
          onClick={(e) => handleAudio(e.target.id)}
        ></div>
        <div
          className="black-key"
          id="19"
          onClick={(e) => handleAudio(e.target.id)}
        ></div>
        <div
          className="white-key"
          id="20"
          onClick={(e) => handleAudio(e.target.id)}
        ></div>
        <div
          className="black-key"
          id="21"
          onClick={(e) => handleAudio(e.target.id)}
        ></div>
        <div
          className="white-key"
          id="22"
          onClick={(e) => handleAudio(e.target.id)}
        ></div>
        <div
          className="black-key"
          id="23"
          onClick={(e) => handleAudio(e.target.id)}
        ></div>
        <div
          className="white-key"
          id="24"
          onClick={(e) => handleAudio(e.target.id)}
        ></div>
      </div>
    </div>
  );
}

export default Piano;
