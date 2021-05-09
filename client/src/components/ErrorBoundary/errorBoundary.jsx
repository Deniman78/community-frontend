import React from 'react'

import {ErrorIndicator} from '../ErrorIndicator'

class ErrorBoundary extends React.Component{
    state = {hasError: false}
    componentDidCatch(){
        this.setState({hasError: true})
    }
    render(){
        const {hasError} = this.state
        return(
            <>
            {hasError ? (
                <ErrorIndicator/>
            ) : (
                this.props.children
            ) }
            </>
        )
    }
}

export default ErrorBoundary
