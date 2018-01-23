import React, { Component } from 'react';
import SeachBar from '../components/searchBar';
import PriceList from '../components/priceList';
import { connect } from 'react-redux';
import { fetchPrice } from '../actions/index';
import { bindActionCreators } from 'redux';

class App extends Component {
  state = {
    term: ''
  }

  inputChange = e => {
    this.setState({term: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchPrice(this.state.term);
    this.setState({term: ''})
  }

  render() {
    return (
      <div className='app'>
        <h1>PSE Watch</h1>
        <SeachBar 
          onSubmit={this.handleSubmit} 
          state={this.state}
          onChange={this.inputChange}
        />
        <PriceList  
          price={this.props.price}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ price }) => {
  return { price };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchPrice }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);