import { Button, ChakraProvider, HStack } from "@chakra-ui/react";
import { system } from "./globalStyles";
import { ColorModeProvider, useColorMode } from "./components/ui/color-mode";

function App() {
  const { setColorMode } = useColorMode();
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider>
        <HStack>
          <Button onClick={() => setColorMode("light")}>Light</Button>
          <Button onClick={() => setColorMode("dark")}>Dark</Button>
        </HStack>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
