import { FC } from 'react'
import styled from 'styled-components'
import {Colors} from '../../StyledHelpers/Colors';
import SearchBar from '../TopBar/SearchBar';


const ExpandedMenuContainer = styled.ul`
display: flex;
z-index: 2;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
overflow: hidden;
border-style: solid;
border-width: 0px 1px 1px 1px;
border-color: #999;
position: absolute;
background-color: ${Colors.niceblue};
height: auto;
width: 100%;
top: 36px;
@media (min-width: 768px) {
	width: 100%;
}
`;



const ExpandedMenuFilter = styled.input`
text-align: left;
padding: 5px;
margin-top: 5px;
border: 1px solid #dedede;
border-radius: 5px;
width: 86%;
@media (min-width: 1205px) {
	width: 90%;
}
`;

const ExpandedMenuWrapper = styled.div`
display: flex;
flex-direction: column;
width: 95%;
height: 10%;
background-color: ${Colors.niceblue};
overflow:scroll;
overflow-x:hidden;
`
const ExpandedMenuPlatform = styled.div`
width: 95%;
height: auto;
background-color: ${Colors.niceblue};
justify-content: center;
align-items: center;
color: #5e5e5e;
text-align: left;
`;


const ExpandedMenuHeader = styled.div`
display: flex;
text-align: left;
margin-top: 5px;
margin-bottom: 5px;
& > h1 {
	color: #5e5e5e;
	font-size: 13px;
	font-family: Helvetica;
}
`;

const ExpandedMenuContent = styled.div`
display: flex;
width: 100%;
align-items: center;
& > p {
	margin-left: 10px;
	color: #04002c;
	font-size: 16px;
	font-family: Helvetica;
}
&:hover{
	background-color: ${Colors.nicebutton};
}
`;

const ExpandedMenuDiv = styled.div`
display: flex;
flex-direction: column;
height: auto;
`;

const ExpandedMenuIcon = styled.div`
& > img {
height: 25px;
width: 25px;
padding: 2px;
}
& > p {
display: flex
}
`;

const ExpandedMenuWorkspaces = styled.div`
width: 95%;
height: auto;
background-color: ${Colors.niceblue};
justify-content: center;
align-items: center;
color: #5e5e5e;
text-align: left;
`;

const ExpandedMenuAccount = styled.div`
width: 95%;
height: auto;
background-color: ${Colors.niceblue};
justify-content: center;
align-items: center;
color: #5e5e5e;
text-align: left;
margin-bottom: 10px;
border-top: 1px solid #9e9e9e;
border-bottom: 1px solid #9e9e9e;
`;

const LogoutDiv = styled.div`
display: flex;
width: 90%;
height: auto;
justify-content: center;
text-align: center;
align-items: center;
margin-bottom: 10px;
cursor: pointer;
opacity:0.5;
&:hover {
	opacity:0.9;
}
& > p {
	font-size: 16px;
	color: #5e5e5e;
	font-family: Helvetica;
	
}
& > p:hover {
	font-style: bold;
	font-size: 19px;
	font-family: Helvetica;
	color: ${Colors.black};
}
& > img {
	margin-right: 15px;
}
`;



