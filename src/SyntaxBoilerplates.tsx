import { TokensContext } from "./TokensContext";
import { useContext } from "react"; 

export const Keywords: React.FC<{word: string}> = ({ word }) => {
	const {syntaxColors} = useContext(TokensContext);
	return (
		<span style={syntaxColors.keywords}>{word}</span>
	)
}
export const Operators: React.FC<{word: string}> = ({ word }) => {
	const {syntaxColors} = useContext(TokensContext);
	return (
		<span style={syntaxColors.operators}>{word}</span>
	)
}
export const Fns_classes_consts: React.FC<{word: string}> = ({ word }) => {
	const {syntaxColors} = useContext(TokensContext);
	return (
		<span style={syntaxColors.fns_classes_consts}>{word}</span>
	)
}
export const Strings: React.FC<{word: string}> = ({ word }) => {
	const {syntaxColors} = useContext(TokensContext);
	return (
		<span style={syntaxColors.strings}>"{word}"</span>
	)
}
export const Parameters: React.FC<{word: string}> = ({ word }) => {
	const {syntaxColors} = useContext(TokensContext);
	return (
		<span style={syntaxColors.parameters}>{word}</span>
	)
}
export const Atts_props_vars: React.FC<{word: string}> = ({ word }) => {
	const {syntaxColors} = useContext(TokensContext);
	return (
		<span style={syntaxColors.atts_props_vars}>{word}</span>
	)
}
export const Ts_types: React.FC<{word: string}> = ({ word }) => {
	const {syntaxColors} = useContext(TokensContext);
	return (
		<span style={syntaxColors.ts_types}>{word}</span>
	)
}
export const Tags: React.FC<{word: string}> = ({ word }) => {
	const {syntaxColors} = useContext(TokensContext);
	return (
		<span style={syntaxColors.tags}>{word}</span>
	)
}