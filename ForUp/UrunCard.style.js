import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 10,
    borderRadius: 5,
    margin: 2,
    alignItems: 'center',
    width: Dimensions.get('window').width / 2.1,
    height: Dimensions.get('window').height / 2.8,
    backgroundColor: 'white',
    marginLeft:5
   
  },
 
  image: {
    resizeMode:'contain',
    borderRadius: 5,
    marginTop: 10,
    width: Dimensions.get('window').width / 2.2,
    height: Dimensions.get('window').height / 3.9,
    marginLeft:Dimensions.get('window').width / 50,
  
  },
  title: {
    fontWeight: 'bold',
  },

  inStock: {
    marginTop: 3,
    fontWeight: 'bold',
  },

  noStock: {
    marginTop: 3,
    color:'red',
    fontWeight: 'bold',
  },
});