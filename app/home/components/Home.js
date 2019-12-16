import React, {Component} from 'react';
import {FlatList, Text, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import {SCREENS} from '../../config/router';
import ScrollViewWithStatusBar from '../../components/ScrollViewWithStatusBar';
import HotelDescription from './HotelDescription';
import RoomSummary from './RoomSummary';
import {colors} from '../../config/colors';

export default class Home extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      fetchBranding: PropTypes.func.isRequired,
      fetchRooms: PropTypes.func.isRequired,
    }).isRequired,
    branding: PropTypes.shape({
      map: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
      }).isRequired,
      logoUrl: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
      }).isRequired,
      showModal: PropTypes.bool.isRequired,
      errors: PropTypes.array.isRequired,
    }).isRequired,
    rooms: PropTypes.arrayOf(
      PropTypes.shape({
        accessible: PropTypes.bool.isRequired,
        description: PropTypes.string.isRequired,
        features: PropTypes.arrayOf(PropTypes.string.isRequired),
        image: PropTypes.string.isRequired,
        roomNumber: PropTypes.number.isRequired,
        roomPrice: PropTypes.number.isRequired,
        roomid: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  componentDidMount() {
    this.props.actions
      .fetchBranding()
      .then(() => this.props.actions.fetchRooms());
  }

  render() {
    const {branding, navigation, rooms} = this.props;
    const {map, logoUrl, description, name, contact} = branding;

    return (
      <ScrollViewWithStatusBar>
        {logoUrl === '' ? (
          <Text>Loading.....</Text>
        ) : (
          <View>
            <HotelDescription description={description} logoUrl={logoUrl} />
            <View style={styles.divider}>
              <Text style={styles.title}>Rooms</Text>
            </View>
            {rooms && rooms.length > 0 ? (
              rooms.map(room => (
                <React.Fragment key={room.roomid}>
                  <RoomSummary
                    description={room.description}
                    image={room.image}
                    onPress={() =>
                      navigation.navigate(SCREENS.ROOM, {data: room})
                    }
                    price={room.roomPrice}
                    type={room.type}
                  />
                </React.Fragment>
              ))
            ) : (
              <Text>Loading rooms.....</Text>
            )}
          </View>
        )}
      </ScrollViewWithStatusBar>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  divider: {
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    marginTop: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
