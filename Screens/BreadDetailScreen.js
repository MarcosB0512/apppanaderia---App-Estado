import { Button, FAB } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { AntDesign } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import React from 'react';
import { addItem } from '../store/actions/cart.actions';

const BreadDetailScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const breadID = useSelector(state => state.breads.selectedID);
  const breads = useSelector(state => state.breads.list);
  const bread = breads.find(item => item.id === breadID);

  const handlerAddItemCart = () => {
    dispatch(addItem(bread));
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.title}>{bread.name}</Text>
        <Text>{bread.description}</Text>
        <Text>$ {bread.price}</Text>
        <Text>{bread.weight}</Text>
      </View>
      <Button 
        title = ' Agregar al Carrito'
        icon={<AntDesign name='plus' size={24} color= 'white'></AntDesign>}
        color={Colors.accentColor}
        onPress={handlerAddItemCart}>
      </Button>
      <FAB
        icon={<AntDesign name='shoppingcart' size={26} color="black" />}
        placement='right'
        color={Colors.accentColor}
        onPress={()=> navigation.navigate('Cart')}
      ></FAB>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  title: {
    fontSize: 20,
    fontFamily: 'OpenSansBold',
    marginBottom: 10,
  },
  info: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
});
export default BreadDetailScreen;

