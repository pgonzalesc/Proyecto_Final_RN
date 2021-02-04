import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const image = { uri: "https://images.unsplash.com/photo-1603093058375-eac0769409c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1896&q=80"};

const Splash = ({navigation}) => {
    return(
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.panel}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.textTitle}>BIENVENIDO</Text>
                    </View>
                    <View style={styles.contentContainer}>
                        <Text style={styles.textContent}>Reserve su asiento y disfrute su comida sin demoras</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('Home')}>
                            <Text style={styles.textButton}>Ingresar</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    panel: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'flex-start',
        paddingVertical: 20,
        paddingHorizontal: 35,
    },
    titleContainer: {
       marginTop: 30,
       marginBottom: 50,
    },
    contentContainer: {
        marginTop: 120,
        marginBottom: 20,
    },
    buttonContainer: {
       marginTop: 20,
    },
    textTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#F47234',
    },
    textContent: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textButton: {
        fontSize: 20,
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#30B353',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        width: 200,
    }
})

export default Splash;