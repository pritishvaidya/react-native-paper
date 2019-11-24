import _extends from"@babel/runtime/helpers/extends";import _objectWithoutProperties from"@babel/runtime/helpers/objectWithoutProperties";import _classCallCheck from"@babel/runtime/helpers/classCallCheck";import _createClass from"@babel/runtime/helpers/createClass";import _possibleConstructorReturn from"@babel/runtime/helpers/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime/helpers/getPrototypeOf";import _inherits from"@babel/runtime/helpers/inherits";var _jsxFileName="/Users/pritishvaidya/WebstormProjects/Personal/react-native-paper/src/components/DataTable/DataTablePagination.tsx";import*as React from'react';import{StyleSheet,View,I18nManager}from'react-native-web';import color from'color';import IconButton from'../IconButton';import Text from'../Typography/Text';import{withTheme}from'../../core/theming';import MaterialCommunityIcon from'../MaterialCommunityIcon';var DataTablePagination=function(_React$Component){_inherits(DataTablePagination,_React$Component);function DataTablePagination(){_classCallCheck(this,DataTablePagination);return _possibleConstructorReturn(this,_getPrototypeOf(DataTablePagination).apply(this,arguments));}_createClass(DataTablePagination,[{key:"render",value:function render(){var _this$props=this.props,label=_this$props.label,page=_this$props.page,numberOfPages=_this$props.numberOfPages,onPageChange=_this$props.onPageChange,style=_this$props.style,theme=_this$props.theme,rest=_objectWithoutProperties(_this$props,["label","page","numberOfPages","onPageChange","style","theme"]);var labelColor=color(theme.colors.text).alpha(0.6).rgb().string();return React.createElement(View,_extends({},rest,{style:[styles.container,style],__source:{fileName:_jsxFileName,lineNumber:59}}),React.createElement(Text,{style:[styles.label,{color:labelColor}],numberOfLines:1,__source:{fileName:_jsxFileName,lineNumber:60}},label),React.createElement(IconButton,{icon:function icon(_ref){var size=_ref.size,color=_ref.color;return React.createElement(MaterialCommunityIcon,{name:"chevron-left",color:color,size:size,direction:I18nManager.isRTL?'rtl':'ltr',__source:{fileName:_jsxFileName,lineNumber:65}});},color:theme.colors.text,disabled:page===0,onPress:function onPress(){return onPageChange(page-1);},__source:{fileName:_jsxFileName,lineNumber:63}}),React.createElement(IconButton,{icon:function icon(_ref2){var size=_ref2.size,color=_ref2.color;return React.createElement(MaterialCommunityIcon,{name:"chevron-right",color:color,size:size,direction:I18nManager.isRTL?'rtl':'ltr',__source:{fileName:_jsxFileName,lineNumber:78}});},color:theme.colors.text,disabled:page===numberOfPages-1,onPress:function onPress(){return onPageChange(page+1);},__source:{fileName:_jsxFileName,lineNumber:76}}));}}]);return DataTablePagination;}(React.Component);DataTablePagination.displayName='DataTable.Pagination';var styles=StyleSheet.create({container:{justifyContent:'flex-end',flexDirection:'row',alignItems:'center',paddingLeft:16},label:{fontSize:12,marginRight:44}});export default withTheme(DataTablePagination);export{DataTablePagination};
//# sourceMappingURL=DataTablePagination.js.map