"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Entities = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var EntitiesData = [
    {
        img: "/",
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"
    },
    {
        img: "/",
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"
    },
    {
        img: "/",
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"
    },
    {
        img: "/",
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"
    }
];
var EntitiesWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ndisplay: flex;\nmargin-top: 15px;\nwidth: 60%;\nheight: 600px;\njustify-content: center;\nbackground-color: wheat;\n"], ["\ndisplay: flex;\nmargin-top: 15px;\nwidth: 60%;\nheight: 600px;\njustify-content: center;\nbackground-color: wheat;\n"])));
var EntitiesGrid = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\ndisplay: flex;\nwidth: auto;\nheight: auto;\nbackground-color: red;\n"], ["\ndisplay: flex;\nwidth: auto;\nheight: auto;\nbackground-color: red;\n"])));
var EntitiesDiv = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\ndisplay: grid;\nwidth: 150px;\nheight: 150px;\ngap: 10px;\nmargin: 5px;\nborder: solid;\nborder-width: 1px;\njustify-content: center;\nalign-items: center;\ntext-align: center;\n"], ["\ndisplay: grid;\nwidth: 150px;\nheight: 150px;\ngap: 10px;\nmargin: 5px;\nborder: solid;\nborder-width: 1px;\njustify-content: center;\nalign-items: center;\ntext-align: center;\n"])));
exports.Entities = function () {
    var _a = react_1.useState(), apiPhotos = _a[0], setApiPhotos = _a[1];
    react_1.useEffect(function () {
        fetch("https://jsonplaceholder.typicode.com/photos/1")
            .then(function (res) { return res.json(); })
            .then(function (json) { return setApiPhotos(json); })
            .then(function (json) { return console.log(json); });
    }, []);
    return (React.createElement(EntitiesWrapper, null,
        React.createElement(EntitiesGrid, null, EntitiesData.map(function (item, index) {
            return React.createElement("div", { key: index },
                React.createElement("div", null,
                    React.createElement("img", { src: item.img, alt: "" }),
                    React.createElement(EntitiesDiv, null,
                        item.title,
                        ",",
                        item.adress,
                        ",",
                        item.country)));
        }))));
};
exports["default"] = exports.Entities;
var templateObject_1, templateObject_2, templateObject_3;
