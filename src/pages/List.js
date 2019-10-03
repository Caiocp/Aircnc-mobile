import React, { useState, useEffect } from 'react';

import { SafeAreaView, StyleSheet, ScrollView, Image, AsyncStorage } from 'react-native';

import list from '../components/SpotList'
import logo from '../assets/logo.png';
import SpotList from '../components/SpotList';

export default function List() {
    const [techs, SetTechs] = useState([])

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const techsArray = storagedTechs.split(',').map(tech => tech.trim());

            SetTechs(techsArray);
        })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={tech} />)}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    logo: {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 30
    }
})
