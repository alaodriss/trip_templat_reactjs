import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyle";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
