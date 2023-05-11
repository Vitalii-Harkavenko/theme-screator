import { useRef, useState, useContext } from "react";
import close from "./assets/svgs/close.svg";
import { Svgs } from "./Svgs";
import { TokensContext } from "./TokensContext";
import { TextToken, BgToken } from "./TokensContext.tsx";

export const CodePreview = () => {

	type TextMateRules = {
		scope: string | string[];
		settings: {
			foreground?: string;
			fontStyle?: string;
		}
	}[];
	type ColorCustomizations = {
		[key: string]: string;
	};
	const {syntaxTokens, interfaceTokens, interfaceFgTokens, defaults} = useContext(TokensContext);
	const preview_card = useRef<HTMLDivElement>(null);
	const [textMateRules, setTextMateRules] = useState<TextMateRules>([]);
	const [colorCustomizations, setColorCustomizations] = useState<ColorCustomizations>({});
	const textMateRulesObj = {"textMateRules": textMateRules};

	const handlePreview = () => {
		const syntax: TextMateRules = [];
		syntaxTokens.forEach((token: TextToken) => {
			const { scope, settings: { foreground, fontStyle } } = token;
			syntax.push({ scope, settings: { foreground, fontStyle } });
		});
		setTextMateRules(syntax);

		const interfaceBgs: ColorCustomizations = {};
		interfaceTokens.forEach((token: BgToken) => {
			const { scope, settings: { background } } = token;
			if (Array.isArray(scope)) {
				scope.forEach(el => {
					interfaceBgs[el] = background;
				});
			} else interfaceBgs[scope] = background;
		});
		const interfaceFgs: ColorCustomizations = {};
		interfaceFgTokens.forEach((token: TextToken) => {
			const { scope, settings: { foreground } } = token;
			if (Array.isArray(scope)) {
				scope.forEach(el => {
					interfaceFgs[el] = foreground;
				});
			} else interfaceFgs[scope] = foreground;
		});
		setColorCustomizations({...interfaceBgs, ...interfaceFgs, ...defaults});

		preview_card.current?.classList.toggle("none");
	}

	return (
		<>
			<button className="preview-button" onClick={handlePreview}>Show code</button>
			<div className="code-preview none" ref={preview_card}>
				<div className="preview-container">
					<div className="preview-desc">
						<p>Copy the code to your settings.json file and you're done</p>
						<div style={{display: "flex", gap: "1rem", alignItems: "center"}}>
							<div className="copy-buttton">placeholder</div>
							<button onClick={handlePreview}>
								<Svgs svg={close} />
							</button>
						</div>
					</div>
					<div className="preview-code" style={{fontSize: "0.9rem"}}>
					<pre>"editor.tokenColorCustomizations": {`${JSON.stringify(textMateRulesObj, null, 2)}`}</pre>
					<pre>"workbench.colorCustomizations": {`${JSON.stringify(colorCustomizations, null, 2)}`}</pre>
					</div>
				</div>
			</div>
		</>
  	)
}
