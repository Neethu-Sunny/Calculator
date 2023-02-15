import React, { useState } from "react";
import { StyleSheet,Text,TouchableOpacity,View,Alert,Modal,TouchableHighlight } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
 
const Calculator = () =>{
const[result,setResult]=useState('');
const[showmodal,setShowmodal]=useState(false);
  const calculate=(title)=>{
    
   if(title == '=')  
   //Alert.alert('Hello world')
   setShowmodal(true)
  else if(title=='C')
  setResult('');
   else
   setResult(result + title);
  }
  
  return(
   
    <View style={styles.container}>
      <View style={styles.rowview}>
        
     <Text style={styles.calculation}>{result}</Text>
     
     </View>
     <View  style={styles.buttons}>
      <View style={styles.numbers}>
      <View style={styles.btnrow}>
      <TouchableOpacity style={styles.btn} onPress={() =>calculate('C')} >
      <Text style={styles.symbolview}>C</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn} onPress={() =>calculate('+/-')}>
      <Text style={styles.symbolview}>+/-</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn} onPress={() =>calculate('%')}>
      <Text style={styles.symbolview}>%</Text>
     </TouchableOpacity>
        </View>
      <View style={styles.btnrow}>
      <TouchableOpacity style={styles.btn} onPress={() =>calculate('7')} >
      <Text style={styles.text}>7</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn} onPress={() =>calculate('8')} >
      <Text style={styles.text}>8</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn} onPress={() =>calculate('9')} >
      <Text style={styles.text}>9</Text>
     </TouchableOpacity>
     </View>
     <View style={styles.btnrow}>
     <TouchableOpacity style={styles.btn} onPress={() =>calculate('4')}>
      <Text style={styles.text}>4</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn} onPress={() =>calculate('5')}>
      <Text style={styles.text}>5</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn} onPress={() =>calculate('6')} >
      <Text style={styles.text}>6</Text>
     </TouchableOpacity>
     </View>
     <View style={styles.btnrow}>
     <TouchableOpacity  style={styles.btn} onPress={() =>calculate('1')}>
      <Text style={styles.text}>1</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn}  onPress={() =>calculate('2')}>
      <Text style={styles.text}>2</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn} onPress={() =>calculate('3')} >
      <Text style={styles.text}>3</Text>
     </TouchableOpacity>
      </View>
      <View style={styles.btnrow}>
      <TouchableOpacity style={styles.btn} onPress={() =>calculate('.')} >
      <Text style={styles.symbolview}>.</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn} onPress={() =>calculate('0')} >
      <Text style={styles.text}>0</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn} onPress={() =>calculate('00')}>
     <Text style={styles.text}>00</Text>
     </TouchableOpacity>
      </View>
      </View>
      <View style={styles.operations}>
        
      <TouchableOpacity style={styles.btn} onPress={() =>calculate('/')}>
     <Text style={styles.symbolview}>/</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn} onPress={() =>calculate('*')}>
     <Text style={styles.symbolview}>*</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn} onPress={() =>calculate('-')}>    
     <Text style={styles.symbolview}>-</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn} onPress={() =>calculate('+')}>
     <Text style={styles.symbolview}>+</Text>
     </TouchableOpacity>
     <View style={styles.CircleShape}>
     <TouchableOpacity style={styles.btn} onPress={() =>calculate('=')}>    
      <Text style={styles.symbolvieweqaul}>=</Text>    
     </TouchableOpacity>
     <Modal
     transparent={true}
     visible={showmodal}
     onRequestClose={() => setShowmodal(false)}
     shouldCloseOnEsc={true}>
     
     <View style={{backgroundColor:'#D3D3D3',margin:40,padding:60,borderRadius:20,flex:0.3,marginTop:300,marginRight:90}}>
     <Text style={{fontSize:30,marginTop:40}}>Hello World</Text>
    
     <View style={styles.modalHeaderCloseText}>
     <TouchableHighlight onPress={() => {
      setShowmodal(false)
      }}>
      <Text style={{marginTop:-110,marginLeft:150,fontSize:20,color:'black'}}>X</Text>    
     </TouchableHighlight>
     </View> 
   
     </View>
     </Modal>
     </View>
      </View>
     </View>
     
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#808080',
   },
   rowview:{
    flex:1,
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
      //borderRadius:10,
      //borderColor:'white',
      //borderWidth:1,
      //elevation:25
   },
   calculation:{
    alignSelf:'flex-end',
    fontSize:60,
    color:'#f9f9f9',
   },
   Result:{
    alignSelf:'flex-end',
    fontSize:60,
    color:'#f9f9f9',
    fontWeight:'bold'
   },
   text:{
    fontSize:34,
    color:'#f9f9f9'
   },
   symbolview:{
    fontSize:34,
    color:'#f9f9f9'
   },
   symbolvieweqaul:{
    fontSize:34,
    color:'#696969',
    //justifyContent:'center',
    //alignItems:'center'
    textAlign:'center'
    
   },
   CircleShape: {
    width: 70,
    height: 70,
    borderRadius:35,
    backgroundColor: '#FFFACD',
    alignItems:'center', 
    justifyContent:'center',
    marginTop:60 
          
  },
  operations: {
    flex: 0.6,
    //flexDirection:'column',
    justifyContent:'space-evenly',
    alignItems: 'center',
    backgroundColor: '#555555',
    borderRadius:40,
    //padding:10,
    height:420,
    marginTop:20
  },
  buttons:{
   flex:7,
   flexDirection:'row',
   marginTop:90
  },
  numbers:{
    backgroundColor:'#808080',
    flex:3
  },
  
});
export default Calculator