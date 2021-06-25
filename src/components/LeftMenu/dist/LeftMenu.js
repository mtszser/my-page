"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.LeftMenu = void 0;
require("../LeftMenu/LeftMenu");
var styled_components_1 = require("styled-components");
var UserProfile_1 = require("../UserProfile/UserProfile");
var react_router_dom_1 = require("react-router-dom");
var LeftWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ndisplay: flex;\nwidth: 18%;\nflex-direction: column;\nalign-items: flex-start;\nheight: 900px;\n/* background-color: red; */\n@media (min-width: 790px) {\n  width: 24%;\n  height: auto \n}\n\n"], ["\ndisplay: flex;\nwidth: 18%;\nflex-direction: column;\nalign-items: flex-start;\nheight: 900px;\n/* background-color: red; */\n@media (min-width: 790px) {\n  width: 24%;\n  height: auto \n}\n\n"])));
var LeftMenuWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\nwidth: 85%;\nheight: 23%;\nmargin-top: 15px;\nmargin-left: 15px;\nmargin-right: 15px;\nbackground-color: white;\nbox-shadow: 0px 2px 3px #999;\nz-index: 1;\n@media (min-width: 790px) {\n  width: auto;\n  height: auto; \n  box-shadow: 0px 2px 3px #999;\n}\n"], ["\nwidth: 85%;\nheight: 23%;\nmargin-top: 15px;\nmargin-left: 15px;\nmargin-right: 15px;\nbackground-color: white;\nbox-shadow: 0px 2px 3px #999;\nz-index: 1;\n@media (min-width: 790px) {\n  width: auto;\n  height: auto; \n  box-shadow: 0px 2px 3px #999;\n}\n"])));
var LeftProfileDiv = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\nheight: auto;\nwidth: auto;\nmax-width: 320px;\nbackground-color: wheat;\n"], ["\ndisplay: flex;\nflex-direction: column;\nheight: auto;\nwidth: auto;\nmax-width: 320px;\nbackground-color: wheat;\n"])));
var LeftInnerWrapper = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\nwidth: auto;\nbackground-color: white;\n@media (min-width: 256px) {\n  display: flex;\n}\n"], ["\ndisplay: flex;\nflex-direction: column;\nwidth: auto;\nbackground-color: white;\n@media (min-width: 256px) {\n  display: flex;\n}\n"])));
var LeftLowerSection = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\nheight: auto;\nwidth: auto;\npadding: 10px;\nbackground-color: white;\njustify-content: center;\nalign-items: center;\nborder-top: solid;\nborder-color: #999;\nborder-width: 1px;\n"], ["\ndisplay: flex;\nflex-direction: column;\nheight: auto;\nwidth: auto;\npadding: 10px;\nbackground-color: white;\njustify-content: center;\nalign-items: center;\nborder-top: solid;\nborder-color: #999;\nborder-width: 1px;\n"])));
var LeftLowerInner = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\ndisplay: flex;\nwidth: 90%;\nalign-items: center;\n"], ["\ndisplay: flex;\nwidth: 90%;\nalign-items: center;\n"])));
var LeftLowerDiv = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\ndisplay: flex;\nalign-items: center;\nwidth: 100%;\nheight: auto;\njustify-content: space-between;\nmargin-top: 5px;\n& > img {\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 3px;\n  width: 15px;\n  margin-left: 5px;\n  \n}\n"], ["\ndisplay: flex;\nalign-items: center;\nwidth: 100%;\nheight: auto;\njustify-content: space-between;\nmargin-top: 5px;\n& > img {\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 3px;\n  width: 15px;\n  margin-left: 5px;\n  \n}\n"])));
var LeftLowDiv = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\ncursor: pointer;\n& > .pStyle {\n  text-align: center;\n  font-family: Helvetica;\n  font-weight: bold;\n  color: #4d4d4d;\n  font-size: 12px;\n  margin-left: 10px;\n  text-decoration: none;\n}\n& > img {\n  width: 22px;\n}\n@media (min-width: 1280px) {\n  & > p {\n  font-size: 14px;\n  }\n}\n"], ["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\ncursor: pointer;\n& > .pStyle {\n  text-align: center;\n  font-family: Helvetica;\n  font-weight: bold;\n  color: #4d4d4d;\n  font-size: 12px;\n  margin-left: 10px;\n  text-decoration: none;\n}\n& > img {\n  width: 22px;\n}\n@media (min-width: 1280px) {\n  & > p {\n  font-size: 14px;\n  }\n}\n"])));
var UnderLeftWrapper = styled_components_1["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\nmargin-top: 15px;\nmargin-left: 15px;\nwidth: 80%;\nheight: auto;\n"], ["\ndisplay: flex;\nflex-direction: column;\nmargin-top: 15px;\nmargin-left: 15px;\nwidth: 80%;\nheight: auto;\n"])));
var UnderLeftDiv = styled_components_1["default"].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\nheight: auto;\nwidth: 78%;\npadding: 10px;\nalign-items: center;\n"], ["\ndisplay: flex;\nflex-direction: column;\nheight: auto;\nwidth: 78%;\npadding: 10px;\nalign-items: center;\n"])));
var UnderLeftContent = styled_components_1["default"].div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\ndisplay: flex;\nalign-items: center;\nwidth: 100%;\nmargin-left: 15px;\npadding: 8px;\ncursor: pointer;\n& > img {\n  width: 11%;\n  height: auto;\n}\n& > p {\n  text-align: center;\n  font-family: Helvetica;\n  font-weight: bold;\n  color: #4d4d4d;\n  font-size: 15px;\n  margin-left: 15px;\n}\n"], ["\ndisplay: flex;\nalign-items: center;\nwidth: 100%;\nmargin-left: 15px;\npadding: 8px;\ncursor: pointer;\n& > img {\n  width: 11%;\n  height: auto;\n}\n& > p {\n  text-align: center;\n  font-family: Helvetica;\n  font-weight: bold;\n  color: #4d4d4d;\n  font-size: 15px;\n  margin-left: 15px;\n}\n"])));
exports.LeftMenu = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(LeftWrapper, null,
            React.createElement(LeftMenuWrapper, null,
                React.createElement(LeftProfileDiv, null,
                    React.createElement(LeftInnerWrapper, null,
                        React.createElement(UserProfile_1["default"], null),
                        React.createElement(LeftLowerSection, null,
                            React.createElement(LeftLowerInner, null,
                                React.createElement(LeftLowerDiv, null,
                                    React.createElement(LeftLowDiv, null,
                                        React.createElement("img", { src: "/assets/icons/network.png", alt: "" }),
                                        React.createElement(react_router_dom_1.NavLink, { to: "/routingsite", className: "pStyle" },
                                            React.createElement("p", null, "Your Network"))),
                                    React.createElement("img", { src: "/assets/icons/follower.png", alt: "" }))),
                            React.createElement(LeftLowerInner, null,
                                React.createElement(LeftLowerDiv, null,
                                    React.createElement(LeftLowDiv, null,
                                        React.createElement("img", { src: "/assets/icons/document.svg", alt: "" }),
                                        React.createElement(react_router_dom_1.NavLink, { to: "/routingsite", className: "pStyle" },
                                            React.createElement("p", null, "Your Publications"))),
                                    React.createElement("img", { src: "/assets/icons/plus.png", alt: "" }))))))),
            React.createElement(UnderLeftWrapper, null,
                React.createElement(UnderLeftDiv, null,
                    React.createElement(UnderLeftContent, null,
                        React.createElement("img", { src: "/assets/icons/document.svg", alt: "" }),
                        React.createElement("p", null, "Publications")),
                    React.createElement(UnderLeftContent, null,
                        React.createElement("img", { src: "/assets/icons/ecosystem.png", alt: "" }),
                        React.createElement("p", null, "Ecosystem")),
                    React.createElement(UnderLeftContent, null,
                        React.createElement("img", { src: "/assets/icons/entities2.png", alt: "" }),
                        React.createElement("p", null, "Entities")))))));
};
exports["default"] = exports.LeftMenu;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
