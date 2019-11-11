import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchYoutubeFeed } from '../../services/redux/widget/action';
import Card from '../../component/card';
import Table from '../../component/Table';

class WidgetGetYoutubeFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      user_id: 1
    }
  }
  componentDidMount() {
    this.handleUpdateYoutubeFeed();
  }
  handleUpdateYoutubeFeed = () => {
    this.setState({loading: true});

    this.props.updateYoutubeFeed(this.state.user_id, () => {
      this.setState({ loading: false })
    })
  }
  render() {
    const { youtubeFeed } = this.props;
    const { loading } = this.state;
    const th = (
      <tr>
        <th>videoId</th>
        <th>title</th>
        <th>description</th>
        <th>url_thumbnail</th>
        <th>url</th>
      </tr>
    )
    const td = (
      <tr>
        <td>{youtubeFeed.data.videoId}</td>
        <td>{youtubeFeed.data.title}</td>
        <td>{youtubeFeed.data.description}</td>
        <td>{youtubeFeed.data.url_thumbnail}</td>
        <td>{youtubeFeed.data.url}</td>
      </tr>
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
        <Card title={loading ? spinner : 'Widget Get Youtube Feed'} content={table}/>
      </div>
    )
  }
}

WidgetGetYoutubeFeed.propTypes = {
  youtubeFeed: PropTypes.object
}
WidgetGetYoutubeFeed.defaultProps = {
  youtubeFeed: {
    data: []
  }
}

const mapStateToProps = state => {
  return {
    youtubeFeed: state.widgetResponse.youtubeFeed
  }
}
const mapDispatchToProps = dispatch => ({
  updateYoutubeFeed: (param, callback) => {
    dispatch(fetchYoutubeFeed(param, callback))
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WidgetGetYoutubeFeed);
