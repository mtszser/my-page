"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.UserProfile = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var LeftUpperSection = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\nheight: auto;\nwidth: auto;\njustify-content: center;\nalign-items: center;\nbackground-color: white;\nmargin: 12px;\n& > img {\n  width: 25%;\n  height: auto;\n  border-radius: 50%;\n}\n& > p {\n  text-align: center;\n  font-family: Helvetica;\n  color: #6d6d6d;\n  font-weight: bold;\n  font-size: 13px;\n}\n"], ["\ndisplay: flex;\nflex-direction: column;\nheight: auto;\nwidth: auto;\njustify-content: center;\nalign-items: center;\nbackground-color: white;\nmargin: 12px;\n& > img {\n  width: 25%;\n  height: auto;\n  border-radius: 50%;\n}\n& > p {\n  text-align: center;\n  font-family: Helvetica;\n  color: #6d6d6d;\n  font-weight: bold;\n  font-size: 13px;\n}\n"])));
var ProfileName = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\nwidth: auto;\nheight: auto;\n& > h1 {\n  margin: 10px;\n  text-align: center;\n  font-weight: bold;\n  font-size: 13px;\n  font-family: Helvetica;\n  color: #5353cc;\n}\n"], ["\nwidth: auto;\nheight: auto;\n& > h1 {\n  margin: 10px;\n  text-align: center;\n  font-weight: bold;\n  font-size: 13px;\n  font-family: Helvetica;\n  color: #5353cc;\n}\n"])));
exports.UserProfile = function () {
    var _a = react_1.useState(), apiProfile = _a[0], setApiProfile = _a[1];
    react_1.useEffect(function () {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(function (res) { return res.json(); })
            .then(function (json) { return setApiProfile(json); })
            .then(function (json) { return console.log(json); });
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(LeftUpperSection, null,
            React.createElement("img", { src: "/assets/Profilowe.png", alt: "" }),
            React.createElement(ProfileName, null,
                React.createElement("h1", null, apiProfile === null || apiProfile === void 0 ? void 0 : apiProfile.name)),
            React.createElement("p", null, apiProfile === null || apiProfile === void 0 ? void 0 : apiProfile.company.name))));
};
exports["default"] = exports.UserProfile;
var templateObject_1, templateObject_2;
