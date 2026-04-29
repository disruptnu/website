import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-surface-primary text-white p-8">
          <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
          <p className="text-lg mb-6">Please try refreshing the page.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-brand-lime text-black font-medium rounded-full hover:opacity-90"
          >
            Refresh
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
