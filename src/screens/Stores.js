import React from 'react';
import styled from 'styled-components';
import {ScrollView, TouchableOpacity} from 'react-native';

//components
import StoresCards from '../components/StoresCards';

//container
import Layout from '../containers/Layout';

const Stores = () => {
  return (
    <Layout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderImageWrapper>
          <Image source={require('../assets/images/store_header.jpg')} />
          <Subtitle>알아두면더 쉬운 직구!</Subtitle>
          <Text>Barosa 구매가이디</Text>
        </HeaderImageWrapper>
        <Content>
          {storeCards.map((storeCard, index) => (
            <TouchableOpacity key={index}>
              <StoresCards
                image={storeCard.image}
                imageFlag={storeCard.imageFlag}
                title={storeCard.title}
                caption={storeCard.caption}
                logo={storeCard.logo}
              />
            </TouchableOpacity>
          ))}
        </Content>
      </ScrollView>
    </Layout>
  );
};
export default Stores;

const storeCards = [
  {
    image: require('../assets/images/usa_am.jpg'),
    imageFlag: require('../assets/images/usa_flag.png'),
    title: '미국 아몬',
    caption: 'amazon.com',
    logo: require('../assets/images/amazon_logo.png'),
  },
  {
    image: require('../assets/images/japan_am.jpg'),
    imageFlag: require('../assets/images/japan_flag.jpg'),
    title: '일본 아몬',
    caption: 'amazon.co.jp',
    logo: require('../assets/images/amazon_logo.png'),
  },
  {
    image: require('../assets/images/england_am.jpg'),
    imageFlag: require('../assets/images/england_flag.png'),
    title: '영국 아몬',
    caption: 'amazon.co.uk',
    logo: require('../assets/images/amazon_logo.png'),
  },
  {
    image: require('../assets/images/german_am.jpg'),
    imageFlag: require('../assets/images/german_flag.png'),
    title: '독일 아몬',
    caption: 'amazon.de',
    logo: require('../assets/images/amazon_logo.png'),
  },
  {
    image: require('../assets/images/rakuten.jpg'),
    imageFlag: require('../assets/images/japan_flag.jpg'),
    title: '라쿠텐',
    caption: 'rakuten.co.jp',
  },
  {
    image: require('../assets/images/carter.jpg'),
    imageFlag: require('../assets/images/usa_flag.png'),
    title: '카터즈',
    caption: 'carters.com',
  },
  {
    image: require('../assets/images/polo.jpg'),
    imageFlag: require('../assets/images/usa_flag.png'),
    title: '폴로',
    caption: 'ralphlauren.com',
  },
  {
    image: require('../assets/images/ebay.jpg'),
    imageFlag: require('../assets/images/usa_flag.png'),
    title: '이베이',
    caption: 'ebay.com',
  },
];

const HeaderImageWrapper = styled.View`
  width: 100%;
  height: 210px;
`;

const Image = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  background: #3c4560;
`;

const Subtitle = styled.Text`
  width: 10px;
  font-size: 20px;
  color: black;
  font-weight: bold;
  width: 170px;
  position: absolute;
  top: 40px;
  left: 10px;
`;
const Text = styled.Text`
  color: black;
  font-size: 24px;
  position: absolute;
  top: 90px;
  left: 10px;
  max-width: 300px;
  font-weight: bold;
`;

const Content = styled.View``;
