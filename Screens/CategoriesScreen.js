import { FlatList, StyleSheet, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import { Entypo } from '@expo/vector-icons';
import { FAB } from 'react-native-elements';
import GridItem from '../components/GridItem';
import React from 'react';
import { selectCategory } from '../store/actions/category.actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const CategoriesScreen = ({ navigation }) => {
  const categories = useSelector(state => state.categories.list);
  const dispatch = useDispatch();

  const handleSelectedCategory =(item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('Products', {
      name: item.title,
      headerStyle: item.color,
    });
  }
  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={handleSelectedCategory} ></GridItem>
  );
  
  return (
    <View style={styles.container} >
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderGridItem}
        numColumns={2}
      >
      </FlatList>
      <FAB
        icon={<AntDesign name="shoppingcart" size={26} color="black" />}
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
    padding: 8,
    backgroundColor: 'black',
    borderBottomWidth: 0.5,
    borderBottomColor: '#f07e0c',
  },
/*   item: {
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
  }, */
});
export default CategoriesScreen;