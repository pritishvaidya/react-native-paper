import _objectWithoutProperties from"@babel/runtime/helpers/objectWithoutProperties";import _extends from"@babel/runtime/helpers/extends";import _classCallCheck from"@babel/runtime/helpers/classCallCheck";import _createClass from"@babel/runtime/helpers/createClass";import _possibleConstructorReturn from"@babel/runtime/helpers/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime/helpers/getPrototypeOf";import _inherits from"@babel/runtime/helpers/inherits";var _jsxFileName="/Users/pritishvaidya/WebstormProjects/Personal/react-native-paper/src/components/TouchableRipple/index.tsx";import*as React from'react';import{TouchableWithoutFeedback,View,StyleSheet}from'react-native-web';import color from'color';import{withTheme}from'../../core/theming';var TouchableRipple=function(_React$Component){_inherits(TouchableRipple,_React$Component);function TouchableRipple(){var _getPrototypeOf2;var _this;_classCallCheck(this,TouchableRipple);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_possibleConstructorReturn(this,(_getPrototypeOf2=_getPrototypeOf(TouchableRipple)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.handlePressIn=function(e){var _this$props=_this.props,centered=_this$props.centered,rippleColor=_this$props.rippleColor,onPressIn=_this$props.onPressIn,theme=_this$props.theme;onPressIn&&onPressIn(e);var dark=theme.dark,colors=theme.colors;var calculatedRippleColor=rippleColor||color(colors.text).alpha(dark?0.32:0.2).rgb().string();var button=e.currentTarget;var style=window.getComputedStyle(button);var dimensions=button.getBoundingClientRect();var touchX;var touchY;if(centered){touchX=dimensions.width/2;touchY=dimensions.height/2;}else{var startX=e.nativeEvent.touches?e.nativeEvent.touches[0].pageX:e.pageX;var startY=e.nativeEvent.touches?e.nativeEvent.touches[0].pageY:e.pageY;touchX=startX-dimensions.left;touchY=startY-dimensions.top;}var size=centered?Math.min(dimensions.width,dimensions.height)*1.25:Math.max(dimensions.width,dimensions.height)*2;var container=document.createElement('span');container.setAttribute('data-paper-ripple','');_extends(container.style,{position:'absolute',pointerEvents:'none',top:'0',left:'0',right:'0',bottom:'0',borderTopLeftRadius:style.borderTopLeftRadius,borderTopRightRadius:style.borderTopRightRadius,borderBottomRightRadius:style.borderBottomRightRadius,borderBottomLeftRadius:style.borderBottomLeftRadius,overflow:centered?'visible':'hidden'});var ripple=document.createElement('span');_extends(ripple.style,{position:'absolute',pointerEvents:'none',backgroundColor:calculatedRippleColor,borderRadius:'50%',transitionProperty:'transform opacity',transitionDuration:Math.min(size*1.5,350)+"ms",transitionTimingFunction:'linear',transformOrigin:'center',transform:'translate3d(-50%, -50%, 0) scale3d(0.1, 0.1, 0.1)',opacity:'0.5',left:touchX+"px",top:touchY+"px",width:size+"px",height:size+"px"});container.appendChild(ripple);button.appendChild(container);requestAnimationFrame(function(){requestAnimationFrame(function(){_extends(ripple.style,{transform:'translate3d(-50%, -50%, 0) scale3d(1, 1, 1)',opacity:'1'});});});};_this.handlePressOut=function(e){_this.props.onPressOut&&_this.props.onPressOut(e);var containers=e.currentTarget.querySelectorAll('[data-paper-ripple]');requestAnimationFrame(function(){requestAnimationFrame(function(){containers.forEach(function(container){var ripple=container.firstChild;_extends(ripple.style,{transitionDuration:'250ms',opacity:0});setTimeout(function(){var parentNode=container.parentNode;if(parentNode){parentNode.removeChild(container);}},500);});});});};return _this;}_createClass(TouchableRipple,[{key:"render",value:function render(){var _this$props2=this.props,style=_this$props2.style,background=_this$props2.background,borderless=_this$props2.borderless,disabledProp=_this$props2.disabled,rippleColor=_this$props2.rippleColor,underlayColor=_this$props2.underlayColor,children=_this$props2.children,theme=_this$props2.theme,rest=_objectWithoutProperties(_this$props2,["style","background","borderless","disabled","rippleColor","underlayColor","children","theme"]);var disabled=disabledProp||!this.props.onPress;return React.createElement(TouchableWithoutFeedback,_extends({},rest,{onPressIn:this.handlePressIn,onPressOut:this.handlePressOut,disabled:disabled,__source:{fileName:_jsxFileName,lineNumber:246}}),React.createElement(View,{style:[styles.touchable,borderless&&styles.borderless,style],__source:{fileName:_jsxFileName,lineNumber:252}},React.Children.only(children)));}}]);return TouchableRipple;}(React.Component);TouchableRipple.defaultProps={borderless:false};TouchableRipple.supported=true;var styles=StyleSheet.create({touchable:{position:'relative'},borderless:{overflow:'hidden'}});export default withTheme(TouchableRipple);
//# sourceMappingURL=index.js.map