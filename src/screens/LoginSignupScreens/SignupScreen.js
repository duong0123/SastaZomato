import React, { useState } from 'react'
import { StyleSheet,View ,Text, TextInput, TouchableOpacity} from 'react-native'
import  { color, titles,btn1,hr80 } from '../../globals/style'
import {AntDesign} from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import  {MaterialCommunityIcons} from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';

const SignupScreen = ({navigation}) => {
    const [emailfocus, setEmailfocus] = useState(false);
    const [passwordfocus, setPasswordfocus] = useState(false);
    const [fulnamefocus, setFullnamefocus] = useState(false);

    const [showpassword, setShowpassword] = useState(false);
    const [showcpassword, setShowcpassword] = useState(false);
    const [cpasswordfocus, setcPasswordfocus] = useState(false);
    const [phonefocus, setPhonefocus] =useState(false);
  return (
    
    <View style={styles.container}>
        <Text style={styles.head1}>Đăng Kí</Text>
        <View style={styles.inputout}>  
             <AntDesign name="user" size={24} color={fulnamefocus === true ? color.text1 : color.text2} />
            <TextInput style={styles.input} placeholder="Họ và tên "
            onFocus={()=>{
                setFullnamefocus(true)
                setEmailfocus(false)
                setPasswordfocus(false)
                setShowpassword(false)
                setcPasswordfocus(false) 
                setPhonefocus(false)
            }}/>
        </View>
        <View style={styles.inputout}>  
             <Entypo name="email" size={24} color={emailfocus === true ? color.text1 : color.text2} />
           
            <TextInput style={styles.input} placeholder="Email"
            onFocus={()=>{
                setFullnamefocus(false)
                setEmailfocus(true)
                setPasswordfocus(false)
                setShowpassword(false)
                setcPasswordfocus(false) 
                setPhonefocus(false)
            }}/>
        </View>
        <View style={styles.inputout}>  
            <Feather name="smartphone" size={24} color={phonefocus === true ? color.text1 : color.text2} />
            <TextInput style={styles.input} placeholder="Số điện thoại"
            onFocus={()=>{
                setFullnamefocus(false)
                setEmailfocus(false)
                setPhonefocus(true)
                setPasswordfocus(false)
                setShowpassword(false)
                setcPasswordfocus(false) 
            }}/>
        </View>
        {/* password start */}
        <View style={styles.inputout}>
            <MaterialCommunityIcons name="lock-outline" size={24} 
            color={passwordfocus == true ? color.text1 : color.text2}/>
            <TextInput style={styles.input} placeholder="Mật khẩu"
            onFocus={()=>{
              setFullnamefocus(false)
              setEmailfocus(false)
              setPhonefocus(false)
                setEmailfocus(false)
                setPasswordfocus(true) 
                setcPasswordfocus(false) 
            }}
                secureTextEntry={showpassword === false?true:false}
            />
            <Octicons name={showpassword == false ? 'eye-closed' :"eye"} size={24} color="black" onPress={()=>
                setShowpassword(!showpassword)}/>
        </View>
        {/* passwordend */}
        <View style={styles.inputout}>
            <MaterialCommunityIcons name="lock-outline" size={24} 
            color={cpasswordfocus == true ? color.text1 : color.text2}/>
            <TextInput style={styles.input} placeholder="Xác nhận mật khẩu"
            onFocus={()=>{
              setPhonefocus(false)
              setFullnamefocus(false)
                setEmailfocus(false)
                setcPasswordfocus(true) 
                setPasswordfocus(false) 
            }}
                secureTextEntry={showcpassword === false?true:false}
            />
            <Octicons name={showcpassword == false ? 'eye-closed' :"eye"} size={24} color="black" onPress={()=>
                setShowcpassword(!showcpassword)}/>
        </View>
              <Text style={styles.address}>Vui lòng nhập địa chỉ của bạn</Text>
              <View style={styles.inputout}>
                  <TextInput style={styles.input1} placeholder='Nhập địa chỉ của bạn '></TextInput>
              </View>



         <TouchableOpacity style={btn1}>
                <Text style={{color:color.col1,fontSize: titles.btntxt,fontWeight:"bold"}}>
                Đăng Ký
              
                </Text>
         </TouchableOpacity>

        {/* <Text style={styles.forgot} >Quên mật khẩu?</Text>         */}
        <Text style={styles.or} >Hoặc</Text>      
        <Text style={styles.gftxt} >Đăng nhập với</Text>         



        <View style={styles.gf}>
            <TouchableOpacity>
                <View style={styles.gficon}>
                    <AntDesign name="google" size={24} color='#EA4335'/>
                 </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.gficon}>
                    <FontAwesome5 name="facebook-f" size={24} color='#4267B2'/>
                 </View>
            </TouchableOpacity>
        </View>     
        <View style={hr80}></View>
        <Text >
            Đã có tài khoản? <Text style={styles.signup}  onPress={()=>navigation.navigate('login')}>Đăng Nhập</Text>
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        width:'100',
        alignItems:'center',
        // justifyContent:'center', 
        marginTop:60,
    },
    head1:{
        fontSize:titles.titles1,
        color:color.text1,
        textAlign:'center',
        marginVertical:10,

    },
    inputout:{
        flexDirection:'row',
        width:'80%',
        marginVertical:10,
        backgroundColor:color.col1,
        borderRadius:10,
        paddingHorizontal:10,
        paddingVertical:10,
        // alignSelf:'center',
        elevation:20,
    },
    input:{
        fontSize:18,
        marginLeft:10,
        width:'80%'
    },
    forgot:{
        color:color.text2,
        marginTop:20,
        marginBottom:10,
    },
    or:{
        color:color.text1,
        marginVertical:10,
        fontWeight:'bold',
    },
    gftxt:{
        color:color.text2,
        marginVertical:10,
        fontSize:20,
    },
    gf:{
        flexDirection:'row',
    },
    gficon:{
        backgroundColor:'white',
        width:50,
        marginHorizontal:10,
        borderRadius:10,
        padding:10,
        alignItems:'center',
        elevation:25,
    },
    signup:{
        color:color.text1,
    },
    address:{
      fontSize:18,
      color:color.text2,
      textAlign:'center',
      marginTop:20,
    },
})

export default SignupScreen
