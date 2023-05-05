import React, { useState } from "react";
import tokens from "./assets/tokens.json";

export const TokensContext = React.createContext(null);

export const TokensProvider = ({ children }) => {

	export type Tokens = {
        class: string;
        name: string;
        settings: {
            foreground: string;
            fontStyle?: string;
        };
    }[];

	const [syntaxTokens, setSyntaxTokens] = useState<Tokens>(tokens.syntax);

	const colors: {[key : string]: any} = {};
    syntaxTokens.forEach(token => {
        const { class: tokenClass, settings: { foreground } } = token;
        colors[tokenClass] = {color: foreground};
    });

	return (
		<TokensContext.Provider value={{syntaxTokens, setSyntaxTokens}}>
			{ children }
		</TokensContext.Provider>
	)
};