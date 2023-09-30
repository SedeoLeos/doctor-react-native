import { PADDING } from "../../tools/constant";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    item:{
        marginRight:15,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:5,
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.vertical

    },
    itemImage:{
        width:50,
        height:50,
        marginEnd:5,
        borderRadius:50,
        marginBottom:5
    }
})
export default styles;