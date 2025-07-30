import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default class RGResponsiveLayout extends React.Component {
  render() {
    // {lg: layout1, md: layout2, ...}
    // Example layouts object for different breakpoints
    var layouts = {
      lg: [
        { i: "1", x: 0, y: 0, w: 4, h: 2 },
        { i: "2", x: 4, y: 0, w: 4, h: 2 },
        { i: "3", x: 8, y: 0, w: 4, h: 2 },
        { i: "4", x: 0, y: 2, w: 4, h: 2 },
        { i: "5", x: 4, y: 2, w: 4, h: 2 },
        { i: "6", x: 8, y: 2, w: 4, h: 2 },
        { i: "7", x: 0, y: 4, w: 4, h: 2 },
        { i: "8", x: 4, y: 4, w: 4, h: 2 },
        { i: "9", x: 8, y: 4, w: 4, h: 2 },
        { i: "10", x: 0, y: 6, w: 12, h: 2 }
      ],
      md: [
        { i: "1", x: 0, y: 0, w: 5, h: 2 },
        { i: "2", x: 5, y: 0, w: 5, h: 2 },
        { i: "3", x: 0, y: 2, w: 10, h: 2 },
        { i: "4", x: 0, y: 4, w: 10, h: 2 },
        { i: "5", x: 0, y: 6, w: 10, h: 2 },
        { i: "6", x: 0, y: 8, w: 10, h: 2 },
        { i: "7", x: 0, y: 10, w: 10, h: 2 },
        { i: "8", x: 0, y: 12, w: 10, h: 2 },
        { i: "9", x: 0, y: 14, w: 10, h: 2 },
        { i: "10", x: 0, y: 16, w: 10, h: 2 }
      ],
      sm: [
        { i: "1", x: 0, y: 0, w: 6, h: 2 },
        { i: "2", x: 0, y: 2, w: 6, h: 2 },
        { i: "3", x: 0, y: 4, w: 6, h: 2 },
        { i: "4", x: 0, y: 6, w: 6, h: 2 },
        { i: "5", x: 0, y: 8, w: 6, h: 2 },
        { i: "6", x: 0, y: 10, w: 6, h: 2 },
        { i: "7", x: 0, y: 12, w: 6, h: 2 },
        { i: "8", x: 0, y: 14, w: 6, h: 2 },
        { i: "9", x: 0, y: 16, w: 6, h: 2 },
        { i: "10", x: 0, y: 18, w: 6, h: 2 }
      ]
    };

    return (
      <>
        <div>
            <h2>Responsive Grid Layout</h2>
            <p>
            Resize the window to see how the layout changes based on the
            breakpoints.
            </p>
        </div>
        <ResponsiveGridLayout
            className="layout"
            layouts={layouts}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        >
            <div key="1">1</div>
            <div key="2">2</div>
            <div key="3">3</div>
            <div key="4">4</div>
            <div key="5">5</div>
            <div key="6">6</div>
            <div key="7">7</div>
            <div key="8">8</div>
            <div key="9">9</div>
            <div key="10">10</div>
        </ResponsiveGridLayout>
      </>
    );
  }
}