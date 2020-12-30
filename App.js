import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Item from './src/Item';
import ItemList from './src/ItemList';
import {AdMobBanner} from 'expo-ads-admob';

export default function App() {

  const adUnitID = Platform.select({
    ios: 'ca-app-pub-3940256099942544/2934735716',
    android: 'ca-app-pub-3940256099942544/6300978111',
  });

  return (
    <SafeAreaView style={styles.container}>
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID={adUnitID}
        servePersonalizedAds='true'
        style={styles.ads} />
      <ItemList />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  ads: {
    zIndex: 100,
    position: 'absolute',
    bottom: 0
  }
});
