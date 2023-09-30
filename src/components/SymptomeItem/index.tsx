import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

const SympotomeItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Image style={styles.itemImage}  width={10} height={10} source={require('../../assets/img.jpg')}/>
      <Text>{item.libelle}</Text>
    </TouchableOpacity>
  )
}

export default SympotomeItem

