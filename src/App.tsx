import { Canvas } from "./Canvas.tsx";
import { StylingSection } from "./StylingSection.tsx";
import { TokensProvider } from "./TokensContext.tsx";
import { CodePreview } from "./CodePreview.tsx";

export const App = () => {

    return (
        <TokensProvider>
            <StylingSection/>
            <CodePreview/>
            <Canvas/>
        </TokensProvider>
    )
}
