import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
const styles = (theme) => ({
  root: {
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
  },
});

class CustomizedInputBase extends React.Component {
  state = {
    inputValue: ''
  };

  handleTab = param => e => {
    this.setState({ inputValue: e.target.value });
    
  };

  render() {
    const { classes } = this.props;
    console.log(classes);

    return (
      <Paper className= {classes.root} elevation={1}  borderColor="primary.main" >
        <IconButton className={classes.iconButton} aria-label="Menu">
        <SearchIcon />
        </IconButton>
        <InputBase className={classes.input} placeholder="Search country based" value={this.state.inputValue} onChange={this.handleTab('sports')}/>
      </Paper>
    );
  }
}

CustomizedInputBase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputBase);


