import React from "react";
import Props from "./Props";
import ReactJSX from "./ReactJSX";
import State from "./State";
import Component from "./Component";
import ConditionalRendering from "./ConditionalRendering";
import ListKey from "./List-Key";
import CSS from "./CSS";
import LiftingStateUp from "./LiftingStateUp";
import Form from "./Form";
import GenerateBox from "./sampleApp/tu/GenerateBox/GenerateBox";
import StateHook from "./StateHook";
import EffectHook from "./EffectHook";
import Button from "./components/Button";

import TicTacToe from "./components/TicTacToe/index";
import ElectricStore from "./components/ElectricStore/ElectricStore";

function App() {
  const [unmounted, setUnmounted] = React.useState(true);

  return (
    <>
      {/* <ReactJSX />

      <br />

      <Props />

      <br />
      <State />

      <br />
      <Component />

      <br />
      <ConditionalRendering />

      <br />
      <ListKey />

      <br />
      <CSS />

      <br />
      <LiftingStateUp />

      <br />
      <Form />

      <br />
      <GenerateBox />

      <br />
      <StateHook /> */}

      <br />
      {/* {unmounted && <EffectHook />}
      <Button
        text="Test umounted"
        onClick={() => setUnmounted((prevStage) => !prevStage)}
      /> */}

      <br />

      {/* <TicTacToe /> */}

      <ElectricStore />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
