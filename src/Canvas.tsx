import { TokensContext } from "./TokensContext";
import { useContext } from "react"; 
import * as svgs from "./assets/svgs";
import { Keywords, Operators, Fns_classes_consts, Strings, Parameters, Atts_props_vars, Ts_types, Tags } from "./SyntaxBoilerplates";

export const Canvas = () => {

    const {colors} = useContext(TokensContext);
    
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
                            <p>StylingSection.tsx</p>
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
                            <p style={colors.punctuation}><Keywords word="import"/> <Fns_classes_consts word="React"/>, &#123; <Fns_classes_consts word="useState"/>, <Fns_classes_consts word="useContext"/> &#125; <Keywords word="from"/> <Strings word="react"/>;</p>
                            <p style={colors.punctuation}><Keywords word="import"/> &#123; <Fns_classes_consts word="TokensContext"/> &#125; <Keywords word="from"/> <Strings word="./TokensContext.tsx"/>;</p>
                            <p style={colors.punctuation}><Keywords word="import"/> <Fns_classes_consts word="*"/> <Keywords word="as"/> <Fns_classes_consts word="svgs"/> <Keywords word="from"/> <Strings word="./assets/svgs"/>;</p>
                            <p className="whitespace"></p>
                            <p style={colors.comments}>// A very important comment here so that you can see how it would look in the editor</p>
                            <p className="whitespace"></p>
                            <p style={colors.punctuation}> <Keywords word="export"/> <Keywords word="const"/> <Fns_classes_consts word="StylingSection"/> <Operators word="="/> () <Operators word="=&gt;"/> &#123;</p>
                            <p style={colors.punctuation}><Keywords word="type"/> <Ts_types word="Tokens"/><Operators word="="/> &#123;</p>
                            <div className="tab-space">
                                <p style={colors.punctuation}><Atts_props_vars word="class"/><Operators word=":"/> <Strings word="string"/>;</p>
                                <p style={colors.punctuation}><Atts_props_vars word="name"/><Operators word=":"/> <Strings word="string"/>;</p>
                                <p style={colors.punctuation}><Atts_props_vars word="foreground"/><Operators word=":"/> <Strings word="string[]"/>;</p>
                            </div>
                            <p style={colors.punctuation}>&#125;;</p>
                            <p style={colors.punctuation}><Keywords word="type"/> <Ts_types word="TokensState"/> <Operators word="="/> &#123; <Atts_props_vars word="syntaxTokens"/><Operators word=":"/> <Ts_types word="Tokens"/>, <Atts_props_vars word="setSyntaxTokens"/><Operators word=":"/> <Ts_types word="any"/>&#125;;</p>
                            <p style={colors.punctuation}><Keywords word="const"/> [<Fns_classes_consts word="searchValue"/>, <Fns_classes_consts word="setSearchValue"/>] <Operators word="="/> <Fns_classes_consts word="useState"/>&lt;<Ts_types word="string"/>&gt;(<Strings word=""/>);</p>
                            <p style={colors.punctuation}><Keywords word="const"/> &#123;<Fns_classes_consts word="syntaxTokens"/>, <Fns_classes_consts word="setSyntaxTokens"/>&#125; <Operators word="="/> <Fns_classes_consts word="useContext"/>&lt;<Ts_types word="TokensState"/>&gt;(<Fns_classes_consts word="TokensContext"/>);</p>
                            <p className="whitespace"></p>
                            <p style={colors.punctuation}><Keywords word="const"/> <Fns_classes_consts word="handleTokenUpdate"/> <Operators word="="/> (<Parameters word="e"/><Operators word=":"/> <Ts_types word="React"/>.<Ts_types word="ChangeEvent"/>&lt;<Ts_types word="HTMLInputElement"/>&gt;, <Atts_props_vars word="index"/><Operators word=":"/> <Ts_types word="number"/>) <Operators word="=&gt;"/> &#123;</p>
                            <div className="tab-space">
                                <p style={colors.punctuation}><Keywords word="const"/> <Fns_classes_consts word="tokens"/> <Operators word="="/> [<Operators word="..."/><Fns_classes_consts word="syntaxTokens"/>];</p>
                                <p style={colors.punctuation}><Fns_classes_consts word="tokens"/>[<Fns_classes_consts word="index"/>].<Atts_props_vars word="settings"/>.<Atts_props_vars word="foreground"/> <Operators word="="/> <Atts_props_vars word="e"/>.<Atts_props_vars word="target"/>.<Atts_props_vars word="value"/>;</p>
                            </div>
                            <p style={colors.punctuation}><Keywords word="return"/> (</p>
                            <div className="tab-space">
                                <p style={colors.punctuation}>&lt;<Tags word="div"/> <Atts_props_vars word="className"/><Operators word="="/><Strings word="styles-container"/>&gt;</p>
                                <div className="tab-space">
                                    <p style={colors.punctuation}>&lt;<Tags word="div"/> <Atts_props_vars word="className"/><Operators word="="/><Strings word="search-container"/>&gt;</p>
                                    <div className="tab-space">
                                        <p style={colors.punctuation}>&lt;<Tags word="div"/> <Atts_props_vars word="className"/><Operators word="="/><Strings word="search-svg"/>&gt;</p>
                                        <div className="tab-space">
                                            <p style={colors.punctuation}>&lt;<Tags word="img"/> <Atts_props_vars word="src"/><Operators word="="/>&#123;<Atts_props_vars word="svgs"/>.<Atts_props_vars word="search"/>&#125; <Atts_props_vars word="alt"/><Operators word="="/><Strings word="search"/>&gt;&lt;/<Tags word="img"/>&gt;</p>
                                        </div>
                                        <p style={colors.punctuation}>&lt;/<Tags word="div"/>&gt;</p>
                                    </div>
                                </div>
                            </div>
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