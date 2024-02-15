import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Counter } from "./components/Counter";


function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <Counter />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
