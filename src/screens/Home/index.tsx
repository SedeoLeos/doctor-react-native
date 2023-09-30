import {  Text, View,Image, ScrollView, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import { HomeStyle } from './style'
import Activiter from '../../fake-data/fake-activity';
import ActivityItem from '../../components/ActivityItem';
import SympotomeItem from '../../components/SymptomeItem';
import symptome from '../../fake-data/fake-symptome';
import { StatusBar } from 'expo-status-bar';
import { useIsFocused } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Doctor from './../../fake-data/fake-dockor';
import { name } from './../../../node_modules/@svgr/plugin-svgo/node_modules/csso/node_modules/css-tree/lib/syntax/node/Atrule';

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}
const Home = () => {
    const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:'white'}}>
            <View style={HomeStyle.headHome}>
                <Text>Jhon Doe</Text>
                <Image style={HomeStyle.profileImage} source={require('../../assets/profil.jpg')} />
            </View>
            <ScrollView style={HomeStyle.contenaire}>
                <FlatList 
                style={HomeStyle.scrollabList} 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={Activiter}
                keyExtractor={data=> data.id.toString()}
                renderItem ={({item})=>{
                    return (<ActivityItem item={item} />) 
                }} 
                />
            <View style={HomeStyle.title}>
                <Text>Quel symptome avez vous ?</Text>
            </View>
            <FlatList 
                style={HomeStyle.scrollabList} 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={symptome}
                keyExtractor={data=> data.id.toString()}
                renderItem ={({item})=>{
                    return (<SympotomeItem item={item} />) 
                }} 
                />
                <View style={HomeStyle.titleSpaceBeteween}>
                <Text>Nos Docteur</Text>
                <TouchableOpacity >
                    <Text style={HomeStyle.showAll}>Afficher tous</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:1,}} >
               {Doctor.map((data,index)=>
                <TouchableOpacity style={{backgroundColor:"white",margin:15,padding:10,flexDirection:'row',borderRadius:9,alignItems:'flex-start'}}>
                    <Image source={{ uri:`${data.image}` }} style={{width:100,height:100,borderRadius:20,marginHorizontal:10,}}/>
                    <View style={{padding:10}}>
                        <Text style={{ fontWeight:'bold' }}>{data.name}</Text>
                        <View style={{ backgroundColor:'gray',padding:5,marginTop:10,borderCurve:'circular',borderRadius:10 }}>
                        <Text style={{ color:'white', fontSize:9  }}>{data.speciality}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
               ).splice(0,3)}
            </View>
            </ScrollView>
        </SafeAreaView>
  )
}

export default Home

