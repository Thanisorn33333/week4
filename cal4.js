import {View,Text,StyleSheet,Alert,Button,TextInput} from "react-native";

export default function CalDemo(){
        const t  = 'Click Count'
     
       let [inputNum1, setInputNum1] = React.useState(0)
       let [inputNum2, setInputNum2] = React.useState(0)
       let[result,setResult] = React.useState(0)
       let[p1,setp1] = React.useState(0)

     const onPressButton1 =() => {
        let num1= parseInt(inputNum1)
        let num2= parseInt(inputNum2)
        let num3= num1+num2
       
        
        if(num3 <=75){
          msg ='good'
        }else if (num3=>50){
          msg ='pass'
        }else {
          msg ='fail'
        }
        setResult(num3)
        set1(msg)
       }
       }
      

      
    
return(

    <View style={styles.container}>
        <View style={styles.item}>
            <Text>โปรแกรมตรวจสอบคะแนนและแสดงเกรด</Text>
  
            </View>
            <View>
                <Text>คะแนนรวม : {totalScore}</Text>
                <Text>เกรด: {grade}</Text>
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