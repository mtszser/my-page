import { FC } from 'react'
import styled from 'styled-components'


const ExpandedMenuStyle = styled.ul`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
border-style: solid;
border-width: 0px 1px 1px 1px;
border-color: #999;
position: absolute;
background-color: white;
height: 300px;
width: 100%;
top: 36px;
`;


export const ExpandedMenu: FC = () => {
	return (
        <ExpandedMenuStyle>
			<li>Jan Paweł II</li>
			<li>Kradł Twoje</li>
			<li> Szlugi </li>
		</ExpandedMenuStyle>
    )
}


export default ExpandedMenu;

