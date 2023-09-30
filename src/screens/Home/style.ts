import { StyleSheet } from "react-native";
import { COLORS, PADDING } from "../../tools/constant";
export const HomeStyle = StyleSheet.create({
    contenaire:{
       backgroundColor:'#f1f7f8',
       flex:1,
    },
    headHome:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding: 10,
        backgroundColor:'#fff'
    },
    profileImage:{
        width:50,
        height:50,
        borderRadius: 50
    },
    scrollabList:{
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.vertical,
    },
    title:{
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.vertical,
    },
    titleSpaceBeteween:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.vertical,
        marginTop:10,
    },
    showAll:{
        color:COLORS.main,
    }
})