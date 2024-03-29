import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSearchVideoCourseByTitle } from '../../services/redux/videocourse/action';
import Card from '../../component/card';
import Table from '../../component/Table';

class SearchVideoCourseByTitle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      user_id: 1
    }
  }
  componentDidMount() {
    this.handleUpdateSearchVideoCourseByTitle();
  }
  handleUpdateSearchVideoCourseByTitle = () => {
    this.setState({loading: true});
    
    var bodyData = {
      "search_keyword": "madi"
    }

    this.props.updateSearchVideoCourseByTitle(this.state.user_id, bodyData, () => {
      this.setState({loading: false})
    })
  }

  render() {
    const { SearchVideoCourseByTitle } = this.props;
    const { loading } = this.state;
    const th = (
      <tr>
        <th>video_id</th>
        <th>title</th>
        <th>path</th>
        <th>premium</th>
        <th>created_date</th>
        <th>updated_date</th>
      </tr>
    )
    const td = (
      SearchVideoCourseByTitle.data.map((item,key)=>{
        return(
          <tr key={key}>
            <td>{item.video_id}</td>
            <td>{item.title}</td>
            <td>{item.path}</td>
            <td>{item.premium}</td>
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
        <Card title={loading ? spinner : 'Search Video Course By Title'} content={table}/>
      </div>
    )
  }
}
SearchVideoCourseByTitle.propsTypes = {
  SearchVideoCourseByTitle: PropTypes.object
}

SearchVideoCourseByTitle.defaultProps = {
  SearchVideoCourseByTitle: {
    data: [{}]
  }
}

const mapStateToProps = state => {
  return {
    SearchVideoCourseByTitle: state.dataVideoCourse.searchVideoCourseByTitle
  }
}

const mapDispatchToProps = dispatch => ({
  updateSearchVideoCourseByTitle: (param, dataBody, callback) => {
    dispatch(fetchSearchVideoCourseByTitle(param, dataBody, callback))
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchVideoCourseByTitle);