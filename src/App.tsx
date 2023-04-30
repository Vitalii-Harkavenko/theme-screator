import { useState } from "react";
import sreachSvg from "./assets/search.svg";
import tokens from "./assets/settings.json";

// 1. style the app - add style pickers input elements, color classes. Add text to the canvas with needed classes

// 2. bind useStates with color classes

export const App = () => {

    type Tokens = {
        class: string;
        name: string;
        scope: string[];
        settings: {
            foreground: string;
            fontStyle?: string;
        };
    }[];

	const [searchValue, setSearchValue] = useState<string>('');
    const [syntaxTokens, setSyntaxTokens] = useState<Tokens>(tokens.syntax);

    return (
        <>
            <div className="styles-container">
                <div className="search-container">
                    <div className="search-svg">
                        <img src={sreachSvg} alt="search"></img>
                    </div>
                    <input
                        className="search-bar"
                        type="text"
                        placeholder="Find a section/text type"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    ></input>
                </div>
                <div className="styles-picker">
                {
                    syntaxTokens.map(el => {
                        return (
                            <div className="styles-wrapper">
                                <div className="color-thumb" style={{backgroundColor : el.settings.foreground}}></div>
                                <input
                                    type="text"
                                    placeholder="Enter a color"
                                    value={el.settings.foreground}
                                    onChange={(e) => {
                                        setSyntaxTokens()
                                    }}
                                ></input>
                                <p>{el.name}</p>
                            </div>
                        )
                    })
                }    
                </div>
            </div>
            <div className="canvas">
                <div className="menu-bar"></div>
                <div className="sidebar-container">
                    <div className="activity-bar"></div>
                    <div className="activity-bar"></div>
                </div>
                <div className="editor-container">
                    <div className="tabs"></div>
                    <div className="gutter"></div>
                    <div className="editor"></div>
                </div>
            </div>
        </>
    )
}
