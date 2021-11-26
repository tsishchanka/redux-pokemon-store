import React, {Component} from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      isError: false,
    };
  }

  static getDerivedStateFormError(error) {
    console.log(error)
    return {isError: true};
  }

  componentDidCatch(error, errorInfo) {
    //
  }

  render() {
    if (this.state.isError) {
      return (
        <div>
          <iframe
            src="https://giphy.com/embed/f6JH3qn4W8iL3tN0E8"
            width: "480"
            height="270"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen></iframe>
        </div>
      );
    } else {
      return <>{this.props.children} </>
    }
  }
}


export default ErrorBoundary;
