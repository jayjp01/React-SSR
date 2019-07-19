import { Component } from "react";
import { connect } from "react-redux";
import { getNewes } from "./action/newes";
class App extends Component {
  constructor(props) {
    super(props);
    props.getNewes('latest')

  }

  render() {
    return this.props.children;
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    loading: state.loading,
    article: state.news
  };
};


export default connect(
  mapStateToProps,
  {
    getNewes
  }
)(App);
