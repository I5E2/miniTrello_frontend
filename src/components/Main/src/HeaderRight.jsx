import { useState } from "react";
import styled from "styled-components";

const HeaderRight = () => {
  const [login, setLogin] = useState(true);
  return (
    <Right>
      <SearchField>
        <InputField type="text" />
        <SearchIcon
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.75 23.75C19.2728 23.75 23.75 19.2728 23.75 13.75C23.75 8.22715 19.2728 3.75 13.75 3.75C8.22715 3.75 3.75 8.22715 3.75 13.75C3.75 19.2728 8.22715 23.75 13.75 23.75Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M26.25 26.25L20.8125 20.8125"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </SearchIcon>
      </SearchField>
      {login ? (
        <Logout onClick={() => setLogin(false)}>Log Out</Logout>
      ) : (
        <Logout onClick={() => setLogin(true)}>Log In</Logout>
      )}
      <Profile>J</Profile>
    </Right>
  );
};

let Right = styled.div`
  margin: 80px 70px 70px auto;
  display: flex;
`;

let SearchField = styled.div`
  position: relative;
  margin-right: 100px;
`;

let InputField = styled.input`
  width: 185px;
  height: 38px;
  padding: 4px;
  border: none;
  background-color: transparent;
  border-bottom: 3px solid black;
`;

let SearchIcon = styled.svg`
  position: absolute;
  right: 4px;
`;

let Logout = styled.button`
  width: 120px;
  height: 38px;
  background-color: transparent;
  border: 1px solid #7879f1;
  color: #7879f1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-size: 20px;
  margin-right: 40px;

  &:active {
    box-shadow: none;
  }
`;

let Profile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #d662e9;
  color: white;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.15);
`;

export default HeaderRight;
