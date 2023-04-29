import { useState } from "react";
import sreachSvg from "./assets/search.svg";
import themeTokens from "./assets/settings.json";

export const App = () => {

	const [searchValue, setSearchValue] = useState<string>('');


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
                    themeTokens.syntax.map(el => {
                        return (
                            <div className={el.class}>
                                <p>{el.name}</p>
                            </div>
                        )
                    })
                }    
                </div>
            </div>
            <div className="canvas"></div>
        </>
    )
}
