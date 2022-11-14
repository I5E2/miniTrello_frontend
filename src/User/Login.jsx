import { useState } from "react";
import styled from "styled-components";

const Login = () => {
  const [userField, setUserField] = useState({
    useremail: "",
    userpswd: "",
  });

  const { useremail, userpswd } = userField;

  const onChangeField = (e) => {
    const { name, value } = e.target;
    setUserField({
      ...userField,
      [name]: value,
    });
  };

  return (
    <Background>
      <Width500>
        <Title>Mini Trello</Title>
        <InputField
          type="text"
          placeholder="이메일"
          value={useremail}
          onChange={onChangeField}
        />
        <br />
        <InputField
          type="password"
          placeholder="비밀번호"
          value={userpswd}
          onChange={onChangeField}
        />
        <LoginBtn
          onClick={() => {
            window.location.href = "/main";
          }}
        >
          로그인
        </LoginBtn>
        <JoinBtn
          onClick={() => {
            window.location.href = "/join";
          }}
        >
          회원가입
        </JoinBtn>
        <QuickLogin>
          <ImgBtn>
            <Img
              title="구글 로그인"
              src={require("../../img/google_icon.png")}
            />
          </ImgBtn>
          <ImgBtn>
            <Img
              title="카카오 로그인"
              src={require("../../img/kakao_icon.png")}
            />
          </ImgBtn>
        </QuickLogin>
      </Width500>
    </Background>
  );
};

let Background = styled.div`
  background-color: #eae8eb;
  height: 100vh;
`;

let Width500 = styled.div`
  width: 500px;
  margin: auto;
`;

let Title = styled.h3`
  font-family: "Paprika";
  font-size: 40px;
  margin: auto;
  text-align: center;
  padding-top: 246px;
  padding-bottom: 80px;
`;

let InputField = styled.input`
  width: 500px;
  height: 80px;
  font-size: 20px;
  margin: auto;
  margin-bottom: 45px;
  padding: 25px 18px;
  border: 1px solid #c2c2c2;
`;

let LoginBtn = styled.button`
  width: 500px;
  height: 80px;
  padding: 20px;
  text-align: center;
  background-color: #7879f1;
  font-size: 30px;
  color: white;
  border: 1px solid #7879f1;
  margin-bottom: 30px;
`;

let JoinBtn = styled.button`
  width: 500px;
  height: 80px;
  padding: 20px;
  text-align: center;
  font-size: 30px;
  color: #7879f1;
  background-color: white;
  border: 2px solid #7879f1;
  margin-bottom: 30px;
`;

let QuickLogin = styled.div`
  float: right;
`;

let ImgBtn = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 15px;
  padding: 7px;
  border-radius: 5px;
  width: 36px;
  height: 36px;

  &:active {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

let Img = styled.img`
  width: 24px;
  height: 24px;
`;

export default Login;
