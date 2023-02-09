import React from 'react';
import ReactDOM from 'react-dom';
import Reactjs from "./components/Reactjs";
// Find all widget divs
const WidgetDivs = document.querySelectorAll('.reactjs')
// Inject our React App into each
WidgetDivs.forEach(Div => {
  ReactDOM.render(
    <React.StrictMode>
    <Reactjs domElement={Div} />
    </React.StrictMode>,
    Div
  );
});