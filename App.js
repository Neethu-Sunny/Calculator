import React, { useState } from "react";
import { StyleSheet,Text,TouchableOpacity,View,Alert } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
 
const Calculator = () =>{
const[result,setResult]=useState('');
  const calculate=(title)=>{
    
   if(title == '=')  
   Alert.alert('Hello world')
  else if(title=='AC')
  setResult('');
   else
   setResult(result + title);
  }
  
  return(
   
    <View style={styles.container}>
      <View style={styles.rowview}>
        
     <Text style={styles.calculation}>{result}</Text>
     
     </View>
     <View style={styles.columnview}>
     <View style={styles.btnrow}>
     <TouchableOpacity style={styles.btn} onPress={() =>calculate('AC')} >
      <Text style={styles.symbolview}>AC</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn}>
      <Text style={styles.symbolview}>( )</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn} onPress={() =>calculate('%')}>
      <Text style={styles.symbolview}>%</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn} onPress={() =>calculate('/')}>
     <Text style={{fontSize:30,color:'#ff4c29'}}>/</Text>
     </TouchableOpacity>
     
     </View>
      <View style={styles.btnrow}>
     <TouchableOpacity  style={styles.btn} onPress={() =>calculate('9')}>
      <Text style={styles.text}>9</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn}  onPress={() =>calculate('8')}>
      <Text style={styles.text}>8</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn} onPress={() =>calculate('7')} >
      <Text style={styles.text}>7</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn} onPress={() =>calculate('*')}>
     <Text style={styles.symbolview}>*</Text>
     </TouchableOpacity>
     
     </View>
     <View style={styles.btnrow}>
     <TouchableOpacity style={styles.btn} onPress={() =>calculate('6')}>
      <Text style={styles.text}>6</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn} onPress={() =>calculate('5')}>
      <Text style={styles.text}>5</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn} onPress={() =>calculate('4')} >
      <Text style={styles.text}>4</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn} onPress={() =>calculate('-')}>    
     <Text style={styles.symbolview}>-</Text>
     </TouchableOpacity>
      </View>
      <View style={styles.btnrow}>
     <TouchableOpacity style={styles.btn} onPress={() =>calculate('3')} >
      <Text style={styles.text}>3</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn} onPress={() =>calculate('2')} >
      <Text style={styles.text}>2</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn} onPress={() =>calculate('1')} >
      <Text style={styles.text}>1</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn} onPress={() =>calculate('+')}>
     <Text style={styles.symbolview}>+</Text>
     </TouchableOpacity>
      </View>
      <View style={styles.btnrow}>
     <TouchableOpacity style={styles.btn} onPress={() =>calculate('0')} >
      <Text style={styles.text}>0</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn}>
      <Text style={styles.symbolview}>.</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn}>
     <Icon name='times-circle' size={25} color='#ff4c29'></Icon>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn} onPress={() =>calculate('=')}>
      <Text style={styles.symbolview}>=</Text>
     </TouchableOpacity>
      </View>
     </View>
     
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:2,
    backgroundColor:'#082032',
   },
   rowview:{
    flex:0.6,
    padding:10,
    marginTop:30
   },
   columnview:{
    flex:1.4,
    padding:10
     
   },
   btnrow:{
     flexDirection:'row',
     justifyContent:'space-evenly',
     padding:10
   },
   boxview:{
    alignSelf:'center',
    justifyContent:'space-evenly',
    alignItems:'center',
    marginTop:30,
    flexDirection:'row'

   },
   btn:{
      width:75,
      height:70,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      borderColor:'white',
      borderWidth:1,
      elevation:25
   },
   calculation:{
    alignSelf:'flex-end',
    fontSize:20,
    color:'#f9f9f9',
   },
   Result:{
    alignSelf:'flex-end',
    fontSize:60,
    color:'#f9f9f9',
    fontWeight:'bold'
   },
   text:{
    fontSize:25,
    color:'#f9f9f9'
   },
   symbolview:{
    fontSize:25,
    color:'#ff4c29'
   }
});
export default Calculator