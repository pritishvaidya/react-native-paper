import _objectSpread from"@babel/runtime/helpers/objectSpread";import _toConsumableArray from"@babel/runtime/helpers/toConsumableArray";import _classCallCheck from"@babel/runtime/helpers/classCallCheck";import _createClass from"@babel/runtime/helpers/createClass";import _possibleConstructorReturn from"@babel/runtime/helpers/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime/helpers/getPrototypeOf";import _inherits from"@babel/runtime/helpers/inherits";var _jsxFileName="/Users/pritishvaidya/WebstormProjects/Personal/react-native-paper/src/components/Portal/PortalManager.tsx";import*as React from'react';import{View,StyleSheet}from'react-native-web';var PortalManager=function(_React$PureComponent){_inherits(PortalManager,_React$PureComponent);function PortalManager(){var _getPrototypeOf2;var _this;_classCallCheck(this,PortalManager);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_possibleConstructorReturn(this,(_getPrototypeOf2=_getPrototypeOf(PortalManager)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={portals:[]};_this.mount=function(key,children){_this.setState(function(state){return{portals:[].concat(_toConsumableArray(state.portals),[{key:key,children:children}])};});};_this.update=function(key,children){return _this.setState(function(state){return{portals:state.portals.map(function(item){if(item.key===key){return _objectSpread({},item,{children:children});}return item;})};});};_this.unmount=function(key){return _this.setState(function(state){return{portals:state.portals.filter(function(item){return item.key!==key;})};});};return _this;}_createClass(PortalManager,[{key:"render",value:function render(){return this.state.portals.map(function(_ref){var key=_ref.key,children=_ref.children;return React.createElement(View,{key:key,collapsable:false,pointerEvents:"box-none",style:StyleSheet.absoluteFill,__source:{fileName:_jsxFileName,lineNumber:42}},children);});}}]);return PortalManager;}(React.PureComponent);export{PortalManager as default};
//# sourceMappingURL=PortalManager.js.map