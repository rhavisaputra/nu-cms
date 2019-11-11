import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../component/card';
import Table from '../../component/Table';
import { connect } from 'react-redux';
import { fetchDisplayForumDetail } from '../../services/redux/forum/action';

class DisplayForumDetail extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            user_id: 123,
            loading: false
        }
    }

    componentDidMount(){
        window.scrollTo(0,0);
        this.handleFetchData();
    }

    handleFetchData(){
        this.setState({ loading: true });
        var dataBody = {
            "user":"123",
            "forum_id":"1"
        }
        this.props.updateDispatch(this.state.user_id, dataBody, () => {
            this.setState({ loading: false })
        })
    }

    render(){
        const { displayForumDetail } = this.props;
        const { loading } = this.state;

        const th = (
            <tr>
              <th>creator</th>
              <th>comment_id</th>
              <th>timestamp</th>
              <th>forum_id</th>
              <th>forum_title</th>
              <th>comment</th>
            </tr>
        )
        const td = (
            displayForumDetail.data.map((item, index) => (
                <tr key={index}>
                    <td>{item.creator}</td>
                    <td>{item.comment_id}</td>
                    <td>{item.timestamp}</td>
                    <td>{item.forum_id}</td>
                    <td>{item.forum_title}</td>
                    <td>{item.comment}</td>
                </tr>
            ))
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
              <Card title={loading ? spinner : 'Edit Comment'} content={table}/>
            </div>
        )
    }
}

DisplayForumDetail.propTypes = {
    displayForumDetail: PropTypes.object,
};
  
DisplayForumDetail.defaultProps = {
    displayForumDetail: {
        data: []
    },
};

const mapStateToProps = state => {
    return {
        displayForumDetail: state.dataForum.displayForumDetail
    }
}

const mapDispatchToProps = dispatch => ({
    updateDispatch: (param, dataBody, callback) => {
        dispatch(fetchDisplayForumDetail(param, dataBody, callback))
    }
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(DisplayForumDetail);