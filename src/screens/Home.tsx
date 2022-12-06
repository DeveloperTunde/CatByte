//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Pressable, Modal, Alert, TextInput } from 'react-native';
import useFetch from '../hooks/UseFetch';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUsersData } from '../redux/actions';
import style from '../styles/style';
import { Colors } from '../constants/Colors';

const Home = ({navigation}:any) => {

    const { usersData } = useSelector (state => state.userReducer);
    const dispatch     = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);

    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [age, setAge] = useState('');
    const [imagelink, setImageLink] = useState('');

    const onChangeHandler = (name, value) => {
        if(name=="username"){
            setUsername(value)
        }else if (name=="firstname") {
            setFirstname(value);
        }else if (name=="lastname") {
            setLastname(value)
        }else if (name=="age") {
            setAge(value)
        }else if (name=="imagelink") {
            setImageLink(value)
        }
       }

    useEffect(() => {
     getData()
    }, [])
    
    async function getData(){
        let isMounted = true;

        return fetch("https://dummyjson.com/users", {
            method: "GET",
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',   
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
             // console.log(responseJson);
              if (isMounted) {
                 dispatch(setUsersData(responseJson['users']))
              }
            })
            .catch((error) => {
                console.error(error);
            });

          return () => { isMounted = false };


       }



       function addMoreUser(){
           if(firstname !='' && lastname !='' && age !='' &&  username !='' && imagelink !=''){
            const newUser = {
                "firstName": firstname,
                "lastName": lastname,
                "age": age,
                "username": username,
                "image":imagelink,
                
               }
            const newUsersArray = [newUser, ...usersData,];
            dispatch(setUsersData(newUsersArray))
            Alert.alert('Success', 'The user has been added successfully');
            setModalVisible(false);
           }else{
               Alert.alert('Form Error', 'Please fill the box(es)')
           }
           
       }

       async function removeUser(id:any){
          const filteredUsers = await usersData.filter((filtered:any)=> filtered.id !== id);
          dispatch(setUsersData(filteredUsers))
       }
    return (
        <View style={style.page_container}>
        <View style={style.screen_container}>
             <View style={style.screen_top}>
                <View style={style.user_container}>
                <FlatList
                    data={usersData}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    renderItem={({item}) => (
                        <View style={style.user_wrapper}>
                            <Pressable style={style.remove_btn} onPress={() => removeUser(item.id)}>
                                <Text style={style.remove_btn_text}>×</Text>
                            </Pressable>
                            <Pressable style={{width:'100%', height:'100%'}}  onPress={()=> navigation.navigate('UserDetails', {user:item})} >
                                <Image source={{uri:item.image}} style={style.is_img} /> 
                                <View style={style.content_wrapper}  >
                                    <Text style={style.content_text}>{item.username} {item.age}</Text>
                                </View>
                            </Pressable>
                        </View>
                    ) }
                    />
                </View>
             </View>
             <View style={style.screen_bottom}>
                 <Pressable style={style.bottom_btn} onPress={() => setModalVisible(true)}>
                     <Text style={style.bottom_btn_text}>Add</Text>
                 </Pressable>
             </View>

             <View style={styles.centeredView}>
     
  
         </View>
    
        </View>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={style.centeredView}>
          <View style={style.modalView}>

            <View style={style.form_group}>
                <Text style={style.label} >Username</Text>
                <View style={style.form_input_type_2_wrap}>
                    <TextInput 
                        style={style.form_input_type_2}
                        placeholder='Enter Username'
                        placeholderTextColor={Colors.white}
                        value={username}
                        onChangeText={(value)=>onChangeHandler('username',value)}
                    />
                </View>
             </View>

             <View style={style.form_group}>
                <Text style={style.label} >First Name</Text>
                <View style={style.form_input_type_2_wrap}>
                    <TextInput 
                        style={style.form_input_type_2}
                        placeholder='Enter First Name'
                        placeholderTextColor={Colors.white}
                        value={firstname}
                        onChangeText={(value)=>onChangeHandler('firstname',value)}
                    />
                </View>
             </View>

             <View style={style.form_group}>
                <Text style={style.label} >Last Name</Text>
                <View style={style.form_input_type_2_wrap}>
                    <TextInput 
                        style={style.form_input_type_2}
                        placeholder='Enter Last Name'
                        placeholderTextColor={Colors.white}
                        value={lastname}
                        onChangeText={(value)=>onChangeHandler('lastname',value)}
                    />
                </View>
             </View>

             <View style={style.form_group}>
                <Text style={style.label} >Age</Text>
                <View style={style.form_input_type_2_wrap}>
                    <TextInput 
                        style={style.form_input_type_2}
                        placeholder='Enter Age'
                        placeholderTextColor={Colors.white}
                        value={age}
                        onChangeText={(value)=>onChangeHandler('age',value)}
                    />
                </View>
             </View>

             <View style={style.form_group}>
                <Text style={style.label} >Image Link</Text>
                <View style={style.form_input_type_2_wrap}>
                    <TextInput 
                        style={style.form_input_type_2}
                        placeholder='Enter Image Link'
                        placeholderTextColor={Colors.white}
                        value={imagelink}
                        onChangeText={(value)=>onChangeHandler('imagelink',value)}
                    />
                </View>
             </View>

            <View style={{width:'100%', flexDirection:'row', justifyContent:'space-between', marginTop:30, paddingHorizontal: '15%'}}>
                <Pressable
                style={[style.button, style.buttonSubmit]}
                onPress={()=>addMoreUser()}
                >
                    <Text style={style.textStyle}>Submit</Text>
                </Pressable>
                <Pressable
                style={[style.button, style.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
                >
                    <Text style={style.textStyle}>Cancel</Text>
                </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      </View>

    );
};




export default Home;
