"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.WorkspacePage = void 0;
var styled_components_1 = require("styled-components");
var ResumeWorks_1 = require("../MainContent/ResumeWorks");
var MainWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    height: auto;\n    width: 100%;\n    margin: 1%;\n    margin-right: 3%;\n    & > div {\n    display: flex;\n    justify-content: center;\n}\n"], ["\n    display: flex;\n    flex-direction: column;\n    height: auto;\n    width: 100%;\n    margin: 1%;\n    margin-right: 3%;\n    & > div {\n    display: flex;\n    justify-content: center;\n}\n"])));
var InnerWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\ndisplay: flex;\nheight: 98%;\nwidth: 100%;\nflex-direction: column;\njustify-content: center;\n"], ["\ndisplay: flex;\nheight: 98%;\nwidth: 100%;\nflex-direction: column;\njustify-content: center;\n"])));
var TopDiv = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\nwidth: 100%;\nheight: 300px;\njustify-content: center;\nalign-items: center;\n"], ["\ndisplay: flex;\nflex-direction: column;\nwidth: 100%;\nheight: 300px;\njustify-content: center;\nalign-items: center;\n"])));
var TopUpperDiv = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\ndisplay: flex;\nwidth: 95%;\nheight: 200px;\nbackground-image: url(\"/assets/photos/meeting.jpg\");\nbackground-size: cover;\njustify-content: center;\n"], ["\ndisplay: flex;\nwidth: 95%;\nheight: 200px;\nbackground-image: url(\"/assets/photos/meeting.jpg\");\nbackground-size: cover;\njustify-content: center;\n"])));
var TopLowerDiv = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\ndisplay: flex;\nwidth: 95%;\nheight: 100px;\njustify-content: center;\n"], ["\ndisplay: flex;\nwidth: 95%;\nheight: 100px;\njustify-content: center;\n"])));
exports.WorkspacePage = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(MainWrapper, null,
            React.createElement(InnerWrapper, null,
                React.createElement(TopDiv, null,
                    React.createElement(TopUpperDiv, null),
                    React.createElement(TopLowerDiv, null))),
            React.createElement(ResumeWorks_1["default"], null))));
};
exports["default"] = exports.WorkspacePage;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
