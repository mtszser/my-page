"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Entities = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Colors_1 = require("../../StyledHelpers/Colors");
var EntitiesData = [
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"
    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"
    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"
    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"
    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"
    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"
    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"
    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"
    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"
    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"
    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"
    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"
    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"
    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"
    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"
    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"
    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"
    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"
    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"
    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"
    },
];
var MainWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\nwidth: 850px;\nheight: auto;\n"], ["\ndisplay: flex;\nflex-direction: column;\nwidth: 850px;\nheight: auto;\n"])));
var EntitiesWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\ndisplay: grid;\nmargin-top: 50px;\ngrid-template-columns: 1fr 1fr 1fr 1fr;\ngrid-template-rows: 1fr 1fr 1fr 1fr 1fr;\nwidth: auto;\nheight: auto;\njustify-content: center;\nbackground-color: ", ";\n& > div {\n    width: auto;\n    border: solid;\n    border-width: 1px;\n    justify-content: center;\n    align-items: center;\n}\n"], ["\ndisplay: grid;\nmargin-top: 50px;\ngrid-template-columns: 1fr 1fr 1fr 1fr;\ngrid-template-rows: 1fr 1fr 1fr 1fr 1fr;\nwidth: auto;\nheight: auto;\njustify-content: center;\nbackground-color: ", ";\n& > div {\n    width: auto;\n    border: solid;\n    border-width: 1px;\n    justify-content: center;\n    align-items: center;\n}\n"])), Colors_1.Colors.nicebuttonhover);
var EntitiesDiv = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\ndisplay: flex;\nwidth: auto;\nheight: auto;\ngap: 10px;\nmargin: 5px;\njustify-content: center;\nalign-items: center;\ntext-align: center;\n"], ["\ndisplay: flex;\nwidth: auto;\nheight: auto;\ngap: 10px;\nmargin: 5px;\njustify-content: center;\nalign-items: center;\ntext-align: center;\n"])));
var ApiImage = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\nheight: auto;\nwidth: auto;\n& > img {\n    height: 70px;\n    width: 70px;\n}\n"], ["\nheight: auto;\nwidth: auto;\n& > img {\n    height: 70px;\n    width: 70px;\n}\n"])));
var FilterMenu = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\ndisplay: flex;\nwidth: 100%;\nheight: auto;\njustify-content: center;\n& > p {\n    text-align: center;\n    font-size: 20px;\n}\n& > div {\n\n}\n"], ["\ndisplay: flex;\nwidth: 100%;\nheight: auto;\njustify-content: center;\n& > p {\n    text-align: center;\n    font-size: 20px;\n}\n& > div {\n\n}\n"])));
exports.Entities = function () {
    var _a = react_1.useState(), apiPhotos = _a[0], setApiPhotos = _a[1];
    react_1.useEffect(function () {
        fetch("https://jsonplaceholder.typicode.com/photos/1")
            .then(function (res) { return res.json(); })
            .then(function (json) { return setApiPhotos(json); })
            .then(function (json) { return console.log(json); });
    }, []);
    return (React.createElement(MainWrapper, null,
        React.createElement(FilterMenu, null,
            React.createElement("div", null,
                React.createElement("p", null, "asdsadsa"))),
        React.createElement(EntitiesWrapper, null, EntitiesData.map(function (item, index) {
            return React.createElement("div", { key: index },
                React.createElement(EntitiesDiv, null,
                    React.createElement(ApiImage, null,
                        React.createElement("img", { src: apiPhotos === null || apiPhotos === void 0 ? void 0 : apiPhotos.url, alt: "" })),
                    item.title,
                    ",",
                    item.adress,
                    ",",
                    item.country));
        }))));
};
exports["default"] = exports.Entities;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
