import React, {useRef} from 'react';
import {SafeAreaView, Animated, FlatList, View, ScrollView, TouchableOpacity, StyleSheet, ImageBackground, Image, Text} from 'react-native';
import Footer from '../components/Footer';
const HEADER_MAX_HEIGHT = 240; // max header height
const HEADER_MIN_HEIGHT = 0; // min header height
const HEADER_SCROLL_DISTANCE = 240-0; // header scrolling value

const MainPage = ({navigation}) => {
  const scrollY = useRef(new Animated.Value(0)).current; // our animated value
  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });
  // our opacity animated from 0 to 1 and our opacity will be 0
  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });
  const apperTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 45],
    extrapolate: 'clamp',
  });
  
 
  return (
    <SafeAreaView style={styles.saveArea}>
      <Animated.ScrollView contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT - 175 }} scrollEventThrottle={16} // 
        onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }], // event.nativeEvent.contentOffset.x to scrollX
        { useNativeDriver: true }, // use native driver for animation
      )}>

        <View>
          
          <View style = {styles.container}>
            <Text style = {styles.textStyle}> Where Visionaries </Text>
            <Text style = {styles.textStyle}> Build Empires </Text>
            <TouchableOpacity style = {styles.button_3}>
              <Text style = {styles.buttonText_3}>Start paid membership</Text>
            </TouchableOpacity>
            <View style = {{ width: 394, height : 285, top: 185, flexDirection: 'row', overflow: 'hidden', alignItems: 'center'}}>
              <View style = {styles.columnGroup_1}>
                <Image source={require('../assets/1.png')} style = {styles.image}></Image>
                <Image source={require('../assets/2.png')} style = {styles.image}></Image>
                <Image source={require('../assets/3.png')} style = {styles.image}></Image>
              </View>
              <View style = {styles.columnGroup_2}>
                <Image source={require('../assets/4.png')} style = {styles.image}></Image>
                <Image source={require('../assets/5.png')} style = {styles.image}></Image>
                <Image source={require('../assets/6.png')} style = {styles.image}></Image>
              </View>
              <View style = {styles.columnGroup_3}>
                <Image source={require('../assets/7.png')} style = {styles.image}></Image>
                <Image source={require('../assets/8.png')} style = {styles.image}></Image>
                <Image source={require('../assets/9.png')} style = {styles.image}></Image>
              </View>
              <View style = {styles.columnGroup_1}>
                <Image source={require('../assets/10.png')} style = {styles.image}></Image>
                <Image source={require('../assets/11.png')} style = {styles.image}></Image>
                <Image source={require('../assets/12.png')} style = {styles.image}></Image>
              </View>
            </View>
          </View>
          <Footer />
        </View>
      </Animated.ScrollView>
      <Animated.View style = {[styles.titleStyle, {flexDirection: 'row', transform:[{translateY:apperTranslateY}]}]}>
            <Image source = {require('../assets/a.png')} style={styles.smallAvatar}></Image>
            <Image source = {require('../assets/b.png')} style={styles.smallImage}></Image>
      </Animated.View>
      <Animated.View style={[styles.header, {transform: [{translateY: headerTranslateY}]}]}>
        <View>
          <ImageBackground source={require('../assets/43b_500px.jpg')} style={styles.backgroundImage} imageStyle={styles.imageStyle}/>
          <Animated.Image source={require('../assets/Group_50396.png')} style={[styles.overlayImage, {opacity: imageOpacity}]} />
          <View style={styles.alternativeLayoutButtonContainer}>
            <TouchableOpacity style={styles.button_2} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText_2}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button_1} onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.buttonText_1} >Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
      
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  saveArea: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  titleStyle:{
    position: 'absolute',
    top:-45,
    backgroundColor: '#FFF',

    height: 45,
    width: 394,
    // resizeMode: 'contain',
    justifyContent: 'center'
  },
  fill: {
    flex: 1,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 0,
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
  },
  topBar: {
    marginTop: 40,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  bar: {
    marginTop: 28,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContent: {
    marginTop: 0,
  },
    backgroundImage : {
      // flex : 1,
      resizeMode : 'cover',
      width : 394,
      top: -23,
      
    },
    imageStyle : {
      aspectRatio : 1,
    },
    overlayImage : {
      top : 85,
      width : '100%',
      height : 37.96,
      resizeMode : 'contain',
    },
    button_1: {
      width : 171.5,
      height : 42,
      backgroundColor: '#A854F5',
      borderRadius: 28,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginRight : 10,
      marginLeft : 10,
      justifyContent: 'center',
    },
    button_2: {
      width : 171.5,
      height : 42,
      backgroundColor: 'white',
      borderRadius: 28,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginRight : 10,
      marginLeft : 10,
      justifyContent: 'center',
    },
    button_3: {
      top : 114, 
      width : 288,
      height : 42,
      backgroundColor: '#A854F5',
      borderRadius: 28,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginRight : 10,
      marginLeft : 10,
      justifyContent: 'center',
    },
    buttonText_1: {
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#FFF',
      fontSize: 19,
    },
    buttonText_2: {
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#A854F5',
      fontSize: 19,
    },
    buttonText_3: {
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#FFF',
      fontSize: 19,
    },
    alternativeLayoutButtonContainer: {
      top: 111,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    container: {
      top: 169,
      backgroundColor: 'white',
      borderRadius: 10,
      width: "100%",
      height: 571,
      alignItems: 'center',
    },
    textStyle: {
      top: 60,
      color: '#000',
      fontWeight: 'bold',
      fontSize: 29,
    },
    columnGroup_1: {
      right: 113,
      flexDirection: 'column',
    },
    columnGroup_2: {
      right: 113,
      top: 24,
      flexDirection: 'column',
    },
    columnGroup_3: {
      right: 113,
      top: 12,
      flexDirection: 'column',
    },
    image: {
      width: 145,
      height: 72,
      marginVertical: 5,
      marginHorizontal: 5,
    },
    smallImage : {
      top: 5,
      width: 114,
      height: 23,
      marginHorizontal: 110,
    },
    smallAvatar : {
      top: 5,
      width: 23,
      height: 23,
      marginHorizontal: 10,
    }
    
});

export default MainPage;