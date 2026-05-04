import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    (this as any).setState({ error, errorInfo });
  }

  public render() {
    if ((this.state as any).hasError) {
      return (
        <div style={{ padding: "20px", color: "red", backgroundColor: "white", minHeight: "100vh" }}>
          <h1>Something went wrong.</h1>
          <p>{(this.state as any).error && (this.state as any).error.toString()}</p>
          <pre style={{ whiteSpace: "pre-wrap", marginTop: "10px", fontSize: "12px", color: "black" }}>
            {(this.state as any).errorInfo && (this.state as any).errorInfo.componentStack}
          </pre>
        </div>
      );
    }

    return (this as any).props.children;
  }
}
