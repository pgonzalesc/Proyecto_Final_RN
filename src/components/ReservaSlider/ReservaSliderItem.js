import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image, Dimensions, TouchableHighlight, TouchableOpacity} from 'react-native';
import Api from '../../api';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width / 1.5,
    height: height / 6,
    backgroundColor: '#B2BDAE',//'#D4E0CF',
    marginBottom: 25,
    borderRadius: 10,
  },
  textTitle: {
      paddingHorizontal: 15,
      paddingVertical: 20,
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
});

const ReservaSliderItem = ({item}) => {
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        Api.dataApi
        .getFood()
        .then((data) => {
            if(data.errors) {
                setError(data.errors);
            } else {
                for(const key in data) {
                    if(item.id === data[key].id) {
                        setTitle(data[key].desc);
                    }
                }  
            }
        })
        .catch((e) => {
            setError(e.errors);
        });
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.textTitle}>
                <Text style={{color:'#FFF', fontSize:25, textAlign:'center', fontWeight:'bold'}}>{title}</Text>
            </View>
                <Text style={styles.itemTitle}>{item.hora_ini} - {item.hora_fin}</Text>
            
        </View>
    );
};

export default ReservaSliderItem;