import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCountries } from "../../action/countries";
import { Loading } from '../../common';
import CountriesItem from './CountriesItem';

class Countries extends Component {
  constructor(props) {
    super(props);
    props.fetchCountries();

  }
  render() {
    const { countries: { isFetching, data } } = this.props;

    if (isFetching) {
      return <Loading />
    }

    return (
      <div className="container">
        <div className="countries-container">
          {data.map((item, i) => <CountriesItem key={i} {...item} />)}
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    countries: state.countries,
  };
};


export default connect(
  mapStateToProps,
  {
    fetchCountries,
  }
)(Countries);