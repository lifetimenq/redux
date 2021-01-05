import { connect } from 'react-redux';

import Filter from './Filter';

const mapDispatchToProps = (dispatch) => (
  {
    setFilter: (filter) => dispatch({
    type: 'SET_FILTER',
    filter
    }),
    addFilter: () => dispatch
});

export default connect(null, mapDispatchToProps)(Filter);