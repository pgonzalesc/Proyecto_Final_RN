import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions, TouchableHighlight} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width / 1.5,
    height: height / 4,
    backgroundColor: 'white',
    marginBottom: 25,
    borderRadius: 10,
  },
  textView: {
      paddingHorizontal: 10,
  },
  image: {
    width: width / 1.5,
    height: height / 5.5,
    borderRadius: 10,
  },
  itemTitle: {
    color: '#212121',
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemPrice: {
    color: '#212121',
    fontSize: 18,
    fontWeight: '300',
  },
});

const FoodSliderItem = ({item, onPress}) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: item.img,
          }}
        />
        <View style={styles.textView}>
          <Text style={styles.itemTitle}>{item.desc}</Text>
          <Text style={styles.itemPrice}>58</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default FoodSliderItem;