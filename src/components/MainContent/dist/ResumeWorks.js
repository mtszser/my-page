"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.ResumeWork = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var react_dropdown_hook_1 = require("react-dropdown-hook");
var ResumeWorkMenu_1 = require("../MainContent/ResumeWorkMenu");
// import {Colors} from '../../StyledHelpers/Colors';
var ResumeWorkWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ndisplay: flex;\nwidth: auto;\nheight: auto;\npadding: 15px;\n"], ["\ndisplay: flex;\nwidth: auto;\nheight: auto;\npadding: 15px;\n"])));
var MainContentWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\nwidth: 93%;\nheight: auto;\ngap: 10px;\n"], ["\ndisplay: flex;\nflex-direction: column;\nwidth: 93%;\nheight: auto;\ngap: 10px;\n"])));
var ResumeWorkHeader = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\ndisplay: flex;\nwidth: 100%;\nheight: auto;\nalign-items: center;\n& > div {\n    display: flex;\n    width: 60%;\n    align-items: center;\n    & > h1 {\n    font-family: Helvetica;\n    font-weight: bold;\n    color: #4d4d4d;\n    font-size: 18px;\n    margin-left: 10px;\n}\n}\n"], ["\ndisplay: flex;\nwidth: 100%;\nheight: auto;\nalign-items: center;\n& > div {\n    display: flex;\n    width: 60%;\n    align-items: center;\n    & > h1 {\n    font-family: Helvetica;\n    font-weight: bold;\n    color: #4d4d4d;\n    font-size: 18px;\n    margin-left: 10px;\n}\n}\n"])));
var HeaderFilterDiv = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\ndisplay: flex;\nheight: auto;\nwidth: 50%;\nmargin-right: 15px;\njustify-content: flex-end;\n& > div {\n    display: flex;\n    align-items: center;\n    width: auto;\n    height: auto;\n    position: relative;\n    & > input {\n        border: 1px solid #dedede;\n        border-radius: 5px;\n        height: 28px;\n        width: 100%;\n        align-items: center;\n}     \n}\n"], ["\ndisplay: flex;\nheight: auto;\nwidth: 50%;\nmargin-right: 15px;\njustify-content: flex-end;\n& > div {\n    display: flex;\n    align-items: center;\n    width: auto;\n    height: auto;\n    position: relative;\n    & > input {\n        border: 1px solid #dedede;\n        border-radius: 5px;\n        height: 28px;\n        width: 100%;\n        align-items: center;\n}     \n}\n"])));
var FilterIcon = styled_components_1["default"].img(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\nposition: absolute;\nright: 10px;\ntop: 7px;\n"], ["\nposition: absolute;\nright: 10px;\ntop: 7px;\n"])));
var InnerFilterDiv = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\ndisplay: flex;\nheight: auto;\njustify-content: flex-end;\nmargin-right: 15px;\n"], ["\ndisplay: flex;\nheight: auto;\njustify-content: flex-end;\nmargin-right: 15px;\n"])));
var FollowedContainer = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\ndisplay: flex; \nheight: 32px;\ncursor: pointer;\nwidth: auto;\njustify-content: center;\n& > div {\n    display: flex;\n    height: auto;\n    align-items: center;\n    width: auto;\n    justify-content: center;\n    & > img {\n    margin-left: 15px;\n    width: 23px;\n    }\n    & > span {\n    margin-left: 10px;\n    font-size: 16px;\n    }\n}\n"], ["\ndisplay: flex; \nheight: 32px;\ncursor: pointer;\nwidth: auto;\njustify-content: center;\n& > div {\n    display: flex;\n    height: auto;\n    align-items: center;\n    width: auto;\n    justify-content: center;\n    & > img {\n    margin-left: 15px;\n    width: 23px;\n    }\n    & > span {\n    margin-left: 10px;\n    font-size: 16px;\n    }\n}\n"])));
var FollowedArrow = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\ndisplay: flex;\nwidth: auto;\nmargin-left: 10px;\njustify-content: center;\n"], ["\ndisplay: flex;\nwidth: auto;\nmargin-left: 10px;\njustify-content: center;\n"])));
var ResumeWorkDiv = styled_components_1["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\nwidth: auto;\nheight: auto;\nbackground-color: white;\nbox-shadow: 0px 2px 3px #999;\n"], ["\ndisplay: flex;\nflex-direction: column;\nwidth: auto;\nheight: auto;\nbackground-color: white;\nbox-shadow: 0px 2px 3px #999;\n"])));
var WorkHeader = styled_components_1["default"].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\nwidth: 50%;\nheight: auto;\n& > h1 {\n    font-family: Helvetica;\n    font-weight: bold;\n    color: #5353cc;\n    font-size: 15px;\n    padding: 8px;\n    margin-left: 7px;\n}\n"], ["\nwidth: 50%;\nheight: auto;\n& > h1 {\n    font-family: Helvetica;\n    font-weight: bold;\n    color: #5353cc;\n    font-size: 15px;\n    padding: 8px;\n    margin-left: 7px;\n}\n"])));
var WorkContent = styled_components_1["default"].div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\nheight: auto;\n& > p {\n    font-family: Helvetica;\n    color: #4d4d4d;\n    font-size: 13px;\n    margin-left: 15px;\n    line-height: 1.5;\n}\n"], ["\nheight: auto;\n& > p {\n    font-family: Helvetica;\n    color: #4d4d4d;\n    font-size: 13px;\n    margin-left: 15px;\n    line-height: 1.5;\n}\n"])));
var WorkAuthors = styled_components_1["default"].div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: row;\nwidth: 60%;\nheight: auto;\nmargin-left: 15px;\npadding: 5px;\nalign-items: center;\n& > #dot {\n    width: 3px;\n    margin-left: 15px;\n    margin-right: 15px;\n}\n& > img {\n    width: 15px;\n    \n}\n& > p {\n    font-size: 11px;\n    font-family: Helvetica;\n    color: #4d4d4d;\n    margin-left: 10px;\n}\n& > span {\n    font-size: 11px;\n    font-family: Helvetica;\n    color: #7a7a7a;\n}\n"], ["\ndisplay: flex;\nflex-direction: row;\nwidth: 60%;\nheight: auto;\nmargin-left: 15px;\npadding: 5px;\nalign-items: center;\n& > #dot {\n    width: 3px;\n    margin-left: 15px;\n    margin-right: 15px;\n}\n& > img {\n    width: 15px;\n    \n}\n& > p {\n    font-size: 11px;\n    font-family: Helvetica;\n    color: #4d4d4d;\n    margin-left: 10px;\n}\n& > span {\n    font-size: 11px;\n    font-family: Helvetica;\n    color: #7a7a7a;\n}\n"])));
exports.ResumeWork = function () {
    var _a = react_dropdown_hook_1["default"](), wrapperRef = _a[0], dropdownOpen = _a[1], toggleDropdown = _a[2];
    var _b = react_1.useState(), apiPost = _b[0], setApiPost = _b[1];
    react_1.useEffect(function () {
        fetch("https://jsonplaceholder.typicode.com/comments/2")
            .then(function (res) { return res.json(); })
            .then(function (json) { return setApiPost(json); })
            .then(function (json) { return console.log(json); });
    }, []);
    var _c = react_1.useState(), apiUser = _c[0], setApiUser = _c[1];
    react_1.useEffect(function () {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(function (res) { return res.json(); })
            .then(function (json) { return setApiUser(json); })
            .then(function (json) { return console.log(json); });
    }, []);
    return (React.createElement(ResumeWorkWrapper, null,
        React.createElement(MainContentWrapper, null,
            React.createElement(ResumeWorkHeader, null,
                React.createElement("div", null,
                    React.createElement("h1", null, "Resume your work")),
                React.createElement(InnerFilterDiv, null,
                    React.createElement(HeaderFilterDiv, null,
                        React.createElement("div", null,
                            React.createElement("input", { placeholder: "Filter by title..", type: "text" }),
                            React.createElement(FilterIcon, { src: "/assets/icons/search.svg", alt: "img" }))),
                    React.createElement(FollowedContainer, { ref: wrapperRef, onClick: toggleDropdown },
                        React.createElement("div", null,
                            React.createElement("img", { src: "/assets/icons/signal.svg", alt: "" }),
                            React.createElement("span", null, "Followed"),
                            React.createElement(FollowedArrow, null,
                                React.createElement("img", { src: "/assets/icons/arrow-down.svg", alt: "" }))),
                        dropdownOpen &&
                            React.createElement(React.Fragment, null,
                                React.createElement(ResumeWorkMenu_1["default"], null))))),
            React.createElement(ResumeWorkDiv, null,
                React.createElement(WorkHeader, null,
                    React.createElement("h1", null, apiPost === null || apiPost === void 0 ? void 0 : apiPost.name)),
                React.createElement(WorkContent, null,
                    React.createElement("p", null, apiPost === null || apiPost === void 0 ? void 0 : apiPost.body)),
                React.createElement(WorkAuthors, null,
                    React.createElement("img", { src: '/assets/icons/podcast.svg', alt: "podcast" }),
                    React.createElement("p", null, "Subsid. corp."),
                    React.createElement("img", { id: "dot", src: '/assets/icons/dot.svg', alt: "dot" }),
                    React.createElement("img", { src: '/assets/icons/entities.svg', alt: "podcast" }),
                    React.createElement("p", null, "Corporate"),
                    React.createElement("img", { id: "dot", src: '/assets/icons/dot.svg', alt: "dot" }),
                    React.createElement("span", null,
                        "Updated 3 days ago by ", apiUser === null || apiUser === void 0 ? void 0 :
                        apiUser.name))),
            React.createElement(ResumeWorkDiv, null,
                React.createElement(WorkHeader, null,
                    React.createElement("h1", null, apiPost === null || apiPost === void 0 ? void 0 : apiPost.name)),
                React.createElement(WorkContent, null,
                    React.createElement("p", null, apiPost === null || apiPost === void 0 ? void 0 : apiPost.body)),
                React.createElement(WorkAuthors, null,
                    React.createElement("img", { src: '/assets/icons/podcast.svg', alt: "podcast" }),
                    React.createElement("p", null, "Subsid. corp."),
                    React.createElement("img", { id: "dot", src: '/assets/icons/dot.svg', alt: "dot" }),
                    React.createElement("img", { src: '/assets/icons/entities.svg', alt: "podcast" }),
                    React.createElement("p", null, "Corporate"),
                    React.createElement("img", { id: "dot", src: '/assets/icons/dot.svg', alt: "dot" }),
                    React.createElement("span", null,
                        "Updated 3 days ago by ", apiUser === null || apiUser === void 0 ? void 0 :
                        apiUser.name))),
            React.createElement(ResumeWorkDiv, null,
                React.createElement(WorkHeader, null,
                    React.createElement("h1", null, "World Company SAS")),
                React.createElement(WorkContent, null,
                    React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut aliquet ipsum, eget rhoncus ex. Ut vel tellus feugiat, consequat tortor in, posuere elit. Suspendisse non placerat orci. Donec consectetur feugiat odio, at tristique purus lobortis vitae.")),
                React.createElement(WorkAuthors, null,
                    React.createElement("img", { src: '/assets/icons/podcast.svg', alt: "podcast" }),
                    React.createElement("p", null, "Subsid. corp."),
                    React.createElement("img", { id: "dot", src: '/assets/icons/dot.svg', alt: "dot" }),
                    React.createElement("img", { src: '/assets/icons/entities.svg', alt: "podcast" }),
                    React.createElement("p", null, "Corporate"),
                    React.createElement("img", { id: "dot", src: '/assets/icons/dot.svg', alt: "dot" }),
                    React.createElement("span", null, "Updated 3 days ago by John Doe"))),
            React.createElement(ResumeWorkDiv, null,
                React.createElement(WorkHeader, null,
                    React.createElement("h1", null, "World Company SAS")),
                React.createElement(WorkContent, null,
                    React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut aliquet ipsum, eget rhoncus ex. Ut vel tellus feugiat, consequat tortor in, posuere elit. Suspendisse non placerat orci. Donec consectetur feugiat odio, at tristique purus lobortis vitae.")),
                React.createElement(WorkAuthors, null,
                    React.createElement("img", { src: '/assets/icons/podcast.svg', alt: "podcast" }),
                    React.createElement("p", null, "Subsid. corp."),
                    React.createElement("img", { id: "dot", src: '/assets/icons/dot.svg', alt: "dot" }),
                    React.createElement("img", { src: '/assets/icons/entities.svg', alt: "podcast" }),
                    React.createElement("p", null, "Corporate"),
                    React.createElement("img", { id: "dot", src: '/assets/icons/dot.svg', alt: "dot" }),
                    React.createElement("span", null, "Updated 3 days ago by John Doe"))),
            React.createElement(ResumeWorkDiv, null,
                React.createElement(WorkHeader, null,
                    React.createElement("h1", null, "World Company SAS")),
                React.createElement(WorkContent, null,
                    React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut aliquet ipsum, eget rhoncus ex. Ut vel tellus feugiat, consequat tortor in, posuere elit. Suspendisse non placerat orci. Donec consectetur feugiat odio, at tristique purus lobortis vitae.")),
                React.createElement(WorkAuthors, null,
                    React.createElement("img", { src: '/assets/icons/podcast.svg', alt: "podcast" }),
                    React.createElement("p", null, "Subsid. corp."),
                    React.createElement("img", { id: "dot", src: '/assets/icons/dot.svg', alt: "dot" }),
                    React.createElement("img", { src: '/assets/icons/entities.svg', alt: "podcast" }),
                    React.createElement("p", null, "Corporate"),
                    React.createElement("img", { id: "dot", src: '/assets/icons/dot.svg', alt: "dot" }),
                    React.createElement("span", null, "Updated 3 days ago by John Doe"))))));
};
exports["default"] = exports.ResumeWork;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
