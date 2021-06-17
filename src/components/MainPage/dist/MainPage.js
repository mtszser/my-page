"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var LeftMenu_1 = require("../LeftMenu/LeftMenu");
var styled_components_1 = require("styled-components");
var TopBar_1 = require("../TopBar/TopBar");
var Colors_1 = require("../../StyledHelpers/Colors");
var MainContent_1 = require("../MainContent/MainContent");
var RoutingSite_1 = require("../RoutingSite/RoutingSite");
var Profile_1 = require("../PersonalProfile/Profile");
var react_router_dom_1 = require("react-router-dom");
var Main = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nbackground-color: ", ";\nwidth: auto;\nheight: auto;\n"], ["\nbackground-color: ", ";\nwidth: auto;\nheight: auto;\n"])), Colors_1.Colors.mainbackground);
var MainWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: row;\nwidth: 100%;\nheight: auto;\n"], ["\ndisplay: flex;\nflex-direction: row;\nwidth: 100%;\nheight: auto;\n"])));
var MainPage = function () {
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(Main, null,
            React.createElement(TopBar_1["default"], null),
            React.createElement(MainWrapper, null,
                React.createElement(LeftMenu_1["default"], null),
                React.createElement(react_router_dom_1.Switch, null,
                    React.createElement(react_router_dom_1.Route, { path: "/", exact: true, component: MainContent_1["default"] }),
                    React.createElement(react_router_dom_1.Route, { path: "/routingsite", component: RoutingSite_1["default"] }),
                    React.createElement(react_router_dom_1.Route, { path: "/profile", component: Profile_1["default"] }))))));
};
exports["default"] = MainPage;
var templateObject_1, templateObject_2;
