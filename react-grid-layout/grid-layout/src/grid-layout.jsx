import React from "react";
import GridLayout from "react-grid-layout";

export default class RGLayout extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
      { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 },
      { i: "d", x: 5, y: 0, w: 2, h: 2 },
      { i: "e", x: 7, y: 0, w: 1, h: 2 },
      { i: "f", x: 8, y: 0, w: 1, h: 2 },
      { i: "g", x: 9, y: 0, w: 1, h: 2 }
    ];
    return (
        <>
            <h2>Grid Layout</h2>
            <p>This example shows how to use the GridLayout component with a layout prop.</p>
            <GridLayout
                className="layout"
                layout={layout}
                cols={12}
                rowHeight={30}
                width={1200}
            >
                <div key="a">a</div>
                <div key="b">b</div>
                <div key="c">c</div>
                <div key="d">d</div>
                <div key="e">e</div>
                <div key="f">f</div>
                <div key="g">g</div>
            </GridLayout>
        </>
    );
  }
}
