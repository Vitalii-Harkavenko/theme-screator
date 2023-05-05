import { TokensContext, Token } from "./TokensContext";
import { useContext } from "react"; 
import * as svgs from "./assets/svgs";
import { Keywords, Operators, Fns_classes, Strings, Parameters, Attributes_props, Variables } from "./SyntaxBoilerplates";

export const Canvas = () => {

    const {syntaxTokens} = useContext(TokensContext);

    const colors: {[key : string]: any} = {};
    syntaxTokens.forEach((token: Token) => {
        const { class: tokenClass, settings: { foreground } } = token;
        colors[tokenClass] = {color: foreground};
    });
    
    const gutterNumbers = [];
    for (let i = 0; i < 30; i++) {
        gutterNumbers.push(i);
    };

	return (
		<div className="canvas">
            <div className="menu-bar">
                <div className="menus">
                    <img src={svgs.vscode}></img>
                    <p>File</p>
                    <p>Edit</p>
                    <p>Selection</p>
                    <p>View</p>
                    <p>Go</p>
                    <p>Run</p>
                    <p>Terminal</p>
                    <p>Help</p>
                </div>
                <p className="menu-middle">App.tsx - theme-creator - Visual Studio Code</p>
                <div className="window-modes">
                    <img src={svgs.dash}></img>
                    <img src={svgs.collapse}></img>
                    <img src={svgs.close}></img>
                </div>
            </div>
            <div className="main-section">
                <div className="sidebar-container">
                    <div className="activity-bar">
                        <img src={svgs.files}></img>
                        <img src={svgs.search}></img>
                        <img src={svgs.branch} style={{rotate : "180deg", transform : "scaleX(-1)"}}></img>
                        <img src={svgs.debug}></img>
                        <img src={svgs.extensions}></img>
                        <div className="activity-other">
                            <img src={svgs.account}></img>
                            <img src={svgs.settings}></img>
                        </div>
                    </div>
                    <div className="sidebar">
                        <div className="explorer">
                            <p>EXPLORER</p>
                            <img src={svgs.more}></img>
                        </div>
                        <div className="sidebar-tab">
                            <img className="down" src={svgs.arrow}></img>
                            <p>THEME-CREATOR</p>
                        </div>
                        <div className="project">
                            <div className="files-wrapper">
                                <img className="right" src={svgs.arrow}></img>
                                <img src={svgs.node}></img>
                                <p>node_modules</p>
                            </div>
                            <div className="files-wrapper">
                                <img className="down" src={svgs.arrow}></img>
                                <img src={svgs.src}></img>
                                <p>src</p>
                            </div>
                            <div className="down-root">
                                <img src={svgs.react}></img>
                                <p>App.tsx</p>
                                <img src={svgs.scss}></img>
                                <p>index.scss</p>
                                <img src={svgs.react}></img>
                                <p>main.tsx</p>
                            </div>
                            <div className="files-wrapper">
                                <div className="space"></div>
                                <img src={svgs.eslint}></img>
                                <p>.eslintrc.cjs</p>
                            </div>
                            <div className="files-wrapper">
                                <div className="space"></div>
                                <img src={svgs.html}></img>
                                <p>idnex.html</p>
                            </div>
                            <div className="files-wrapper">
                                <div className="space"></div>
                                <img src={svgs.more}></img>
                                <p>other files</p>
                            </div>
                        </div>
                        <div className="sidebar-bottom">
                            <div className="sidebar-tab">
                                <img className="right" src={svgs.arrow}></img>
                                <p>OUTLINE</p>
                            </div>
                            <div className="sidebar-tab">
                                <img className="right" src={svgs.arrow}></img>
                                <p>TIMELINE</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="editor-container">
                    <div className="tabs">
                        <div className="tab">
                        <img src={svgs.scss}></img>
                            <p>index.scss</p>
                        </div>
                        <div className="tab">
                            <img src={svgs.react}></img>
                            <p>App.tsx</p>
                        </div>
                        <div className="tab">
                            <img src={svgs.react}></img>
                            <p>main.tsx</p>
                        </div>
                    </div>
                    <div className="directive">
                        <p>src</p>
                        <img className="right" src={svgs.arrow}></img>
                        <img src={svgs.react}></img>
                        <p>App.tsx</p>
                    </div>
                    <div className="editor-area">
                        <div className="gutter">
                            { gutterNumbers.map(i => <p>{i}</p>) }
                        </div>
                        <div className="editor">
                            <p style={colors.punctuation}><Keywords word="import"/> &#123; <Fns_classes word="useState"/> &#125; <Keywords word="from"/> <Strings word="react"/>;</p>
                            <p style={colors.punctuation}><Keywords word="import"/> <Strings word="./index.scss"/>;</p>
                            <p className="whitespace"></p>
                            <p style={colors.comments}>// A very important comment here so that you can see how it would look in the editor</p>
                            <p className="whitespace"></p>
                            <p style={colors.punctuation}> <Keywords word="export"/> <Keywords word="const"/> <Fns_classes word="App"/> <Operators word="="/> () <Operators word="=&gt;"/> &#123;</p>
                            <p className="whitespace"></p>
                            <p style={colors.punctuation}><Keywords word="type"/> <span style={colors.ts_types}>Tokens</span> <Operators word="="/> &#123;</p>
                            <div className="tab-space">
                                <p style={colors.punctuation}><Attributes_props word="class"/><Operators word=":"/> <Strings word="string"/>;</p>
                                <p style={colors.punctuation}><Attributes_props word="name"/><Operators word=":"/> <Strings word="string"/>;</p>
                                <p style={colors.punctuation}><Attributes_props word="foreground"/><Operators word=":"/> <Strings word="string[]"/>;</p>
                            </div>
                            <p style={colors.punctuation}>&#125;;</p>
                            <p><Keywords word="const"/> <Fns_classes word="handleTokenUpdate"/> <Operators word="="/> (<Parameters word="e"/><Operators word=":"/> <Attributes_props word="React"/>.<Attributes_props word="ChangeEvent"/>&lt;<Attributes_props word="HTMLInputElement"/>&gt;, <Attributes_props word="index"/><Operators word=":"/> <span style={colors.ts_types}>number</span>) <Operators word="=&gt;"/> &#123;</p>
                            <p><Keywords word="const"/> [<Variables word="syntaxTokens"/>, <Variables word="setSyntaxTokens"/>] <Operators word="="/> <Fns_classes word="useState"/>&lt;<span style={colors.ts_types}>Tokens</span>&gt;(<Attributes_props word="tokens"/>.<Attributes_props word="syntax"/>);</p>
                        </div>
                    </div>
                    <div className="terminal">
                        <div className="terminal-tabs">
                            <p>PROBLEMS</p>
                            <p>TERMINAL</p>
                            <p>OUTPUT</p>
                            <p>DEBUG CONSOLE</p>
                            <div className="terminal-menus">
                                <div className="terminal-search">node</div>
                                <img src={svgs.close} style={{rotate : "45deg"}}></img>
                                <img src={svgs.more}></img>
                                <img src={svgs.arrow}></img>
                                <img src={svgs.close}></img>
                            </div>
                        </div>
                        <p>C:\Users\ur-project &gt; <span>git</span> <span>something</span></p>
                    </div>
                </div>
            </div>
            <div className="status-bar-wrapper">
                <img src={svgs.remote}></img>
                <div className="status-bar">
                    <img src={svgs.branch} style={{rotate : "180deg", transform : "scaleX(-1)"}}></img>
                    <p>main*</p>
                    <div className="status-right">
                        <p>Some text</p>
                        <p>More text</p>
                        <p>I'm tired now</p>
                        <p>Some text</p>
                    </div>
                </div>
            </div>
        </div>
	)
}