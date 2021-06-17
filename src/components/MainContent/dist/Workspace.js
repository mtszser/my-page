"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.WorkspaceCard = void 0;
var styled_components_1 = require("styled-components");
var Colors_1 = require("../../StyledHelpers/Colors");
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
var WorkspaceWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\nwidth: auto;\nheight: auto;\npadding: 15px;\n& > h1 {\n    font-family: Helvetica;\n    font-weight: bold;\n    color: #4d4d4d;\n    font-size: 18px;\n    margin-left: 10px;\n}\n"], ["\ndisplay: flex;\nflex-direction: column;\nwidth: auto;\nheight: auto;\npadding: 15px;\n& > h1 {\n    font-family: Helvetica;\n    font-weight: bold;\n    color: #4d4d4d;\n    font-size: 18px;\n    margin-left: 10px;\n}\n"])));
var WorkspaceInnerWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\ndisplay: flex;\nheight: 200px;\nwidth: 260px;\nbackground-color: ", ";\nbox-shadow: 0px 2px 3px #999;\nmargin-bottom: 20px;\n"], ["\ndisplay: flex;\nheight: 200px;\nwidth: 260px;\nbackground-color: ", ";\nbox-shadow: 0px 2px 3px #999;\nmargin-bottom: 20px;\n"])), Colors_1.Colors.niceblue);
var WorkspaceImg = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\nbackground-image: url(\"./assets/photos/contractman.jpg\");\nbackground-size: auto;\ndisplay: flex;\nbackground-repeat: no-repeat;\nwidth: 100%;\nheight: 50%;\n"], ["\nbackground-image: url(\"./assets/photos/contractman.jpg\");\nbackground-size: auto;\ndisplay: flex;\nbackground-repeat: no-repeat;\nwidth: 100%;\nheight: 50%;\n"])));
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
exports.WorkspaceCard = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(WorkspaceWrapper, null,
            React.createElement(WorkspaceInnerWrapper, null,
                React.createElement(WorkspaceImg, null)))));
};
exports["default"] = exports.WorkspaceCard;
var templateObject_1, templateObject_2, templateObject_3;
