import * as React from 'react';
import { Theme } from 'react-native-paper';
declare type Props = {
    theme: Theme;
};
declare class RippleExample extends React.Component<Props> {
    static title: string;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof RippleExample) | (React.FunctionComponent<Props> & typeof RippleExample), {}>) | (React.FunctionComponent<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof RippleExample) | (React.FunctionComponent<Props> & typeof RippleExample), {}>);
export default _default;
