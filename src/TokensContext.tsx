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
type Tokens = Token[];

type ProviderProps = {
	children: React.ReactNode;
}

export const TokensContext = React.createContext<any>(undefined);

export const TokensProvider: React.FC<ProviderProps> = ({ children }) => {

	const [syntaxTokens, setSyntaxTokens] = useState<Tokens>(tokens.syntax);

	return (
		<TokensContext.Provider  value={{ syntaxTokens, setSyntaxTokens }}>
			{ children }
		</TokensContext.Provider>
	)
};