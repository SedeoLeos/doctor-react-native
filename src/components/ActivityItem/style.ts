import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    scrollabListItem:{
        flexDirection:'column',
        margin:10,
        paddingVertical:15,
        paddingHorizontal:15,
        elevation:1,
        backgroundColor:'#fff'
    },
    mainTest:{
        fontWeight:'bold'
    },
    subTest:{
       fontSize:12,
       marginTop:10,
       flex: 1, 
       width:300,
       flexWrap: 'wrap' 
    }
})
export default styles;