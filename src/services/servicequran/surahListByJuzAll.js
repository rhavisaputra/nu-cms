import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSurahListByJuzAll } from '../../services/redux/quran/action';
import Card from '../../component/card';
import Table from '../../component/Table';

class SurahListByJuzAll extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      user_id: 1
    }
  }
  componentDidMount() {
    this.handleUpdateSurahListByJuzAll();
  }
  handleUpdateSurahListByJuzAll = () => {
    this.setState({loading: true});

    this.props.updateSurahListByJuzAll(this.state.user_id, () => {
      this.setState({ loading: false})
    })
  }

  render() {

    const { SurahListByJuzAll } = this.props;
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
      SurahListByJuzAll.data.juzsurahlist.map((item,key)=>{
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
        <Card title={loading ? spinner : 'Surah List By Juz All'} content={table}/>
      </div>
    )
  }
}

SurahListByJuzAll.propTypes = {
  SurahListByJuzAll: PropTypes.object
}

SurahListByJuzAll.defaultProps = {
  SurahListByJuzAll: {
    data: {juzsurahlist:[{}]}
  }
}

const mapStateToProps = state => {
  return {
    SurahListByJuzAll: state.quranResponse.surahListByJuzAll
  }
}

const mapDispatchToProps = dispatch => ({
  updateSurahListByJuzAll: (param, callback) => {
    dispatch(fetchSurahListByJuzAll(param, callback))
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurahListByJuzAll);
