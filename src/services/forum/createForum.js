import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../component/card';
import Table from '../../component/Table';
import { connect } from 'react-redux';
import { fetchCreateForum } from '../../services/redux/forum/action';

class CreateForum extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            user_id: 123,
            loading: false
        }
    }

    componentDidMount(){
        window.scrollTo(0,0);
        this.handleCreateForum();
    }

    handleCreateForum(){
        this.setState({ loading: true });
        var dataBody = {
            "user":"123",
            "title":"title",
            "message":"message",
            "category":"category"
        }
        this.props.updateDispatch(this.state.user_id, dataBody, () => {
            this.setState({ loading: false })
        })
    }

    render(){
        const { createForum } = this.props;
        const { loading } = this.state;

        const th = (
            <tr>
              <th>Creator</th>
              <th>Timestamp</th>
              <th>Forum id</th>
              <th>Forum Title</th>
              <th>Status</th>
            </tr>
        )
        const td = (
            createForum.data.map((item, index) => (
                <tr key={index}>
                    <td>{item.creator}</td>
                    <td>{item.timestamp}</td>
                    <td>{item.forum_id}</td>
                    <td>{item.forum_title}</td>
                    <td>{item.status}</td>
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
              <Card title={loading ? spinner : 'Create Forum'} content={table}/>
            </div>
        )
    }
}

CreateForum.propTypes = {
    createForum: PropTypes.object,
};
  
CreateForum.defaultProps = {
    createForum: {
        data: []
    },
};

const mapStateToProps = state => {
    return {
        createForum: state.dataForum.createForum
    }
}

const mapDispatchToProps = dispatch => ({
    updateDispatch: (param, dataBody, callback) => {
        dispatch(fetchCreateForum(param, dataBody, callback))
    }
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CreateForum);