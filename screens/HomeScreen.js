import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Appbar} from 'react-native-paper';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Button,
  ScrollView,
  StatusBar,
  Platform,
  FlatList,
} from 'react-native';

const Tab = createBottomTabNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={[styles.screen]}>
      {/* <Appbar style={{backgroundColor: 'white'}} /> */}
      <ScrollView>
        <Banner />
        <View style={styles.row}>
          <Text style={styles.headers}>
            Let's find the best food around you
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontWeight: '900', fontSize: 18}}>
            Find by Category
          </Text>
          <Text style={{color: 'goldenrod', fontWeight: '500'}}>See All</Text>
        </View>
        <FoodCategoryList />
        <Text style={{fontSize: 11, fontWeight: '400', padding: 5}}>
          Result(40)
        </Text>
        <FoodList />
        {/* <BottomTab /> */}
        {/* <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile', {name: 'Test'})}
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const FoodCategoryData = [
  {
    id: 1,
    image: require('../assets/ramen.png'),
    name: 'Ramen',
  },
  {
    id: 2,
    image: require('../assets/burger.png'),
    name: 'Burger',
  },
  {
    id: 3,
    image: require('../assets/salad.png'),
    name: 'Salad',
  },
  {
    id: 4,
    image: require('../assets/waffle.png'),
    name: 'Waffle',
  },
  {
    id: 5,
    image: require('../assets/chapati.png'),
    name: 'Chapati',
  },
];

const FoodListData = [
  {
    id: 1,
    source: require('../assets/uzamaki_ramen.png'),
    foodName: 'Uzamaki Ramen',
    rating: '5.0',
    distance: '100m',
    foodPrice: '$6.99',
  },
  {
    id: 2,
    source: require('../assets/saporomiso.jpg'),
    foodName: 'Sapporo Miso',
    rating: '5.0',
    distance: '150m',
    foodPrice: '$3.99',
  },
  {
    id: 3,
    source: require('../assets/kurume_ramen.png'),
    foodName: 'Kurume Ramen',
    rating: '5.0',
    distance: '600m',
    foodPrice: '$5.99',
  },
  {
    id: 4,
    source: require('../assets/pot_pork_ramen.png'),
    foodName: 'Port Pork Ramen',
    rating: '4.8',
    distance: '400m',
    foodPrice: '$4.99',
  },
  {
    id: 5,
    source: require('../assets/hataka_ramen.png'),
    foodName: 'Hataka Ramen',
    rating: '4.5',
    distance: '300m',
    foodPrice: '$3.99',
  },
];

const FoodCategoryList = () => {
  const FoodCategory = ({item}) => {
    return (
      <View style={styles.container}>
        <Image source={item.image} style={styles.categoryImage} />
        <Text style={{justifyContent: 'center'}}>{item.name}</Text>
      </View>
    );
  };

  return (
    <FlatList
      horizontal={true}
      data={FoodCategoryData}
      renderItem={FoodCategory}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const FoodList = () => {
  const FoodItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Image source={item.source} style={styles.foodImage} />
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#292F44'}}>
          {item.foodName}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>
            <Icon size={15} color="goldenrod" name="star" />
            {item.rating}
          </Text>
          <Text>
            <Icon size={15} color="hotpink" name="map-marker" />
            {item.distance}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 4,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 15}}>
            {item.foodPrice}
          </Text>
          <Icon size={20} name="cart" />
        </View>
      </View>
    );
  };

  return (
    <FlatList
      horizontal={true}
      data={FoodListData}
      renderItem={FoodItem}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const Banner = () => {
  return (
    <View style={{padding: 10}}>
      <Text style={{fontWeight: '400', paddingBottom: 10}}>
        Your Location
        <Icon size={20} name="chevron-down" />
      </Text>
      <View style={styles.row}>
        <Text style={{fontWeight: 'bold', flex: 2}}>
          <Icon size={24} color="orange" name="map-marker" />
          Shibuya, Japan
        </Text>
        <Icon size={27} name="magnify" style={{padding: 3}} />
        <Icon size={27} name="cart" style={{padding: 3}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // padding: 10,
    backgroundColor: 'snow',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight : 0,
  },
  text: {
    color: '#292F44',
  },
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    flex: 1,
    // borderWidth: 0.5,
    backgroundColor: 'ghostwhite',
    borderRadius: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  priceText: {},
  headers: {
    fontSize: 40,
    padding: 10,
    justifyContent: 'flex-start',
    fontFamily: 'Cochin',
    fontWeight: 'bold',
  },
  categoryImage: {
    width: 75,
    height: 100,
    borderRadius: 15,
  },
  foodImage: {
    height: 200,
    width: 150,
    borderRadius: 15,
  },
  headline: {
    fontWeight: 'bold',
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    flexDirection: 'row',
    flex: 1,
  },
});

export default HomeScreen;
