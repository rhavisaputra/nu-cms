import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchQuranSetBookmark } from '../../services/redux/quran/action';
import Card from '../../component/card';
import Table from '../../component/Table';

class QuranSetBookmark extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      user_id: 1
    }
  }
  componentDidMount() {
    this.handleUpdateQuranSetBookmark();
  }
  handleUpdateQuranSetBookmark = () => {
    this.setState({loading: true});
    
    var bodyData = {
      "surah_id" : 1,
      "verse" : 1,
      "juz_id": 1
    }

    this.props.updateQuranSetBookmark(this.state.user_id, bodyData, () => {
      this.setState({ loading: false})
    })
  }

  render() {
    return(
      null
    )
  }
}

QuranSetBookmark.propTypes = {
  QuranSetBookmark: PropTypes.object
}

QuranSetBookmark.defaultProps = {
  QuranSetBookmark: {
    data: {}
  }
}

const mapStateToProps = state => {
  return {
    quranSetBookmark: state.quranResponse.quranSetBookmark
  }
}

const mapDispatchToProps = dispatch => ({
  updateQuranSetBookmark: (param, dataBody, callback) => {
    dispatch(fetchQuranSetBookmark(param, dataBody, callback))
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuranSetBookmark);
