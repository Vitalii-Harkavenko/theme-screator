import React, { useState } from "react";
import tokens from "./assets/tokens.json";

export type Token = {
    class: string;
    name: string;
	scope: string[] | string;
    settings: {
        foreground?: string;
		background?: string;
        fontStyle?: string;
    };
};
type Tokens = Token[];

type ProviderProps = {
	children: React.ReactNode;
}

export const TokensContext = React.createContext<any>(undefined);

export const TokensProvider: React.FC<ProviderProps> = ({ children }) => {

	const [syntaxTokens, setSyntaxTokens] = useState<Tokens>(tokens.syntax);
	const syntaxColors: {[key : string]: any} = {};
    syntaxTokens.forEach((token: Token) => {
        const { class: tokenClass, settings: { foreground } } = token;
        syntaxColors[tokenClass] = {color: foreground};
    });

	const [interfaceTokens, setInterfaceTokens] = useState<Tokens>(tokens.interface);
	const interfaceColors: {[key : string]: any} = {};
    interfaceTokens.forEach((token: Token) => {
        const { class: tokenClass, settings: { background } } = token;
        interfaceColors[tokenClass] = {background: background};
    });
	const [interfaceFgTokens, setInterfaceFgTokens] = useState<Tokens>(tokens.interfaceText);
	const interfaceFgColors: {[key : string]: any} = {};
    interfaceFgTokens.forEach((token: Token) => {
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