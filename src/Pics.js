import React from 'react';
import ReactDOM from 'react-dom';
import Pics from "./components/Pics";
// Find all widget divs
const WidgetDivs = document.querySelectorAll('#pics')
// Inject our React App into each
WidgetDivs.forEach(Div => {
  ReactDOM.render(
    <React.StrictMode>
      <Pics domElement={Div} />
    </React.StrictMode>,
    Div
  );
});