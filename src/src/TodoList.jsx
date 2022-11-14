import { useState } from "react";
import styled from "styled-components";

const TodoList = () => {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(1);

  const makeNewTodo = () => {
    setData(
      data.concat({
        id: num,
        todo: "",
        date: new Date(),
        description: "",
        done: false,
      })
    );
    setNum(num + 1);
  };

  const haveTodo = (id) => {
    setData(
      data.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const todoChange = (e, id) => {
    console.log("todoChange");
    const { name, value } = e.target;
    setData(
      data.map((todo) => (todo.id === id ? { ...todo, [name]: value } : todo))
    );
  };

  return (
    <Div>
      <H2>Todo List</H2>
      <AddTodo onClick={makeNewTodo}>
        <AddTodoImg />할 일 추가
      </AddTodo>
      {data.map((el, ind) => (
        <Todo key={"todo" + ind}>
          <DoneButton onClick={() => haveTodo(el.id)}>
            {el.done ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="29"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#1a73e8"
                  d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13s13-5.8 13-13c0-1.4-.188-2.794-.688-4.094L26.688 13.5c.2.8.313 1.6.313 2.5c0 6.1-4.9 11-11 11S5 22.1 5 16S9.9 5 16 5c3 0 5.694 1.194 7.594 3.094L25 6.688C22.7 4.388 19.5 3 16 3zm11.28 4.28L16 18.563l-4.28-4.28l-1.44 1.437l5 5l.72.686l.72-.687l12-12l-1.44-1.44z"
                />
              </svg>
            ) : (
              <svg
                focusable="false"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                class=" NMm5M"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
              </svg>
            )}
          </DoneButton>
          <Name
            type="text"
            value={el.todo}
            name="todo"
            done={el.done}
            onChange={(e) => todoChange(e, el.id)}
          />
        </Todo>
      ))}
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
  text-align: center;
`;

let AddTodo = styled.button`
  display: flex;
  margin: 20px 0 10px 0;
  padding: 5px;
  border-radius: 20px;
  border: 0;
  color: #1a73e8;
  cursor: pointer;
  background-color: #fff;
  width: 100%;
  &:hover {
    background-color: #f5f5f5;
  }
`;

let AddTodoImg = styled.div`
  background-size: contain;
  font-size: 24px;
  width: 20px;
  margin: 0 16px 0 8px;
  height: 20px;
  background-image: url("https://www.gstatic.com/tasks/task-add-accent-light.svg");
`;

let Todo = styled.div`
  display: flex;
  margin: 5px 0;
`;

let DoneButton = styled.button`
  background-color: #fff;
  border: 0;
  margin: 0 16px 0 12px;
`;

let Name = styled.input`
  border: none;
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
`;

export default TodoList;
