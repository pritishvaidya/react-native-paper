import _extends from"@babel/runtime/helpers/extends";import _objectWithoutProperties from"@babel/runtime/helpers/objectWithoutProperties";import _classCallCheck from"@babel/runtime/helpers/classCallCheck";import _createClass from"@babel/runtime/helpers/createClass";import _possibleConstructorReturn from"@babel/runtime/helpers/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime/helpers/getPrototypeOf";import _inherits from"@babel/runtime/helpers/inherits";var _jsxFileName="/Users/pritishvaidya/WebstormProjects/Personal/react-native-paper/src/components/DataTable/DataTableTitle.tsx";import*as React from'react';import{Animated,StyleSheet,TouchableWithoutFeedback,View}from'react-native-web';import color from'color';import Icon from'../Icon';import Text from'../Typography/Text';import{withTheme}from'../../core/theming';var DataTableTitle=function(_React$Component){_inherits(DataTableTitle,_React$Component);function DataTableTitle(){var _getPrototypeOf2;var _this;_classCallCheck(this,DataTableTitle);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_possibleConstructorReturn(this,(_getPrototypeOf2=_getPrototypeOf(DataTableTitle)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={spinAnim:new Animated.Value(_this.props.sortDirection==='ascending'?0:1)};return _this;}_createClass(DataTableTitle,[{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){if(prevProps.sortDirection===this.props.sortDirection){return;}Animated.timing(this.state.spinAnim,{toValue:this.props.sortDirection==='ascending'?0:1,duration:150,useNativeDriver:true}).start();}},{key:"render",value:function render(){var _this$props=this.props,numeric=_this$props.numeric,children=_this$props.children,onPress=_this$props.onPress,sortDirection=_this$props.sortDirection,theme=_this$props.theme,style=_this$props.style,numberOfLines=_this$props.numberOfLines,rest=_objectWithoutProperties(_this$props,["numeric","children","onPress","sortDirection","theme","style","numberOfLines"]);var textColor=color(theme.colors.text).alpha(0.6).rgb().string();var spin=this.state.spinAnim.interpolate({inputRange:[0,1],outputRange:['0deg','180deg']});var icon=sortDirection?React.createElement(Animated.View,{style:[styles.icon,{transform:[{rotate:spin}]}],__source:{fileName:_jsxFileName,lineNumber:96}},React.createElement(Icon,{source:"arrow-down",size:16,color:theme.colors.text,__source:{fileName:_jsxFileName,lineNumber:97}})):null;return React.createElement(TouchableWithoutFeedback,_extends({disabled:!onPress,onPress:onPress},rest,{__source:{fileName:_jsxFileName,lineNumber:102}}),React.createElement(View,{style:[styles.container,numeric&&styles.right,style],__source:{fileName:_jsxFileName,lineNumber:103}},icon,React.createElement(Text,{style:[styles.cell,sortDirection?styles.sorted:{color:textColor}],numberOfLines:numberOfLines,__source:{fileName:_jsxFileName,lineNumber:106}},children)));}}]);return DataTableTitle;}(React.Component);DataTableTitle.displayName='DataTable.Title';DataTableTitle.defaultProps={numberOfLines:1};var styles=StyleSheet.create({container:{flex:1,flexDirection:'row',alignContent:'center',paddingVertical:12},right:{justifyContent:'flex-end'},cell:{height:24,lineHeight:24,fontSize:12,fontWeight:'500',alignItems:'center'},sorted:{marginLeft:8},icon:{height:24,justifyContent:'center'}});export default withTheme(DataTableTitle);export{DataTableTitle};
//# sourceMappingURL=DataTableTitle.js.map