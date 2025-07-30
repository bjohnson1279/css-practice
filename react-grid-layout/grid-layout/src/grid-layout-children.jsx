import React from "react";
import GridLayout from "react-grid-layout";

export default class RGLayoutChildren extends React.Component {
  render() {
    return (
        <>
            <h2>Grid Layout with Children</h2>
            <p>This example shows how to use the GridLayout component with children elements directly.</p>
            <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
                <div key="a" data-grid={{ x: 0, y: 0, w: 1, h: 2, static: true }}>
                a
                </div>
                <div key="b" data-grid={{ x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 }}>
                b
                </div>
                <div key="c" data-grid={{ x: 4, y: 0, w: 1, h: 2 }}>
                c
                </div>
                <div key="d" data-grid={{ x: 5, y: 0, w: 2, h: 2 }}>
                d
                </div>
                <div key="e" data-grid={{ x: 7, y: 0, w: 1, h: 2 }}>
                e
                </div>
                <div key="f" data-grid={{ x: 8, y: 0, w: 1, h: 2 }}>
                f
                </div>
                <div key="g" data-grid={{ x: 9, y: 0, w: 1, h: 2 }}>
                g
                </div>
            </GridLayout>
        </>
    );
  }
}
