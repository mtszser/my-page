"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.TopBar = void 0;
var styled_components_1 = require("styled-components");
var Components_1 = require("../../StyledHelpers/Components");
var Colors_1 = require("../../StyledHelpers/Colors");
var ExpandedMenu_1 = require("../TopBar/ExpandedMenu");
var react_dropdown_hook_1 = require("react-dropdown-hook");
var TopBarWrapper = styled_components_1["default"](Components_1.Wrapper)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n display: flex;\n width: auto;\n height: 10%;\n background-color: ", ";\n box-shadow: 0px 1px 10px #999;\n z-index: 999;\n"], ["\n display: flex;\n width: auto;\n height: 10%;\n background-color: ", ";\n box-shadow: 0px 1px 10px #999;\n z-index: 999;\n"])), Colors_1.Colors.niceblue);
var WrapperInner = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: none;\n  @media (min-width: 768px) {\n    display: flex;\n    width: 100%;\n    height: auto;\n  }\n"], ["\n  display: none;\n  @media (min-width: 768px) {\n    display: flex;\n    width: 100%;\n    height: auto;\n  }\n"])));
var LeftTopSection = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 21%;\n  margin-right: 4%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n"], ["\n  width: 21%;\n  margin-right: 4%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n"])));
var CenterTopSection = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  width: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var RightTopSection = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 24%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n"], ["\n  width: 24%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n"])));
var MainLogo = styled_components_1["default"].img(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  height: 35px;\n  margin-left: 10px;\n  margin-right: 30px;\n"], ["\n  height: 35px;\n  margin-left: 10px;\n  margin-right: 30px;\n"])));
var HomeContainer = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  position: relative;\n  width: 100%;\n  cursor: pointer;\n  & > img {\n    margin-right: 10px;\n    margin-left: 5px;\n  }\n  &:hover {\n  background-color: ", ";\n  border-radius: 40px;\n  }\n  & > p {\n    font-family: Helvetica;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  position: relative;\n  width: 100%;\n  cursor: pointer;\n  & > img {\n    margin-right: 10px;\n    margin-left: 5px;\n  }\n  &:hover {\n  background-color: ", ";\n  border-radius: 40px;\n  }\n  & > p {\n    font-family: Helvetica;\n  }\n"])), Colors_1.Colors.nicebutton);
var HomeInner = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n"], ["\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n"])));
var SearchContainer = styled_components_1["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: flex;\n  position: relative;\n  align-items: center;\n  width: 100%;\n"], ["\n  display: flex;\n  position: relative;\n  align-items: center;\n  width: 100%;\n"])));
var SearchComponent = styled_components_1["default"].input(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  text-align: center;\n  padding: 5px;\n  border: 1px solid #dedede;\n  border-radius: 5px;\n  width: 100%;\n"], ["\n  text-align: center;\n  padding: 5px;\n  border: 1px solid #dedede;\n  border-radius: 5px;\n  width: 100%;\n"])));
var SearchIcone = styled_components_1["default"].img(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  position: absolute;\n  right: 5px;\n"], ["\n  position: absolute;\n  right: 5px;\n"])));
var RightIconsContainer = styled_components_1["default"].div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  display: flex;\n  & > img {\n    cursor: pointer;\n    padding: 8px;\n  }\n  & >img:hover{\n    background-color: ", ";\n    border-radius: 70px;\n  }\n"], ["\n  display: flex;\n  & > img {\n    cursor: pointer;\n    padding: 8px;\n  }\n  & >img:hover{\n    background-color: ", ";\n    border-radius: 70px;\n  }\n"])), Colors_1.Colors.nicebuttonhover);
var IconsBackground = styled_components_1["default"].div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\nposition: relative;\nbackground-color: ", ";\nwidth: 40px;\nheight: 40px;\nalign-items: center;\nborder-radius: 70px;\nmargin-left: 10px;\ncursor: pointer;\n  & > img {\n    padding: 9px;\n  }\n  & > img:hover {\n  background-color: ", ";\n  border-radius: 70px;\n  \n  }\n  &::after {\n    display: flex;\n    justify-content: center;\n    background-color: #86c1f1;\n    align-items: center;\n    position: absolute;\n    content: \"69\";\n    font-size: 12px;\n    height: 15px;\n    width: 25px;\n    top: -2px;\n    left: 24px;\n    border-radius: 69px;\n  }\n"], ["\nposition: relative;\nbackground-color: ", ";\nwidth: 40px;\nheight: 40px;\nalign-items: center;\nborder-radius: 70px;\nmargin-left: 10px;\ncursor: pointer;\n  & > img {\n    padding: 9px;\n  }\n  & > img:hover {\n  background-color: ", ";\n  border-radius: 70px;\n  \n  }\n  &::after {\n    display: flex;\n    justify-content: center;\n    background-color: #86c1f1;\n    align-items: center;\n    position: absolute;\n    content: \"69\";\n    font-size: 12px;\n    height: 15px;\n    width: 25px;\n    top: -2px;\n    left: 24px;\n    border-radius: 69px;\n  }\n"])), Colors_1.Colors.nicebutton, Colors_1.Colors.nicebuttonhover);
exports.TopBar = function () {
    var _a = react_dropdown_hook_1["default"](), wrapperRef = _a[0], dropdownOpen = _a[1], toggleDropdown = _a[2];
    return (React.createElement(TopBarWrapper, null,
        React.createElement(WrapperInner, null,
            React.createElement(LeftTopSection, null,
                React.createElement(MainLogo, { src: "/assets/logo.png", alt: "img" }),
                React.createElement(HomeContainer, { ref: wrapperRef, onClick: toggleDropdown },
                    React.createElement("img", { src: "/assets/icons/house.svg", alt: "img" }),
                    React.createElement("p", null, "Home"),
                    React.createElement(HomeInner, null,
                        React.createElement("img", { src: "/assets/icons/arrow-down.svg", alt: "" })),
                    dropdownOpen &&
                        React.createElement(React.Fragment, null,
                            React.createElement(ExpandedMenu_1["default"], null)))),
            React.createElement(CenterTopSection, null,
                React.createElement(SearchContainer, null,
                    React.createElement(SearchComponent, { placeholder: "Search Legalcluster..." }),
                    React.createElement(SearchIcone, { src: "/assets/icons/search.svg", alt: "img" }))),
            React.createElement(RightTopSection, null,
                React.createElement(RightIconsContainer, null,
                    React.createElement("img", { src: "/assets/icons/house2.svg", alt: "" }),
                    React.createElement(IconsBackground, null,
                        React.createElement("img", { src: "/assets/icons/comments.svg", alt: "" })),
                    React.createElement(IconsBackground, null,
                        React.createElement("img", { src: "/assets/icons/bell.svg", alt: "" })))))));
};
exports["default"] = exports.TopBar;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
