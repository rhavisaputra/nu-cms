import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../component/card';
import Table from '../../component/Table';
import { connect } from 'react-redux';
import { fetchPostComment } from '../../services/redux/forum/action';

class PostComment extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            user_id: 123,
            loading: false
        }
    }

    componentDidMount(){
        window.scrollTo(0,0);
        this.handlePostComment();
    }

    handlePostComment(){
        this.setState({ loading: true });
        var dataBody = {
            "user":"123",
            "forum_id":"123",
            "message":"message"
        }
        this.props.updateDispatch(this.state.user_id, dataBody, () => {
            this.setState({ loading: false })
        })
    }

    render(){
        const { postComment } = this.props;
        const { loading } = this.state;

        const th = (
            <tr>
              <th>forum_id</th>
              <th>detail_id</th>
              <th>message</th>
            </tr>
        )
        const td = (
            postComment.data.map((item, index) => (
                <tr key={index}>
                    <td>{item.forum_id}</td>
                    <td>{item.detail_id}</td>
                    <td>{item.message}</td>
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
              <Card title={loading ? spinner : 'Post Comment'} content={table}/>
            </div>
        )
    }
}

PostComment.propTypes = {
    postComment: PropTypes.object,
};
  
PostComment.defaultProps = {
    postComment: {
        data: []
    },
};

const mapStateToProps = state => {
    return {
        postComment: state.dataForum.postComment
    }
}

const mapDispatchToProps = dispatch => ({
    updateDispatch: (param, dataBody, callback) => {
        dispatch(fetchPostComment(param, dataBody, callback))
    }
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(PostComment);