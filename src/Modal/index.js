import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Feather from 'react-native-vector-icons/Feather';

export default function Detalhes(props) {
    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <View style={styles.areaBotao}>
                    <TouchableOpacity style={styles.botaoPlay} onPress={props.voltar}>
                        <Text style={styles.textPlay}>Voltar</Text>
                    </TouchableOpacity>
                </View>

                <Image
                    source={{ uri: props.filme.foto }}
                    style={styles.img}
                />
                <TouchableOpacity style={styles.botao}>
                    <Feather
                        name="play-circle"
                        color="#fff"
                        size={25}
                    />
                </TouchableOpacity>

                <Text style={styles.titulo}>{props.filme.nome}</Text>
                <Text style={styles.sinopse}>Sinopse:</Text>
                <Text style={styles.descricao}>{props.filme.sinopse}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',

    },
    modalContainer: {
        backgroundColor: '#121212',
        height: '85%',
        width: '90%',
        borderTopLeftRadius: 5,
        borderTopLeftRadius: 5,


    },

    img: {
        height: 200,
        objectFit: 'cover',
        marginHorizontal: 5,
        borderRadius: 5,
        marginBottom: 10
    },
    botao: {
        backgroundColor: '#319e26',
        padding: 10,
        borderRadius: 50,
        width: 50,
        alignItems: 'center',
        alignSelf: 'center'
    },

    areaBotao: {
        alignItems: 'flex-end',
        padding: 10,

    },

    botaoPlay: {
        backgroundColor: '#43465e',
        padding: 10,
        width: 80,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: "center"
    },
    textPlay: {
        color: '#fff'
    },
    titulo: {
        textAlign: 'center',
        marginTop: 10,
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    sinopse: {
        color: '#fff',
        marginLeft: 10,
        fontSize: 17,
        marginTop: 10
    },
    descricao: {
        marginTop: 20,
        marginHorizontal: 10,
        color: '#fff',
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'justify'
    }


});
