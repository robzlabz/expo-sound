import React from 'react'
import {ImageBackground, StyleSheet, Text, View, Dimensions, Image} from 'react-native'
import PlayButton from './PlayButton'

const Item = (props) => {
    const {image, sound} = props.item
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.imageBackground} />
            <View style={styles.buttonContainer}>
                <PlayButton suara={sound} />
            </View>
        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    container: {
        zIndex: 100,
        width: '100%',
        height: Dimensions.get('window').height
    },
    imageBackground: {
        resizeMode: 'cover',
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 150,
        alignItems: 'center',
        width: Dimensions.get('window').width,
    },
})
