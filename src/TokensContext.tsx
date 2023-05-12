import React, { useState, useEffect } from "react";
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
    
    useEffect(()=> {
		const tokensData = localStorage.getItem("tokensData");
        if (tokensData && tokensData !== "{}") {
            const parsedData = JSON.parse(tokensData);
           
            setSyntaxTokens(parsedData.syntaxTokens);
            setInterfaceTokens(parsedData.interfaceTokens);
            setInterfaceFgTokens(parsedData.interfaceFgTokens);
        }
	}, [])

	const [syntaxTokens, setSyntaxTokens] = useState<TextTokens>(tokens.syntax);
    const [interfaceTokens, setInterfaceTokens] = useState<BgTokens>(tokens.interface);
    const [interfaceFgTokens, setInterfaceFgTokens] = useState<TextTokens>(tokens.interfaceText);
    const defaults = tokens.defaults

	const syntaxColors: {[key : string]: any} = {};
    syntaxTokens.forEach((token: TextToken) => {
        const { class: tokenClass, settings: { foreground } } = token;
        syntaxColors[tokenClass] = {color: foreground};
    });
	const interfaceColors: {[key : string]: any} = {};
    interfaceTokens.forEach((token: BgToken) => {
        const { class: tokenClass, settings: { background } } = token;
        interfaceColors[tokenClass] = {background: background};
    });
	const interfaceFgColors: {[key : string]: any} = {};
    interfaceFgTokens.forEach((token: TextToken) => {
        const { class: tokenClass, settings: { foreground } } = token;
        interfaceFgColors[tokenClass] = {color: foreground};
    });

    useEffect(()=> {
		const tokensData = {
            syntaxTokens: [...syntaxTokens],
            interfaceTokens: [...interfaceTokens],
            interfaceFgTokens: [...interfaceFgTokens]
        };
		localStorage.setItem("tokensData", JSON.stringify(tokensData));
	}, [syntaxTokens, interfaceTokens, interfaceFgTokens])

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