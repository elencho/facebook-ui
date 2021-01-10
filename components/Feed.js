import React,{ Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList,

} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class Feed extends Component {
  constructor() {
    super()
    this.state = {
      dataSource: ''
    }
  }



  componentDidMount() {

    const url = 'http://www.randomtext.me/api/gibberish/p-1/3-12';
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.text_out
        }, () => {

        })
      })


  }

  renderItem = ({ item }) => {
    const myArray = ['dog','cars', 'apple', 'music', 'girls', 'boy', 'magic', 'cat', 'guitar', 'love', 'sea', 'beach']
    const randomItem = myArray[Math.floor(Math.random() * myArray.length)];
    return (
      <View style={styles.container}>

        
        <Text style={{ color: '#fff'}}>{this.state.dataSource}</Text>
        <TouchableOpacity>
            <Image source={{ uri: `https://loremflickr.com/320/240/${randomItem}` }} style={{ width: 350, height: 350}}></Image>
        </TouchableOpacity>
      </View>
    )


  }

  render() {

    if (this.state.loading) {
      return <Text>loading...</Text>;
    }

    return (
      <View >
        {
          this.state.dataSource.length < 1 ? (
            <Text>did not get person</Text>
          ) : (
              <View><FlatList
                showsVerticalScrollIndicator={false}
                Vertical
                data={this.state.dataSource}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
              />
              </View>)
        }


      </View>


    )
  }
}
const styles = StyleSheet.create({

})
