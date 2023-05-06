import React, { useState } from "react";
import tokens from "./assets/tokens.json";

export type Token = {
    class: string;
    name: string;
	scope: string[];
    settings: {
        foreground: string;
        fontStyle?: string;
    };
};
export type InterfaceTokens = {
	[key: string]: {
	  scope: string[] | string;
	  color: string;
	} | string;
}
type Tokens = Token[];

type ProviderProps = {
	children: React.ReactNode;
}

export const TokensContext = React.createContext<any>(undefined);

export const TokensProvider: React.FC<ProviderProps> = ({ children }) => {

	const [syntaxTokens, setSyntaxTokens] = useState<Tokens>(tokens.syntax);
	const colors: {[key : string]: any} = {};
    syntaxTokens.forEach((token: Token) => {
        const { class: tokenClass, settings: { foreground } } = token;
        colors[tokenClass] = {color: foreground};
    });

	const [interfaceTokens, setInterfaceTokens] = useState<InterfaceTokens>(tokens.interface);

	return (
		<TokensContext.Provider  value={{ syntaxTokens, setSyntaxTokens, interfaceTokens, setInterfaceTokens, colors }}>
			{ children }
		</TokensContext.Provider>
	)
};