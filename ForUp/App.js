
 import React, { PropTypes, Component } from 'react';
 import {
   SafeAreaView,
   Text,
   StyleSheet,
   FlatList,
   View,
   TextInput
 } from 'react-native';

import UrunCard from './UrunCard';
import urun_data from './urun_data.json';

function App() {
  const renderUrun = ({item}) => <UrunCard urun={item} />;
  return(

    <SafeAreaView style={styles.container} >
      <FlatList
        ListHeaderComponent={() => (
          <View>
            <Text style={styles.Name}>PATIKASTORE</Text>
            <TextInput style={styles.search} placeholder='Ara...'
            />
          </View>
        )}
        horizontal={false}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        data={urun_data}
        renderItem={renderUrun}
      />
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
  backgroundColor: '#eceff1',
},

search:{
backgroundColor:'white',
marginBottom:5,
marginHorizontal:10,
borderRadius:10
},

headerText: {
  fontWeight: 'bold',
  fontSize: 50,
},

Name:{
color:'purple',
fontSize:20,
fontWeight: 'bold',
}
});

export default App;
