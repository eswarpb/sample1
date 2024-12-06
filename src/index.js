import React from "react";
import ReactDOM from "react-dom/client";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

//import App from './App';
//import Accord from './components/front';
//import Accorde from './components/ren/accord';
//import Prodts from './components/product'
import reportWebVitals from "./reportWebVitals";
//import Setpage from './components/state/setPage'
//import LifeCycle from "./components/front";
//import ProfileCard from "./components/homepage";

//import Home from "./components/props"
import Lfecycle from "./components/usestate/cart";

//import './App.css';



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
{/* <Home/> */}

<Lfecycle/>
</React.StrictMode>);

reportWebVitals();
