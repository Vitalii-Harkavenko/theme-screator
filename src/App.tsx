import { Canvas } from "./Canvas.tsx";
import { StylingSection } from "./StylingSection.tsx";
import { TokensProvider } from "./TokensContext.tsx";

export const App = () => {

    return (
        <TokensProvider>
            <StylingSection/>
            <Canvas/>
        </TokensProvider>
    )
}
