import React from 'react';
import {View, TextInput, Text} from 'react-native';


const Input = ({label,value,onChangeText, placeholder, autoCorrect, secureTextEntry})=>{
    const { containerStyle, inputStyle, labelStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput 
                value={value}
                secureTextEntry = {secureTextEntry}
                placeholder = {placeholder}
                onChangeText={onChangeText}
                style={inputStyle}
                autoCorrect={false}
            />
        </View>
    )
};


const styles = {
    inputStyle:{
        color:'#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle:{
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle:{
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export {Input};
