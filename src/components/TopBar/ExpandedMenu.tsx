import { FC, useState } from 'react'
import styled from 'styled-components'
import {Colors} from '../../StyledHelpers/Colors';
import { NavLink } from 'react-router-dom';



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
& > input {
	width: 90%;
	height: 20px;
	font-size: 13px;
}
@media (min-width: 768px) {
	width: 100%;
}

`;

const ExpandedMenuWrapper = styled.div`
display: flex;
flex-direction: column;
width: 95%;
height: auto;
background-color: ${Colors.niceblue};
overflow:scroll;
overflow-x:hidden;
`;

const PlatformDiv = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: auto;
& > span {
	font-size: 15px;
	font-style: bold;
	font-family: Helvetica;
	margin-top: 3px;
	margin-bottom: 3px;
}
& > ul {
	display: flex;
	justify-content: left;
	align-items: center;
	width: 90%;
	height: 27px;
	cursor: pointer;
	margin-top: 6px;
	margin-bottom: 6px;
	& > .navStyle {
	display: flex;
	flex-direction: row;
	width: 100%;
	height: auto;
	align-items: center;
	text-decoration: none;
	& > li {
	margin-left: 10px;
	color: ${Colors.MenuFontColor};
	font-size: 16px;
	font-family: sans-serif;
	}
	& > img {
		width: 25px;
	}
	}
}
& > ul:hover {
	background-color: ${Colors.nicehover};
	width: auto;
}
& > ul > li {
	margin-left: 10px;
	color: ${Colors.MenuFontColor};
	font-size: 16px;
	font-family: sans-serif;
	
}
& > ul > img {
	width: 25px;
}
`;



const WorkspaceDiv = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: auto;
& > span {
	font-size: 15px;
	font-style: bold;
	font-family: Helvetica;
	margin-top: 3px;
	margin-bottom: 3px;
}
& > ul {
	display: flex;
	justify-content: left;
	align-items: center;
	width: 90%;
	height: 27px;
	cursor: pointer;
	margin-top: 6px;
	margin-bottom: 6px;
	& > .navStyle {
	display: flex;
	flex-direction: row;
	width: 100%;
	height: auto;
	align-items: center;
	text-decoration: none;
	& > li {
	margin-left: 10px;
	color: ${Colors.MenuFontColor};
	font-size: 16px;
	font-family: sans-serif;
	}
	& > img {
		width: 25px;
	}
	}
}
& > ul:hover {
	background-color: ${Colors.nicehover};
	width: auto;
}
& > ul > li {
	margin-left: 10px;
	color: ${Colors.MenuFontColor};
	font-size: 16px;
	font-family: sans-serif;
}
& > ul > img {
	width: 25px;
}
`;


const AccountDiv = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: auto;
border-style: solid;
border-width: 1px 0;
border-color: #c9c9c9;
& > div {
	display: flex;
	align-items: center;
& > img {
	width: 32px;
}
& > span {
	margin-left: 10px;
	color: ${Colors.MenuFontColor};
	font-size: 16px;
	font-family: sans-serif;
}
}
& > span {
	font-size: 15px;
	font-style: bold;
	font-family: Helvetica;
	margin-top: 3px;
	margin-bottom: 8px;
}
& > ul {
	display: flex;
	justify-content: left;
	align-items: center;
	width: 90%;
	height: 27px;
	cursor: pointer;
	margin-top: 6px;
	margin-bottom: 6px;
	& > .navStyle {
	display: flex;
	flex-direction: row;
	width: 100%;
	height: auto;
	align-items: center;
	text-decoration: none;
	& > li {
	margin-left: 10px;
	color: ${Colors.MenuFontColor};
	font-size: 16px;
	font-family: sans-serif;
	}
	& > img {
		width: 25px;
	}
	}
}
& > ul:hover {
	background-color: ${Colors.nicehover};
	width: auto;
}
& > ul > li {
	margin-left: 10px;
	color: ${Colors.MenuFontColor};
	font-size: 16px;
	font-family: sans-serif;
}
& > ul > img {
	width: 25px;
}
& > :hover {
	background-color: ${Colors.nicehover};
	width: auto;
}
`;

