import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import style from '../styles/style';


const UserDetails = ({route, navigation}:any) => {
    const {user} = route.params;
    return (
        <View style={style.screen_container_detail}>
            <View style={style.detail_header}>
                <Pressable onPress={()=> navigation.goBack()}>
                     <Text> go back </Text>
                </Pressable>
            </View>
            <View style={style.detail_img}>
                <Image source={{uri:user.image}} style={style.is_img} /> 
            </View>
            <View style={style.user_detail}>
                <Text>First Name</Text>
                <Text>{user.firstName}</Text>
            </View>

            <View style={style.user_detail}>
                <Text>Last Name</Text>
                <Text>{user.lastName}</Text>
            </View>

            <View style={style.user_detail}>
                <Text>Age</Text>
                <Text>{user.age}</Text>
            </View>

            <View style={style.user_detail}>
                <Text>Company Address</Text>
                <Text>{user.company?.address.address}</Text>
            </View>

            <View style={style.user_detail}>
                <Text>Company Postal Code</Text>
                <Text>{user.company?.address.postalCode}</Text>
            </View>


            <View style={style.user_detail}>
                <Text>Company State</Text>
                <Text>{user.company?.address.state}</Text>
            </View>
        </View>
    );
};


export default UserDetails;
