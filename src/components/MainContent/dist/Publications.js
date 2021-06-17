"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Publications = void 0;
var styled_components_1 = require("styled-components");
var Publication_1 = require("./Publication");
// import {Colors} from '../../StyledHelpers/Colors';
var PublicationsWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ndisplay: flex;\nwidth: auto;\nheight: auto;\npadding: 15px;\n"], ["\ndisplay: flex;\nwidth: auto;\nheight: auto;\npadding: 15px;\n"])));
var MainContentWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\nwidth: 93%; \nheight: auto;\n"], ["\ndisplay: flex;\nflex-direction: column;\nwidth: 93%; \nheight: auto;\n"])));
var MainContentHeader = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\nheight: auto;\nwidth: 100%;\n"], ["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\nheight: auto;\nwidth: 100%;\n"])));
var PublicationsInner = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\ndisplay: flex;\nwidth: auto;\nheight: auto;\nbox-shadow: 0px 2px 3px #999;\n& > img {\n    width: 350px;\n    height: 350px;\n}\n& > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    background-color: white;\n    width: 100%;\n    & > span {\n    width: 95%;\n    height: 20px;\n    text-align: left;\n    margin-top: 5px;\n    justify-content: center;\n    font-family: Helvetica;\n    font-weight: bold;\n    color: #5353cc;\n    font-size: 13px;\n    cursor: pointer;\n    }\n    & > h1 {\n    width: 95%;\n    height: 20px;\n    text-align: left;\n    justify-content: center;\n    font-family: Helvetica;\n    font-weight: bold;\n    color: #4d4d4d;\n    font-size: 16px;\n    cursor: pointer;\n    }\n}\n"], ["\ndisplay: flex;\nwidth: auto;\nheight: auto;\nbox-shadow: 0px 2px 3px #999;\n& > img {\n    width: 350px;\n    height: 350px;\n}\n& > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    background-color: white;\n    width: 100%;\n    & > span {\n    width: 95%;\n    height: 20px;\n    text-align: left;\n    margin-top: 5px;\n    justify-content: center;\n    font-family: Helvetica;\n    font-weight: bold;\n    color: #5353cc;\n    font-size: 13px;\n    cursor: pointer;\n    }\n    & > h1 {\n    width: 95%;\n    height: 20px;\n    text-align: left;\n    justify-content: center;\n    font-family: Helvetica;\n    font-weight: bold;\n    color: #4d4d4d;\n    font-size: 16px;\n    cursor: pointer;\n    }\n}\n"])));
// const LeftImage = styled.div`
// background-image: url("/assets/photos/skyscraper.jpg");
// display: flex;
// background-size: 350px 350px;
// box-shadow: inset 0px -174px 69px -41px #000c4499;
// & > p {
//     margin-left: 10px;
//     margin-right: 45px;
//     color: whitesmoke;
// }
// `;
// fetch('https://jsonplaceholder.typicode.com/users/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
exports.Publications = function () {
    // const [apiPub, setApi] = useState<Publication>()
    // useEffect(()=> {
    //     fetch("https://jsonplaceholder.typicode.com/posts/6")
    //     .then(res=>res.json())
    //     .then(json=>setApi(json))
    //  }, [])
    return (React.createElement(PublicationsWrapper, null,
        React.createElement(MainContentWrapper, null,
            React.createElement(MainContentHeader, null,
                React.createElement(PublicationsInner, null,
                    React.createElement("img", { src: "/assets/photos/skyscraper.jpg", alt: "32132" }),
                    React.createElement("div", null,
                        React.createElement("h1", null, "Latest publications"),
                        React.createElement(Publication_1["default"], null),
                        React.createElement("span", null, "See more publications")))))));
};
exports["default"] = exports.Publications;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
