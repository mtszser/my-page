"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Profile = void 0;
var styled_components_1 = require("styled-components");
var MainWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ndisplay: flex;\nwidth: 100%;\nheight: 800px;\nmargin-right: 20px;\nmargin-top: 20px;\nbackground-color: red;\n"], ["\ndisplay: flex;\nwidth: 100%;\nheight: 800px;\nmargin-right: 20px;\nmargin-top: 20px;\nbackground-color: red;\n"])));
var ProfileWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\ndisplay: flex;\njustify-content: center;\nwidth: 80%;\nmargin: auto;\nheight: auto;\nbackground-color: white;\n"], ["\ndisplay: flex;\njustify-content: center;\nwidth: 80%;\nmargin: auto;\nheight: auto;\nbackground-color: white;\n"])));
exports.Profile = function () {
    return (React.createElement(MainWrapper, null,
        React.createElement(ProfileWrapper, null,
            React.createElement("p", null, "hashdahdhahdsa"))));
};
exports["default"] = exports.Profile;
var templateObject_1, templateObject_2;
