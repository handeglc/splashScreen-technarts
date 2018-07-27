
'use strict';


import React, {Component} from 'react';
import {
    WebView,
} from 'react-native'
import SplashScreen from 'react-native-splash-screen'

export default class example extends Component {

    componentDidMount() {
        SplashScreen.hide();
    }


    render() {
        return (
            <WebView
                source={{uri: 'http://technarts.com/'}}
                style={{marginTop: 20}}
              />
        )
    }

}
