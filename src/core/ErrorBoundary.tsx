import { Component, ReactNode, ReactElement, JSX } from 'react';
import SomethingWentWrong from '../web/pages/access-request-page/SomethingWentWrong';

type Props = {
    children?: ReactNode | ReactElement | JSX.Element;
}
export default class ErrorBoundary extends Component<Props> {
    state = {
        hasError: false,
        error: {},
        info: {},
    };

    processError = () => {
        this.setState({
            hasError: false,
            error: {},
            info: {},
        })
    };

    componentDidCatch(error = {}, info = {}) {
        this.setState({
            hasError: true,
            error,
            info,
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                   <SomethingWentWrong/>
                </div>
            );
        }

        return this.props.children;
    }
}