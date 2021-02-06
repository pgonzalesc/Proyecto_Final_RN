import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import Api from '../../api';
import ReservaSlider from '../../components/ReservaSlider/ReservaSlider';

const image = { uri: "https://images.unsplash.com/photo-1603093058375-eac0769409c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1896&q=80"};
const usuario = 'PGONZALESC';

const Reserva = ({navigation}) => {
    const [dataReserva, setDataReserva] = useState([]); 
    const [error, setError] = useState('');
    const reservaRef = useRef(null);

    useEffect(() => {
        Api.dataApi
        .getReservas()
        .then((data) => {
            if(data.errors) {
                setError(data.errors);
            } else {
                setDataReserva(data); 
                reservaRef.current.animateToRegion(data);   
            }
        })
        .catch((e) => {
            setError(e.errors);
        });
    }, [dataReserva]);
    return(
        <ImageBackground source={image} style={styles.image}>
            <View style={styles.containerHeader}>
                <View style={{width:'100%'}}>
                    <Text style={styles.textTitle}>RESERVAS</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{flex: 1}}>
                    <ReservaSlider navigation={navigation} data={dataReserva}/>
                </View>
            </View>
        </ImageBackground>
    )
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
        flexDirection: 'row',
    },
    textTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFF',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
});

export default Reserva;