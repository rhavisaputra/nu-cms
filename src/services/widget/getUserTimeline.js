import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTwitterFeed } from '../../services/redux/widget/action';
import Card from '../../component/card';
import Table from '../../component/Table';

class WidgetGetTwitterFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      user_id: 1
    }
  }
  componentDidMount() {
    this.handleUpdateTweetFeed();
  }
  handleUpdateTweetFeed = () => {
    this.setState({loading: true});

    this.props.updateTweetFeed(this.state.user_id, () => {
      this.setState({ loading: false})
    })
  }

  render() {

    const { TwitterFeed } = this.props;
    const { loading } = this.state;
    const th = (
      <tr>
        <th>userName</th>
        <th>createDateTime</th>
        <th>text</th>
        <th>url</th>
        <th>retweetCount</th>
        <th>favCount</th>
      </tr>
    )
    const td = (
      TwitterFeed.data.map((item,key)=>{
        return(
          <tr key={key}>
            <td>{item.userName}</td>
            <td>{item.createDateTime}</td>
            <td>{item.text}</td>
            <td>{item.url}</td>
            <td>{item.retweetCount}</td>
            <td>{item.favCount}</td>
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
        <Card title={loading ? spinner : 'Widget Get Twitter Feed'} content={table}/>
      </div>
    )
  }
}

WidgetGetTwitterFeed.propTypes = {
  TwitterFeed: PropTypes.object
}

WidgetGetTwitterFeed.defaultProps = {
  TwitterFeed: {
    data: []
  }
}

const mapStateToProps = state => {
  return {
    TwitterFeed: state.widgetResponse.tweetFeed
  }
}

const mapDispatchToProps = dispatch => ({
  updateTweetFeed: (param, callback) => {
    dispatch(fetchTwitterFeed(param, callback))
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WidgetGetTwitterFeed);
