import React from "react";
import { createRoot } from "react-dom/client";
import Hedder from "./Hedder.js";
import "./Project2.css"
import Language from "./Language.js";
import Footer from "./Fotter.js";
import UseOnline from "./Useonline.js";
const App = () =>
{
    return(
        <div>
            <Hedder></Hedder>
            <Footer></Footer>
            <UseOnline></UseOnline>
        </div>
    )
}

const container = document.getElementById("Likhith");
const root = createRoot(container);
root.render(<App />);