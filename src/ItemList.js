import React from 'react'
import {FlatList, StyleSheet, View, Dimensions} from 'react-native'
import Item from './Item';

const items = [
    {image: require('../assets/images/farm.jpg'), sound: require('../assets/sounds/farm.mp3'), key: '0'},
    {image: require('../assets/images/cat.jpg'), sound: require('../assets/sounds/cat.mp3'), key: '1'},
    {image: require('../assets/images/chick.jpg'), sound: require('../assets/sounds/chick.mp3'), key: '2'},
    {image: require('../assets/images/cow.jpg'), sound: require('../assets/sounds/cow.mp3'), key: '3'},
    {image: require('../assets/images/dog.jpg'), sound: require('../assets/sounds/dog.mp3'), key: '4'},
    {image: require('../assets/images/duck.jpg'), sound: require('../assets/sounds/duck.mp3'), key: '5'},
    {image: require('../assets/images/frog.jpg'), sound: require('../assets/sounds/frog.mp3'), key: '6'},
    {image: require('../assets/images/goat.jpg'), sound: require('../assets/sounds/goat.mp3'), key: '7'},
    {image: require('../assets/images/horse.jpg'), sound: require('../assets/sounds/horse.mp3'), key: '8'},
    {image: require('../assets/images/rooster.jpg'), sound: require('../assets/sounds/rooster.mp3'), key: '9'},
    {image: require('../assets/images/sheep.jpg'), sound: require('../assets/sounds/sheep.mp3'), key: '10'},
]

const ItemList = () => {

    return (
        <View>
            <FlatList
                data={items}
                renderItem={({item}) => <Item image={item.image} sound={item.sound} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}

export default ItemList

const styles = StyleSheet.create({})
