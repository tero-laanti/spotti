import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, TextInput, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#cfffe5',
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: 'center',
    elevation: 5,
  },
  textInput: {
    width: '60%',
    borderColor: 'black',
    borderWidth: 1,
  },
  buttonContainer: {
    width: '20%',
    marginTop: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const coordinates = {
  latitude: 60.45,
  longitude: 22.29,
};

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchInput: '' };
  }

  handleSearchInputChange = text => this.setState({ searchInput: text });

  render() {
    const { searchInput } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={searchInput}
          onChangeText={this.handleSearchInputChange}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SearchResults', { coordinates })}
          >
            <Text>SEARCH</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Search.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default Search;
