import React, { Component, useState } from "react";
import Rollbar from "rollbar";

type Props = {
  children: React.ReactNode;
};

/**
 * This `ErrorBoundary` component is needed to report the error from
 * `ComponentRenderBlowup`. (It is not needed for server-side error reporting or
 * client-side event handler reporting.)
 * See https://reactjs.org/docs/error-boundaries.html
 */
class ErrorBoundary extends Component<Props> {
  state = {
    errorCode: "",
    hasError: false,
    rollbar: new Rollbar({
      accessToken: "insert rollbar post_client_item token here",
      captureUncaught: true,
      captureUnhandledRejections: true,
    }),
  };

  static getDerivedStateFromError() {
    return {
      errorCode: Math.random()
        .toString(36)
        .slice(2, 6),
      hasError: true,
    };
  }

  componentDidCatch(error: Error) {
    const { errorCode, rollbar } = this.state;
    rollbar.error(`${errorCode} ${String(error)}`, error);
  }

  render() {
    const { children } = this.props;
    const { errorCode, hasError } = this.state;
    if (hasError) {
      return <div>Unexpected error. Error code: {errorCode}</div>;
    }
    return <>{children}</>;
  }
}

const BlowupIndex = () => {
  return (
    <ErrorBoundary>
      <h1>Test Rollbar error reporting</h1>
      <ol>
        <li>
          <a href="/blowup-ssr">Test server-side error reporting</a>
        </li>
        <li>
          <ComponentRenderBlowup />
        </li>
        <li>
          <EventHandlerBlowup />
        </li>
      </ol>
    </ErrorBoundary>
  );
};

export default BlowupIndex;

const ComponentRenderBlowup = () => {
  const [isReady, setIsReady] = useState(false);
  const handleClick = () => {
    setIsReady(true);
  };
  if (isReady) {
    throw new Error("client-side component render blowup");
  }
  return (
    <div>
      <button onClick={handleClick}>
        Test client-side component rendering error reporting
      </button>
    </div>
  );
};

const EventHandlerBlowup = () => {
  const handleClick = () => {
    throw new Error("client-side event handler blowup");
  };
  return (
    <button onClick={handleClick}>
      Test client-side event handler error reporting
    </button>
  );
};
