import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Api from '../../../src/api';
import FoodSlider from '../../../src/components/FoodSlider/FoodSlider';

const {height, width} = Dimensions.get('window');

const Home = ({navigation}) => {
    const [food, setFood] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        Api.dataApi
        .getFood()
        .then((data) => {
            if(data.errors) {
                setError(data.errors);
            } else {
                setFood(data);
            }
        })
        .catch((e) => {
            setError(e.errors);
        });
    }, []);

    return(
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <FoodSlider navigation={navigation} data={food}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        marginHorizontal: 25,
        marginVertical: 40,
    },
});

export default Home;