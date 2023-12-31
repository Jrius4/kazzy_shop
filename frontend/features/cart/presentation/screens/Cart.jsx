import { View, Text } from 'react-native'
import React from 'react'
import { defaultStyle } from '../../../../core/styles/styles'
import Header from '../../../../core/components/Header'

const Cart = () => {
  return (
    <View style={defaultStyle}>
      {/* Header  */}
      <Header/>
      <View>
        <Text style={{fontSize:25}}>Our</Text>
        <Text style={{fontSize:25,fontWeight:"900"}}>Products</Text>
      </View>
    </View>
  )
}

export default Cart