import _extends from"@babel/runtime/helpers/extends";import _objectWithoutProperties from"@babel/runtime/helpers/objectWithoutProperties";import _classCallCheck from"@babel/runtime/helpers/classCallCheck";import _createClass from"@babel/runtime/helpers/createClass";import _possibleConstructorReturn from"@babel/runtime/helpers/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime/helpers/getPrototypeOf";import _inherits from"@babel/runtime/helpers/inherits";var _jsxFileName="/Users/pritishvaidya/WebstormProjects/Personal/react-native-paper/src/components/List/ListSection.tsx";import*as React from'react';import{View,StyleSheet}from'react-native-web';import ListSubheader from'./ListSubheader';import{withTheme}from'../../core/theming';var ListSection=function(_React$Component){_inherits(ListSection,_React$Component);function ListSection(){_classCallCheck(this,ListSection);return _possibleConstructorReturn(this,_getPrototypeOf(ListSection).apply(this,arguments));}_createClass(ListSection,[{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,title=_this$props.title,titleStyle=_this$props.titleStyle,style=_this$props.style,rest=_objectWithoutProperties(_this$props,["children","title","titleStyle","style"]);return React.createElement(View,_extends({},rest,{style:[styles.container,style],__source:{fileName:_jsxFileName,lineNumber:73}}),title&&React.createElement(ListSubheader,{style:titleStyle,__source:{fileName:_jsxFileName,lineNumber:74}},title),children);}}]);return ListSection;}(React.Component);ListSection.displayName='List.Section';var styles=StyleSheet.create({container:{marginVertical:8}});export default withTheme(ListSection);
//# sourceMappingURL=ListSection.js.map