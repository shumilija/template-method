import React from "react";
import ReactDOM from "react-dom/client";
import { ExamplePage } from "./pages";
import "./main.css";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ExamplePage />
    </React.StrictMode>,
)
