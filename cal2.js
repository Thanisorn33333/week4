import React from 'react'
import {View,Text,StyleSheet,Alert,Button,TextInput} from "react-native";

export default function CalDemo(){
        
     
       let [inputNum1, setInputNum1] = React.useState(0)
       let [inputNum2, setInputNum2] = React.useState(0)
       let[result,setResult] = React.useState(0)
      
       const onPressButton1 = () =>{
        let a=parseInt(inputNum1)
        let b=parseInt(inputNum2)
        let c=0.5*a*b
        setResult(c)
       }
      
    
return(

    <View style={styles.container}>
        <View style={styles.item}>
            <Text>โปรแกรมคำนวณพื้นที่สามเหลี่ยม</Text>
            <Text>ความกว้าง</Text>
            <TextInput style={styles.textInput} defaultValue={inputNum1}
             onChange={event => setInputNum1(event.nativeEvent.text)}
            />

              <View style={styles.item}>
            <Text>ความยาว</Text>
            <TextInput style={styles.textInput} defaultValue={inputNum2}
             onChangeText={text => setInputNum2(text)}
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