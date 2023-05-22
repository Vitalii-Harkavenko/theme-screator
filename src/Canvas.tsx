import { TokensContext } from "./TokensContext";
import { useContext } from "react"; 
import { Svgs } from "./Svgs"
import * as svgs from "./assets/svgs";
import { Keywords, Operators, Fns_classes_consts, Strings, Parameters, Atts_props_vars, Ts_types, Tags } from "./SyntaxBoilerplates";

export const Canvas = () => {

    const {syntaxColors, interfaceColors, interfaceFgColors, defaults} = useContext(TokensContext);
    
    const gutterNumbers = (start: number, finish: number) => {
        let nubmers = [];
        for (let i = start; i <= finish; i++) {
            nubmers.push(i);
        };
        return nubmers;
    };

	return (
		<div className="canvas" style={interfaceFgColors.text}>
            <div className="menu-bar" style={interfaceColors.titleBarBg}>
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
                    <Svgs svg={svgs.dash} _class={"svg-active"}/>
                    <Svgs svg={svgs.collapse} _class={"svg-active"}/>
                    <Svgs svg={svgs.close} _class={"svg-active"}/>
                </div>
            </div>
            <div className="main-section">
                <div className="sidebar-container">
                    <div className="activity-bar" style={interfaceColors.activityBarBg}>
                        <Svgs svg={svgs.files} _class={"svg-active"}/>
                        <Svgs svg={svgs.search} _class={"svg"}/>
                        <div className="branch">
                            <Svgs svg={svgs.branch} _class={"svg rotate"}/>
                            <div className="badge" style={interfaceColors.badgesButtons}>2</div>
                        </div>
                        <Svgs svg={svgs.debug} _class={"svg"}/>
                        <Svgs svg={svgs.extensions} _class={"svg"}/>
                        <div className="activity-other">
                            <Svgs svg={svgs.account} _class={"svg"}/>
                            <Svgs svg={svgs.settings} _class={"svg"}/>
                        </div>
                    </div>
                    <div className="sidebar" 
                        style={{
                            background: interfaceColors.sideBarBg.background,
                            borderLeft: `solid 1px ${interfaceColors.sidebarBorders.background}`,
                            borderRight: `solid 1px ${interfaceColors.sidebarBorders.background}`
                        }}>
                        <div className="explorer">
                            <p>EXPLORER</p>
                            <Svgs svg={svgs.more} _class={"svg-active"}/>
                        </div>
                        <div className="sidebar-tab">
                            <Svgs svg={svgs.arrow} _class={"svg-active down"}/>
                            <p>THEME-CREATOR</p>
                        </div>
                        <div className="project">
                            <div className="files-wrapper">
                                <Svgs svg={svgs.arrow} _class={"svg-active right"}/>
                                <Svgs svg={svgs.node}/>
                                <p>node_modules</p>
                            </div>
                            <div className="files-wrapper">
                                <Svgs svg={svgs.arrow} _class={"svg-active down"}/>
                                <Svgs svg={svgs.src}/>
                                <p>src</p>
                            </div>
                            <div className="down-root">
                                <Svgs svg={svgs.react}/>
                                <p>App.tsx</p>
                                <Svgs svg={svgs.scss}/>
                                <p>index.scss</p>
                                <Svgs svg={svgs.react}/>
                                <p>main.tsx</p>
                            </div>
                            <div className="files-wrapper">
                                <div className="space"></div>
                                <Svgs svg={svgs.eslint}/>
                                <p>.eslintrc.cjs</p>
                            </div>
                            <div className="files-wrapper">
                                <div className="space"></div>
                                <Svgs svg={svgs.html}/>
                                <p>idnex.html</p>
                            </div>
                            <div className="files-wrapper">
                                <div className="space"></div>
                                <Svgs svg={svgs.more} _class={"svg-active"}/>
                                <p>other files</p>
                            </div>
                        </div>
                        <div className="sidebar-bottom">
                            <div className="sidebar-tab">
                                <Svgs svg={svgs.arrow} _class={"svg-active right"}/>
                                <p>OUTLINE</p>
                            </div>
                            <div className="sidebar-tab">
                                <Svgs svg={svgs.arrow} _class={"svg-active right"}/>
                                <p>TIMELINE</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="editor-container">
                    <div className="tabs" style={interfaceColors.titleBarBg}>
                        <div className="tab" style={interfaceColors.tabInactiveBg}>
                            <Svgs svg={svgs.scss}/>
                            <p>index.scss</p>
                        </div>
                        <div className="tab" style={interfaceColors.tabActiveBg}>
                            <Svgs svg={svgs.react}/>
                            <p>StylingSection.tsx</p>
                            <Svgs svg={svgs.close} _class={"svg-active"}/>
                        </div>
                        <div className="tab" style={interfaceColors.tabInactiveBg}>
                            <Svgs svg={svgs.react}/>
                            <p>App.tsx</p>
                        </div>
                        <div className="tab" style={interfaceColors.tabInactiveBg}>
                            <Svgs svg={svgs.react}/>
                            <p>main.tsx</p>
                        </div>
                    </div>
                    <div className="directive" 
                        style={{
                            background: interfaceColors.breadcrumbBg.background,
                            borderBottom: `solid 1px ${interfaceColors.contrastBorder.background}`
                        }}>
                        <p>src</p>
                        <Svgs svg={svgs.arrow} _class={"svg-active right"}/>
                        <Svgs svg={svgs.react}/>
                        <p>App.tsx</p>
                    </div>
                    <div className="editor-area">
                        <div className="gutter" 
                            style={{
                                background: interfaceColors.gutterBg.background,
                                color: interfaceFgColors.inactive.color
                            }}>
                            { gutterNumbers(1, 10).map(i => <p key={i}>{i}</p>) }
                            <p style={interfaceFgColors.text} key={11}>11</p>
                            { gutterNumbers(12, 30).map(i => <p key={i}>{i}</p>) }
                        </div>
                        <div className="editor" style={interfaceColors.editorBg}>
                            <p style={syntaxColors.punctuation}><Keywords word="import"/> <Fns_classes_consts word="React"/>, &#123; <Fns_classes_consts word="useState"/>, <Fns_classes_consts word="useContext"/> &#125; <Keywords word="from"/> <Strings word="react"/>;</p>
                            <p style={syntaxColors.punctuation}><Keywords word="import"/> &#123; <Fns_classes_consts word="TokensContext"/> &#125; <Keywords word="from"/> <Strings word="./TokensContext.tsx"/>;</p>
                            <p style={syntaxColors.punctuation}><Keywords word="import"/> <Fns_classes_consts word="*"/> <Keywords word="as"/> <Fns_classes_consts word="svgs"/> <Keywords word="from"/> <Strings word="./assets/svgs"/>;</p>
                            <p className="whitespace"></p>
                            <p style={syntaxColors.comments}>// A very important comment here so that you can see how it would look in the editor</p>
                            <p className="whitespace"></p>
                            <p style={syntaxColors.punctuation}> <Keywords word="export"/> <Keywords word="const"/> <Fns_classes_consts word="StylingSection"/> <Operators word="="/> () <Operators word="=&gt;"/> &#123;</p>
                            <p style={syntaxColors.punctuation}><Keywords word="type"/> <Ts_types word="Tokens"/><Operators word="="/> &#123;</p>
                            <div className="tab-space">
                                <p style={syntaxColors.punctuation}><Atts_props_vars word="class"/><Operators word=":"/> <Strings word="string"/>;</p>
                                <p style={syntaxColors.punctuation}><Atts_props_vars word="name"/><Operators word=":"/> <Strings word="string"/>;</p>
                            </div>
                            <div className="active-line" style={interfaceColors.editorSelection}>
                                <div className="space"></div>
                                <p style={syntaxColors.punctuation}><Atts_props_vars word="foreground"/><Operators word=":"/> <Strings word="string[]"/>;</p>
                            </div>
                            <p style={syntaxColors.punctuation}>&#125;;</p>
                            <p className="whitespace"></p>
                            <p style={syntaxColors.punctuation}><Keywords word="type"/> <Ts_types word="TokensState"/> <Operators word="="/> &#123; <Atts_props_vars word="syntaxTokens"/><Operators word=":"/> <Ts_types word="Tokens"/>, <Atts_props_vars word="setSyntaxTokens"/><Operators word=":"/> <Ts_types word="any"/>&#125;;</p>
                            <p style={syntaxColors.punctuation}><Keywords word="const"/> &#123;<Fns_classes_consts word="syntaxTokens"/>, <Fns_classes_consts word="setSyntaxTokens"/>&#125; <Operators word="="/> <Fns_classes_consts word="useContext"/>&lt;<Ts_types word="TokensState"/>&gt;(<Fns_classes_consts word="TokensContext"/>);</p>
                            <p className="whitespace"></p>
                            <p style={syntaxColors.punctuation}><Keywords word="const"/> <Fns_classes_consts word="handleTokenUpdate"/> <Operators word="="/> (<Parameters word="e"/><Operators word=":"/> <Ts_types word="React"/>.<Ts_types word="ChangeEvent"/>&lt;<Ts_types word="HTMLInputElement"/>&gt;, <Atts_props_vars word="index"/><Operators word=":"/> <Ts_types word="number"/>) <Operators word="=&gt;"/> &#123;</p>
                            <div className="tab-space">
                                <p style={syntaxColors.punctuation}><Keywords word="const"/> <Fns_classes_consts word="tokens"/> <Operators word="="/> [<Operators word="..."/><Fns_classes_consts word="syntaxTokens"/>];</p>
                                <p style={syntaxColors.punctuation}><Fns_classes_consts word="tokens"/>[<Fns_classes_consts word="index"/>].<Atts_props_vars word="settings"/>.<Atts_props_vars word="foreground"/> <Operators word="="/> <Atts_props_vars word="e"/>.<Atts_props_vars word="target"/>.<Atts_props_vars word="value"/>;</p>
                            </div>
                            <p className="whitespace"></p>
                            <p style={syntaxColors.punctuation}><Keywords word="return"/> (</p>
                            <div className="tab-space">
                                <p style={syntaxColors.punctuation}>&lt;<Tags word="div"/> <Atts_props_vars word="className"/><Operators word="="/><Strings word="styles-container"/>&gt;</p>
                                <div className="tab-space">
                                    <p style={syntaxColors.punctuation}>&lt;<Tags word="div"/> <Atts_props_vars word="className"/><Operators word="="/><Strings word="some-element"/>&gt;</p>
                                </div>
                                <div className="tab-space">
                                    <p style={syntaxColors.punctuation}>&lt;<Tags word="div"/> <Atts_props_vars word="className"/><Operators word="="/><Strings word="class"/>&gt;</p>
                                    <div className="tab-space">
                                        <p style={syntaxColors.punctuation}>&lt;<Tags word="img"/> <Atts_props_vars word="src"/><Operators word="="/>&#123;<Atts_props_vars word="svgs"/>.<Atts_props_vars word="search"/>&#125; <Atts_props_vars word="alt"/><Operators word="="/><Strings word="search"/>&gt;&lt;/<Tags word="img"/>&gt;</p>
                                    </div>
                                    <p style={syntaxColors.punctuation}>&lt;/<Tags word="div"/>&gt;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="terminal" 
                        style={{
                            background: interfaceColors.panelBg.background,
                            borderTop: `solid 1px ${interfaceColors.panelBorder.background}`
                        }}>
                        <div className="terminal-tabs">
                            <p>PROBLEMS</p>
                            <p style={{borderBottom: `solid 1px ${interfaceFgColors.text}`}}>TERMINAL</p>
                            <p>OUTPUT</p>
                            <p>DEBUG CONSOLE</p>
                            <div className="terminal-menus">
                                <p className="terminal-search">node</p>
                                <div style={{rotate : "45deg"}}>
                                    <Svgs svg={svgs.close} _class={"svg-active"}/>
                                </div>
                                <Svgs svg={svgs.more} _class={"svg-active"}/>
                                <Svgs svg={svgs.arrow} _class={"svg-active right"}/>
                                <Svgs svg={svgs.close} _class={"svg-active"}/>
                            </div>
                        </div>
                        <p style={interfaceFgColors.terminalText}>C:\Users\ur-project &gt; <span style={{color: defaults["terminal.ansiYellow"]}}>git</span> something</p>
                    </div>
                </div>
            </div>
            <div className="status-bar-wrapper" style={interfaceColors.statusBarBg}>
                <Svgs svg={svgs.remote} _class={"svg-active remote"}/>
                <div className="status-bar">
                <Svgs svg={svgs.branch} _class={"svg-active rotate oneRem"}/>
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