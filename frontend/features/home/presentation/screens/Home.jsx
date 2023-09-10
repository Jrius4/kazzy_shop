import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle } from '../../../../core/styles/styles'
import Header from '../../../../core/components/Header'
import { Avatar, Button } from 'react-native-paper'
import { categories } from '../../../../core/utils/data'

const Home = () => {

  const [category, setCategory] = useState("");

  const categoryButtonHandler = (id) => {
    setCategory(id);

  }
 
  return (
    <View style={defaultStyle}>
      {/* Header  */}
      <Header />
      <View style={{ paddingTop: 80, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
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
      <View style={{ flexDirection: "row", height: 80 }}>
        <ScrollView contentContainerStyle={{ alignItems: "center" }} horizontal showsHorizontalScrollIndicator={false}>
          {categories.map(item => (<Button 
           key={item._id} 
           style={{ backgroundColor: category === item._id?colors.color1: colors.color5, borderRadius: 100, margin: 5 }}
           onPress={()=>categoryButtonHandler(item._id)}
           >
            <Text style={{ fontSize: 12, color: category === item._id?colors.color2: "gray" }}>{item.name}</Text>
          </Button>))}
        </ScrollView>


      </View>
    </View>
  )
}

export default Home