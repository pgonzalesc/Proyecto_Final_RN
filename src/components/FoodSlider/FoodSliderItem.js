import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions, TouchableHighlight, TouchableOpacity} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width / 1.5,
    height: height / 4,
    backgroundColor: '#B2BDAE',//'#D4E0CF',
    marginBottom: 25,
    borderRadius: 10,
  },
  textView: {
      paddingHorizontal: 10,
      paddingVertical: 10,
  },
  image: {
    width: width / 1.5,
    height: height / 5.5,
    borderRadius: 10,
  },
  itemTitle: {
    //color: '#212121',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF'
  },
  itemPrice: {
    color: '#212121',
    fontSize: 18,
    fontWeight: '300',
  },
});

const FoodSliderItem = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: item.img,
          }}
        />
        <View style={styles.textView}>
          <Text style={styles.itemTitle}>{item.desc}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FoodSliderItem;