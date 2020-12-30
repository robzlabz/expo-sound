import React, {useState} from 'react'
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native'
import {Audio} from 'expo-av';

const PlayButton = ({suara}) => {
    const [sound, setSound] = useState();

    const playSound = async (suara) => {
        console.log('Loading Sound' + suara);
        try {
            const {sound} = await Audio.Sound.createAsync(suara);
            setSound(sound);
            console.log('Playing Sound');
            await sound.playAsync();
        } catch (e) {
            console.error(e);
        }
    }

    React.useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={async () => await playSound(suara)}>
                <Image source={require('../assets/images/play.png')} style={styles.buttonImage} />
            </TouchableOpacity>
        </View>
    )
}
export default PlayButton

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10
    },
    button: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonImage: {
        width: 100,
        height: 100
    }
})
