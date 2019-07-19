import React, { Component } from "react";
import { connect } from "react-redux";
import { onAgeUp, onAgeDown, getNewes } from "./../../action/newes";
import Loading from './../../components/Common/Loading'
import Card from './../../components/Common/Card'
import Header from './../../components/Header/index'
import Tab from './../../components/Header/Tab'

class Search extends Component {
  constructor(props) {
    super(props);
    props.getNewes('latest')

  }
  render() {
    const { loading, article, getNewes } = this.props
    console.log(loading);
    return (
      <div>
        <Header heading="News" />
        <Tab getNewes={getNewes} />
        <Card loading={loading} articles={article} />
        <Loading loading={loading} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.newes.categories,
    loading: state.newes.loading,
    article: state.newes.news
  };
};


export default connect(
  mapStateToProps,
  {
    onAgeUp,
    onAgeDown,
    getNewes
  }
)(Search);
