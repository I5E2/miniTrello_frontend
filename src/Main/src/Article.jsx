import styled from "styled-components";
import Category from "./Category";
import Calendar from "./Calendar";
import TodoList from "./TodoList";

const Article = () => {
  return (
    <Flex>
      <Category />
      <Calendar />
      <TodoList />
    </Flex>
  );
};

let Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  padding: 0 60px;
`;

export default Article;
