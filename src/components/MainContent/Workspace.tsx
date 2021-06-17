import { FC } from "react";
import styled from "styled-components";
import {Colors} from '../../StyledHelpers/Colors';



// const WorkspaceInfo = [
//   {
//     title: "Client Contract",
//     img: "./assets/icons/contract.svg",
//     userimg: "",
//     users: "",
//     lastupdate: "Last update 2 days ago"
//   },
//   {
//     title: "Supplier Contract",
//     img: "./assets/icons/contract.svg",
//     userimg: "",
//     users: "",
//     lastupdate: "Last update 2 days ago"
//   },
//   {
//     title: "Corporate",
//     img: "./assets/icons/entities2.svg",
//     userimg: "",
//     users: "",
//     lastupdate: "Last update 2 days ago"
//   },
//   {
//     title: "Group Norms",
//     img: "./assets/icons/agenda.svg",
//     userimg: "",
//     users: "",
//     lastupdate: "Last update 2 days ago"
//   },
//   {
//     title: "Real Estate Contracts",
//     img: "./assets/icons/contract.svg",
//     userimg: "",
//     users: "",
//     lastupdate: "Last update 2 days ago"
//   },
//   ];


const WorkspaceWrapper = styled.div`
display: flex;
flex-direction: column;
width: auto;
height: auto;
padding: 15px;
& > h1 {
    font-family: Helvetica;
    font-weight: bold;
    color: #4d4d4d;
    font-size: 18px;
    margin-left: 10px;
}
`;

const WorkspaceInnerWrapper = styled.div`
display: flex;
height: 200px;
width: 260px;
background-color: ${Colors.niceblue};
box-shadow: 0px 2px 3px #999;
margin-bottom: 20px;
`;


const WorkspaceImg = styled.div`
background-image: url("./assets/photos/contractman.jpg");
background-size: auto;
display: flex;
background-repeat: no-repeat;
width: 100%;
height: 50%;
`;



// const Card = styled.div`
// position: relative;
//   height: 250px;
//   width: 350px;
//   border-radius: 1px;
//   border: solid;
//   border-color: ${Colors.black};
//   background-color: ${Colors.niceblue};
//   overflow: hidden;
// `;

// const CardImg = styled.div`
//   background-image: url("./assets/images/img1.jpg");
//   background-repeat: no-repeat;
//   background-position: 50% 50%;
//   background-size: cover;
//   height: 45%;
// `;

// const Content = styled.div`
// height: 55%;
//   padding: 10px;
//   div {
//     height: 60%;
//     p { 
//       margin-left: 40%;
//     }
//   }
//   span { 
//     display: flex;
//     gap: 15px;
//   }
// `;

// const CardInnerImg = styled.div`
//   position: absolute;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   left: 10px;
//   top: 75px;
//   height: 100px;
//   width: 100px;
//   border-radius: 2px;
//   background-color: #fff;
//   box-shadow: black;
//     img { 
//       width: 50px;
//     }
// `;

export const WorkspaceCard: FC = () => {
  return (
    <>
    <WorkspaceWrapper>
    <WorkspaceInnerWrapper>
      <WorkspaceImg></WorkspaceImg>
    </WorkspaceInnerWrapper>
    </WorkspaceWrapper> 
    </>
  );
};
export default WorkspaceCard;