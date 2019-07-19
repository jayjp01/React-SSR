import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};
class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.categories !== prevState.categories) {
      this.props.getNewes(this.state.categories)
    }
  }

  handleTab = (param) => (e) => {
    this.setState({ 'categories': param }, () => {
    })
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            tabItemContainerStyle={{ position: "fixed", bottom: "0" }}
          >
            <Tab label="Latest" onClick={this.handleTab('latest')} />
            <Tab label="Entertainment" onClick={this.handleTab('entertainment')} />
            <Tab label="sports" onClick={this.handleTab('sports')} />
          </Tabs>
        </AppBar>

      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles({ withTheme: true })(FullWidthTabs);
