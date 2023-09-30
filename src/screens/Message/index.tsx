import { View, Text } from 'react-native'
import React from 'react'
import {  SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../tools/constant'

const Message = () => {
  return (
    <SafeAreaView style={{ flex:1, backgroundColor:COLORS.main }}>
      <Text>Message</Text>
    </SafeAreaView>
  )
}

export default Message

