import React from 'react'
import {View,Text,StyleSheet,Alert,Button,TextInput} from "react-native";

export default function CalDemo4(){

     
     
       let [inputNum1, setInputNum1] = React.useState(0)
       let [inputNum2, setInputNum2] = React.useState(0)
       let [result,setResult] = React.useState(0)
       let [resultg,setResultg] = React.useState(0)
       
     const onPressButton1 =() =>{
        let a= parseInt(inputNum1)
        let b= parseInt(inputNum2)
        let rscore= a+b
       
        if(rscore >=75){
          msg ='good'
        }else if (rscore >=50){
          msg ='pass'
        }else if (rscore >=49){
          msg ='fail'
        }else{
          msg = 'ใส่ค่าคะแนนให้ถูกต้อง'
        }

        setResult(msg)
        setResult(rscore)
       
       }

return(
<View style={styles.container}>
        <View style={styles.item}>
            <View><Text>โปรแกรมคำนวณเกรด</Text></View>
              <View style={styles.item}>
           <Text>คะแนนสอบ</Text>
            <TextInput style={styles.textinput} defaultValue={inputNum1}onChange={event => setInputRum1(event.nativeEvent.text)}
             keyboardType='number-pad'/>
            </View>
            <View style={styles.item}>
             <Text>คะแนนงาน</Text>
             <TextInput style={styles.textinput} defaultValue={inputNum2}onChange={event => setInputRum1(event.nativeEvent.text)}
             keyboardType='number-pad'/>
                 </View>
                  </View>
             <View>
                <Text>คะแนนรวม : {totalScore}</Text>
                <Text>เกรด: {grade}</Text>
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











