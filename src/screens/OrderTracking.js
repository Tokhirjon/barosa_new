import React from 'react';
import styled from 'styled-components';
import Timeline from 'react-native-timeline-flatlist';

//containers
import Layout from '../containers/Layout';

class OrderTracking extends React.Component {
  constructor() {
    super();
    this.data = [
      {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
      {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
      {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
      {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
      {time: '16:30', title: 'Event 5', description: 'Event 5 Description'},
    ];
  }

  render() {
    //'rgb(45,156,219)'
    return (
      <Layout>
        <Cover>
          <Timeline data={this.data} />
        </Cover>
      </Layout>
    );
  }
}
export default OrderTracking;

const Cover = styled.View`
  flex: 1;
  margin-top: 10px;
  left: 50px;
`;
