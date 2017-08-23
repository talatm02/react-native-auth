import React, {Component} from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import {Card,CardSection,Button,Input, Spinner} from './common';

class LoginForm  extends Component {
    state = { email: '',password: '', error: '', loading: false };

    onButtonPress() {
        this.setState({ error: '', loading: true });
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(this.onLoginSuccess.bind(this))
            .catch(()=>{
                firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this))
            });
    }

    onLoginFail(){
        this.setState({
            loading: false,
            error:"Authantication failed!"
        })
    }

    onLoginSuccess(){
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        })
    }

    renderButton(){
        if(this.state.loading){
            return <Spinner size="small" />
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                LOGIN
            </Button>
        )
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        placeholder = "user@gmail.com"
                    />
                </CardSection>
                
                <CardSection >
                    <Input 
                        label="Password"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        style={{height:20,width:100}} 
                    />
                </CardSection>
                {/* <CardSection> */}
                    <Text style={styles.errorTextStyle}>
                        {this.state.error}
                    </Text>
                {/* </CardSection> */}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorTextStyle:{
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;