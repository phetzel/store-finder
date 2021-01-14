import React from 'react';
import {View, Button, Dimensions, StyleSheet, Text} from 'react-native';

import SlidingUpPanel from 'rn-sliding-up-panel';

const {height} = Dimensions.get('window')

class MapBottom extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello world</Text>
        <SlidingUpPanel
          ref={c => (this._panel = c)}
          draggableRange={{top: -100, bottom: -650}}
          animatedValue={this._draggedValue}
        //   animatedValue={0}
          showBackdrop={false}>
          <View style={styles.panel}>
            <View style={styles.panelHeader}>
              <Text style={{color: '#FFF'}}>Bottom Sheet Peek</Text>
            </View>
            <View style={styles.content}>
              <Text>Bottom Sheet Content</Text>
              <Button title='Show panel' onPress={() => this._panel.show()} />
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//     alignItems: 'center',
//     justifyContent: 'center',
    // marginTop: 400,
    zIndex: 10
  },
  content: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  panel: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative'
  },
  panelHeader: {
    height: 120,
    backgroundColor: '#b197fc',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default MapBottom;