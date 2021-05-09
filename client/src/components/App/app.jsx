import React from 'react'

import Routes from '../../routes'
import {AuthPage} from '../Pages'

import styled from 'styled-components'


class App extends React.Component{
    state = {}
    componentDidMount(){};
    render(){
        const routes = Routes(false)
        return(
            <AppContainer>
                {routes}
            </AppContainer>
        )
    }
}

const AppContainer = styled.div`
    background: #f7f7fc;
`

export default App
