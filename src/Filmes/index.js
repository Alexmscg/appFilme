import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";

import Feather from 'react-native-vector-icons/Feather';
import Detalhes from "../Modal";

export default function Filmes({ data }) {
    const [visibleModal, setVisibleModal] = useState(false)


    return (
        <View style={styles.container}>

            <View style={styles.card}>

                <View style={styles.areaBotao}>
                    <TouchableOpacity style={styles.botao} onPress={() => setVisibleModal(true)}>
                        <Feather
                            name="play-circle"
                            color="#fff"
                            size={25}
                        />
                    </TouchableOpacity>
                </View>

                <Image
                    style={styles.capa}
                    source={{ uri: data.foto }}
                />
                <Text style={styles.titulo}>{data.nome}</Text>
            </View>
            <Modal transparent={true} animationType="slide" visible={visibleModal}>
                <Detalhes filme={data} voltar={() => setVisibleModal(false)} />
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    },
    card: {
        width: 180,
        marginTop: 15,


    },
    capa: {
        height: 200,
        objectFit: 'cover',
        zIndex: 2,
        borderRadius: 10
    },
    titulo: {
        color: '#fff',
        marginTop: 10,
        fontWeight: '600',
        textAlign: 'center'
    },
    areaBotao: {
        alignItems: 'flex-end',
        marginBottom: -30,
        zIndex: 3,


    },
    botao: {
        backgroundColor: '#319e26',
        padding: 10,
        borderRadius: 50,

    }
});