export const ExpandedMenu: FC = () => {
	return (
        <ExpandedMenuContainer onClick={(e) => e.stopPropagation()}>
			<ExpandedMenuFilter type="text" id="searchInput" placeholder="Filter..."></ExpandedMenuFilter>
			<ExpandedMenuWrapper>
			<ExpandedMenuPlatform>
				<ExpandedMenuHeader>
				<h1>Platform</h1>
				</ExpandedMenuHeader>
				<ExpandedMenuContent>
					<ExpandedMenuDiv>
					<ExpandedMenuIcon>
					<img src="/assets/icons/house.svg" alt=""/>
					</ExpandedMenuIcon>
					</ExpandedMenuDiv>
					<p>Home</p>
				</ExpandedMenuContent>
				<ExpandedMenuContent>
					<ExpandedMenuDiv>
					<ExpandedMenuIcon>
					<img src="/assets/icons/document.svg" alt=""/>
					</ExpandedMenuIcon>
					</ExpandedMenuDiv>
					<p>Publications</p>
				</ExpandedMenuContent>
				<ExpandedMenuContent>
					<ExpandedMenuDiv>
					<ExpandedMenuIcon>
					<img src="/assets/icons/people.svg" alt=""/>
					</ExpandedMenuIcon>
					</ExpandedMenuDiv>
					<p>People</p>
				</ExpandedMenuContent>
				<ExpandedMenuContent>
					<ExpandedMenuDiv>
					<ExpandedMenuIcon>
					<img src="/assets/icons/entities.svg" alt=""/>
					</ExpandedMenuIcon>
					</ExpandedMenuDiv>
					<p>Entities</p>
				</ExpandedMenuContent>
				<ExpandedMenuContent>
					<ExpandedMenuDiv>
					<ExpandedMenuIcon>
					<img src="/assets/icons/administration.svg" alt=""/>
					</ExpandedMenuIcon>
					</ExpandedMenuDiv>
					<p>Administration</p>
				</ExpandedMenuContent>
			</ExpandedMenuPlatform>
			<ExpandedMenuWorkspaces>
			<ExpandedMenuHeader>
			<h1>Workspaces </h1>
			</ExpandedMenuHeader>
			<ExpandedMenuContent>
					<ExpandedMenuDiv>
					<ExpandedMenuIcon>
					<img src="/assets/icons/contract.svg" alt=""/>
					</ExpandedMenuIcon>
					</ExpandedMenuDiv>
					<p>Client contract</p>
				</ExpandedMenuContent>
				<ExpandedMenuContent>
					<ExpandedMenuDiv>
					<ExpandedMenuIcon>
					<img src="/assets/icons/contract.svg" alt=""/>
					</ExpandedMenuIcon>
					</ExpandedMenuDiv>
					<p>Supplier contract</p>
				</ExpandedMenuContent>
				<ExpandedMenuContent>
					<ExpandedMenuDiv>
					<ExpandedMenuIcon>
					<img src="/assets/icons/entities.svg" alt=""/>
					</ExpandedMenuIcon>
					</ExpandedMenuDiv>
					<p>Corporate</p>
				</ExpandedMenuContent>
				<ExpandedMenuContent>
					<ExpandedMenuDiv>
					<ExpandedMenuIcon>
					<img src="/assets/icons/house.svg" alt=""/>
					</ExpandedMenuIcon>
					</ExpandedMenuDiv>
					<p>Group Norms</p>
				</ExpandedMenuContent>
				<ExpandedMenuContent>
					<ExpandedMenuDiv>
					<ExpandedMenuIcon>
					<img src="/assets/icons/contract.svg" alt=""/>
					</ExpandedMenuIcon>
					</ExpandedMenuDiv>
					<p>Real estate contracts</p>
				</ExpandedMenuContent>
			</ExpandedMenuWorkspaces>
			</ExpandedMenuWrapper>
			<ExpandedMenuAccount>
			<ExpandedMenuHeader>
			<h1>Account</h1>
			</ExpandedMenuHeader>
			<ExpandedMenuContent>
					<ExpandedMenuDiv>
					<ExpandedMenuIcon>
					<img src="/assets/icons/privacy.svg" alt=""/>
					</ExpandedMenuIcon>
					</ExpandedMenuDiv>
					<p>Privacy</p>
				</ExpandedMenuContent>
				<ExpandedMenuContent>
					<ExpandedMenuDiv>
					<ExpandedMenuIcon>
					<img src="/assets/icons/settings.svg" alt=""/>
					</ExpandedMenuIcon>
					</ExpandedMenuDiv>
					<p>Settings</p>
				</ExpandedMenuContent>
			</ExpandedMenuAccount>
			<LogoutDiv>
			<img src="/assets/icons/logout.png" alt=""/>
				<p>Logout</p>
			</LogoutDiv>

		</ExpandedMenuContainer>
    )
}


export default ExpandedMenu;

