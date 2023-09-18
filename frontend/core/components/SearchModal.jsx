import { View, Text, Platform, StatusBar, SafeAreaView, ScrollView, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../styles/styles';
import { Searchbar } from 'react-native-paper';
import SearchItem from './SearchItem';



const SearchModal = ({ searchQuery, setActiveSearch, setSearchQuery, products = [] }) => {
    const navigate = useNavigation();
    const backAction = ()=>{
        setSearchQuery("");
        setActiveSearch(false);
        return true;
    }
    useEffect(()=>{
        BackHandler.addEventListener("hardwareBackPress",backAction);

        return ()=>{
            BackHandler.removeEventListener("hardwareBackPress",backAction);
        }
    },[]);
    return (
        <View style={{ width: "100%", height: "100%", position: "absolute", top: 0, zIndex: 100, backgroundColor: colors.color2, padding: 35, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
            <SafeAreaView>
                <Searchbar placeholder='Search...'
                    onChangeText={(query) => setSearchQuery(query)}
                    value={searchQuery}
                    style={{ marginTop: 20 }} />
                <ScrollView>
                    <View style={{ paddingVertical: 40, paddingHorizontal: 10 }}>
                        {
                            products.map(i => (<SearchItem key={i._id} 
                                imgSrc={i.images[0]?.url}
                                name={i.name}
                                price={i.price}
                                handler = {()=>navigate.navigate("productdetails",{id:i._id})}
                                 />))
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default SearchModal