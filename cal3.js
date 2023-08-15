import React from 'react'
import {View,Text,StyleSheet,Alert,Button,TextInput} from "react-native";

export default function CalDemo(){
        
     
       let [inputNum1, setInputNum1] = React.useState(0)
       let [inputNum2, setInputNum2] = React.useState(0)
       let[result,setResult] = React.useState(0)
      
       const onPressButton1 = () =>{
        let num=parseInt(inputNum1)
        let msg=''
        let cal=num%2
        if(cal===0){
          msg='เลขคู่'
        }else{
          msg='เลขคี่'
        }
        setResult(msg)
       }
      
    
return(

    <View style={styles.container}>
        <View style={styles.item}>
            <Text>โปรแกรมคำนวณเลขคู่ เลขคี่</Text>
            
              <View style={styles.item}>
            <Text>เลขคำนวณ</Text>
            <TextInput style={styles.textInput} defaultValue={inputNum1}
             onChangeText={text => setInputNum1(text)}
             keyboardType='numberic' 
            />
            </View>
            <View>
                <Text>ผลลัพธ์ : {result}</Text>
            </View>
            </View>
    <View style={styles.item}>
       <Button title="คำนวณ" color = "#FF1493" onPress={ onPressButton1 }/>
      
    </View>
    </View>
    

)
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'colum',
        marginTop:60,
        alignItems: 'center'
    },
    item:{
        marginBottom:15
    },
    TextInput:{
       height:32,
       width:320,
       borderWidth:1,
       borderColor: '#aaa',
       color:'black',
       backgroundColor:'#fff',
       marginTop:5,
       paddingTop:3,
       paddingButtom:3



    }
    
})