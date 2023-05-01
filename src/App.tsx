import { useState } from "react";
import * as svgs from "./assets/svgs";
import tokens from "./assets/settings.json";

// 1. style the app - add style pickers input elements, color classes. Add text to the canvas with needed classes

// 2. bind useStates with color classes

export const App = () => {

    type Tokens = {
        class: string;
        name: string;
        scope: string[];
        settings: {
            foreground: string;
            fontStyle?: string;
        };
    }[];

	const [searchValue, setSearchValue] = useState<string>('');
    const [syntaxTokens, setSyntaxTokens] = useState<Tokens>(tokens.syntax);

    return (
        <>
            <div className="styles-container">
                <div className="search-container">
                    <div className="search-svg">
                        <img src={svgs.search} alt="search"></img>
                    </div>
                    <input
                        className="search-bar"
                        type="text"
                        placeholder="Find a section/text type"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    ></input>
                </div>
                <div className="styles-picker">
                {
                    syntaxTokens.map(el => {
                        return (
                            <div className="styles-wrapper">
                                <div className="color-thumb" style={{backgroundColor : el.settings.foreground}}></div>
                                <input
                                    type="text"
                                    placeholder="Enter a color"
                                    value={el.settings.foreground}
                                    onChange={(e) => {
                                        setSyntaxTokens(e.target.value)
                                    }}
                                ></input>
                                <p>{el.name}</p>
                            </div>
                        )
                    })
                }    
                </div>
            </div>
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
                            <img src={svgs.branch}></img>
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
                            <div className="project-tab">
                                <img className="down" src={svgs.arrow}></img>
                                <p>THEME-CREATOR</p>
                            </div>
                            <div className="project">
                                <div className="files1-wrapper">
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
                                <div className="sass-svg"></div>
                                <p>index.scss</p>
                            </div>
                            <div className="tab">
                                <div className="sass-svg"></div>
                                <p>index.scss</p>
                            </div>
                            <div className="tab">
                                <div className="react-svg"></div>
                                <p>App.tsx</p>
                            </div>
                        </div>
                        <div className="directive">
                            <p>src</p>
                            <div className="arrow"></div>
                            <div className="react-svg"></div>
                            <p>App.tsx</p>
                        </div>
                        <div className="editor-area">
                            <div className="gutter">
                                <p>1</p>
                                <p>2</p>
                                <p>3</p>
                                <p>4</p>
                                <p>5</p>
                                <p>6</p>
                                <p>7</p>
                                <p>8</p>
                                <p>9</p>
                                <p>10</p>
                                <p>11</p>
                                <p>12</p>
                                <p>13</p>
                                <p className="active-line">14</p>
                                <p>15</p>
                                <p>...</p>
                            </div>
                            <div className="editor">
                                <p><span>import</span> &#123; <span>useState</span> &#125; <span>from</span> <span>"react"</span>;</p>
                                <p><span>import</span> <span>"./index.scss"</span>;</p>
                                <p className="whitespace"></p>
                                <p>// A very important comment here so that you can see how it would look in the editor</p>
                                <p className="whitespace"></p>
                                <p>export const <span>App</span> <span>=</span> () <span>=&gt;</span> &#123;</p>
                                <p className="whitespace"></p>
                                <p>type <span>Tokens</span> <span>=</span> &#123;</p>
                                <div className="tab-space">
                                    <p><span>class</span>: <span>string</span>;</p>
                                    <p><span>name</span>: <span>string</span>;</p>
                                    <p><span>foreground</span>: <span>string[]</span>;</p>
                                </div>
                                <p>&#125;</p>
                            </div>
                        </div>
                        <div className="terminal">
                            <div className="terminal-tabs">
                                <p>PROBLEMS</p>
                                <p>TERMINAL</p>
                                <p>OUTPUT</p>
                                <p>DEBUG CONSOLE</p>
                                <div className="right">
                                    <div className="terminal-search">Find something</div>
                                    <div className="cross"></div>
                                </div>
                            </div>
                            <p>C:\Users\ur-project &gt;</p>
                            <p>git</p>
                            <p>something</p>
                        </div>
                    </div>
                </div>
                <div className="status-bar-wrapper">
                    <div className="remote-window"></div>
                    <div className="status-bar">
                        <div className="status-left">
                            <p>Some text</p>
                            <p>More text</p>
                            <p>I'm tired now</p>
                            <p>Some text</p>
                        </div>
                        <div className="status-right">
                            <p>Some text</p>
                            <p>More text</p>
                            <p>I'm tired now</p>
                            <p>Some text</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
