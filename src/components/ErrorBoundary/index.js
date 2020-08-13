import React, { Component } from 'react';
import './index.scss';

class ErrorBoundary extends Component {

	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
			error: null,
			errorInfo: null
		};
	}

	componentDidCatch(error, info) {
		this.setState({
			hasError: true,
			error: error,
			errorInfo: info
		});
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="card">
					<img src="assets/error.png" alt="Avatar" />
					<div className="container">
						<h4><b>Sorry Something went wrong!!!</b></h4>
					</div>
				</div>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;