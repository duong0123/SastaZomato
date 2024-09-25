import React from 'react'
import { StyleSheet,Text,View,Image, TouchableOpacity } from 'react-native'
import logo from '../../../assets/logo.png';
import { color,hr80, titles } from '../../globals/style';

const WelcomeScreen = ({navigation}) => {
  return (
<View style={styles.container}>
        <Text style={styles.title} > Chào mừng bạn đến với Foodie </Text>
        <View style= {styles.logoout}>
            <Image source={logo} />
        </View>
        <View style={hr80}/>
        <Text style={styles.text}>Tìm món ăn tốt nhất xung quanh bạn với giá thấp nhất.</Text>
        <View style={hr80}/>

        <View style={styles.btnout}> 
            <TouchableOpacity  onPress={()=>navigation.navigate('login')}>
                <Text style={styles.btn}>Đăng Nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('signup')}>
                <Text style={styles.btn}>Đăng Ký</Text>
            </TouchableOpacity>
           
        </View>
</View>
  )
} 

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
        width:'100  %',
        alignItems:'center',
        justifyContent:'center',
        

    },
   title:{
    fontSize:35,
    textAlign:'center',
    marginVertical:10,
    fontWeight:'bold',
   },

    logoout:{
        width:"70%",
        height:"38%",
        alignItems:'center',
    },
   text:{
     
        fontSize:18,
        width:'80%',
        textAlign:'center',
   },
   btnout:{
        flexDirection:'row',
   },
   btn:{
        fontSize:20,
        color:'white',
        textAlign:'center',
        marginVertical:30,
        marginHorizontal:10,
        fontWeight:"700",
        backgroundColor:color.backgroundColor,
        borderRadius:10,
        padding:10,
        paddingHorizontal:20,

   },

})

export default WelcomeScreen
