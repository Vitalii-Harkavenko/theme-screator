import { Canvas } from "./Canvas.tsx";
import { StylingSection } from "./StylingSection.tsx";
import { TokensProvider } from "./TokensContext.tsx";

// 1. style the app - add style pickers input elements, color classes. Add text to the canvas with needed classes

// 2. bind useStates with color classes

export const App = () => {

    return (
        <TokensProvider>
            <StylingSection/>
            <Canvas/>
        </TokensProvider>
    )
}
