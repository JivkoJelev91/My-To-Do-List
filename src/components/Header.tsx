import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>To-Do List</Title>
      <HeaderShadow />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  position: relative;
`;

const Title = styled.div`
  position: relative;
  background-color: #e5b246;
  border: 2px solid black;
  display: flex;
  font-size: 40px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  width: 925px;
  height: 90px;
  z-index: 2;
`;

const HeaderShadow = styled.div`
  position: absolute;
  width: 925px;
  height: 80px;
  background-color: #e5b246;
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5),
    inset 0px 4px 16px rgba(0, 0, 0, 0.18),
    inset 0px -4px 16px rgba(0, 0, 0, 0.12);
  top: 17px;
  left: 5px;
  z-index: 1;
  border: 2px solid black;
`;
