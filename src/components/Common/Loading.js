import React from 'react';
import { connect } from 'react-redux'
import img from './loading_spinner.gif'

const Laoading = ({loading}) => {
	return (
		loading ?
    <div style={{ textAlign: 'center' }}>
      <img src={img} alt='loading' />
      <h1>LOADING</h1>
    </div> :
    null

	)
}

export default Laoading;