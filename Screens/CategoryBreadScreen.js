import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { filterBreads, selectBread } from '../store/actions/bread.actions'

import { AntDesign } from '@expo/vector-icons';
import BreadItem from '../components/BreadItem';
import { Colors } from '../constants/Colors';
import { FAB } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function CategoryBreadsScreen({ navigation }) {
  const dispatch = useDispatch();
  const categoryID = useSelector(state => state.categories.selectedID);
  const breads = useSelector(state => state.breads.filteredBreads);
  
  useEffect(() => {
    setTimeout(() =>
    dispatch(filterBreads(categoryID)), 10);
    return () => {
      dispatch(filterBreads());
    }
  }, [categoryID]);

  const handleSelected = (item) => {
    dispatch(selectBread(item.id));
    navigation.navigate('Detail', {
      name: item.name,
    });
  }

  const renderItemBread = ({ item }) => (
    <BreadItem item={item} onSelected={handleSelected} ></BreadItem>
  )
    
  return (
  <View style={styles.container} >
    {breads.length
      ? (
      <FlatList 
        data={breads}
        keyExtractor={item => item.id}
        renderItem={renderItemBread}
      ></FlatList>
    )
    : <ActivityIndicator color={Colors.accentColor} size='large'  ></ActivityIndicator>}
     <FAB
        icon={<AntDesign name="shoppingcart" size={26} color="black" />}
        placement='right'
        color={Colors.accentColor}
        onPress={()=> navigation.navigate('Cart')}
      ></FAB>
  </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
