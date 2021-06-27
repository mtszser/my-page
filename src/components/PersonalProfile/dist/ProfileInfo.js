"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.ProfileInfo = void 0;
var styled_components_1 = require("styled-components");
var ProfileButtons = [
    {
        title: 'Message',
        icon: "./assets/icons/message.png",
        path: '/'
    },
    {
        title: 'Create a request',
        icon: "./assets/icons/request.png",
        path: '/'
    },
    {
        title: 'Add to a cluster',
        icon: "./assets/icons/cluster.png",
        path: '/'
    },
    {
        icon: "./assets/icons/close.png",
        path: '/'
    }
];
var NavDiv = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ndisplay: flex;\njustify-content: space-evenly;\nalign-items: center;\nwidth: 85%;\nheight: 30%;\n& div > {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n& div > a {\n    font-size: 15px;\n    text-align: center;\n    align-items: center;\n    text-decoration: none;\n    color: black;  \n}\n& > div > a > img {\n    width: 15px;\n    height: 15px;\n    margin-right: 10px;\n    margin-left: 10px;\n    align-items: center;\n    text-align: center;\n}\n"], ["\ndisplay: flex;\njustify-content: space-evenly;\nalign-items: center;\nwidth: 85%;\nheight: 30%;\n& div > {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n& div > a {\n    font-size: 15px;\n    text-align: center;\n    align-items: center;\n    text-decoration: none;\n    color: black;  \n}\n& > div > a > img {\n    width: 15px;\n    height: 15px;\n    margin-right: 10px;\n    margin-left: 10px;\n    align-items: center;\n    text-align: center;\n}\n"])));
var UserInfo = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\ndisplay: flex;\nwidth: 100%;\nheight: 80px;\nbackground-color: red;\n"], ["\ndisplay: flex;\nwidth: 100%;\nheight: 80px;\nbackground-color: red;\n"])));
var ProfileDiv = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nwidth: auto;\nheight: auto;\nalign-items: center;\ntext-align: center;\nmargin-left: 10px;\n& > img {\n    width: 40px;\n    height: 40px;\n    border-radius: 20px;\n}\n& > a {\n    text-decoration: none;\n    font-size: 13px;\n    color: black;\n}\n"], ["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nwidth: auto;\nheight: auto;\nalign-items: center;\ntext-align: center;\nmargin-left: 10px;\n& > img {\n    width: 40px;\n    height: 40px;\n    border-radius: 20px;\n}\n& > a {\n    text-decoration: none;\n    font-size: 13px;\n    color: black;\n}\n"])));
exports.ProfileInfo = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(NavDiv, null, ProfileButtons.map(function (item, index) {
            return React.createElement("div", { key: index },
                React.createElement("a", { href: item.path },
                    React.createElement("img", { src: item.icon, alt: "icons" }),
                    React.createElement("span", null, item.title)));
        })),
        React.createElement(UserInfo, null,
            React.createElement(ProfileDiv, null,
                React.createElement("img", { src: "./assets/profilowe.png", alt: "" }),
                React.createElement("a", { href: "/profile" }, "See Profile")),
            React.createElement("div", null))));
};
exports["default"] = exports.ProfileInfo;
var templateObject_1, templateObject_2, templateObject_3;
