"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Workspaces = void 0;
var styled_components_1 = require("styled-components");
var react_elastic_carousel_1 = require("react-elastic-carousel");
var Workspace_1 = require("../MainContent/Workspace");
var react_router_dom_1 = require("react-router-dom");
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  gap: 10px;\n  & > .headerStyle {\n    font-family: Helvetica;\n    font-weight: bold;\n    color: #4d4d4d;\n    font-size: 18px;\n    margin-left: 25px;\n    text-decoration: none;\n}\n"], ["\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  gap: 10px;\n  & > .headerStyle {\n    font-family: Helvetica;\n    font-weight: bold;\n    color: #4d4d4d;\n    font-size: 18px;\n    margin-left: 25px;\n    text-decoration: none;\n}\n"])));
exports.Workspaces = function () {
    return (React.createElement(Wrapper, null,
        React.createElement(react_router_dom_1.NavLink, { to: "/workspaces", className: "headerStyle" },
            React.createElement("h1", null, "Workspaces")),
        React.createElement(react_elastic_carousel_1["default"], { isRTL: false, itemsToShow: 4, showArrows: false, itemPosition: "START", pagination: true },
            React.createElement(Workspace_1["default"], null, "1"),
            React.createElement(Workspace_1["default"], null, "2"),
            React.createElement(Workspace_1["default"], null, "3"),
            React.createElement(Workspace_1["default"], null, "4"),
            React.createElement(Workspace_1["default"], null, "5"),
            React.createElement(Workspace_1["default"], null, "6"))));
};
exports["default"] = exports.Workspaces;
var templateObject_1;
