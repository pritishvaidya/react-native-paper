import _extends from"@babel/runtime/helpers/extends";import _classCallCheck from"@babel/runtime/helpers/classCallCheck";import _createClass from"@babel/runtime/helpers/createClass";import _possibleConstructorReturn from"@babel/runtime/helpers/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime/helpers/getPrototypeOf";import _inherits from"@babel/runtime/helpers/inherits";var _jsxFileName="/Users/pritishvaidya/WebstormProjects/Personal/react-native-paper/src/components/Checkbox.tsx";import*as React from'react';import{Platform}from'react-native-web';import CheckboxAndroid from'./CheckboxAndroid';import CheckboxIOS from'./CheckboxIOS';import{withTheme}from'../core/theming';var Checkbox=function(_React$Component){_inherits(Checkbox,_React$Component);function Checkbox(){_classCallCheck(this,Checkbox);return _possibleConstructorReturn(this,_getPrototypeOf(Checkbox).apply(this,arguments));}_createClass(Checkbox,[{key:"render",value:function render(){return Platform.OS==='ios'?React.createElement(CheckboxIOS,_extends({},this.props,{__source:{fileName:_jsxFileName,lineNumber:92}})):React.createElement(CheckboxAndroid,_extends({},this.props,{__source:{fileName:_jsxFileName,lineNumber:94}}));}}]);return Checkbox;}(React.Component);Checkbox.Android=CheckboxAndroid;Checkbox.IOS=CheckboxIOS;export default withTheme(Checkbox);
//# sourceMappingURL=Checkbox.js.map