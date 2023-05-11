import React, { useContext, useRef, useEffect } from 'react'
import { TokensContext, TextToken, BgToken} from "./TokensContext.tsx";

export const StylingSection = () => {

	type SyntaxState = {syntaxTokens: TextToken[], setSyntaxTokens: any};
	type InterfaceState = {interfaceTokens: BgToken[], setInterfaceTokens: any};
	type InterfaceTextState = {interfaceFgTokens: TextToken[], setInterfaceFgTokens: any};
	const {syntaxTokens, setSyntaxTokens} = useContext<SyntaxState>(TokensContext);
	const {interfaceTokens, setInterfaceTokens} = useContext<InterfaceState>(TokensContext);
	const {interfaceFgTokens, setInterfaceFgTokens} = useContext<InterfaceTextState>(TokensContext);

    const handleTokenUpdate = (e: React.ChangeEvent<HTMLInputElement>, index: number, tokenType: string) => {
		if (tokenType === "syntax") {
			const tokens = [...syntaxTokens];
			tokens[index].settings.foreground = e.target.value;
			setSyntaxTokens(tokens);
		}
		if (tokenType === "interface") {
			const tokens = [...interfaceTokens];
			tokens[index].settings.background = e.target.value;
			setInterfaceTokens(tokens);
		}
		if (tokenType === "i-text") {
			const tokens = [...interfaceFgTokens];
			tokens[index].settings.foreground = e.target.value;
			setInterfaceFgTokens(tokens);
		}
    };
	useEffect(() => {
		if (interfaceFgTokens[0].settings.foreground && interfaceFgTokens[1].settings.foreground) {
			document.documentElement.style.setProperty('--text-active', interfaceFgTokens[0].settings.foreground);
			document.documentElement.style.setProperty('--text-inactive', interfaceFgTokens[1].settings.foreground);
		};
	}, [interfaceFgTokens]);

	const syntax_tab = useRef<HTMLDivElement>(null);
	const syntax_colors = useRef<HTMLDivElement>(null);
	const interface_tab = useRef<HTMLDivElement>(null);
	const interface_colors = useRef<HTMLDivElement>(null);
	const handleChangeTab = () => {
		syntax_tab.current?.classList.toggle("opened");
		interface_tab.current?.classList.toggle("opened");
		syntax_colors.current?.classList.toggle("hidden");
		interface_colors.current?.classList.toggle("hidden");
	};

	return (
		<div className="styles-container">
			<div className="tab-switcher">
				<div className="syntax-colors-tab opened" onClick={handleChangeTab} ref={syntax_tab}>Syntax colors</div>
				<div className="interface-colors-tab" onClick={handleChangeTab} ref={interface_tab}>Interface colors</div>
			</div>
			<div className="color-tokens">
				<div className="syntax" ref={syntax_colors}>
					{
						syntaxTokens.map((el, index) => {
							return (
								<div className="styles-wrapper" key={el.class}>
									<input
										type="color"
										className="thumb"
										value={el.settings.foreground}
										onChange={e => handleTokenUpdate(e, index, "syntax") }
										style={{backgroundColor: el.settings.foreground}}
									></input>
									<div className="text">
										<p>{el.name}</p>
										<input
											type="text"
											placeholder="Enter a color"
											value={el.settings.foreground}
											onChange={e => handleTokenUpdate(e, index, "syntax") }
										></input>
									</div>
								</div>
							)
						})
					}
				</div>
				<div className="interface hidden" ref={interface_colors}>
					{
						interfaceFgTokens.map((el, index) => {
							return (
								<div className="styles-wrapper" key={el.class}>
									<input
										type="color"
										className="thumb"
										value={el.settings.foreground}
										onChange={e => handleTokenUpdate(e, index, "i-text") }
										style={{backgroundColor: el.settings.foreground}}
									></input>
									<div className="text">
										<p>{el.name}</p>
										<input
											type="text"
											placeholder="Enter a color"
											value={el.settings.foreground}
											onChange={e => handleTokenUpdate(e, index, "i-text") }
										></input>
									</div>
								</div>
							)
						})
					}
					{
						interfaceTokens.map((el, index) => {
							return (
								<div className="styles-wrapper" key={el.class}>
									<input
										type="color"
										className="thumb"
										value={el.settings.background}
										onChange={e => handleTokenUpdate(e, index, "interface") }
										style={{backgroundColor: el.settings.background}}
									></input>
									<div className="text">
										<p>{el.name}</p>
										<input
											type="text"
											placeholder="Enter a color"
											value={el.settings.background}
											onChange={e => handleTokenUpdate(e, index, "interface") }
										></input>
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
