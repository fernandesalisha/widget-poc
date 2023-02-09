import React from 'react';
import ReactDOM from 'react-dom';
import Javascript from "./components/Javascript";
// Find all widget divs
const WidgetDivs = document.querySelectorAll('.javascript')
// Inject our React App into each
WidgetDivs.forEach(Div => {
  ReactDOM.render(
    <React.StrictMode>
      <Javascript domElement={Div} />
    </React.StrictMode>,
    Div
  );
});