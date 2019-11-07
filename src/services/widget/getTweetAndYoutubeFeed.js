import React,{Component} from 'react';
import Card from '../../component/card';
import Table from '../../component/Table';

class GetTweetAndYoutubeFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {data: {youtube:{},tweeter:{}}}
  }
  componentDidMount() {
    fetch('http://192.168.1.247:8001/nu/widgetservice/getTweetAndYoutubeFeed')
    .then(res => res.json())
    .then((newData) => {
      this.setState({data: newData.data})
    })
    .catch(console.log)
  }
  render() {
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
        <td>{this.state.data.youtube.videoid}</td>
        <td>{this.state.data.youtube.title}</td>
        <td>{this.state.data.youtube.description}</td>
        <td>{this.state.data.youtube.urlthumbnail}</td>
        <td>{this.state.data.youtube.url}</td>

        <td>{this.state.data.tweeter.tweetid}</td>
        <td>{this.state.data.tweeter.username}</td>
        <td>{this.state.data.tweeter.screenname}</td>
        <td>{this.state.data.tweeter.createdatetime}</td>
        <td>{this.state.data.tweeter.createdatetimelong}</td>
        <td>{this.state.data.tweeter.text}</td>
        <td>{this.state.data.tweeter.url}</td>
        <td>{this.state.data.tweeter.picurl}</td>
        <td>{this.state.data.tweeter.retweetcount}</td>
        <td>{this.state.data.tweeter.favcount}</td>
      </tr>
    )
    const table = (
      <Table thParent={thParent} th={th} td={td}/>
    )
    return(
      <div>
        <Card title="GetTweetAndYoutubeFeed" content={table}/>
      </div>
    )
  }
}

export default GetTweetAndYoutubeFeed
