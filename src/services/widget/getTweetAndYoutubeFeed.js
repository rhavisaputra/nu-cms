import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTweetAndYoutubeFeed } from '../../services/redux/widget/action';
import Card from '../../component/card';
import Table from '../../component/Table';

class GetTweetAndYoutubeFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      user_id: 1
    }
  }
  componentDidMount() {
    this.handleUpdateTwitterAndYoutubeFeed();
  }
  handleUpdateTwitterAndYoutubeFeed = () => {
    this.setState({loading: true});

    this.props.updateTwitterAndYoutubeFeed(this.state.user_id, () => {
      this.setState({ loading: false })
    })
  }
  render() {
    const { twitterAndYoutubeFeed } = this.props;
    const { loading } = this.state;
    const thParent = (
      <tr>
        <th colSpan="5">Youtube</th>
        <th colSpan="10">Tweeter</th>
      </tr>
    )
    const th = (
      <tr>
        <th>videoid</th>
        <th>title</th>
        <th>description</th>
        <th>urlthumbnail</th>
        <th>url</th>

        <th>tweetid</th>
        <th>username</th>
        <th>screenname</th>
        <th>createdatetime</th>
        <th>createdatetimelong</th>
        <th>text</th>
        <th>url</th>
        <th>picurl</th>
        <th>retweetcount</th>
        <th>favcount</th>
      </tr>
    )
    const td = (
      <tr>
        <td>{twitterAndYoutubeFeed.data.youtube.videoid}</td>
        <td>{twitterAndYoutubeFeed.data.youtube.title}</td>
        <td>{twitterAndYoutubeFeed.data.youtube.description}</td>
        <td>{twitterAndYoutubeFeed.data.youtube.urlthumbnail}</td>
        <td>{twitterAndYoutubeFeed.data.youtube.url}</td>

        <td>{twitterAndYoutubeFeed.data.tweeter.tweetid}</td>
        <td>{twitterAndYoutubeFeed.data.tweeter.username}</td>
        <td>{twitterAndYoutubeFeed.data.tweeter.screenname}</td>
        <td>{twitterAndYoutubeFeed.data.tweeter.createdatetime}</td>
        <td>{twitterAndYoutubeFeed.data.tweeter.createdatetimelong}</td>
        <td>{twitterAndYoutubeFeed.data.tweeter.text}</td>
        <td>{twitterAndYoutubeFeed.data.tweeter.url}</td>
        <td>{twitterAndYoutubeFeed.data.tweeter.picurl}</td>
        <td>{twitterAndYoutubeFeed.data.tweeter.retweetcount}</td>
        <td>{twitterAndYoutubeFeed.data.tweeter.favcount}</td>
      </tr>
    )
    const table = (
      <Table thParent={thParent} th={th} td={td}/>
    )
    const spinner = (
      <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
      </div>
    )
    return(
      <div>
        <Card title={loading ? spinner : 'Get Tweet And Youtube Feed'} content={table}/>
      </div>
    )
  }
}

GetTweetAndYoutubeFeed.propTypes = {
  twitterAndYoutubeFeed: PropTypes.object
}
GetTweetAndYoutubeFeed.defaultProps = {
  twitterAndYoutubeFeed: {
    data: {youtube:{},tweeter:{}}
  }
}

const mapStateToProps = state => {
  return {
    twitterAndYoutubeFeed: state.widgetResponse.twitterAndYoutubeFeed
  }
}
const mapDispatchToProps = dispatch => ({
  updateTwitterAndYoutubeFeed: (param, callback) => {
    dispatch(fetchTweetAndYoutubeFeed(param, callback))
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetTweetAndYoutubeFeed);
