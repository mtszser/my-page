"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Profile = void 0;
var styled_components_1 = require("styled-components");
var ProfileInfo_1 = require("./ProfileInfo");
var MainWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\nwidth: 90%;\nheight: auto;\nmargin-right: 20px;\nmargin-top: 20px;\n"], ["\ndisplay: flex;\nflex-direction: column;\nwidth: 90%;\nheight: auto;\nmargin-right: 20px;\nmargin-top: 20px;\n"])));
var ProfileWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\ndisplay: flex;\njustify-content: center;\nflex-direction: column;\nwidth: 45%;\nmargin: auto;\nheight: auto;\nbackground-color: white;\n"], ["\ndisplay: flex;\njustify-content: center;\nflex-direction: column;\nwidth: 45%;\nmargin: auto;\nheight: auto;\nbackground-color: white;\n"])));
var ProfileNav = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\nwidth: 100%;\nheight: 300px;\nalign-items: center;\njustify-content: space-around;\nbackground-color: blue;\n"], ["\ndisplay: flex;\nflex-direction: column;\nwidth: 100%;\nheight: 300px;\nalign-items: center;\njustify-content: space-around;\nbackground-color: blue;\n"])));
var ProfileNavWrapper = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\nalign-items: right;\nwidth: 95%;\nheight: 95%;\nbackground-color: wheat;\n"], ["\ndisplay: flex;\nflex-direction: column;\nalign-items: right;\nwidth: 95%;\nheight: 95%;\nbackground-color: wheat;\n"])));
var ProfileNavButtons = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\nwidth: 100%;\nmargin-top: 10px;\nheight: auto;\njustify-content: flex-end;\nbackground-color: white;\nalign-items: center;\ntext-align: center;\n"], ["\ndisplay: flex;\nflex-direction: column;\nwidth: 100%;\nmargin-top: 10px;\nheight: auto;\njustify-content: flex-end;\nbackground-color: white;\nalign-items: center;\ntext-align: center;\n"])));
var PanelInformations = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\ndisplay: flex;\nwidth: 100%;\nheight: 200px;\nbackground-color: orange;\n"], ["\ndisplay: flex;\nwidth: 100%;\nheight: 200px;\nbackground-color: orange;\n"])));
var Proposals = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\ndisplay: flex;\nwidth: 100%;\nheight: 200px;\nbackground-color: green;\n"], ["\ndisplay: flex;\nwidth: 100%;\nheight: 200px;\nbackground-color: green;\n"])));
var InternalRevievs = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\ndisplay: flex;\nwidth: 100%;\nheight: 200px;\nbackground-color: yellow;\n"], ["\ndisplay: flex;\nwidth: 100%;\nheight: 200px;\nbackground-color: yellow;\n"])));
var AmountOfFees = styled_components_1["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\ndisplay: flex;\nwidth: 100%;\nheight: 200px;\nbackground-color: blue;\n"], ["\ndisplay: flex;\nwidth: 100%;\nheight: 200px;\nbackground-color: blue;\n"])));
// const ProfileInfo = styled.div`
// `;
exports.Profile = function () {
    return (React.createElement(MainWrapper, null,
        React.createElement(ProfileWrapper, null,
            React.createElement(ProfileNav, null,
                React.createElement(ProfileNavWrapper, null,
                    React.createElement(ProfileNavButtons, null,
                        React.createElement(ProfileInfo_1["default"], null)))),
            React.createElement(PanelInformations, null,
                React.createElement("p", null, "Panel Informations")),
            React.createElement(Proposals, null,
                React.createElement("p", null, "Proposals")),
            React.createElement(InternalRevievs, null,
                React.createElement("p", null, "Internal Revievs")),
            React.createElement(AmountOfFees, null,
                React.createElement("p", null, "Amount of Fees")))));
};
exports["default"] = exports.Profile;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
