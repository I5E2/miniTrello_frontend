import styled from "styled-components";
import Header from "./src/Header";
import Article from "./src/Article";
import Footer from "./src/Footer";

const Main = () => {
  return (
    <Background>
      <Header />
      <Article />
      <Footer />
    </Background>
  );
};

let Background = styled.div`
  background-color: #eae8eb;
  height: 100vh;
`;

export default Main;
