import React, { useState, useContext } from 'react'
import { TokensContext, Token} from "./TokensContext.tsx";
import * as svgs from "./assets/svgs";

export const StylingSection = () => {

	type SyntaxState = {syntaxTokens: Token[], setSyntaxTokens: any};
	type InterfaceState = {interfaceTokens: Token[], setInterfaceTokens: any};
	const [searchValue, setSearchValue] = useState<string>('');
	const {syntaxTokens, setSyntaxTokens} = useContext<SyntaxState>(TokensContext);
	const {interfaceTokens, setInterfaceTokens} = useContext<InterfaceState>(TokensContext);

    const handleTokenUpdate = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const tokens = [...syntaxTokens];
        tokens[index].settings.foreground = e.target.value;
        setSyntaxTokens(tokens);
    }

	return (
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
				<div className="">
					<div></div>
					<div></div>
				</div>
				<div>
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
    	</div>
	)
}
