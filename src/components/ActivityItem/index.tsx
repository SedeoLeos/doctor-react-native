import {  Text,TouchableOpacity } from 'react-native'
import React from 'react'
/*@ts-ignore*/
import HOSPITAL_SVG from '../../assets/undraw_medicine_b-1-ol.svg';
import style from './style';

const ActivityItem = ({item}) => {
  return (
    <TouchableOpacity style={style.scrollabListItem}>
        <HOSPITAL_SVG width={60} height={60} />
        <Text style={style.mainTest}>{item.mainTest}</Text>
        <Text style={style.subTest}>{item.subTest} </Text>
    </TouchableOpacity>
  )
}

export default ActivityItem

