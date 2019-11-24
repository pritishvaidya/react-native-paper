import _extends from"@babel/runtime/helpers/extends";import _objectSpread from"@babel/runtime/helpers/objectSpread";import _objectWithoutProperties from"@babel/runtime/helpers/objectWithoutProperties";import _classCallCheck from"@babel/runtime/helpers/classCallCheck";import _createClass from"@babel/runtime/helpers/createClass";import _possibleConstructorReturn from"@babel/runtime/helpers/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime/helpers/getPrototypeOf";import _inherits from"@babel/runtime/helpers/inherits";var _jsxFileName="/Users/pritishvaidya/WebstormProjects/Personal/react-native-paper/src/components/FAB/FAB.tsx";import color from'color';import*as React from'react';import{Animated,View,StyleSheet}from'react-native-web';import ActivityIndicator from'../ActivityIndicator';import FABGroup from'./FABGroup';import Surface from'../Surface';import CrossFadeIcon from'../CrossFadeIcon';import Text from'../Typography/Text';import TouchableRipple from'../TouchableRipple';import{black,white}from'../../styles/colors';import{withTheme}from'../../core/theming';var FAB=function(_React$Component){_inherits(FAB,_React$Component);function FAB(){var _getPrototypeOf2;var _this;_classCallCheck(this,FAB);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_possibleConstructorReturn(this,(_getPrototypeOf2=_getPrototypeOf(FAB)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={visibility:new Animated.Value(_this.props.visible?1:0)};return _this;}_createClass(FAB,[{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){if(this.props.visible===prevProps.visible){return;}if(this.props.visible){Animated.timing(this.state.visibility,{toValue:1,duration:200,useNativeDriver:true}).start();}else{Animated.timing(this.state.visibility,{toValue:0,duration:150,useNativeDriver:true}).start();}}},{key:"render",value:function render(){var _this$props=this.props,small=_this$props.small,icon=_this$props.icon,label=_this$props.label,_this$props$accessibi=_this$props.accessibilityLabel,accessibilityLabel=_this$props$accessibi===void 0?label:_this$props$accessibi,customColor=_this$props.color,disabled=_this$props.disabled,onPress=_this$props.onPress,theme=_this$props.theme,style=_this$props.style,visible=_this$props.visible,loading=_this$props.loading,rest=_objectWithoutProperties(_this$props,["small","icon","label","accessibilityLabel","color","disabled","onPress","theme","style","visible","loading"]);var visibility=this.state.visibility;var disabledColor=color(theme.dark?white:black).alpha(0.12).rgb().string();var _ref=StyleSheet.flatten(style)||{},_ref$backgroundColor=_ref.backgroundColor,backgroundColor=_ref$backgroundColor===void 0?disabled?disabledColor:theme.colors.accent:_ref$backgroundColor;var foregroundColor;if(typeof customColor!=='undefined'){foregroundColor=customColor;}else if(disabled){foregroundColor=color(theme.dark?white:black).alpha(0.32).rgb().string();}else{foregroundColor=!color(backgroundColor).isLight()?white:'rgba(0, 0, 0, .54)';}var rippleColor=color(foregroundColor).alpha(0.32).rgb().string();return React.createElement(Surface,_extends({},rest,{style:[{backgroundColor:backgroundColor,opacity:visibility,transform:[{scale:visibility}]},styles.container,disabled&&styles.disabled,style],pointerEvents:visible?'auto':'none',__source:{fileName:_jsxFileName,lineNumber:178}}),React.createElement(TouchableRipple,{borderless:true,onPress:onPress,rippleColor:rippleColor,disabled:disabled,accessibilityLabel:accessibilityLabel,accessibilityTraits:disabled?['button','disabled']:'button',accessibilityComponentType:"button",accessibilityRole:"button",accessibilityStates:disabled?['disabled']:[],style:styles.touchable,__source:{fileName:_jsxFileName,lineNumber:198}},React.createElement(View,{style:[styles.content,label?styles.extended:small?styles.small:styles.standard],pointerEvents:"none",__source:{fileName:_jsxFileName,lineNumber:210}},icon&&loading!==true?React.createElement(CrossFadeIcon,{source:icon,size:24,color:foregroundColor,__source:{fileName:_jsxFileName,lineNumber:218}}):null,loading?React.createElement(ActivityIndicator,{size:18,color:foregroundColor,__source:{fileName:_jsxFileName,lineNumber:221}}):null,label?React.createElement(Text,{style:[styles.label,_objectSpread({color:foregroundColor},theme.fonts.medium)],__source:{fileName:_jsxFileName,lineNumber:224}},label.toUpperCase()):null)));}}]);return FAB;}(React.Component);FAB.Group=FABGroup;FAB.defaultProps={visible:true};var styles=StyleSheet.create({container:{borderRadius:28,elevation:6},touchable:{borderRadius:28},standard:{height:56,width:56},small:{height:40,width:40},extended:{height:48,paddingHorizontal:16},content:{flexDirection:'row',alignItems:'center',justifyContent:'center'},label:{marginHorizontal:8},disabled:{elevation:0}});export default withTheme(FAB);
//# sourceMappingURL=FAB.js.map