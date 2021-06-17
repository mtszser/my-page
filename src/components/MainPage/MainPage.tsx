import { FC } from 'react';
import LeftMenu from '../LeftMenu/LeftMenu';
import styled from 'styled-components'
import TopBar from '../TopBar/TopBar';
import {Colors} from '../../StyledHelpers/Colors';
import MainContent from '../MainContent/MainContent';
import RoutingSite from '../RoutingSite/RoutingSite';
import Profile from '../PersonalProfile/Profile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
  



const Main = styled.div`
background-color: ${Colors.mainbackground};
width: auto;
height: auto;
`;


const MainWrapper = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: auto;
`;





const MainPage: FC = () => {


    return (
        <Router>
            <Main>
                <TopBar />
                <MainWrapper>
                    <LeftMenu />
                    <Switch>
                    <Route path="/" exact component={MainContent}/>
                    <Route path="/routingsite" component={RoutingSite}/>
                    <Route path="/profile" component={Profile}/>
                    </Switch>
                </MainWrapper>
            </Main>
        </Router>

    )
}

export default MainPage
