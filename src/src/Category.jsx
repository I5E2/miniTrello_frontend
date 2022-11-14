import styled from "styled-components";

const Category = () => {
  const categorys = [
    { color: "#B248C7", title: "친구들" },
    { color: "#F5A841", title: "시험" },
  ];

  return (
    <Div>
      <H2>Category</H2>
      <List>
        {categorys.map((el, ind) => (
          <ListOne key={"list" + ind}>
            <ColorDiv color={el.color} />
            {el.title}
          </ListOne>
        ))}
      </List>
      <Gear>+ 타 캘린더 연동</Gear>
    </Div>
  );
};

let Div = styled.div`
  background: #ffffff;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  width: 15vw;
  height: 793px;
  padding: 48px;
`;

let H2 = styled.h2`
  font-size: 30px;
  text-align: left;
`;

let List = styled.div`
  height: 600px;
  margin-top: 35px;
`;

let ListOne = styled.div`
  margin: 16px 10px;
  display: flex;
  font-size: 15px;
`;

let ColorDiv = styled.div`
  width: 9px;
  height: 9px;
  margin-top: 3px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

let Gear = styled.a`
  text-decoration: none;
  color: #2234da;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid #2234da;
  }
`;

export default Category;
