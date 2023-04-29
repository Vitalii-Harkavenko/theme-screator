import { useState } from "react"

export const App = () => {

	const [searchValue, setSearchValue] = useState<string>('');

    return (
        <>
            <div id="bebtra" className="styles-container">
                <div className="search-container">
                    <div className="some-svg"></div>
                    <input
                        className="search-bar"
                        type="text"
                        placeholder="Find a section/text type"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    ></input>
                </div>
                <input></input>
            </div>
            <div className="canvas"></div>
        </>
    )
}
