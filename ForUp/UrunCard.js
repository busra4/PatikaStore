import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './UrunCard.style';
import UrunCardStyle from './UrunCard.style';

const UrunCard = ({urun}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: urun.imgURL}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{urun.title}</Text>
        {urun.inStock == true ? (
            <Text style={UrunCardStyle.productPrice}>{urun.price}</Text>
          ) : (
            <Text style={UrunCardStyle.noStock}>STOKTA YOK!</Text>
          )}
      </View>
    </View>
  );
};
export default UrunCard;
