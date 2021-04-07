import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import PropTypes from 'prop-types';
import ListMovies from './ListMovies';
import { connect } from 'react-redux';

import Styles from '../styles/app'
import { onFetchMovies } from '../redux/actions'

class SearchScreen extends React.Component {    
  state = {
    search: '',
    pageNumber: 1,
  };

  getResults = async () => {
    this.props.onFetchMovies(this.state.search, this.state.pageNumber)
  };

  loadMoreMovies = () => {
    if (this.state.pageNumber <= this.props.maxPages) {
      this.getResults(this.state.search, this.state.pageNumber + 1);
      this.setState({
        pageNumber: this.state.pageNumber + 1,
      });
    }
  };

  handleSearchChange = (search) => {
    this.setState({search})
  };

  render() {
    return (
      <View style={Styles.container}>
        <TextInput
          style={Styles.input}
          placeholder="Enter movie name"
          value={this.state.search}
          onChangeText={this.handleSearchChange}
        />
        <View style={Styles.buttonContainer}>
          <Button
            color="pink"
            title="Search"
            onPress={this.getResults}
          />
        </View>
        {this.props.error ? <Text style={Styles.error}>{this.props.error}</Text> : null}
        {this.props.movies ? <ListMovies
          movies={this.props.movies}
          loadMoreMovies={this.loadMoreMovies}
        /> : null}
      </View>
    );
  }
}

SearchScreen.propTypes = {
  movies: PropTypes.array,
  maxPages: PropTypes.number,
  resultsErr: PropTypes.string,
  onFetchMovies: PropTypes.func
}

const mapStateToProps = (state) => ({
  movies: state.results.movies,
  maxPages: state.results.maxPages,
  resultsErr: state.results.resultsErr,
});

export default connect(mapStateToProps, { onFetchMovies })(SearchScreen)