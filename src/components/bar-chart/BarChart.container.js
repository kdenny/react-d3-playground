import {connect} from 'react-redux'
import {createSelector} from 'reselect'
import DemoBarChart from 'components/DemoBarChart'
import {setHover} from 'redux/actions'
import toJS from 'hocs/toJS'
import {getText, getHover} from 'redux/selectors'


const mapStateToProps = (state, ownProps) => ({
  data: getData(state),
  hover: getHover(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setHover (letter) {
    dispatch(setHover(letter))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(toJS(DemoBarChart))