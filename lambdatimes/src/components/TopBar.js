import React from "react";
import styled from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file
const MainTopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const TopBarCon = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;
const TopBarConLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const TopBarConLeftSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const TopBarConCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;
const TopBarConCenterSpan = styled.span`
  cursor: pointer;
  margin-right: 5%;
  :hover {
    text-decoration: underline;
  }
  :last-child {
    margin-right: 0;
  }
`;

const TopBarConRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const TopBarConRightSpan = styled.span`
  cursor: pointer;
`;

const TopBar = () => {
  return (
    <MainTopBar>
      <TopBarCon>
        <TopBarConLeft>
          <TopBarConLeftSpan>TOPICS</TopBarConLeftSpan>
          <TopBarConLeftSpan>SEARCH</TopBarConLeftSpan>
        </TopBarConLeft>
        <TopBarConCenter>
          <TopBarConCenterSpan>GENERAL</TopBarConCenterSpan>
          <TopBarConCenterSpan>BROWNBAG</TopBarConCenterSpan>
          <TopBarConCenterSpan>RANDOM</TopBarConCenterSpan>
          <TopBarConCenterSpan>MUSIC</TopBarConCenterSpan>
          <TopBarConCenterSpan>ANNOUNCEMENTS</TopBarConCenterSpan>
        </TopBarConCenter>
        <TopBarConRight>
          <TopBarConRightSpan>LOG IN</TopBarConRightSpan>
        </TopBarConRight>
      </TopBarCon>
    </MainTopBar>
  );
};

export default TopBar;
