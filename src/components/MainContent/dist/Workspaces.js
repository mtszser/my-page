"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Workspaces = void 0;
var styled_components_1 = require("styled-components");
var react_elastic_carousel_1 = require("react-elastic-carousel");
var Workspace_1 = require("../MainContent/Workspace");
// const WorkspacesWrapper = styled.div`
// display: flex;
// width: auto;
// height: auto;
// padding: 15px;
// `;
// const MainContentWrapper = styled.div`
// display: flex;
// flex-direction: column;
// width: 93%;
// height: auto;
// `;
// const WorkspacesHeader = styled.div`
// display: flex;
// flex-direction: row;
// width: 100%;
// height: auto;
// `;
// const HeaderDiv = styled.div`
// width: 20%;
// height: auto;
// & > h1 {
//     font-family: Helvetica;
//     font-weight: bold;
//     color: #4d4d4d;
//     font-size: 18px;
//     margin-bottom: 10px;
//     margin-left: 20px;
// }
// `;
// const PublicationsDiv = styled.div`
// display: flex;
// width: auto;
// height: 200px;
// background-color: white;
// `;
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-start;\n  gap: 10px;\n"], ["\n  display: flex;\n  justify-content: flex-start;\n  gap: 10px;\n"])));
exports.Workspaces = function () {
    return (React.createElement(Wrapper, null,
        React.createElement(react_elastic_carousel_1["default"], { isRTL: false, itemsToShow: 4, showArrows: false, itemPosition: "START", pagination: true },
            React.createElement(Workspace_1["default"], null, "1"),
            React.createElement(Workspace_1["default"], null, "2"),
            React.createElement(Workspace_1["default"], null, "3"),
            React.createElement(Workspace_1["default"], null, "4"),
            React.createElement(Workspace_1["default"], null, "5"),
            React.createElement(Workspace_1["default"], null, "6")))
    // <>
    //   <WorkspacesWrapper>
    //       <MainContentWrapper>
    //           <WorkspacesHeader>
    //               <HeaderDiv>
    //               <h1>Workspaces</h1>
    //               </HeaderDiv>
    //           </WorkspacesHeader>
    //           <PublicationsDiv>
    //           </PublicationsDiv>
    //       </MainContentWrapper>
    //   </WorkspacesWrapper>
    // </>
    );
};
exports["default"] = exports.Workspaces;
var templateObject_1;
