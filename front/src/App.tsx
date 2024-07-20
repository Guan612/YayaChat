import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

function App() {
    const [count, setCount] = useState(0);

    return (
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    );
}

export default App;
