
 import React, { PropTypes, Component, useState } from 'react';
 import {
   SafeAreaView,
   Text,
   StyleSheet,
   FlatList,
   View,
   TextInput
 } from 'react-native';
import { Switch } from 'react-native-gesture-handler';

import UrunCard from './UrunCard';
import urun_data from './urun_data.json';
import Searchbar from './SearchBar';
function App() {
    const [list, setList] = useState(urun_data);
    const renderUrun = ({item}) => <UrunCard urun={item} />;
    const renderSeperator = () => <View style={styles.seperator} />;
    const handleSearch = text => {
      const filteredList = urun_data.filter(urun => {
        const searchedText = text.toLowerCase();
        const currentTitle = urun.title.toLowerCase();
        return currentTitle.indexOf(searchedText) > -1;
      });
      setList(filteredList);
    };
    
  return(
    <SafeAreaView style={styles.container} >
      <Searchbar onSearch={handleSearch} />
      <FlatList
      ListHeaderComponent={() => (
        <View>
          <Text style={styles.Name}>PATIKASTORE</Text>
          </View>
        )}

        horizontal={false}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        data={list}
        renderItem={renderUrun}
        ItemSeparatorComponent={renderSeperator}
      />
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
  backgroundColor: '#eceff1',
  flex:1
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
