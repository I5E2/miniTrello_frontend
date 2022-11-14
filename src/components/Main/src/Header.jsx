import styled from "styled-components";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const Header = () => {
  return (
    <Flex>
      <HeaderLeft />
      <HeaderRight />
    </Flex>
  );
};

let Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
`;

export default Header;
