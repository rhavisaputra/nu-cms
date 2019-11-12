import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchQuranGetBookmark } from '../../services/redux/quran/action';
import Card from '../../component/card';
import Table from '../../component/Table';

class QuranGetBookmark extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      user_id: 1
    }
  }
  componentDidMount() {
    this.handleUpdateQuranGetBookmark();
  }
  handleUpdateQuranGetBookmark = () => {
    this.setState({loading: true});

    this.props.updateQuranGetBookmark(this.state.user_id, () => {
      this.setState({ loading: false})
    })
  }

  render() {

    const { QuranGetBookmark } = this.props;
    const { loading } = this.state;
    const th = (
      <tr>
        <th>id</th>
        <th>user_id</th>
        <th>surah_id</th>
        <th>verse_id</th>
        <th>create_date</th>
        <th>update_date</th>
      </tr>
    )
    const td = (
      QuranGetBookmark.data.bookmark.map((item,key)=>{
        return(
          <tr key={key}>
            <td>{item.id}</td>
            <td>{item.user_id}</td>
            <td>{item.surah_id}</td>
            <td>{item.verse_id}</td>
            <td>{item.created_date}</td>
            <td>{item.updated_date}</td>
          </tr>
        )
      })
    )
    const table = (
      <Table th={th} td={td}/>
    )
    const spinner = (
      <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
      </div>
    )
    return(
      <div>
        <Card title={loading ? spinner : 'Quran Get Bookmark'} content={table}/>
      </div>
    )
  }
}

QuranGetBookmark.propTypes = {
  QuranGetBookmark: PropTypes.object
}

QuranGetBookmark.defaultProps = {
  QuranGetBookmark: {
    data: {bookmark:[{}]}
  }
}

const mapStateToProps = state => {
  return {
    QuranGetBookmark: state.quranResponse.quranGetBookmark
  }
}

const mapDispatchToProps = dispatch => ({
  updateQuranGetBookmark: (param, callback) => {
    dispatch(fetchQuranGetBookmark(param, callback))
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuranGetBookmark);
