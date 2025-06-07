import { useState } from "react";
import { styled } from "styled-components";

const PreviousTodoList = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const items = Array.from({ length: 15 });

  return (
    <Wrapper>
      {items.map((_, idx) => (
        <List
          key={idx}
          selected={selectedIndex === idx}
          onClick={() => setSelectedIndex(idx)}
        >
          <span>
            Previous To-Do List{" "}
            <ListDate>{new Date().toLocaleDateString()}</ListDate>
          </span>
          <RightArrow>{">"}</RightArrow>
        </List>
      ))}
    </Wrapper>
  );
};

export default PreviousTodoList;

const Wrapper = styled.div`
  margin-top: 20px;
  border: 2px solid black;
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5),
    inset 0px 4px 16px rgba(0, 0, 0, 0.18),
    inset 0px -4px 16px rgba(0, 0, 0, 0.12);
  width: 450px;
  height: 760px;
  overflow-y: auto;
  background-color: #ead5b4;

  /* Custom scrollbar styles */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ead5b4;
    border: 1px solid black;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-button:increment,
  &::-webkit-scrollbar-button:decrement {
    display: none;
    width: 0;
    height: 0;
  }
  &::-webkit-scrollbar-button {
    display: none;
    width: 0;
    height: 0;
  }
  scrollbar-width: thin;
  scrollbar-color: black #ead5b4;
`;

const List = styled.div<{ selected?: boolean }>`
  margin: 19px;
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 10px;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
  background: ${({ selected }) =>
    selected ? "#e5b246" : "transparent"};
  box-shadow: ${({ selected }) =>
    selected ? "0 0 8px 2px #e0c48a" : "none"};
  border-radius: ${({ selected }) => (selected ? "8px" : "0")};
  transition: background 0.2s, box-shadow 0.2s;
`;

const RightArrow = styled.span`
  font-size: 36px;
  line-height: 1;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ListDate = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin-left: 100px;
  color: #444;
`;
