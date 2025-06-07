import { useState } from "react";
import { styled } from "styled-components";
import { useTodoStore } from "../store/todoStore";

const TodoList = () => {
  const { todos, addTodo, deleteTodo, toggleCheck, updateValue, saveTodos } =
    useTodoStore();
  const [title, setTitle] = useState("To-Do List");
  const [checked, setChecked] = useState(Array(12).fill(false));
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});
  const handleCheck = (idx: number) => {
    setChecked((prev) => prev.map((c, i) => (i === idx ? !c : c)));
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Wrapper>
      <TransparentTitleInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        maxLength={32}
      />
      <TodoTasks>
        {todos.map((task, idx) => (
          <TodoTask key={idx}>
            <CustomCheckbox
              checked={checked[idx]}
              onChange={() => handleCheck(idx)}
            />
            <TransparentInput
              tabIndex={idx + 1}
              name={`task-${idx}`}
              value={inputValues[`task-${idx}`] || ""}
              onChange={handleInputChange}
              maxLength={17}
            />
            <XIconButton
              onClick={() => {
                deleteTodo(task.id);
              }}
            >
              X
            </XIconButton>
          </TodoTask>
        ))}
        <ButtonWrapper>
          <TodoButton
            onClick={() => {
              console.log("DELETE");
            }}
          >
            Delete
          </TodoButton>
          <TodoButton
            onClick={() => {
              saveTodos();
            }}
          >
            Save
          </TodoButton>
        </ButtonWrapper>
      </TodoTasks>
    </Wrapper>
  );
};

export default TodoList;

const Wrapper = styled.div`
  border: 2px solid black;
  border-radius: 20px;
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5),
    inset 0px 4px 16px rgba(0, 0, 0, 0.18),
    inset 0px -4px 16px rgba(0, 0, 0, 0.12);
  margin-top: 20px;
`;

const TransparentTitleInput = styled.input`
  background-color: #e5b246;
  border-radius: 20px 20px 0 0;
  padding: 10px;
  border: none;
  outline: none;
  color: #222;
  font-size: 30px;
  font-weight: bold;
  font-family: "Press Start 2P", cursive, sans-serif;
  text-align: center;
  border-bottom: 2px solid black;
`;

const TodoTasks = styled.div`
  background-color: #ead5b4;
  padding: 22px 20px;
  gap: 15px;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 20px 20px;
`;

const TodoTask = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const CustomCheckbox = styled.input.attrs({ type: "checkbox" })`
  width: 24px;
  height: 28px;
  border: 2.5px solid black;
  appearance: none;
  outline: none;
  cursor: pointer;
  background: #ead5b4;
  display: inline-block;
  margin: 0;
  padding: 0;
  position: relative;
  font-family: "Press Start 2P", cursive, sans-serif;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }
  &:checked::after {
    content: "✓";
    color: #222;
    font-size: 24px;
    font-weight: bold;
    font-family: "Press Start 2P", cursive, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: -2px;
    left: 0;
    text-align: center;
  }
`;

const TransparentInput = styled.input`
  margin: 0 10px;
  background: transparent;
  border: none;
  outline: none;
  color: #222;
  font-size: 22px;
  letter-spacing: 6px;
  width: 100%;
  font-family: "Press Start 2P", cursive, sans-serif;
  border-bottom: 3px dotted #222;
  text-shadow: none;
`;

const XIconButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  focus: none;
  cursor: pointer;
  font-size: 28px;
  color: #000;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 5px;
`;

const TodoButton = styled.button`
  background-color: #e5b246;
  font-size: 24px;
  padding: 5px;
  font-weight: bold;
  font-family: "Press Start 2P", cursive, sans-serif;
  border: 2px solid black;
  width: 130px;
  cursor: pointer;

  &:hover {
    background-color: #d4a83c;
  }
  &:active {
    background-color: #c3922f;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
