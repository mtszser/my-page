"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.RoutingSite = void 0;
var styled_components_1 = require("styled-components");
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ndisplay: flex;\nwidth: auto;\nheight: auto;\njustify-content: center;\nalign-items: center;\n& > div {\n   display: flex;\n   margin-top: 30px;\n   margin-left: 200px;\n   width: auto;\n   height: auto;\n   justify-content: center;\n   align-items: center;\n   & > img {\n       width: 100%;\n   }\n}\n"], ["\ndisplay: flex;\nwidth: auto;\nheight: auto;\njustify-content: center;\nalign-items: center;\n& > div {\n   display: flex;\n   margin-top: 30px;\n   margin-left: 200px;\n   width: auto;\n   height: auto;\n   justify-content: center;\n   align-items: center;\n   & > img {\n       width: 100%;\n   }\n}\n"])));
exports.RoutingSite = function () {
    return (React.createElement(Wrapper, null,
        React.createElement("div", null,
            React.createElement("img", { src: "/assets/photos/testgif.gif", alt: "" }))));
};
exports["default"] = exports.RoutingSite;
var templateObject_1;
