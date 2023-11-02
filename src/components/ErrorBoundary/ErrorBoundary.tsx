import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Error } from '@components/Error';
import type {
    IErrorBoundaryProps,
    IErrorBoundaryState,
} from '@constants/interfaces/interfaces';

class ErrorBoundary extends Component<
    IErrorBoundaryProps,
    IErrorBoundaryState
> {
    public state: IErrorBoundaryState = {
        hasError: false,
        errorInfo: '',
    };

    public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error('Uncaught error:', error, errorInfo);
        this.setState({
            hasError: true,
            errorInfo: `${error.name}\n${error.message}`,
        });
    }

    public render(): ReactNode {
        const { hasError } = this.state;
        if (hasError) {
            return <Error text={this.state.errorInfo} />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
