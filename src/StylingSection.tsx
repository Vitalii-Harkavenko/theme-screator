import React, { useState, useContext } from 'react'
import { TokensContext, Token} from "./TokensContext.tsx";
import * as svgs from "./assets/svgs";

export const StylingSection = () => {

	type SyntaxState = {syntaxTokens: Token[], setSyntaxTokens: any};
	type InterfaceState = {interfaceTokens: Token[], setInterfaceTokens: any};
	const [searchValue, setSearchValue] = useState<string>('');
	const {syntaxTokens, setSyntaxTokens} = useContext<SyntaxState>(TokensContext);
	const {interfaceTokens, setInterfaceTokens} = useContext<InterfaceState>(TokensContext);

    const handleTokenUpdate = (e: React.ChangeEvent<HTMLInputElement>, index: number, tokenType: string) => {
		if (tokenType === "syntax") {
			const tokens = [...syntaxTokens];
			tokens[index].settings.foreground = e.target.value;
			setSyntaxTokens(tokens);
		} else {
			const tokens = [...interfaceTokens];
			tokens[index].settings.background = e.target.value;
			setInterfaceTokens(tokens);
		}
    }

	return (
		<div className="styles-container">
			<div className="tab-switcher">
				<div className="syntax-colors-tab">Syntax colors</div>
				<div className="interface-colors-tab">Interface colors</div>
			</div>
			<div className="color-tokens">
				<div className="syntax">
					{
						syntaxTokens.map((el, index) => {
							return (
								<div className="styles-wrapper" key={index}>
									<div className="thumb" style={{backgroundColor : el.settings.foreground}}></div>
									<div className="text">
										<input
											type="text"
											placeholder="Enter a color"
											value={el.settings.foreground}
											onChange={e => handleTokenUpdate(e, index, "syntax") }
										></input>
										<p>{el.name}</p>
									</div>
								</div>
							)
						})
					}
				</div>
				<div className="interface hidden">
					{
						interfaceTokens.map((el, index) => {
							return (
								<div className="styles-wrapper" key={index}>
									<div className="thumb" style={{backgroundColor : el.settings.background}}></div>
									<div className="text">
										<input
											type="text"
											placeholder="Enter a color"
											value={el.settings.background}
											onChange={e => handleTokenUpdate(e, index, "interface") }
										></input>
										<p>{el.name}</p>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
    	</div>
	)
}
