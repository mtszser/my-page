"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.ProfileInfo = void 0;
var react_1 = require("react");
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
var NavDiv = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\nwidth: 100%;\nheight: 30%;\n& div > {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n& div > a {\n    font-size: 15px;\n    text-align: center;\n    align-items: center;\n    text-decoration: none;\n    color: black;  \n}\n& > div > a > img {\n    width: 15px;\n    height: 15px;\n    margin-right: 10px;\n    margin-left: 10px;\n    align-items: center;\n    text-align: center;\n}\n"], ["\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\nwidth: 100%;\nheight: 30%;\n& div > {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n& div > a {\n    font-size: 15px;\n    text-align: center;\n    align-items: center;\n    text-decoration: none;\n    color: black;  \n}\n& > div > a > img {\n    width: 15px;\n    height: 15px;\n    margin-right: 10px;\n    margin-left: 10px;\n    align-items: center;\n    text-align: center;\n}\n"])));
var UserInfo = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\ndisplay: flex;\nwidth: 100%;\nheight: auto;\n"], ["\ndisplay: flex;\nwidth: 100%;\nheight: auto;\n"])));
var ProfileDiv = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nwidth: 15%;\nheight: auto;\nalign-items: center;\ntext-align: center;\nmargin-left: 10px;\n& > img {\n    width: 50px;\n    height: 50px;\n    border-radius: 30px;\n}\n& > a {\n    text-decoration: none;\n    font-size: 15px;\n    color: black;\n    margin-top: 10px;\n}\n"], ["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nwidth: 15%;\nheight: auto;\nalign-items: center;\ntext-align: center;\nmargin-left: 10px;\n& > img {\n    width: 50px;\n    height: 50px;\n    border-radius: 30px;\n}\n& > a {\n    text-decoration: none;\n    font-size: 15px;\n    color: black;\n    margin-top: 10px;\n}\n"])));
var ProfileName = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\nwidth: 100px;\nheight: auto;\n& > span {\n    font-size: 15px;\n    margin-top: 5px;\n}\n"], ["\ndisplay: flex;\nflex-direction: column;\nwidth: 100px;\nheight: auto;\n& > span {\n    font-size: 15px;\n    margin-top: 5px;\n}\n"])));
var ContactUserDiv = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nwidth: 64%;\nheight: auto;\n& > span {\n    font-size: 15px;\n}\n"], ["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nwidth: 64%;\nheight: auto;\n& > span {\n    font-size: 15px;\n}\n"])));
var EditButton = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n& > img {\n    height: 15px;\n    width: 15px;\n    cursor: pointer;\n    margin-top: 10px;\n}\n"], ["\n& > img {\n    height: 15px;\n    width: 15px;\n    cursor: pointer;\n    margin-top: 10px;\n}\n"])));
exports.ProfileInfo = function () {
    var _a = react_1.useState(), apiUserInfo = _a[0], setApiUserInfo = _a[1];
    react_1.useEffect(function () {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(function (res) { return res.json(); })
            .then(function (json) { return setApiUserInfo(json); })
            .then(function (json) { return console.log(json); });
    }, []);
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
            React.createElement(ProfileName, null,
                React.createElement("span", null, apiUserInfo === null || apiUserInfo === void 0 ? void 0 : apiUserInfo.name),
                React.createElement("span", null, apiUserInfo === null || apiUserInfo === void 0 ? void 0 : apiUserInfo.company.name),
                React.createElement("span", null, apiUserInfo === null || apiUserInfo === void 0 ? void 0 : apiUserInfo.address.city),
                React.createElement("span", null, apiUserInfo === null || apiUserInfo === void 0 ? void 0 : apiUserInfo.address.street)),
            React.createElement(ContactUserDiv, null,
                React.createElement("span", null, apiUserInfo === null || apiUserInfo === void 0 ? void 0 : apiUserInfo.email),
                React.createElement("span", null, apiUserInfo === null || apiUserInfo === void 0 ? void 0 : apiUserInfo.phone)),
            React.createElement(EditButton, null,
                React.createElement("img", { src: "./assets/icons/pencil.png", alt: "" })))));
};
exports["default"] = exports.ProfileInfo;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
