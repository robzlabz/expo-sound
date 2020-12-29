import React from 'react'
import {FlatList, StyleSheet, Text, View, Dimensions} from 'react-native'
import Item from './Item';

const items = [
    {
        key: '1',
        image: require('../assets/images/rooster.jpg'),
        sound: require('../assets/sounds/rooster.mp3')
    },
    {
        key: '2',
        image: require('../assets/images/goat.jpg'),
        sound: require('../assets/sounds/goat.mp3')
    }
];

const ItemList = () => {
    return (
        <View>
            <FlatList
                data={items}
                renderItem={({item}) => <Item item={item} />}
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
