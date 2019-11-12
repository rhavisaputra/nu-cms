import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchListSurah } from '../../services/redux/quran/action';
import Card from '../../component/card';
import Table from '../../component/Table';

class ListSurah extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      user_id: 1
    }
  }
  componentDidMount() {
    this.handleUpdateListSurah();
  }
  handleUpdateListSurah = () => {
    this.setState({loading: true});

    this.props.updateListSurah(this.state.user_id, () => {
      this.setState({ loading: false})
    })
  }

  render() {

    const { ListSurah } = this.props;
    const { loading } = this.state;
    const th = (
      <tr>
        <th>id</th>
        <th>title_text</th>
        <th>title_arabic</th>
        <th>translate_english</th>
        <th>translate_indonesian</th>
        <th>place</th>
        <th>type</th>
        <th>audio_path</th>
        <th>tajweed_path</th>
        <th>count</th>
      </tr>
    )
    const td = (
      ListSurah.data.surahlist.map((item,key)=>{
        return(
          <tr key={key}>
            <td>{item.id}</td>
            <td>{item.title_text}</td>
            <td>{item.title_arabic}</td>
            <td>{item.translate_english}</td>
            <td>{item.translate_indonesian}</td>
            <td>{item.place}</td>
            <td>{item.type}</td>
            <td>{item.audio_path}</td>
            <td>{item.tajweed_path}</td>
            <td>{item.count}</td>
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
        <Card title={loading ? spinner : 'List Surah'} content={table}/>
      </div>
    )
  }
}

ListSurah.propTypes = {
  ListSurah: PropTypes.object
}

ListSurah.defaultProps = {
  ListSurah: {
    data: {surahlist:[{}]}
  }
}

const mapStateToProps = state => {
  return {
    ListSurah: state.quranResponse.listSurah
  }
}

const mapDispatchToProps = dispatch => ({
  updateListSurah: (param, callback) => {
    dispatch(fetchListSurah(param, callback))
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListSurah);