const AccountSeeProfile = styled.div`
display: flex;
flex-direction: column;
& > img {
	width: auto;
}
& > span {
	margin-left: 10px;
	color: ${Colors.MenuFontColor};
	font-size: 16px;
	color: black;
	font-family: sans-serif;
}
& > a {
	margin-left: 10px;
	font-size: 14px;
	text-decoration: none;
	color: ${Colors.MenuFontColor};
	margin-top: 3px;
}
& > a:visited {
	margin-left: 10px;
	font-size: 14px;
	text-decoration: none;
	color: ${Colors.MenuFontColor};
	margin-top: 3px;
}
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
& > .logoutStyle {
	font-size: 16px;
	color: #5e5e5e;
	font-family: Helvetica;
	&:hover {
		font-style: bold;
	font-size: 19px;
	font-family: Helvetica;
	color: ${Colors.black};
}
}
&:hover {
	opacity:0.9;
}
& > span {
	font-size: 16px;
	color: #5e5e5e;
	font-family: Helvetica;
	
}
& > span:hover {
	font-style: bold;
	font-size: 19px;
	font-family: Helvetica;
	color: ${Colors.black};
}
& > img {
	margin-right: 15px;
}
`;

const PlatformInfo = [
{
	title: "Home",
	path: "/",
	icon: "/assets/icons/house.svg",
},
{
	title: "Publications",
	path: "/",
	icon: "/assets/icons/document.svg",
},
{
	title: "People",
	path: "/routingsite",
	icon: "/assets/icons/people.svg",
},
{
	title: "Entities",
	path: "/routingsite",
	icon: "/assets/icons/entities.svg",
},
{
	title: "Administration",
	path: "/",
	icon: "/assets/icons/administration.svg",
},
];

const WorkspacesInfo = [
	{
	  title: "Client contract",
	  path: "/routingsite",
	  icon: `./assets/icons/contract.svg`,
	},
	{
	  title: "Supplier contract",
	  path: "/",
	  icon: `./assets/icons/contract.svg`,
	},
	{
	  title: "Corporate",
	  path: "/routingsite",
	  icon: `./assets/icons/entities2.svg`,
	},
	{
	  title: "Group Norms",
	  path: "/",
	  icon: `./assets/icons/agenda.svg`,
	},
	{
	  title: "Real estate contracts",
	  path: "/routingsite",
	  icon: `./assets/icons/contract.svg`,
	},
  ];

  const AccountInfo = [
	{
	  title: "Privacy",
	  path: "/routingsite",
	  icon: `./assets/icons/privacy.svg`,
	},
	{
	  title: "Settings",
	  path: "/",
	  icon: `./assets/icons/settings.svg`,
	},
  ];

export const ExpandedMenu: FC = () => {

	const [search, setSearch] = useState("");

	return (
        <ExpandedMenuContainer onClick={(e) => e.stopPropagation()}>
			<input placeholder="Search.." type="text" onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
			<ExpandedMenuWrapper>
				<PlatformDiv>
					<span>Platform</span>
					{PlatformInfo.filter((elem) =>
					elem.title.toLowerCase().includes(search,)).map((elem, index) =>(
						<ul key={index}>
							<NavLink to={elem.path} className="navStyle">
							<img src={elem.icon} alt=""></img>
							<li>{elem.title}</li>
							</NavLink>
						</ul>
					))}
				</PlatformDiv>
				<WorkspaceDiv>
					<span>Workspaces</span>
					{WorkspacesInfo.filter((elem) =>
					elem.title.toLowerCase().includes(search)).map((elem, index) =>(
						<ul key={index}>
							<NavLink to={elem.path} className="navStyle">
							<img src={elem.icon} alt=""></img>
							<li>{elem.title}</li>
							</NavLink>
						</ul>
					))}
				</WorkspaceDiv>
				<AccountDiv>
				<span>Account</span>
				<div>
				<img src="./assets/profile.svg" alt="" />
				<AccountSeeProfile>
				<span>Jean-Marie Li</span>
				<NavLink to="/profile">See Profile</NavLink>
				</AccountSeeProfile>
				</div>
					{AccountInfo.filter((elem) =>
					elem.title.toLowerCase().includes(search)).map((elem, index) =>(
						<ul key={index}>
							<NavLink to={elem.path} className="navStyle">
							<img src={elem.icon} alt=""></img>
							<li>{elem.title}</li>
							</NavLink>
						</ul>
					))}
				</AccountDiv>
			</ExpandedMenuWrapper>
			<LogoutDiv>
			<img src="/assets/icons/logout.png" alt=""/>
			<NavLink to="/" className="logoutStyle">Logout</NavLink>
			</LogoutDiv>
		</ExpandedMenuContainer>
    )
}


export default ExpandedMenu;

