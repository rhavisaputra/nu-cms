import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../component/card';
import Table from '../../component/Table';
import { connect } from 'react-redux';
import { fetchEditComment } from '../../services/redux/forum/action';

class EditComment extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            user_id: 123,
            loading: false
        }
    }

    componentDidMount(){
        window.scrollTo(0,0);
        this.handleEditComment();
    }

    handleEditComment(){
        this.setState({ loading: true });
        var dataBody = {
            "user":"123",
            "forum_id":"1",
            "comment_id":"12",
            "message":"ganti cuy"
        }
        this.props.updateDispatch(this.state.user_id, dataBody, () => {
            this.setState({ loading: false })
        })
    }

    render(){
        const { editComment } = this.props;
        const { loading } = this.state;

        const th = (
            <tr>
              <th>forum_id</th>
              <th>detail_id</th>
              <th>message</th>
            </tr>
        )
        const td = (
            editComment.data.map((item, index) => (
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
              <Card title={loading ? spinner : 'Edit Comment'} content={table}/>
            </div>
        )
    }
}

EditComment.propTypes = {
    editComment: PropTypes.object,
};
  
EditComment.defaultProps = {
    editComment: {
        data: []
    },
};

const mapStateToProps = state => {
    return {
        editComment: state.dataForum.editComment
    }
}

const mapDispatchToProps = dispatch => ({
    updateDispatch: (param, dataBody, callback) => {
        dispatch(fetchEditComment(param, dataBody, callback))
    }
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(EditComment);