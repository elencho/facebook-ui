import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,

} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Post = () => {
    return(
<View>
    <View style={styles.status}>
    <Image source={require('../images/53.jpg')} style={{height: 40,width:40,borderRadius: 100}} />
        <Text> What's on your mind?</Text> 
    </View>
    <View style={styles.nav}>
    <TouchableOpacity style={{flexDirection:"row"}}>
    <FontAwesome5 name={'video'} size={17} color='#FF0000' />
    <Text style={{paddingHorizontal: 2, fontWeight:'bold'}}>Live</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{flexDirection:"row",}}>
    <FontAwesome5 name={'file-image'} size={17} color='#51AD1C' />
    <Text style={{paddingHorizontal: 2, fontWeight:'bold'}}>Photo</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{flexDirection:"row"}}>
    <FontAwesome5 name={'map-marker-alt'} size={17} color='#FF003A' />
    <Text style={{paddingHorizontal: 2, fontWeight:'bold'}}>Check in</Text>
    </TouchableOpacity>
    </View>
</View>
    )
}
const styles = StyleSheet.create({
    status: {
        flexDirection:'row',borderBottomWidth:1,
        borderBottomColor:'#CACAD3',
        alignItems:'center',
        margin: 5,
        paddingVertical: 5
    },
    nav: {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    }
})

export default Post