var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=shadow;var Colors=_interopRequireWildcard(require("./colors"));var _reactNative=require("react-native");var SHADOW_COLOR=Colors.black;var SHADOW_OPACITY=0.24;function shadow(){var elevation=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;if(elevation instanceof _reactNative.Animated.Value){var inputRange=[0,1,2,3,8,24];return{shadowColor:SHADOW_COLOR,shadowOffset:{width:new _reactNative.Animated.Value(0),height:elevation.interpolate({inputRange:inputRange,outputRange:[0,0.5,0.75,2,7,23]})},shadowOpacity:new _reactNative.Animated.Value(SHADOW_OPACITY),shadowRadius:elevation.interpolate({inputRange:inputRange,outputRange:[0,0.75,1.5,3,8,24]})};}else{if(elevation===0){return{};}var height,radius;switch(elevation){case 1:height=0.5;radius=0.75;break;case 2:height=0.75;radius=1.5;break;default:height=elevation-1;radius=elevation;}return{shadowColor:SHADOW_COLOR,shadowOffset:{width:0,height:height},shadowOpacity:SHADOW_OPACITY,shadowRadius:radius};}}
//# sourceMappingURL=shadow.js.map