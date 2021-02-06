import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Api from '../../api';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

const image = { uri: "https://images.unsplash.com/photo-1603093058375-eac0769409c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1896&q=80"};

const Detalle = ({navigation, route}) => {
    const [menu, setMenu] = useState('');
    const [horario, setHorario] = useState([]);
    const [error, setError] = useState('');
    const {id, desc} = route.params;
    const f_actual = moment().format('DD/MM/YYYY');
    const usuario = 'PGONZALESC';
    const [idReserva, setIdReserva] = useState(null);

    useEffect(() => {
        Api.dataApi
        .getMenu()
        .then((data) => {
            if(data.errors) {
                setError(data.errors);
            } else {
                const dataMenu = data[0][id];
                for(const key in dataMenu) {
                    if(f_actual === dataMenu[key].date) {
                        setMenu(dataMenu[key].desc);
                    }
                }
            }
        })
        .catch((e) => {
            setError(e.errors);
        });

        Api.dataApi
        .getHorario()
        .then((data) => {
            if(data.errors) {
                setError(data.errors);
            } else {
                const dataHorario = data[0][id];
                setHorario(dataHorario);
            }
        })
        .catch((e) => {
            setError(e.errors);
        });

        Api.dataApi
        .getReservas()
        .then((data) => {
            if(data.errors) {
                setError(data.errors);
            } else {
                setIdReserva(data.length+1);    
            }
        })
        .catch((e) => {
            setError(e.errors);
        });
    }, []);

    const handleReserva = (horaIni, horaFin) => {
        const parameters = {
            "id": idReserva,
            "id_food": id,
            "usuario": usuario,
            "date": f_actual,
            "hora_ini": horaIni,
            "hora_fin": horaFin
        }
        console.log('parameters', parameters);
        Api.dataApi.createReserva(parameters)
        .then((data) => {
            if (data.errors) {
                console.warn('get api order error', data);
                setError(data.errors);
            } else {
                navigation.navigate('Home');
            }
        });
    }

    return (
        <ImageBackground source={image} style={styles.image}>

            <View style={styles.containerHeader}>
                <View style={{marginLeft:15}}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Home');}}>
                        <Icon name={'md-arrow-back-outline'} size={30} color={'#FFF'}/>
                    </TouchableOpacity>
                </View>
                <View style={{width:'80%'}}>
                    <Text style={styles.textTitle}>{desc}</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.containerMenu}>
                    <Text style={styles.textMenu}>{menu}</Text>
                </View>
                {
                    horario.map(
                        (i) => (
                            <View key={i.id}>
                                <TouchableOpacity style={styles.button} onPress={()=>{
                                    handleReserva(i.hora_ini, i.hora_fin);
                                }}>
                                    <Text style={styles.textButton}>{i.desc}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    )
                } 
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'flex-start',
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
    containerMenu: {
        marginTop: 15, 
        marginBottom:25, 
        backgroundColor: '#FFF', 
        paddingVertical: 20, 
        paddingHorizontal: 20, 
        borderRadius: 15
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
    },
    textMenu: {
        fontSize: 18,
    },
    button: {
        backgroundColor: '#94AB9D',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 15,
        borderRadius: 10,
    },
    textButton: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
    }
});

export default Detalle;