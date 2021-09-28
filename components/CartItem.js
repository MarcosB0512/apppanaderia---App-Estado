import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import { Entypo } from '@expo/vector-icons';
import React from "react";

const CartItem = ({item, onDelete}) => {
    return (
      <View style= {styles.item} >
          <View>
            <Text style={styles.header}>{item.name}</Text>
          </View>
          <View style={styles.detail} >
            <View>
              <Text>Cantidad: {item.quantity}</Text>
              <Text>${item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => onDelete(item.id)} >
              <Entypo name="trash" size={24} color="black" />
            </TouchableOpacity>
          </View>
      </View>  
    )
}
const styles = StyleSheet.create({
    item: {
      flex: 1,
      padding: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    }, 
    header: {
      fontSize: 18,
      fontFamily: 'OpenSansBold',
    },
    detail: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    text: {
      fontSize: 16,
      fontFamily: 'OpenSans',
    },
  });
  
  export default CartItem;