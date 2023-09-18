import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle } from '../../../../core/styles/styles'
import Header from '../../../../core/components/Header'
import { Avatar, Button } from 'react-native-paper'
import { categories, products } from '../../../../core/utils/data'
import SearchModal from '../../../../core/components/SearchModal'

const Home = () => {

  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categoryButtonHandler = (id) => {
    setCategory(id);


  }

  return (
    <>
      {activeSearch && (<SearchModal products={products} searchQuery={searchQuery} setSearchQuery={setSearchQuery} setActiveSearch={setActiveSearch} />)}
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
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon size={50} icon={"magnify"} color={'gray'} style={{ backgroundColor: colors.color2, elevation: 12 }} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row", height: 80 }}>
          <ScrollView contentContainerStyle={{ alignItems: "center" }} horizontal showsHorizontalScrollIndicator={false}>
            {categories.map(item => (<Button
              key={item._id}
              style={{ backgroundColor: category === item._id ? colors.color1 : colors.color5, borderRadius: 100, margin: 5 }}
              onPress={() => categoryButtonHandler(item._id)}
            >
              <Text style={{ fontSize: 12, color: category === item._id ? colors.color2 : "gray" }}>{item.name}</Text>
            </Button>))}
          </ScrollView>


        </View>
      </View>
    </>
  )
}

export default Home