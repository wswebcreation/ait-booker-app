import React, {Component} from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import ScrollViewWithoutStatusBar from '../../components/ScrollViewWithoutStatusBar';
import {WINDOW_WIDTH} from '../../config/constants';
import {STATUS_BAR_HEIGHT} from '../../components/StatusBar';
import {colors} from '../../config/colors';

// https://github.com/apaajabolehd/react-native-range-datepicker
// https://github.com/werein/react-native-dates

// @TODO: Both images have different rations, they need to be consistent and the api needs to return the ratio. For now I take 1.5
const ratio = 1.5;

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  renderItem(feature, index) {
    return (
      <View style={styles.column} key={index}>
        <View style={styles.row}>
          <View style={styles.bullet}>
            <Text>{'\u2022' + ' '}</Text>
          </View>
          <View style={styles.bulletText}>
            <Text style={styles.normalText}>{feature}</Text>
          </View>
        </View>
      </View>
    );
  }

  onDateChange(date, type) {
    console.log('\n\ntype = ', type);
    console.log('date = ', date, '\n\n');
    // if (type === 'END_DATE') {
    //   this.setState({
    //     selectedEndDate: date,
    //   });
    // } else {
    //   this.setState({
    //     selectedStartDate: date,
    //     selectedEndDate: null,
    //   });
    // }
  }

  render() {
    const {navigation} = this.props;
    const room = navigation.getParam('data', -1);
    const {
      accessible,
      description,
      features,
      image,
      roomNumber,
      roomPrice,
      roomid,
      type,
    } = room;

    return (
      <ScrollViewWithoutStatusBar>
        <Image
          style={{
            height: WINDOW_WIDTH / ratio,
            width: WINDOW_WIDTH,
          }}
          source={{uri: image}}
        />
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.descriptionContainer}>
            <View style={styles.description}>
              <Text style={styles.title}>{type}</Text>
              <Text style={styles.text}>{description}</Text>
              {features.map((feature, index) =>
                this.renderItem(feature, index),
              )}
            </View>
            <View style={styles.priceContainer}>
              <Text style={[styles.price]}>£ {roomPrice}</Text>
              <Text style={styles.night}>per night</Text>
            </View>
          </View>
          <Text style={styles.title}>Step 1: Select your date(s)</Text>
          <CalendarPicker
            allowRangeSelection
            onDateChange={this.onDateChange}
            selectedDayColor="#6d95da"
            // See: https://github.com/stephy/CalendarPicker/issues/167#issuecomment-546940704
            // disabledDates={['2019-12-16', '2019-12-17']}
          />
        </View>
      </ScrollViewWithoutStatusBar>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    top: STATUS_BAR_HEIGHT,
    left: 20,
  },
  closeButtonText: {
    color: colors.white,
    fontSize: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  column: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flex: 1,
  },
  bullet: {
    width: 10,
  },
  bulletText: {
    flex: 1,
  },
  boldText: {
    fontWeight: 'bold',
  },
  normalText: {},
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingBottom: 20,
  },
  description: {
    flex: 1,
    paddingRight: 15,
  },
  priceContainer: {
    backgroundColor: '#6d95da',
    borderRadius: 5,
    padding: 10,
    width: 100,
    height: 65,
  },
  price: {
    fontSize: 22,
    color: colors.white,
    textAlign: 'center',
  },
  night: {
    fontSize: 12,
    color: colors.white,
    textAlign: 'center',
  },
});
