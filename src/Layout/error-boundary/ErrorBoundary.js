import React from 'react';
import PropTypes from 'prop-types';
import './ErrorBoundary.scss';
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='error-boundary-page'>
          <h1>The unexpected problem is happend please refresh the page</h1>
          <h2>if refresh doesn't fix the problem please contact our support team</h2>
          <h3>detail:</h3>
          <h3>{this.state.error.message}</h3>
        </div>
      );
    }

    return this.props.children;
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.node
};