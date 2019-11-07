import React,{Component} from 'react';
import Card from '../../component/card';
import Table from '../../component/Table';

class WidgetGetTwitterFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {data: []}
  }
  componentDidMount() {
    fetch('http://192.168.1.247:8001/nu/widgetservice/getUserTimeline',{  
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
        <th>userName</th>
        <th>createDateTime</th>
        <th>text</th>
        <th>url</th>
        <th>retweetCount</th>
        <th>favCount</th>
      </tr>
    )
    const td = (
      this.state.data.map((item,key)=>{
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
    return(
      <div>
        <Card title="WidgetGetTwitterFeed" content={table}/>
      </div>
    )
  }
}

export default WidgetGetTwitterFeed
