"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.ExpandedMenu = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Colors_1 = require("../../StyledHelpers/Colors");
var react_router_dom_1 = require("react-router-dom");
var ExpandedMenuContainer = styled_components_1["default"].ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\t\ndisplay: flex;\nz-index: 2;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\ngap: 10px;\noverflow: hidden;\nborder-style: solid;\nborder-width: 0px 1px 1px 1px;\nborder-color: #999;\nposition: absolute;\nbackground-color: ", ";\nheight: auto;\nwidth: 100%;\ntop: 36px;\n& > input {\n\twidth: 90%;\n\theight: 20px;\n\tfont-size: 13px;\n}\n@media (min-width: 768px) {\n\twidth: 100%;\n}\n\n"], ["\t\ndisplay: flex;\nz-index: 2;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\ngap: 10px;\noverflow: hidden;\nborder-style: solid;\nborder-width: 0px 1px 1px 1px;\nborder-color: #999;\nposition: absolute;\nbackground-color: ", ";\nheight: auto;\nwidth: 100%;\ntop: 36px;\n& > input {\n\twidth: 90%;\n\theight: 20px;\n\tfont-size: 13px;\n}\n@media (min-width: 768px) {\n\twidth: 100%;\n}\n\n"])), Colors_1.Colors.niceblue);
var ExpandedMenuWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\nwidth: 95%;\nheight: auto;\nbackground-color: ", ";\noverflow:scroll;\noverflow-x:hidden;\n"], ["\ndisplay: flex;\nflex-direction: column;\nwidth: 95%;\nheight: auto;\nbackground-color: ", ";\noverflow:scroll;\noverflow-x:hidden;\n"])), Colors_1.Colors.niceblue);
var PlatformDiv = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\nwidth: 100%;\nheight: auto;\n& > span {\n\tfont-size: 15px;\n\tfont-style: bold;\n\tfont-family: Helvetica;\n\tmargin-top: 3px;\n\tmargin-bottom: 3px;\n}\n& > ul {\n\tdisplay: flex;\n\tjustify-content: left;\n\talign-items: center;\n\twidth: 90%;\n\theight: 27px;\n\tcursor: pointer;\n\tmargin-top: 6px;\n\tmargin-bottom: 6px;\n\t& > .navStyle {\n\tdisplay: flex;\n\tflex-direction: row;\n\twidth: 100%;\n\theight: auto;\n\talign-items: center;\n\ttext-decoration: none;\n\t& > li {\n\tmargin-left: 10px;\n\tcolor: ", ";\n\tfont-size: 16px;\n\tfont-family: sans-serif;\n\t}\n\t& > img {\n\t\twidth: 25px;\n\t}\n\t}\n}\n& > ul:hover {\n\tbackground-color: ", ";\n\twidth: auto;\n}\n& > ul > li {\n\tmargin-left: 10px;\n\tcolor: ", ";\n\tfont-size: 16px;\n\tfont-family: sans-serif;\n\t\n}\n& > ul > img {\n\twidth: 25px;\n}\n"], ["\ndisplay: flex;\nflex-direction: column;\nwidth: 100%;\nheight: auto;\n& > span {\n\tfont-size: 15px;\n\tfont-style: bold;\n\tfont-family: Helvetica;\n\tmargin-top: 3px;\n\tmargin-bottom: 3px;\n}\n& > ul {\n\tdisplay: flex;\n\tjustify-content: left;\n\talign-items: center;\n\twidth: 90%;\n\theight: 27px;\n\tcursor: pointer;\n\tmargin-top: 6px;\n\tmargin-bottom: 6px;\n\t& > .navStyle {\n\tdisplay: flex;\n\tflex-direction: row;\n\twidth: 100%;\n\theight: auto;\n\talign-items: center;\n\ttext-decoration: none;\n\t& > li {\n\tmargin-left: 10px;\n\tcolor: ", ";\n\tfont-size: 16px;\n\tfont-family: sans-serif;\n\t}\n\t& > img {\n\t\twidth: 25px;\n\t}\n\t}\n}\n& > ul:hover {\n\tbackground-color: ", ";\n\twidth: auto;\n}\n& > ul > li {\n\tmargin-left: 10px;\n\tcolor: ", ";\n\tfont-size: 16px;\n\tfont-family: sans-serif;\n\t\n}\n& > ul > img {\n\twidth: 25px;\n}\n"])), Colors_1.Colors.MenuFontColor, Colors_1.Colors.nicehover, Colors_1.Colors.MenuFontColor);
var WorkspaceDiv = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\nwidth: 100%;\nheight: auto;\n& > span {\n\tfont-size: 15px;\n\tfont-style: bold;\n\tfont-family: Helvetica;\n\tmargin-top: 3px;\n\tmargin-bottom: 3px;\n}\n& > ul {\n\tdisplay: flex;\n\tjustify-content: left;\n\talign-items: center;\n\twidth: 90%;\n\theight: 27px;\n\tcursor: pointer;\n\tmargin-top: 6px;\n\tmargin-bottom: 6px;\n\t& > .navStyle {\n\tdisplay: flex;\n\tflex-direction: row;\n\twidth: 100%;\n\theight: auto;\n\talign-items: center;\n\ttext-decoration: none;\n\t& > li {\n\tmargin-left: 10px;\n\tcolor: ", ";\n\tfont-size: 16px;\n\tfont-family: sans-serif;\n\t}\n\t& > img {\n\t\twidth: 25px;\n\t}\n\t}\n}\n& > ul:hover {\n\tbackground-color: ", ";\n\twidth: auto;\n}\n& > ul > li {\n\tmargin-left: 10px;\n\tcolor: ", ";\n\tfont-size: 16px;\n\tfont-family: sans-serif;\n}\n& > ul > img {\n\twidth: 25px;\n}\n"], ["\ndisplay: flex;\nflex-direction: column;\nwidth: 100%;\nheight: auto;\n& > span {\n\tfont-size: 15px;\n\tfont-style: bold;\n\tfont-family: Helvetica;\n\tmargin-top: 3px;\n\tmargin-bottom: 3px;\n}\n& > ul {\n\tdisplay: flex;\n\tjustify-content: left;\n\talign-items: center;\n\twidth: 90%;\n\theight: 27px;\n\tcursor: pointer;\n\tmargin-top: 6px;\n\tmargin-bottom: 6px;\n\t& > .navStyle {\n\tdisplay: flex;\n\tflex-direction: row;\n\twidth: 100%;\n\theight: auto;\n\talign-items: center;\n\ttext-decoration: none;\n\t& > li {\n\tmargin-left: 10px;\n\tcolor: ", ";\n\tfont-size: 16px;\n\tfont-family: sans-serif;\n\t}\n\t& > img {\n\t\twidth: 25px;\n\t}\n\t}\n}\n& > ul:hover {\n\tbackground-color: ", ";\n\twidth: auto;\n}\n& > ul > li {\n\tmargin-left: 10px;\n\tcolor: ", ";\n\tfont-size: 16px;\n\tfont-family: sans-serif;\n}\n& > ul > img {\n\twidth: 25px;\n}\n"])), Colors_1.Colors.MenuFontColor, Colors_1.Colors.nicehover, Colors_1.Colors.MenuFontColor);
var AccountDiv = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\nwidth: 100%;\nheight: auto;\nborder-style: solid;\nborder-width: 1px 0;\nborder-color: #c9c9c9;\n& > div {\n\tdisplay: flex;\n\talign-items: center;\n& > img {\n\twidth: 32px;\n\tborder-radius: 50%;\n}\n& > span {\n\tmargin-left: 10px;\n\tcolor: ", ";\n\tfont-size: 16px;\n\tfont-family: sans-serif;\n}\n}\n& > span {\n\tfont-size: 15px;\n\tfont-style: bold;\n\tfont-family: Helvetica;\n\tmargin-top: 3px;\n\tmargin-bottom: 8px;\n}\n& > ul {\n\tdisplay: flex;\n\tjustify-content: left;\n\talign-items: center;\n\twidth: 90%;\n\theight: 27px;\n\tcursor: pointer;\n\tmargin-top: 6px;\n\tmargin-bottom: 6px;\n\t& > .navStyle {\n\tdisplay: flex;\n\tflex-direction: row;\n\twidth: 100%;\n\theight: auto;\n\talign-items: center;\n\ttext-decoration: none;\n\t& > li {\n\tmargin-left: 10px;\n\tcolor: ", ";\n\tfont-size: 16px;\n\tfont-family: sans-serif;\n\t}\n\t& > img {\n\t\twidth: 25px;\n\t}\n\t}\n}\n& > ul:hover {\n\tbackground-color: ", ";\n\twidth: auto;\n}\n& > ul > li {\n\tmargin-left: 10px;\n\tcolor: ", ";\n\tfont-size: 16px;\n\tfont-family: sans-serif;\n}\n& > ul > img {\n\twidth: 25px;\n}\n& > :hover {\n\tbackground-color: ", ";\n\twidth: auto;\n}\n"], ["\ndisplay: flex;\nflex-direction: column;\nwidth: 100%;\nheight: auto;\nborder-style: solid;\nborder-width: 1px 0;\nborder-color: #c9c9c9;\n& > div {\n\tdisplay: flex;\n\talign-items: center;\n& > img {\n\twidth: 32px;\n\tborder-radius: 50%;\n}\n& > span {\n\tmargin-left: 10px;\n\tcolor: ", ";\n\tfont-size: 16px;\n\tfont-family: sans-serif;\n}\n}\n& > span {\n\tfont-size: 15px;\n\tfont-style: bold;\n\tfont-family: Helvetica;\n\tmargin-top: 3px;\n\tmargin-bottom: 8px;\n}\n& > ul {\n\tdisplay: flex;\n\tjustify-content: left;\n\talign-items: center;\n\twidth: 90%;\n\theight: 27px;\n\tcursor: pointer;\n\tmargin-top: 6px;\n\tmargin-bottom: 6px;\n\t& > .navStyle {\n\tdisplay: flex;\n\tflex-direction: row;\n\twidth: 100%;\n\theight: auto;\n\talign-items: center;\n\ttext-decoration: none;\n\t& > li {\n\tmargin-left: 10px;\n\tcolor: ", ";\n\tfont-size: 16px;\n\tfont-family: sans-serif;\n\t}\n\t& > img {\n\t\twidth: 25px;\n\t}\n\t}\n}\n& > ul:hover {\n\tbackground-color: ", ";\n\twidth: auto;\n}\n& > ul > li {\n\tmargin-left: 10px;\n\tcolor: ", ";\n\tfont-size: 16px;\n\tfont-family: sans-serif;\n}\n& > ul > img {\n\twidth: 25px;\n}\n& > :hover {\n\tbackground-color: ", ";\n\twidth: auto;\n}\n"])), Colors_1.Colors.MenuFontColor, Colors_1.Colors.MenuFontColor, Colors_1.Colors.nicehover, Colors_1.Colors.MenuFontColor, Colors_1.Colors.nicehover);
var AccountSeeProfile = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\n& > img {\n\twidth: auto;\n}\n& > span {\n\tmargin-left: 10px;\n\tcolor: ", ";\n\tfont-size: 16px;\n\tcolor: black;\n\tfont-family: sans-serif;\n}\n& > a {\n\tmargin-left: 10px;\n\tfont-size: 14px;\n\ttext-decoration: none;\n\tcolor: ", ";\n\tmargin-top: 3px;\n}\n& > a:visited {\n\tmargin-left: 10px;\n\tfont-size: 14px;\n\ttext-decoration: none;\n\tcolor: ", ";\n\tmargin-top: 3px;\n}\n"], ["\ndisplay: flex;\nflex-direction: column;\n& > img {\n\twidth: auto;\n}\n& > span {\n\tmargin-left: 10px;\n\tcolor: ", ";\n\tfont-size: 16px;\n\tcolor: black;\n\tfont-family: sans-serif;\n}\n& > a {\n\tmargin-left: 10px;\n\tfont-size: 14px;\n\ttext-decoration: none;\n\tcolor: ", ";\n\tmargin-top: 3px;\n}\n& > a:visited {\n\tmargin-left: 10px;\n\tfont-size: 14px;\n\ttext-decoration: none;\n\tcolor: ", ";\n\tmargin-top: 3px;\n}\n"])), Colors_1.Colors.MenuFontColor, Colors_1.Colors.MenuFontColor, Colors_1.Colors.MenuFontColor);
var LogoutDiv = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\ndisplay: flex;\nwidth: 90%;\nheight: auto;\njustify-content: center;\ntext-align: center;\nalign-items: center;\nmargin-bottom: 10px;\ncursor: pointer;\nopacity:0.5;\n& > .logoutStyle {\n\tfont-size: 16px;\n\tcolor: #5e5e5e;\n\tfont-family: Helvetica;\n\t&:hover {\n\t\tfont-style: bold;\n\tfont-size: 19px;\n\tfont-family: Helvetica;\n\tcolor: ", ";\n}\n}\n&:hover {\n\topacity:0.9;\n}\n& > span {\n\tfont-size: 16px;\n\tcolor: #5e5e5e;\n\tfont-family: Helvetica;\n\t\n}\n& > span:hover {\n\tfont-style: bold;\n\tfont-size: 19px;\n\tfont-family: Helvetica;\n\tcolor: ", ";\n}\n& > img {\n\tmargin-right: 15px;\n}\n"], ["\ndisplay: flex;\nwidth: 90%;\nheight: auto;\njustify-content: center;\ntext-align: center;\nalign-items: center;\nmargin-bottom: 10px;\ncursor: pointer;\nopacity:0.5;\n& > .logoutStyle {\n\tfont-size: 16px;\n\tcolor: #5e5e5e;\n\tfont-family: Helvetica;\n\t&:hover {\n\t\tfont-style: bold;\n\tfont-size: 19px;\n\tfont-family: Helvetica;\n\tcolor: ", ";\n}\n}\n&:hover {\n\topacity:0.9;\n}\n& > span {\n\tfont-size: 16px;\n\tcolor: #5e5e5e;\n\tfont-family: Helvetica;\n\t\n}\n& > span:hover {\n\tfont-style: bold;\n\tfont-size: 19px;\n\tfont-family: Helvetica;\n\tcolor: ", ";\n}\n& > img {\n\tmargin-right: 15px;\n}\n"])), Colors_1.Colors.black, Colors_1.Colors.black);
var PlatformInfo = [
    {
        title: "Home",
        path: "/",
        icon: "/assets/icons/house.svg"
    },
    {
        title: "Publications",
        path: "/",
        icon: "/assets/icons/document.svg"
    },
    {
        title: "People",
        path: "/routingsite",
        icon: "/assets/icons/people.svg"
    },
    {
        title: "Entities",
        path: "/routingsite",
        icon: "/assets/icons/entities.svg"
    },
    {
        title: "Administration",
        path: "/",
        icon: "/assets/icons/administration.svg"
    },
];
var WorkspacesInfo = [
    {
        title: "Client contract",
        path: "/routingsite",
        icon: "./assets/icons/contract.svg"
    },
    {
        title: "Supplier contract",
        path: "/",
        icon: "./assets/icons/contract.svg"
    },
    {
        title: "Corporate",
        path: "/routingsite",
        icon: "./assets/icons/entities2.svg"
    },
    {
        title: "Group Norms",
        path: "/",
        icon: "./assets/icons/agenda.svg"
    },
    {
        title: "Real estate contracts",
        path: "/routingsite",
        icon: "./assets/icons/contract.svg"
    },
];
var AccountInfo = [
    {
        title: "Privacy",
        path: "/routingsite",
        icon: "./assets/icons/privacy.svg"
    },
    {
        title: "Settings",
        path: "/",
        icon: "./assets/icons/settings.svg"
    },
];
exports.ExpandedMenu = function () {
    var _a = react_1.useState(""), search = _a[0], setSearch = _a[1];
    var _b = react_1.useState(), apiProfile = _b[0], setApiProfile = _b[1];
    react_1.useEffect(function () {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(function (res) { return res.json(); })
            .then(function (json) { return setApiProfile(json); })
            .then(function (json) { return console.log(json); });
    }, []);
    return (React.createElement(ExpandedMenuContainer, { onClick: function (e) { return e.stopPropagation(); } },
        React.createElement("input", { placeholder: "Search..", type: "text", onChange: function (e) { return setSearch(e.target.value.toLowerCase()); } }),
        React.createElement(ExpandedMenuWrapper, null,
            React.createElement(PlatformDiv, null,
                React.createElement("span", null, "Platform"),
                PlatformInfo.filter(function (elem) {
                    return elem.title.toLowerCase().includes(search);
                }).map(function (elem, index) { return (React.createElement("ul", { key: index },
                    React.createElement(react_router_dom_1.NavLink, { to: elem.path, className: "navStyle" },
                        React.createElement("img", { src: elem.icon, alt: "" }),
                        React.createElement("li", null, elem.title)))); })),
            React.createElement(WorkspaceDiv, null,
                React.createElement("span", null, "Workspaces"),
                WorkspacesInfo.filter(function (elem) {
                    return elem.title.toLowerCase().includes(search);
                }).map(function (elem, index) { return (React.createElement("ul", { key: index },
                    React.createElement(react_router_dom_1.NavLink, { to: elem.path, className: "navStyle" },
                        React.createElement("img", { src: elem.icon, alt: "" }),
                        React.createElement("li", null, elem.title)))); })),
            React.createElement(AccountDiv, null,
                React.createElement("span", null, "Account"),
                React.createElement("div", null,
                    React.createElement("img", { src: "./assets/Profilowe.png", alt: "" }),
                    React.createElement(AccountSeeProfile, null,
                        React.createElement("span", null, apiProfile === null || apiProfile === void 0 ? void 0 : apiProfile.name),
                        React.createElement(react_router_dom_1.NavLink, { to: "/profile" }, "See Profile"))),
                AccountInfo.filter(function (elem) {
                    return elem.title.toLowerCase().includes(search);
                }).map(function (elem, index) { return (React.createElement("ul", { key: index },
                    React.createElement(react_router_dom_1.NavLink, { to: elem.path, className: "navStyle" },
                        React.createElement("img", { src: elem.icon, alt: "" }),
                        React.createElement("li", null, elem.title)))); }))),
        React.createElement(LogoutDiv, null,
            React.createElement("img", { src: "/assets/icons/logout.png", alt: "" }),
            React.createElement(react_router_dom_1.NavLink, { to: "/", className: "logoutStyle" }, "Logout"))));
};
exports["default"] = exports.ExpandedMenu;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
