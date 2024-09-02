import React from "react";
import { useTheme } from "./ThemeContext";

const ThemedButton = () => {
    const {theme ,toggleTheme} = useTheme();

    const styles ={
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: theme  === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        cursor: 'pointer',
    };

    return (
        <button style={styles} onClick={toggleTheme}>
                Toggle Theme
        </button>
    );
};

export default ThemedButton;


