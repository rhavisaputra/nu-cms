import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSurahListByJuzNumber } from '../../services/redux/quran/action';
import Card from '../../component/card';
import Table from '../../component/Table';

class SurahListByJuzNumber extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      user_id: 1
    }
  }
  componentDidMount() {
    this.handleUpdateSurahListByJuzNumber();
  }
  handleUpdateSurahListByJuzNumber = () => {
    this.setState({loading: true});
    
    var bodyData = {
      "juz": 20
    }
    
    this.props.updateSurahListByJuzNumber(this.state.user_id, bodyData, () => {
      this.setState({ loading: false})
    })
  }

  render() {

    const { SurahListByJuzNumber } = this.props;
    const { loading } = this.state;
    const th = (
      <tr>
        <th>id</th>
        <th>surah_id</th>
        <th>surah_title_text</th>
        <th>surah_title_arabic</th>
        <th>surah_translate_english</th>
        <th>surah_translate_indonesian</th>
        <th>start_verse</th>
        <th>end_verse</th>
      </tr>
    )
    const td = (
      SurahListByJuzNumber.data.juzsurahlist.map((item,key)=>{
        return(
          <tr key={key}>
            <td>{item.id}</td>
            <td>{item.surah_id}</td>
            <td>{item.surah_title_text}</td>
            <td>{item.surah_title_arabic}</td>
            <td>{item.surah_translate_english}</td>
            <td>{item.surah_translate_indonesian}</td>
            <td>{item.start_verse}</td>
            <td>{item.end_verse}</td>
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
        <Card title={loading ? spinner : 'Surah List By Juz Number'} content={table}/>
      </div>
    )
  }
}

SurahListByJuzNumber.propTypes = {
  SurahListByJuzNumber: PropTypes.object
}

SurahListByJuzNumber.defaultProps = {
  SurahListByJuzNumber: {
    data: {juzsurahlist:[{}]}
  }
}

const mapStateToProps = state => {
  return {
    SurahListByJuzNumber: state.quranResponse.surahListByJuzNumber
  }
}

const mapDispatchToProps = dispatch => ({
  updateSurahListByJuzNumber: (param, dataBody, callback) => {
    dispatch(fetchSurahListByJuzNumber(param, dataBody, callback))
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurahListByJuzNumber);
