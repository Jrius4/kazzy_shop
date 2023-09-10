import { View, Text, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from '../../../../core/styles/styles'
import Header from '../../../../core/components/Header'
import { Avatar,Button } from 'react-native-paper'
import { categories } from '../../../../core/utils/data'

const Home = () => {
  return (
    <View style={defaultStyle}>
      {/* Header  */}
      <Header />
      <View style={{paddingTop:80,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        {/* Heading row */}
        <View>
          <Text style={{ fontSize: 25 }}>Our</Text>
          <Text style={{ fontSize: 25, fontWeight: "900" }}>Products</Text>
        </View>

        {/* Search bar */}
        <View>
          <TouchableOpacity>
            <Avatar.Icon size={50} icon={"magnify"} color={'gray'} style={{ backgroundColor: colors.color2, elevation: 12 }} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection:"row",height:80}}>
        <ScrollView contentContainerStyle={{alignItems:"center"}} horizontal showsHorizontalScrollIndicator={false}>
        {categories.map(e=>(<Button key={e._id} style={{backgroundColor:colors.color5,borderRadius:100,margin:5}}>
          <Text style={{fontSize:12,color:"gray"}}>{e.name}</Text>
          </Button>))}
        </ScrollView>
        
        
      </View>
    </View>
  )
}

export default Home