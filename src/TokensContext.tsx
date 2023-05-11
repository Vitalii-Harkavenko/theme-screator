import React, { useState } from "react";
import tokens from "./assets/tokens.json";

export type TextToken = {
    class: string;
    name: string;
	scope: string[] | string;
    settings: {
        foreground: string;
        fontStyle?: string;
    };
};
type TextTokens = TextToken[];
export type BgToken = {
    class: string;
    name: string;
	scope: string[] | string;
    settings: {
		background: string;
    };
};
type BgTokens = BgToken[];
type ProviderProps = {
	children: React.ReactNode;
}

export const TokensContext = React.createContext<any>(undefined);

export const TokensProvider: React.FC<ProviderProps> = ({ children }) => {

	const [syntaxTokens, setSyntaxTokens] = useState<TextTokens>(tokens.syntax);
	const syntaxColors: {[key : string]: any} = {};
    syntaxTokens.forEach((token: TextToken) => {
        const { class: tokenClass, settings: { foreground } } = token;
        syntaxColors[tokenClass] = {color: foreground};
    });

	const [interfaceTokens, setInterfaceTokens] = useState<BgTokens>(tokens.interface);
	const interfaceColors: {[key : string]: any} = {};
    interfaceTokens.forEach((token: BgToken) => {
        const { class: tokenClass, settings: { background } } = token;
        interfaceColors[tokenClass] = {background: background};
    });
	const [interfaceFgTokens, setInterfaceFgTokens] = useState<TextTokens>(tokens.interfaceText);
	const interfaceFgColors: {[key : string]: any} = {};
    interfaceFgTokens.forEach((token: TextToken) => {
        const { class: tokenClass, settings: { foreground } } = token;
        interfaceFgColors[tokenClass] = {color: foreground};
    });
	const defaults = tokens.defaults
	return (
		<TokensContext.Provider  value={{ 
				syntaxTokens, setSyntaxTokens, syntaxColors,
				interfaceTokens, setInterfaceTokens, interfaceColors,
				interfaceFgTokens, setInterfaceFgTokens, interfaceFgColors,
				defaults
			}}>
			{ children }
		</TokensContext.Provider>
	)
};