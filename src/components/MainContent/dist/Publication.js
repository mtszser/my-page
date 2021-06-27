"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Publication = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var PublicationsContent = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\ntext-align: left;\nwidth: 100%;\nheight: auto;\nalign-items: center;\nbackground-color: white;\n"], ["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\ntext-align: left;\nwidth: 100%;\nheight: auto;\nalign-items: center;\nbackground-color: white;\n"])));
var ContentDIV = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\ndisplay: flex;\nwidth: 95%;\npadding: 5px;\nheight: auto;\n& > img {\n    width: 75px;\n    height: 75px;\n}\n& > p {\n    font-family: Helvetica;\n    font-weight: bold;\n    color: #4d4d4d;\n    font-size: 15px;\n    margin: 5px;\n    line-height: 1.3;\n}\n"], ["\ndisplay: flex;\nwidth: 95%;\npadding: 5px;\nheight: auto;\n& > img {\n    width: 75px;\n    height: 75px;\n}\n& > p {\n    font-family: Helvetica;\n    font-weight: bold;\n    color: #4d4d4d;\n    font-size: 15px;\n    margin: 5px;\n    line-height: 1.3;\n}\n"])));
var AuthorDataProfile = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\ndisplay: flex;\nwidth: 100%;\nheight: auto;\nflex-direction: column;\n& > h1 {\n    font-family: Helvetica;\n    font-weight: bold;\n    color: #4d4d4d;\n    font-size: 15px;\n    margin: 5px;\n    line-height: 1.2;\n}\n"], ["\ndisplay: flex;\nwidth: 100%;\nheight: auto;\nflex-direction: column;\n& > h1 {\n    font-family: Helvetica;\n    font-weight: bold;\n    color: #4d4d4d;\n    font-size: 15px;\n    margin: 5px;\n    line-height: 1.2;\n}\n"])));
var AuthorData = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\ndisplay: flex;\nalign-items: center;\njustify-content: left;\ngap: 10px;\nwidth: 100%;\nheight: auto;\nmargin-left: 5px;\n& > img {\n    height: 23px;\n    width: 23px;\n    border-radius: 30px;\n}\n& > p {\n    font-size: 12px;\n    font-weight: bold;\n    color: #cac7c7;\n    font-family: Helvetica;\n}\n& > span {\n    font-size: 12px;\n    font-weight: bold;\n    color: #4d4d4d;;\n}\n"], ["\ndisplay: flex;\nalign-items: center;\njustify-content: left;\ngap: 10px;\nwidth: 100%;\nheight: auto;\nmargin-left: 5px;\n& > img {\n    height: 23px;\n    width: 23px;\n    border-radius: 30px;\n}\n& > p {\n    font-size: 12px;\n    font-weight: bold;\n    color: #cac7c7;\n    font-family: Helvetica;\n}\n& > span {\n    font-size: 12px;\n    font-weight: bold;\n    color: #4d4d4d;;\n}\n"])));
exports.Publication = function () {
    var _a = react_1.useState(), apiPub = _a[0], setApi = _a[1];
    react_1.useEffect(function () {
        fetch("https://jsonplaceholder.typicode.com/posts/6")
            .then(function (res) { return res.json(); })
            .then(function (json) { return setApi(json); });
    }, []);
    var _b = react_1.useState(), apiPub1 = _b[0], setApi1 = _b[1];
    react_1.useEffect(function () {
        fetch("https://jsonplaceholder.typicode.com/posts/9")
            .then(function (res) { return res.json(); })
            .then(function (json) { return setApi1(json); });
    }, []);
    var _c = react_1.useState(), apiPub2 = _c[0], setApi2 = _c[1];
    react_1.useEffect(function () {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(function (res) { return res.json(); })
            .then(function (json) { return setApi2(json); });
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(PublicationsContent, null,
            React.createElement(ContentDIV, null,
                React.createElement("img", { src: '/assets/photos/guywriting.jpg', alt: "guy" }),
                React.createElement(AuthorDataProfile, null,
                    React.createElement("h1", null, apiPub === null || apiPub === void 0 ? void 0 : apiPub.body),
                    React.createElement(AuthorData, null,
                        React.createElement("p", null, "7 jan. 2020"),
                        React.createElement("img", { src: '/assets/photos/JohnDoe.jpg', alt: "guy" }),
                        React.createElement("span", null, "John Doe")))),
            React.createElement(ContentDIV, null,
                React.createElement("img", { src: '/assets/photos/guywriting.jpg', alt: "guy" }),
                React.createElement(AuthorDataProfile, null,
                    React.createElement("h1", null, apiPub1 === null || apiPub1 === void 0 ? void 0 : apiPub1.body),
                    React.createElement(AuthorData, null,
                        React.createElement("p", null, "7 jan. 2020"),
                        React.createElement("img", { src: '/assets/photos/JohnDoe.jpg', alt: "guy" }),
                        React.createElement("span", null, "John Doe")))),
            React.createElement(ContentDIV, null,
                React.createElement("img", { src: '/assets/photos/guywriting.jpg', alt: "guy" }),
                React.createElement(AuthorDataProfile, null,
                    React.createElement("h1", null, apiPub2 === null || apiPub2 === void 0 ? void 0 : apiPub2.body),
                    React.createElement(AuthorData, null,
                        React.createElement("p", null, "7 jan. 2020"),
                        React.createElement("img", { src: '/assets/photos/JohnDoe.jpg', alt: "guy" }),
                        React.createElement("span", null, "John Doe")))))));
};
exports["default"] = exports.Publication;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
