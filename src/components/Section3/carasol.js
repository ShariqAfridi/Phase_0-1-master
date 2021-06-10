import React from "react";
// import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./carasolstyles.css";

// import BorderChanger from './customScript'; 

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 },
];

function carasol() {
  return (
    <div className="App">
      <Carousel breakPoints={breakPoints}>
        <Item>
          <div class="module">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            pariatur corporis quaerat voluptatum eos tempora temporibus nisi
            voluptates sed, exercitationem sequi dolore culpa incidunt
            accusamus, quasi unde reprehenderit ea molestias.
          </div>
        </Item>
        <Item>
          {" "}
          <div class="module">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            pariatur corporis quaerat voluptatum eos tempora temporibus nisi
            voluptates sed, exercitationem sequi dolore culpa incidunt
            accusamus, quasi unde reprehenderit ea molestias.
          </div>
        </Item>
        <Item>
          {" "}
          <div class="module">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            pariatur corporis quaerat voluptatum eos tempora temporibus nisi
            voluptates sed, exercitationem sequi dolore culpa incidunt
            accusamus, quasi unde reprehenderit ea molestias.
          </div>
        </Item>
        <Item>
          {" "}
          <div class="module">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            pariatur corporis quaerat voluptatum eos tempora temporibus nisi
            voluptates sed, exercitationem sequi dolore culpa incidunt
            accusamus, quasi unde reprehenderit ea molestias.
          </div>
        </Item>
        <Item>
          {" "}
          <div class="module">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            pariatur corporis quaerat voluptatum eos tempora temporibus nisi
            voluptates sed, exercitationem sequi dolore culpa incidunt
            accusamus, quasi unde reprehenderit ea molestias.
          </div>
        </Item>
        <Item>
          {" "}
          <div class="module">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            pariatur corporis quaerat voluptatum eos tempora temporibus nisi
            voluptates sed, exercitationem sequi dolore culpa incidunt
            accusamus, quasi unde reprehenderit ea molestias.
          </div>
        </Item>
      </Carousel>
    </div>
  );
}
export default carasol;