import _classCallCheck from"@babel/runtime/helpers/classCallCheck";import _createClass from"@babel/runtime/helpers/createClass";import _possibleConstructorReturn from"@babel/runtime/helpers/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime/helpers/getPrototypeOf";import _inherits from"@babel/runtime/helpers/inherits";var _jsxFileName="/Users/pritishvaidya/WebstormProjects/Personal/react-native-paper/src/components/Card/CardTitle.tsx";import*as React from'react';import{StyleSheet,View}from'react-native-web';import{withTheme}from'../../core/theming';import Caption from'./../Typography/Caption';import Title from'./../Typography/Title';var LEFT_SIZE=40;var CardTitle=function(_React$Component){_inherits(CardTitle,_React$Component);function CardTitle(){_classCallCheck(this,CardTitle);return _possibleConstructorReturn(this,_getPrototypeOf(CardTitle).apply(this,arguments));}_createClass(CardTitle,[{key:"render",value:function render(){var _this$props=this.props,left=_this$props.left,leftStyle=_this$props.leftStyle,right=_this$props.right,rightStyle=_this$props.rightStyle,subtitle=_this$props.subtitle,subtitleStyle=_this$props.subtitleStyle,style=_this$props.style,title=_this$props.title,titleStyle=_this$props.titleStyle;return React.createElement(View,{style:[styles.container,{height:subtitle||left||right?72:50},style],__source:{fileName:_jsxFileName,lineNumber:106}},left?React.createElement(View,{style:[styles.left,leftStyle],__source:{fileName:_jsxFileName,lineNumber:114}},left({size:LEFT_SIZE})):null,React.createElement(View,{style:[styles.titles],__source:{fileName:_jsxFileName,lineNumber:121}},title?React.createElement(Title,{style:[styles.title,{marginBottom:subtitle?0:2},titleStyle],numberOfLines:1,__source:{fileName:_jsxFileName,lineNumber:123}},title):null,subtitle?React.createElement(Caption,{style:[styles.subtitle,subtitleStyle],numberOfLines:1,__source:{fileName:_jsxFileName,lineNumber:136}},subtitle):null),React.createElement(View,{style:rightStyle,__source:{fileName:_jsxFileName,lineNumber:142}},right?right({size:24}):null));}}]);return CardTitle;}(React.Component);CardTitle.displayName='Card.Title';var styles=StyleSheet.create({container:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingLeft:16},left:{justifyContent:'center',marginRight:16,height:LEFT_SIZE,width:LEFT_SIZE},titles:{flex:1,flexDirection:'column',justifyContent:'center',height:50},title:{minHeight:30},subtitle:{minHeight:20,marginVertical:0}});export default withTheme(CardTitle);export{CardTitle};
//# sourceMappingURL=CardTitle.js.map