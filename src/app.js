import  React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Card, CardSection, Spinner} from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component{
    state = { loggedIn: null }
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyD1Z8JoZIObtk8NnXyTP-7oa_lX4WftQLQ",
            authDomain: "auth-47003.firebaseapp.com",
            databaseURL: "https://auth-47003.firebaseio.com",
            projectId: "auth-47003",
            storageBucket: "auth-47003.appspot.com",
            messagingSenderId: "55383874323"
        });

        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({ loggedIn:true })
            }
            else{
                this.setState({ loggedIn:false })
            }
        })
    };

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Card>
                        <CardSection>
                            <Button onPress={()=> firebase.auth().signOut()}>
                                Log out
                            </Button>
                        </CardSection>
                    </Card>
                );
            case false:
                return <LoginForm />;
            default:
                return <View style={styles.spinnerStyle}><Spinner /></View>
        }


        if(this.state.loggedIn){
        }
        else{
        }
    }

    render() {
        return(
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    spinnerStyle: {
        paddingTop: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default App;
