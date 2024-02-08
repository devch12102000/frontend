import { ReactNode, ReactElement, JSX } from 'react';
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from './ErrorBoundary';
import '../web/components/common.scss'
import '../../node_modules/antd/dist/antd.min.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

type Props = {
    children?: ReactNode | ReactElement | JSX.Element;

}
const Core = (props: Props) => {
    return (
        <BrowserRouter>
            <ErrorBoundary>
                {props.children}
            </ErrorBoundary>
        </BrowserRouter>
    )

}

export default Core;