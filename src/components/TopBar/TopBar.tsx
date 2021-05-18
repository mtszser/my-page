import { FC } from 'react'
import styled from 'styled-components'
import {Wrapper}  from '../../StyledHelpers/Components';
import {Colors} from '../../StyledHelpers/Colors';
import ExpandedMenu from '../TopBar/ExpandedMenu';
import useDropdown from 'react-dropdown-hook';

const TopBarWrapper = styled(Wrapper)`
 display: flex;
 width: auto;
 height: 10%;
 background-color: ${Colors.niceblue};
 box-shadow: 0px 1px 10px #999;
 z-index: 999;
`;

const WrapperInner = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    height: auto;
  }
`;

const LeftTopSection = styled.div`
  width: 21%;
  margin-right: 4%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;


const CenterTopSection = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightTopSection = styled.div`
  width: 24%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MainLogo = styled.img`
  height: 35px;
  margin-left: 10px;
  margin-right: 30px;
`;

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  cursor: pointer;
  & > img {
    margin-right: 10px;
    margin-left: 5px;
  }
  &:hover {
  background-color: ${Colors.nicebutton};
  border-radius: 40px;
  }
  & > p {
    font-family: Helvetica;
  }
`;

const HomeInner = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const SearchContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
`;

const SearchComponent = styled.input`
  text-align: center;
  padding: 5px;
  border: 1px solid #dedede;
  border-radius: 5px;
  width: 100%;
`;

const SearchIcone = styled.img`
  position: absolute;
  right: 5px;
`;

const RightIconsContainer = styled.div`
  display: flex;
  & > img {
    cursor: pointer;
    padding: 8px;
  }
  & >img:hover{
    background-color: ${Colors.nicebuttonhover};
    border-radius: 70px;
  }
`;

const IconsBackground = styled.div`
position: relative;
background-color: ${Colors.nicebutton};
width: 40px;
height: 40px;
align-items: center;
border-radius: 70px;
margin-left: 10px;
cursor: pointer;
  & > img {
    padding: 9px;
  }
  & > img:hover {
  background-color: ${Colors.nicebuttonhover};
  border-radius: 70px;
  
  }
  &::after {
    display: flex;
    justify-content: center;
    background-color: #86c1f1;
    align-items: center;
    position: absolute;
    content: "69";
    font-size: 12px;
    height: 15px;
    width: 25px;
    top: -2px;
    left: 24px;
    border-radius: 69px;
  }
`;

export const TopBar: FC = () => {

  const [
    wrapperRef, 
    dropdownOpen, 
    toggleDropdown, 
    // closeDropdown,
  ] = useDropdown();

  return (
    <TopBarWrapper>
      <WrapperInner>
        <LeftTopSection>
          <MainLogo
            src= "/assets/logo.png" alt="img">
            </MainLogo>
          <HomeContainer ref={wrapperRef} onClick={toggleDropdown}>
            <img src="/assets/icons/house.svg" alt="img"/>
            <p>Home</p>
            <HomeInner>
              <img src="/assets/icons/arrow-down.svg" alt=""/>
            </HomeInner>
            {dropdownOpen && 
            <>
            <ExpandedMenu> 
            </ExpandedMenu>
            </>
            }
          </HomeContainer>
        </LeftTopSection>
        <CenterTopSection>
          <SearchContainer>
            <SearchComponent placeholder="Search Legalcluster..."></SearchComponent>
            <SearchIcone src="/assets/icons/search.svg" alt="img"></SearchIcone>
          </SearchContainer>
        </CenterTopSection>
        <RightTopSection>
          <RightIconsContainer>
            <img src="/assets/icons/house2.svg" alt=""/>
            <IconsBackground>
              <img src="/assets/icons/comments.svg" alt=""/>
            </IconsBackground>
            <IconsBackground>
              <img src="/assets/icons/bell.svg" alt=""/>
            </IconsBackground>
          </RightIconsContainer>
        </RightTopSection>
      </WrapperInner>
    </TopBarWrapper>
  );
};
export default TopBar;