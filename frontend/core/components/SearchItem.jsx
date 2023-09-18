import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles';
import { Headline } from 'react-native-paper';

const SearchItem = (name,imgSrc,price,handler) => (
    <TouchableOpacity onPress={handler}
   
    >

        <View  style={{padding:20,borderRadius:10,
        backgroundColor:colors.color2,
        elevation:5,alignItems:"center",
        justifyContent:"flex-end",
        flexDirection:"row",
        marginVertical:30
    }}>

        <Image source={{uri:imgSrc}} style={{width:80,height:80,
        position:"absolute",
        resizeMode:"center",top:-15,
        left:10,borderTopLeftRadius:20,borderTopRightRadius:20}}  />
        <View style={{width:"80%",paddingHorizontal:30}}></View>
            <Text numberOfLines={1}>{name}</Text>
            <Headline  numberOfLines={1} style={{fontWeight:900}}>UGX.{price}</Headline>

        </View>
    </TouchableOpacity>
);

export default SearchItem