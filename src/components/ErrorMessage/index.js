import React from 'react';
import './index.scss';

const ErrorMessage = (props) => (props.error && <div className="error-message">{props.error}</div>)

export default ErrorMessage;