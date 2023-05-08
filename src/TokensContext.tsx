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
	const colors: {[key : string]: any} = {};
    syntaxTokens.forEach((token: Token) => {
        const { class: tokenClass, settings: { foreground } } = token;
        colors[tokenClass] = {color: foreground};
    });

	const [interfaceTokens, setInterfaceTokens] = useState<Tokens>(tokens.interface);

	return (
		<TokensContext.Provider  value={{ syntaxTokens, setSyntaxTokens, interfaceTokens, setInterfaceTokens, colors }}>
			{ children }
		</TokensContext.Provider>
	)
};