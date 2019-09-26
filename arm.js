import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native'

class arm extends Component {
   constructor(props) {
      super(props);
      this.state = { bath: 0, show: false };
   }
   //30.36
   cal = () => {
      this.setState({
         show: !this.state.show,
      })
   }
   render() {
      return (
         <View style={styles.container}>
            <Text style={styles.main}>Lab3SA04 </Text>
            <Text style={styles.main}>Currency Conversion</Text>
            <TextInput
               style={styles.input}
               placeholder="BATH"
               underlineColorAndroid="transparent"
               placeholderTextColor="#9a73ef"
               onChangeText={bath => this.setState({ bath })}
               value={this.state.bath}
            />
            <View style={styles.aa}>
               <TouchableOpacity style={styles.submitButton} onPress={this.cal}>
                  <View style={styles.convert}>
                     <Text style={styles.submitButtonText}>Convert</Text>
                  </View>
               </TouchableOpacity>
            </View>
            <Text style={styles.fontname}>USD : {this.state.show && (this.state.bath / 30.36).toFixed(2)}</Text>
            
            {
               console.log('USD: ' + this.state.bath)
            }

            <View style={styles.aa}>
               <Image source={require('./photo.jpg')} style={styles.photo}></Image>
            </View>

            <Text style={styles.fontname}>Pheeraphon Kunmuang 6035512024</Text>


         </View>



      )
   }
}

export default arm

const styles = StyleSheet.create({

   container: {
      backgroundColor: '#9AF5F1',
      paddingTop: 30,
      flex: 1,

   },


   aa: {
      alignItems: 'center',
      paddingTop: 20,
   },

   main: {
      color: '#3E40F6',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      paddingTop: 15,
   },


   input: {
      margin: 15,
      height: 40,
      borderColor: '#3E40F6',
      borderWidth: 1,

   },
   submitButton: {
      backgroundColor: '#3E40F6',
      padding: 10,
      margin: 15,
      height: 40,
      width: 100,
      alignItems: 'center',


   },
   submitButtonText: {
      paddingBottom: 100,
      color: 'white',
      textAlign: 'center',
   },

   fontname: {
      paddingTop: 40,
      color: '#3E40F6',
      textAlign: 'center',
      fontSize: 20,

   },
   photo: {
      alignItems: 'center',
      height: 100,
      width: 220,



   }
})