import _objectSpread from"@babel/runtime/helpers/objectSpread";import _objectWithoutProperties from"@babel/runtime/helpers/objectWithoutProperties";import _classCallCheck from"@babel/runtime/helpers/classCallCheck";import _createClass from"@babel/runtime/helpers/createClass";import _possibleConstructorReturn from"@babel/runtime/helpers/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime/helpers/getPrototypeOf";import _inherits from"@babel/runtime/helpers/inherits";var _jsxFileName="/Users/pritishvaidya/WebstormProjects/Personal/react-native-paper/src/components/Badge.tsx";import*as React from'react';import{Animated,StyleSheet}from'react-native-web';import color from'color';import{black,white}from'../styles/colors';import{withTheme}from'../core/theming';var defaultSize=20;var Badge=function(_React$Component){_inherits(Badge,_React$Component);function Badge(){var _getPrototypeOf2;var _this;_classCallCheck(this,Badge);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_possibleConstructorReturn(this,(_getPrototypeOf2=_getPrototypeOf(Badge)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={opacity:new Animated.Value(_this.props.visible?1:0)};return _this;}_createClass(Badge,[{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var visible=this.props.visible;if(visible!==prevProps.visible){Animated.timing(this.state.opacity,{toValue:visible?1:0,duration:150,useNativeDriver:true}).start();}}},{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,_this$props$size=_this$props.size,size=_this$props$size===void 0?defaultSize:_this$props$size,style=_this$props.style,theme=_this$props.theme;var opacity=this.state.opacity;var _ref=StyleSheet.flatten(style)||{},_ref$backgroundColor=_ref.backgroundColor,backgroundColor=_ref$backgroundColor===void 0?theme.colors.notification:_ref$backgroundColor,restStyle=_objectWithoutProperties(_ref,["backgroundColor"]);var textColor=color(backgroundColor).isLight()?black:white;var borderRadius=size/2;return React.createElement(Animated.Text,{numberOfLines:1,style:[_objectSpread({opacity:opacity,backgroundColor:backgroundColor,color:textColor,fontSize:size*0.5},theme.fonts.regular,{lineHeight:size,height:size,minWidth:size,borderRadius:borderRadius}),styles.container,restStyle],__source:{fileName:_jsxFileName,lineNumber:89}},children);}}]);return Badge;}(React.Component);Badge.defaultProps={visible:true,size:defaultSize};export default withTheme(Badge);var styles=StyleSheet.create({container:{alignSelf:'flex-end',textAlign:'center',textAlignVertical:'center',paddingHorizontal:4,overflow:'hidden'}});
//# sourceMappingURL=Badge.js.map