import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native';
import Api from '../../../src/api';
import FoodSlider from '../../../src/components/FoodSlider/FoodSlider';

const {height, width} = Dimensions.get('window');
const image = { uri: "https://images.unsplash.com/photo-1603093058375-eac0769409c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1896&q=80"};

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
        <ImageBackground source={image} style={styles.image}>
            <View style={styles.containerHeader}>
                <Text style={styles.textTitle}>Seleccione el Tipo de Comida</Text>
            </View>
            <View style={styles.container}>
                <View style={{flex: 1}}>
                    <FoodSlider navigation={navigation} data={food}/>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        marginHorizontal: 25,
        marginBottom: 20,
    },
    containerHeader: {
        paddingVertical: 15,  
        backgroundColor: 'white',
        marginBottom: 20,
        backgroundColor: '#B2BDAE',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    textTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFF',
    }
});

export default Home;