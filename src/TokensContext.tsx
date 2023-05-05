import React, { useState } from "react";
import tokens from "./assets/tokens.json";

type Tokens = {
    class: string;
    name: string;
    settings: {
        foreground: string;
        fontStyle?: string;
    };
}[];

const defaultTokens: Tokens = [];
export const TokensContext = React.createContext<Tokens>(defaultTokens);

export const TokensProvider: React.FC<React.FC> = ({ children }) => {

	const [syntaxTokens, setSyntaxTokens] = useState<Tokens>(tokens.syntax);

	return (
		<TokensContext.Provider value={{syntaxTokens, setSyntaxTokens}}>
			{ children }
		</TokensContext.Provider>
	)
};