import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback

} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class Story extends Component {
  constructor() {
    super()
    this.state = {
      dataSource: []
    }
  }



  componentDidMount() {

    const url = "https://picsum.photos/v2/list";
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson
        }, () => {

        })
      })


  }

  renderItem = ({ item }) => {
    const myArray = ['dog','cars', 'apple', 'music', 'girls', 'boy', 'magic', 'cat', 'guitar', 'love', 'sea', 'beach']
    const randomItem = myArray[Math.floor(Math.random() * myArray.length)];
    return (
      <View style={styles.container}>
        <TouchableOpacity >
          <ImageBackground source={{ uri: item.download_url }} style={styles.story}>
            <Image source={{ uri: `https://loremflickr.com/320/240/${randomItem}` }} style={{ width: 40, height: 40, borderRadius: 50, borderWidth: 2, borderColor:'#1877f2'}}></Image>
            <Text style={{ color: '#fff' }}>{item.author}</Text>
          </ImageBackground>
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
                showsHorizontalScrollIndicator={false}
                horizontal
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
  story: {
    width: 130,
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    margin: 3,
    justifyContent: 'space-between',
    padding: 3,

  },
  container: {
    marginVertical: 20,
    borderBottomWidth: 5,
    borderTopWidth: 5,
    borderTopColor: '#CACBD3',
    borderBottomColor: '#CACBD3',
    paddingVertical: 10

  }
})
