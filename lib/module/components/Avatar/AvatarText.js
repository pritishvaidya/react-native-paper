import _objectWithoutProperties from"@babel/runtime/helpers/objectWithoutProperties";import _classCallCheck from"@babel/runtime/helpers/classCallCheck";import _createClass from"@babel/runtime/helpers/createClass";import _possibleConstructorReturn from"@babel/runtime/helpers/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime/helpers/getPrototypeOf";import _inherits from"@babel/runtime/helpers/inherits";var _jsxFileName="/Users/pritishvaidya/WebstormProjects/Personal/react-native-paper/src/components/Avatar/AvatarText.tsx";import*as React from'react';import{View,StyleSheet}from'react-native-web';import color from'color';import Text from'../Typography/Text';import{withTheme}from'../../core/theming';import{white}from'../../styles/colors';var defaultSize=64;var AvatarText=function(_React$Component){_inherits(AvatarText,_React$Component);function AvatarText(){_classCallCheck(this,AvatarText);return _possibleConstructorReturn(this,_getPrototypeOf(AvatarText).apply(this,arguments));}_createClass(AvatarText,[{key:"render",value:function render(){var _this$props=this.props,label=_this$props.label,_this$props$size=_this$props.size,size=_this$props$size===void 0?defaultSize:_this$props$size,style=_this$props.style,theme=_this$props.theme,labelStyle=_this$props.labelStyle;var _ref=StyleSheet.flatten(style)||{},_ref$backgroundColor=_ref.backgroundColor,backgroundColor=_ref$backgroundColor===void 0?theme.colors.primary:_ref$backgroundColor,restStyle=_objectWithoutProperties(_ref,["backgroundColor"]);var textColor=this.props.color||(color(backgroundColor).isLight()?'rgba(0, 0, 0, .54)':white);return React.createElement(View,{style:[{width:size,height:size,borderRadius:size/2,backgroundColor:backgroundColor},styles.container,restStyle],__source:{fileName:_jsxFileName,lineNumber:80}},React.createElement(Text,{style:[styles.text,{color:textColor,fontSize:size/2,lineHeight:size},labelStyle],numberOfLines:1,__source:{fileName:_jsxFileName,lineNumber:92}},label));}}]);return AvatarText;}(React.Component);AvatarText.displayName='Avatar.Text';AvatarText.defaultProps={size:defaultSize};var styles=StyleSheet.create({container:{justifyContent:'center',alignItems:'center'},text:{textAlign:'center',textAlignVertical:'center'}});export default withTheme(AvatarText);
//# sourceMappingURL=AvatarText.js.map