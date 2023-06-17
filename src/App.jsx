import './App.css';
import React from 'react';
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import { ThemeContext } from "./context/ThemeContext.jsx";

function App() {
    const [theme, setTheme] = React.useState("dark");

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <div className={`${theme} ${theme === "dark" ? "bg-[#121212]" : null} min-h-[100vh]`}>
                <Header/>
                <Home/>
            </div>
        </ThemeContext.Provider>
    )
}

export default App;
