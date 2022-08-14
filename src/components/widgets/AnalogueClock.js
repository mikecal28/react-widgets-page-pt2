import { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

function AnalogueClock() {
  const [sHand, setSHand] = useState(0);
  const [mHand, setMHand] = useState(45 * 6);
  const [hHand, setHHand] = useState(0);

  const seconds = keyframes`
    0% {
      transform: rotate3d(0, 0, 1, ${sHand}deg);
    }
    50% {
      transform: rotate3d(0, 0, 1, ${sHand + 180}deg);
    }
    100% {
      transform: rotate3d(0, 0, 1, ${sHand + 360}deg);
    }
  `;

  const secondsAnimation = (props) =>
    css`
      ${seconds} 60s linear infinite;
    `;

  const SecondHand = styled.div`
    width: 0.05rem;
    height: 15rem;
    background: linear-gradient(to bottom, black 49%, transparent 50%);
    animation: ${secondsAnimation} linear infinite;
  `;

  const minutes = keyframes`
  0% {
    transform: rotate3d(0, 0, 1, ${mHand}deg);
  }
  50% {
    transform: rotate3d(0, 0, 1, ${mHand + 180}deg);
  }
  100% {
    transform: rotate3d(0, 0, 1, ${mHand + 360}deg);
  }
  `;

  const minutesAnimation = (props) =>
    css`
      ${minutes} 3600s linear infinite;
    `;

  const MinuteHand = styled.div`
    width: 0.3rem;
    height: 12rem;
    background: linear-gradient(to bottom, black 49%, transparent 50%);
    animation: ${minutesAnimation} linear infinite;
    position: absolute;
    top: 36%;
  `;

  return (
    <div className="analogue-clock">
      <h1>AnalogueClock</h1>
      <div className="analogue-clock-wrapper">
        <SecondHand />
        <MinuteHand />
      </div>
    </div>
  );
}

export default AnalogueClock;
