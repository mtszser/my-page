"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var Publications_1 = require("../MainContent/Publications");
var Workspaces_1 = require("../MainContent/Workspaces");
var ResumeWorks_1 = require("../MainContent/ResumeWorks");
var styled_components_1 = require("styled-components");
var MainContentWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\nwidth: 100%;\nheight: auto;\n"], ["\ndisplay: flex;\nflex-direction: column;\nwidth: 100%;\nheight: auto;\n"])));
var MainContent = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(MainContentWrapper, null,
            React.createElement(Publications_1["default"], null),
            React.createElement(Workspaces_1["default"], null),
            React.createElement(ResumeWorks_1["default"], null))));
};
exports["default"] = MainContent;
var templateObject_1;
