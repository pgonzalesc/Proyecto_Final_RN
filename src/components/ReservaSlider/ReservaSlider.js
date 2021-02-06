import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Animated } from 'react-native';
import ReservaSliderItem from './ReservaSliderItem';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  dot: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const ReservaSlider = ({navigation, data}) => {
  const scrollX = new Animated.Value(0);

  if (data && data.length) {
    return (
      <View style={{flex: 1}}>
        <AnimatedFlatList
          data={data}
          keyExtractor={(item, index) => 'key' + index}
          vertical
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => {
            return <ReservaSliderItem item={item.item}/>;
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
                useNativeDriver: true,
            },
          )}
        />
      </View>
    );
  }
  return null;
};

export default ReservaSlider;
