import { useState } from "react";
import tokens from "./assets/tokens.json";
import { Canvas } from "./Canvas.tsx";
import * as svgs from "./assets/svgs";

// 1. style the app - add style pickers input elements, color classes. Add text to the canvas with needed classes

// 2. bind useStates with color classes

export const App = () => {

    type Tokens = {
        class: string;
        name: string;
        settings: {
            foreground: string;
            fontStyle?: string;
        };
    }[];

	const [searchValue, setSearchValue] = useState<string>('');
    const [syntaxTokens, setSyntaxTokens] = useState<Tokens>(tokens.syntax);

    const handleTokenUpdate = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const tokens: Tokens = [...syntaxTokens];
        tokens[index].settings.foreground = e.target.value;
        setSyntaxTokens(tokens);
    }

    return (
        <>
            <div className="styles-container">
                <div className="search-container">
                    <div className="search-svg">
                        <img src={svgs.search} alt="search"></img>
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
                    syntaxTokens.map((el, index) => {
                        return (
                            <div className="styles-wrapper" key={index}>
                                <div className="color-thumb" style={{backgroundColor : el.settings.foreground}}></div>
                                <input
                                    type="text"
                                    placeholder="Enter a color"
                                    value={el.settings.foreground}
                                    onChange={e => handleTokenUpdate(e, index) }
                                ></input>
                                <p>{el.name}</p>
                            </div>
                        )
                    })
                }    
                </div>
            </div>
            <Canvas />
        </>
    )
}
