import React,{Component} from 'react';
import Card from '../../component/card';
import Table from '../../component/Table';

class WidgetGetYoutubeFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {data: {}}
  }
  componentDidMount() {
    fetch('http://192.168.1.247:8001/nu/widgetservice/getVideoListUrl',{  
      headers:{
        'param': 123
      }
    })
    .then(res => res.json())
    .then((newData) => {
      this.setState({data: newData.data})
    })
    .catch(console.log)
  }
  render() {
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
        <td>{this.state.data.videoId}</td>
        <td>{this.state.data.title}</td>
        <td>{this.state.data.description}</td>
        <td>{this.state.data.url_thumbnail}</td>
        <td>{this.state.data.url}</td>
      </tr>
    )
    const table = (
      <Table th={th} td={td}/>
    )
    return(
      <div>
        <Card title="WidgetGetYoutubeFeed" content={table}/>
      </div>
    )
  }
}

export default WidgetGetYoutubeFeed
