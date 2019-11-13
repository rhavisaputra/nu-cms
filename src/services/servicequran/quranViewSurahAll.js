import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchQuranViewSurahAll } from '../../services/redux/quran/action';
import Card from '../../component/card';
import Table from '../../component/Table';

class QuranViewSurahAll extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      user_id: 1
    }
  }
  componentDidMount() {
    this.handleUpdateQuranViewSurahAll();
  }
  handleUpdateQuranViewSurahAll = () => {
    this.setState({loading: true});
    
    var bodyData = {
      "language" : "arabic/english/indonesian"
    }

    this.props.updateQuranViewSurahAll(this.state.user_id, bodyData, () => {
      this.setState({ loading: false})
    })
  }

  render() {

    const { QuranViewSurahAll } = this.props;
    const { loading } = this.state;
    const thParent = (title) => (
      <tr>
        <th colSpan="5">{title}</th>
      </tr>
    )
    const th = (
      <tr>
        <th>id</th>
        <th>database</th>
        <th>surah_id</th>
        <th>verse_id</th>
        <th>ayah_text</th>
      </tr>
    )
    const tdIndonesian = (
      QuranViewSurahAll.data.surah.indonesian.map((item,key) => (
        <tr key={key}>
            <td>{item.id}</td>
            <td>{item.database_id}</td>
            <td>{item.surah_id}</td>
            <td>{item.verse_id}</td>
            <td>{item.ayah_text}</td>
        </tr>
      ))
    )
    const tdEnglish = (
      QuranViewSurahAll.data.surah.english.map((item,key) => (
        <tr key={key}>
            <td>{item.id}</td>
            <td>{item.database_id}</td>
            <td>{item.surah_id}</td>
            <td>{item.verse_id}</td>
            <td>{item.ayah_text}</td>
        </tr>
      ))
    )
    const tdArabic = (
      QuranViewSurahAll.data.surah.arabic.map((item,key) => (
        <tr key={key}>
            <td>{item.id}</td>
            <td>{item.database_id}</td>
            <td>{item.surah_id}</td>
            <td>{item.verse_id}</td>
            <td>{item.ayah_text}</td>
        </tr>
      ))
    )
    const table = (
      <React.Fragment>
      <Table thParent={thParent("indonesian")} th={th} td={tdIndonesian}/>
      <Table thParent={thParent("english")} th={th} td={tdEnglish}/>
      <Table thParent={thParent("arabic")} th={th} td={tdArabic}/>
      </React.Fragment>
    )
    const spinner = (
      <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
      </div>
    )
    return(
      <div>
        <Card title={loading ? spinner : 'Quran View Surah All'} content={table}/>
      </div>
    )
  }
}

QuranViewSurahAll.propTypes = {
  QuranViewSurahAll: PropTypes.object
  // QuranViewSurahAll: {
  //   data : {
  //     surah: PropTypes.object
  //   }
  // }
}

QuranViewSurahAll.defaultProps = {
  QuranViewSurahAll: {
    data: {
      surah: {
        indonesian:[{}],
        arabic:[{}],
        english:[{}]
      }
    }
  }
}

const mapStateToProps = state => {
  return {
    QuranViewSurahAll: state.quranResponse.quranViewSurahAll
  }
}

const mapDispatchToProps = dispatch => ({
  updateQuranViewSurahAll: (param, dataBody, callback) => {
    dispatch(fetchQuranViewSurahAll(param, dataBody, callback))
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuranViewSurahAll);
