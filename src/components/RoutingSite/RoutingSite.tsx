import { FC } from 'react';
import styled from 'styled-components'
import {Colors} from '../../StyledHelpers/Colors';



const Wrapper = styled.div`
display: flex;
width: auto;
height: auto;
justify-content: center;
align-items: center;
& > div {
   display: flex;
   margin-top: 30px;
   margin-left: 200px;
   width: auto;
   height: auto;
   justify-content: center;
   align-items: center;
   & > img {
       width: 100%;
   }
}
`;


export const RoutingSite: FC = () => {
    return (
        <Wrapper>
            <div>
            <img src="/assets/photos/testgif.gif" alt=""></img>
            </div>
        </Wrapper>
    )
}
export default RoutingSite;