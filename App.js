/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  StatusBar,

} from 'react-native';


import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feed from './components/Feed'
import Post from './components/Post'
import Story from './components/Story'
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      dataSource: [1,2,3,4],
      text: '',
      head:''
    }
  }

  render() {

    const renderItem = () => {

      const url = 'http://www.randomtext.me/api/gibberish/p-1/3-12';
      fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          const str = responseJson.text_out
          const slice = str.substring(3, str.length - 5)
          this.setState({
            text: slice
          })
        })
        const site = 'http://www.randomtext.me/api/gibberish/h1/1-3';
        fetch(site)
          .then((response) => response.json())
          .then((responseJson) => {
            const str = responseJson.text_out
            const slice = str.substring(3, str.length - 5)
            this.setState({
              head: slice
            })
          })
    


      const myArray = ['space', 'book', 'math', 'fish', 'bear', 'singer', 'ocean', 'island', 'kids', 'lighthouse', 'rock', 'man', 'snow', 'usa', 'bird', 'nature', 'poem']
      const randomItem = myArray[Math.floor(Math.random() * myArray.length)];
      const randomItem2 = myArray[Math.floor(Math.random() * myArray.length)];
      return (
        <>

          <View style={styles.container}>
          <Image source={{ uri: `https://loremflickr.com/320/240/${randomItem}` }} style={styles.profImage}/>
      <Text style={{ color: '#000' }}>{this.state.text}</Text>
            <TouchableOpacity>
              <Image source={{ uri: `https://loremflickr.com/320/240/${randomItem2}` }} style={styles.postImage}></Image>
            </TouchableOpacity>
          </View>
        </>
      )


    }

    return (
      <View>

        <View style={styles.header}>
          <Image source={require('./images/Facebook.png')}
            style={{ width: 110, height: 40 }} />

          <View style={styles.btns}>
            <View style={styles.icon}>
              <FontAwesome5 name={'search'} size={23} color='black' />
            </View>
            <View style={styles.icon}>
              <FontAwesome5 name={'facebook-messenger'} size={23} color='black' />
            </View>
          </View>
        </View>
        <ScrollView>
          <Post />
          <Story />
          <View>
            <FlatList
              showsVerticalScrollIndicator={false}
              Vertical
              data={this.state.dataSource}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: 'space-between',
    margin: 5

  },
  btns: {
    flexDirection: 'row',
  },
  icon: {
    backgroundColor: '#F1F0F3',
    borderRadius: 100,
    justifyContent: "center",
    padding: 7,
    marginHorizontal: 3
  },
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  txt: {
    fontSize: 14,
    color: '#000'
  },
  postImage: {
    width: 350,
    height: 350,

  },
  profImage:{
    width: 40,
    height:40,
    borderRadius: 100
  }
});

