import React, { useContext, useRef, useEffect, useState } from 'react'
import { TokensContext, TextToken, BgToken} from "./TokensContext.tsx";
import { ChromePicker } from 'react-color';

export const StylingSection = () => {

	type SyntaxState = {syntaxTokens: TextToken[], setSyntaxTokens: any};
	type InterfaceState = {interfaceTokens: BgToken[], setInterfaceTokens: any};
	type InterfaceTextState = {interfaceFgTokens: TextToken[], setInterfaceFgTokens: any};

	const {syntaxTokens, setSyntaxTokens} = useContext<SyntaxState>(TokensContext);
	const {interfaceTokens, setInterfaceTokens} = useContext<InterfaceState>(TokensContext);
	const {interfaceFgTokens, setInterfaceFgTokens} = useContext<InterfaceTextState>(TokensContext);

	type Rgba = { r: number; g: number; b: number; a: number };
	function rgbaToHex8(rgba: Rgba): string {
		const { r, g, b, a } = rgba;
		const hexR = r.toString(16).padStart(2, '0');
		const hexG = g.toString(16).padStart(2, '0');
		const hexB = b.toString(16).padStart(2, '0');
		const hexA = Math.round(a * 255).toString(16).padStart(2, '0');
		return `#${hexR}${hexG}${hexB}${hexA}`;
	};

    const handleTokenUpdate = (c: Rgba | string, index: number, tokenType: string) => {
		let hexColor: string;
		if (typeof c === "string") {
			hexColor = c;
		} else {
			hexColor = rgbaToHex8(c);
		};
		if (tokenType === "syntax") {
			const tokens = [...syntaxTokens];
			tokens[index].settings.foreground = hexColor;
			setSyntaxTokens(tokens);
		}
		if (tokenType === "interface") {
			const tokens = [...interfaceTokens];
			tokens[index].settings.background = hexColor;
			setInterfaceTokens(tokens);
		}
		if (tokenType === "i-text") {
			const tokens = [...interfaceFgTokens];
			tokens[index].settings.foreground = hexColor;
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

	const [activePicker, setActivePicker] = useState('');
	const [mouseOutside, setMouseOutside] = useState(true);

	const handleClickOutside = () => {
		if (mouseOutside) {
			setActivePicker('');
		}
	}

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
									<div 
										className="thumb" 
										style={{backgroundColor : el.settings.foreground}}
										onClick={() => setActivePicker(el.class)}
									></div>
									<div className="text">
										<p>{el.name}</p>
										<input
											type="text"
											placeholder="Enter a color"
											value={el.settings.foreground}
											onChange={e => handleTokenUpdate(e.target.value, index, "syntax") }
										></input>
									</div>
									{activePicker === el.class && (
										<div 
											style={{position: "absolute", zIndex: "10", top: "4rem", left: "3rem"}}
											onMouseLeave={() => setMouseOutside(true)} 
											onMouseOver={() => setMouseOutside(false)} 
											onClick={handleClickOutside}>
											<ChromePicker
												color={el.settings.foreground}
												onChange={(c: {[key:string]:string}) => handleTokenUpdate(c.rgb, index, "syntax")}
											/>
										</div>
        							)}
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
									<div 
										className="thumb" 
										style={{backgroundColor : el.settings.foreground}}
										onClick={() => setActivePicker(el.class)}
									></div>
									<div className="text">
										<p>{el.name}</p>
										<input
											type="text"
											placeholder="Enter a color"
											value={el.settings.foreground}
											onChange={e => handleTokenUpdate(e.target.value, index, "i-text") }
										></input>
									</div>
									{activePicker === el.class && (
											<div 
												style={{position: "absolute", zIndex: "10", top: "4rem", left: "3rem"}}
												onMouseLeave={() => setMouseOutside(true)} 
												onMouseOver={() => setMouseOutside(false)} 
												onClick={handleClickOutside}>
												<ChromePicker
													color={el.settings.foreground}
													onChange={(c: {[key:string]:string}) => handleTokenUpdate(c.rgb, index, "i-text")}
												/>
										</div>
        							)}
								</div>
							)
						})
					}
					{
						interfaceTokens.map((el, index) => {
							return (
								<div className="styles-wrapper" key={el.class}>
									<div 
										className="thumb" 
										style={{backgroundColor : el.settings.background}}
										onClick={() => setActivePicker(el.class)}
									></div>
									<div className="text">
										<p>{el.name}</p>
										<input
											type="text"
											placeholder="Enter a color"
											value={el.settings.background}
											onChange={e => handleTokenUpdate(e.target.value, index, "interface") }
										></input>
									</div>
									{activePicker === el.class && (
										<div 
											style={{position: "absolute", zIndex: "10", top: "4rem", left: "3rem"}}
											onMouseLeave={() => setMouseOutside(true)} 
											onMouseOver={() => setMouseOutside(false)} 
											onClick={handleClickOutside}>
											<ChromePicker
												color={el.settings.background}
												onChange={(c: {[key:string]:string}) => handleTokenUpdate(c.rgb, index, "interface")}
											/>
										</div>
        							)}
								</div>
							)
						})
					}
				</div>
			</div>
    	</div>
	)
}
