import React from 'react';
import {ScrollView, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import styled from 'styled-components';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

//containers
import Layout from './../containers/Layout';

//components
import Cards from '../components/Cards';
import RecommendationsCard from '../components/RecommendationsCard';
import CarouselComponent from '../components/CarouselComponent';

//utils
import {normalize} from '../utils/scaling';

class HomeScreen extends React.Component {
  render() {
    return (
      // <SafeAreaView style={{height: '100%'}}>
      <Layout>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CarouselComponent />
          <Subtitle1>
            쇼핑몰 <Text style={{color: '#3c4560'}}>Stores</Text>
          </Subtitle1>
          <TouchableOpacity>
            <WrapperMore1>Show all ></WrapperMore1>
          </TouchableOpacity>
          <ScrollView
            horizontal={true}
            style={{paddingBottom: 30}}
            /*     pagingEnabled={true} */
            showsHorizontalScrollIndicator={false}>
            {cards.map((card, index) => (
              <Cards
                key={index}
                image={card.image}
                imageFlag={card.imageFlag}
                caption={card.caption}
                logo={card.logo}
              />
            ))}
          </ScrollView>
          <Subtitle1>
            추천상품 <Text style={{color: '#3c4560'}}>Recommendations</Text>
          </Subtitle1>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Stores');
            }}>
            <WrapperMore2>Show all ></WrapperMore2>
          </TouchableOpacity>
          <WrapperRecommendation>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Stores');
              }}>
              <RecommendationsCard />
            </TouchableOpacity>
          </WrapperRecommendation>
        </ScrollView>
      </Layout>
      // </SafeAreaView>
    );
  }
}
export default HomeScreen;

const cards = [
  {
    image: require('../assets/images/woman_clothes.jpg'),
    imageFlag: require('../assets/images/usa_flag.png'),
    caption: 'amazon.com',
    logo: require('../assets/images/amazon_logo.png'),
  },
  {
    image: require('../assets/images/man_clothes.jpg'),
    imageFlag: require('../assets/images/england_flag.png'),
    caption: 'amazon.co.uk',
    logo: require('../assets/images/amazon_logo.png'),
  },
  {
    image: require('../assets/images/babe_clothes.jpg'),
    imageFlag: require('../assets/images/japan_flag.jpg'),
    caption: 'amazon.co.jp',
    logo: require('../assets/images/amazon_logo.png'),
  },

  {
    image: require('../assets/images/pet_clothes.jpg'),
    imageFlag: require('../assets/images/german_flag.png'),
    caption: 'amazon.de',
    logo: require('../assets/images/amazon_logo.png'),
  },
];

const Subtitle1 = styled.Text`
  top: 10px;
  left: 10px;
  font-size: 20px;
  font-weight: 500;
  margin-top: ${normalize(15)};
  margin-bottom: ${normalize(5)};
`;

const WrapperMore1 = styled.Text`
  top: -7px;
  position: absolute;
  right: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #3c4560;
`;
const WrapperRecommendation = styled.View`
  top: 5px;
`;
const WrapperMore2 = styled.Text`
  position: absolute;
  top: -20px;
  right: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #3c4560;
`;
