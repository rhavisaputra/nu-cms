import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchVideoCourse } from '../redux/videocourse/action';
import Card from '../../component/card';
import Table from '../../component/Table';

class VideoCourse extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      user_id: 1
    }
  }
  componentDidMount() {
    this.handleUpdateVideoCourse();
  }
  handleUpdateVideoCourse = () => {
    this.setState({loading: true});

    this.props.updateVideoCourse(this.state.user_id, () => {
      this.setState({loading: false})
    })
  }

  render() {
    const { VideoCourse } = this.props;
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
      VideoCourse.data.map((item,key)=>{
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
        <Card title={loading ? spinner : 'Video Course'} content={table}/>
      </div>
    )
  }
}
VideoCourse.propsTypes = {
  VideoCourse: PropTypes.object
}

VideoCourse.defaultProps = {
  VideoCourse: {
    data: [{}]
  }
}

const mapStateToProps = state => {
  return {
    VideoCourse: state.dataVideoCourse.videoCourse
  }
}

const mapDispatchToProps = dispatch => ({
  updateVideoCourse: (param, callback) => {
    dispatch(fetchVideoCourse(param, callback))
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoCourse);