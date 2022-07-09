import React from "react";
import DragList from "./DragList";
import DropList from "./DropList";
import "./App.css";

function App() {
    return (
        <div style={{ width: '100%', height: "100vh" }}>
            <div style={{ display: 'flex', height: "100%" }}>
                <div style={{ flexGlow: '1', width: '100%', height: "100%", padding: "20px" }}>
                    <DragList />
                </div>
                <div style={{ flexGlow: '1', width: '100%', height: "100%", padding: "20px" }}>
                    <DropList />
                </div>
            </div>
        </div>
    );
}

export default App;
