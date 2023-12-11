import { ReactNode, ReactElement, JSX } from 'react';
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from './ErrorBoundary';


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