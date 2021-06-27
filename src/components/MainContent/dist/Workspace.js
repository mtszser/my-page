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
var WorkspaceWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\nwidth: auto;\nheight: auto;\npadding: 15px;\n"], ["\ndisplay: flex;\nflex-direction: column;\nwidth: auto;\nheight: auto;\npadding: 15px;\n"])));
var WorkspaceInnerWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\ndisplay: flex;\nheight: 200px;\nwidth: 260px;\nflex-direction: column;\nbackground-color: ", ";\nbox-shadow: 0px 2px 3px #999;\n"], ["\ndisplay: flex;\nheight: 200px;\nwidth: 260px;\nflex-direction: column;\nbackground-color: ", ";\nbox-shadow: 0px 2px 3px #999;\n"])), Colors_1.Colors.niceblue);
var WorkspaceImg = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\nbackground-image: url(\"./assets/photos/contractman.jpg\");\nbackground-size: auto;\ndisplay: flex;\nbackground-repeat: no-repeat;\nwidth: 100%;\nheight: 50%;\n"], ["\nbackground-image: url(\"./assets/photos/contractman.jpg\");\nbackground-size: auto;\ndisplay: flex;\nbackground-repeat: no-repeat;\nwidth: 100%;\nheight: 50%;\n"])));
var WorkspaceDiv = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\ndisplay: flex;\nwidth: 100%;\nheight: 50%;\njustify-content: center;\ntext-align: center;\n& > div {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  height: auto;\n}\n"], ["\ndisplay: flex;\nwidth: 100%;\nheight: 50%;\njustify-content: center;\ntext-align: center;\n& > div {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  height: auto;\n}\n"])));
var WorskspaceDivContent = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nwidth: 100%;\nheight: auto;\n"], ["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nwidth: 100%;\nheight: auto;\n"])));
var ContentHeader = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\ndisplay: flex;\nheight: auto;\nwidth: 100%;\njustify-content: center;\n& > h1 {\n  font-size: 18px;\n  margin-left: 50px;\n}\n"], ["\ndisplay: flex;\nheight: auto;\nwidth: 100%;\njustify-content: center;\n& > h1 {\n  font-size: 18px;\n  margin-left: 50px;\n}\n"])));
var ContentText = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\ndisplay: flex;\nposition: relative;\nheight: auto;\nwidth: auto;\nflex-direction: column;\n& > p {\n  text-align: left;\n  padding: 10px;\n}\n& > div {\n  height: auto;\n  width: auto;\n  & > p {\n    text-align: left;\n    margin-left: 10px;\n    font-size: 12px;\n    color: grey;\n\n  }\n}\n"], ["\ndisplay: flex;\nposition: relative;\nheight: auto;\nwidth: auto;\nflex-direction: column;\n& > p {\n  text-align: left;\n  padding: 10px;\n}\n& > div {\n  height: auto;\n  width: auto;\n  & > p {\n    text-align: left;\n    margin-left: 10px;\n    font-size: 12px;\n    color: grey;\n\n  }\n}\n"])));
var CardInnerImg = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  left: 25px;\n  top: 75px;\n  height: 80px;\n  width: 80px;\n  border-radius: 5px;\n  background-color: #fff;\n  background-image: url(\"./assets/profile.png\");\n  background-repeat: no-repeat;\n  img {\n    width: 70px;\n  }\n"], ["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  left: 25px;\n  top: 75px;\n  height: 80px;\n  width: 80px;\n  border-radius: 5px;\n  background-color: #fff;\n  background-image: url(\"./assets/profile.png\");\n  background-repeat: no-repeat;\n  img {\n    width: 70px;\n  }\n"])));
exports.WorkspaceCard = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(WorkspaceWrapper, null,
            React.createElement(WorkspaceInnerWrapper, null,
                React.createElement(WorkspaceImg, null),
                React.createElement(WorkspaceDiv, null,
                    React.createElement(WorskspaceDivContent, null,
                        React.createElement(ContentHeader, null,
                            React.createElement(CardInnerImg, null,
                                React.createElement("img", { src: '/assets/icons/contract.svg', alt: "guy" })),
                            React.createElement("h1", null, " Client Contract")),
                        React.createElement(ContentText, null,
                            React.createElement("p", null, "Contract * 150 users"),
                            React.createElement("div", null,
                                React.createElement("p", null, "Last update 2 days ago.")))))))));
};
exports["default"] = exports.WorkspaceCard;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
