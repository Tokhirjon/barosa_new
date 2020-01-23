import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';
import {normalize} from '../utils/scaling';

const data = [
  {
    image: require('../assets/temp/woman1.jpg'),
    imageFlag: require('../assets/images/usa_flag.png'),
    caption: 'amazon.com',
  },
  {
    image: require('../assets/temp/woman2.jpg'),
    imageFlag: require('../assets/images/england_flag.png'),
    caption: 'amazon.co.uk',
  },
  {
    image: require('../assets/temp/woman3.jpg'),
    imageFlag: require('../assets/images/german_flag.png'),
    caption: 'amazon.de',
  },
  {
    image: require('../assets/temp/woman4.jpg'),
    imageFlag: require('../assets/images/japan_flag.jpg'),
    caption: 'amazon.co.jp',
  },
  {
    image: require('../assets/temp/woman5.jpg'),
    imageFlag: require('../assets/images/usa_flag.png'),
    caption: 'amazon.com',
  },
  {
    image: require('../assets/temp/woman6.jpg'),
    imageFlag: require('../assets/images/japan_flag.jpg'),
    caption: 'amazon.co.jp',
  },
  {
    image: require('../assets/temp/woman7.jpg'),
    imageFlag: require('../assets/images/german_flag.png'),
    caption: 'amazon.de',
  },
  {
    image: require('../assets/temp/woman8.jpg'),
    imageFlag: require('../assets/images/usa_flag.png'),
    caption: 'amazon.com',
  },
  {
    image: require('../assets/temp/woman9.jpg'),
    imageFlag: require('../assets/images/usa_flag.png'),
    caption: 'amazon.com',
  },
  {
    image: require('../assets/temp/woman10.jpeg'),
    imageFlag: require('../assets/images/england_flag.png'),
    caption: 'amazon.co.uk',
  },
  // { key: 'K' },
  // { key: 'L' },
];

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 2;
class RecommendationsCard extends React.Component {
  renderItem = ({item, index}) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <Container style={styles.item}>
        <Cover>
          <Image source={item.image} />
        </Cover>
        <Content>
          <ImageFlag source={item.imageFlag} />
        </Content>
        <Caption>{item.caption}</Caption>
      </Container>
    );
  };

  render() {
    return (
      <FlatList
        data={formatData(data, numColumns)}
        style={styles.container}
        renderItem={this.renderItem}
        numColumns={numColumns}
      />
    );
  }
}
export default RecommendationsCard;

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,

    height: Dimensions.get('window').width / numColumns, // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
});

const Container = styled.TouchableOpacity`
  background-color: white;
  width: 200px;
  height: 280px;
  border-radius: 14px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  margin: 5px;
  margin-top: 10px;
`;
const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: ${normalize(150)};
`;
const Cover = styled.View`
  width: 100%;
  height: ${normalize(200)};
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
  position: absolute;
`;
const Content = styled.View`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 10px;
`;

const ImageFlag = styled.Image`
  margin-top: ${normalize(150)};
  left: ${normalize(-60)};
  width: 25px;
  height: 25px;
  border-radius: 22px;
`;
const Caption = styled.Text`
  font-size: 18px;
  font-weight: bold;
  left: ${normalize(20)};
  top: ${normalize(60)};
`;
