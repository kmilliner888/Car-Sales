import React from 'react';

import { removeFeature } from '../actions/actions';

import { connect } from 'react-redux';

const AddedFeature = props => {
  console.log("AddedFeature props", props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=> props.removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    
  };
};

export default connect(mapStateToProps, {removeFeature})(AddedFeature);
