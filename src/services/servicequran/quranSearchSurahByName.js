import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchQuranSearchSurahByName } from '../../services/redux/quran/action';
import Card from '../../component/card';
import Table from '../../component/Table';

class QuranSearchSurahByName extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      user_id: 1
    }
  }
  componentDidMount() {
    this.handleUpdateQuranSearchSurahByName();
  }
  handleUpdateQuranSearchSurahByName = () => {
    this.setState({loading: true});
    
    var bodyData = {
      "keyword" : "Ti"
    }

    this.props.updateQuranSearchSurahByName(this.state.user_id, bodyData, () => {
      this.setState({ loading: false})
    })
  }

  render() {

    const { QuranSearchSurahByName } = this.props;
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
      QuranSearchSurahByName.data.surahlist.map((item,key)=>{
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
        <Card title={loading ? spinner : 'Quran Search Surah By Name'} content={table}/>
      </div>
    )
  }
}

QuranSearchSurahByName.propTypes = {
  QuranSearchSurahByName: PropTypes.object
}

QuranSearchSurahByName.defaultProps = {
  QuranSearchSurahByName: {
    data: {surahlist:[{}]}
  }
}

const mapStateToProps = state => {
  return {
    QuranSearchSurahByName: state.quranResponse.quranSearchSurahByName
  }
}

const mapDispatchToProps = dispatch => ({
  updateQuranSearchSurahByName: (param, dataBody, callback) => {
    dispatch(fetchQuranSearchSurahByName(param, dataBody, callback))
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuranSearchSurahByName);
