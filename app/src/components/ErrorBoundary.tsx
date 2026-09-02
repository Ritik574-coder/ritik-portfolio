import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallbackLabel: string;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Portfolio section failed to render", error, info);
  }

  public render() {
    if (this.state.hasError) {
      return <section className="section-fallback" role="status">{this.props.fallbackLabel} is temporarily unavailable.</section>;
    }
    return this.props.children;
  }
}
