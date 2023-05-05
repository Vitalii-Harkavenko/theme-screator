import { TokensContext, Token } from "./TokensContext";
import { useContext } from "react"; 

export const Keywords: React.FC<{word: string}> = ({ word }) => {

	const {syntaxTokens} = useContext(TokensContext);

    let tokenColor: string = "";
    syntaxTokens.forEach((token: Token) => {
        if (token.class === "keywords")
			tokenColor = token.settings.foreground;
    });

	return (
		<span style={{color: tokenColor}}>{word}</span>
	)
}
export const Operators: React.FC<{word: string}> = ({ word }) => {

	const {syntaxTokens} = useContext(TokensContext);

    let tokenColor: string = "";
    syntaxTokens.forEach((token: Token) => {
        if (token.class === "operators")
			tokenColor = token.settings.foreground;
    });

	return (
		<span style={{color: tokenColor}}>{word}</span>
	)
}
export const Fns_classes: React.FC<{word: string}> = ({ word }) => {

	const {syntaxTokens} = useContext(TokensContext);

    let tokenColor: string = "";
    syntaxTokens.forEach((token: Token) => {
        if (token.class === "fns_classes")
			tokenColor = token.settings.foreground;
    });

	return (
		<span style={{color: tokenColor}}>{word}</span>
	)
}
export const Strings: React.FC<{word: string}> = ({ word }) => {

	const {syntaxTokens} = useContext(TokensContext);

    let tokenColor: string = "";
    syntaxTokens.forEach((token: Token) => {
        if (token.class === "strings")
			tokenColor = token.settings.foreground;
    });

	return (
		<span style={{color: tokenColor}}>"{word}"</span>
	)
}
export const Parameters: React.FC<{word: string}> = ({ word }) => {

	const {syntaxTokens} = useContext(TokensContext);

    let tokenColor: string = "";
    syntaxTokens.forEach((token: Token) => {
        if (token.class === "parameters")
			tokenColor = token.settings.foreground;
    });

	return (
		<span style={{color: tokenColor}}>{word}</span>
	)
}
export const Attributes_props: React.FC<{word: string}> = ({ word }) => {

	const {syntaxTokens} = useContext(TokensContext);

    let tokenColor: string = "";
    syntaxTokens.forEach((token: Token) => {
        if (token.class === "attributes_props")
			tokenColor = token.settings.foreground;
    });

	return (
		<span style={{color: tokenColor}}>{word}</span>
	)
}
export const Variables: React.FC<{word: string}> = ({ word }) => {

	const {syntaxTokens} = useContext(TokensContext);

    let tokenColor: string = "";
    syntaxTokens.forEach((token: Token) => {
        if (token.class === "variables")
			tokenColor = token.settings.foreground;
    });

	return (
		<span style={{color: tokenColor}}>{word}</span>
	)
}