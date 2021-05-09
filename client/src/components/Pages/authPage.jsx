import React from 'react'

import { Form, Input, Button, notification } from 'antd';

import {AuthService} from '../../service' 

import styled from 'styled-components'

const authService = new AuthService()

class AuthPage extends React.Component {
    state = {
        isLoginTab: true,
        loading: false,
    }
    componentDidMount(){}


    onFinish = async(values) => {
        this.setState({loading: true})
        const {status, message} = await authService.register(values)

        notification[status]({
            message: message,
        });
        this.setState({loading: false})
    };

    render(){
        const {isLoginTab, loading} = this.state;
        return(
            <AuthContainer>
            
            <div className="auth_form">
            <div className="tabs">
                <span className={isLoginTab ? "active"  : ''} onClick={() => this.setState({isLoginTab: true})}>Login</span>
                <span className={!isLoginTab ? "active"  : ''} onClick={() => this.setState({isLoginTab: false})}>Register</span>  
            </div>
            
            <Form
            name="basic"
            onFinish={this.onFinish}
            layout="vertical"
            >
            {isLoginTab ? (
                <div className="inputs">
                <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            
            </div>
            ) : (
                <div className="inputs">
                    <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                </div>
            )}
            <Form.Item >
                <Button loading={loading} type="primary" htmlType="submit">
                {isLoginTab ? "Login" : "Register"}
                </Button>
            </Form.Item>
            </Form>
            </div>  
            </AuthContainer>
        )
    }
}

const AuthContainer = styled.div`
    height: 100vh;
    width: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .tabs{
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-bottom: 20px;
        span{
            cursor: pointer;
            text-transform: uppercase;
            font-size: 24px;
            font-weight: 600;
            transition: all .5s;
            width: 120px;
            text-align: center;
            border-bottom: 1px solid white;
        }
        .active{
            border-color: #e8e8e8
        }
    }
    .auth_form{
        width: 400px;
        width: 100%;
        min-height: 400px;
        padding: 20px;
        background-color: #fff;
        box-shadow: 0 2px 5px 0 rgb(51 51 79 / 7%);
        border-radius: 3px;
        border: 1px solid #e8e8e8;
        .ant-form{
            min-height: 318px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }
`

export default AuthPage
