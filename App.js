import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { RNCamera } from 'react-native-camera';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      barcode: ''
    }
  }

  onBarCodeRead = (data) => {
    this.setState({
      barcode: data.data
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
            onBarCodeRead={this.onBarCodeRead}
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
          <View style={styles.capture}>
            <Text style={{fontSize: 14}}>{this.state.barcode} </Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});
