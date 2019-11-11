import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../component/card';
import Table from '../../component/Table';
import { connect } from 'react-redux';
import { fetchDisplayAllForumByUser } from '../../services/redux/forum/action';

class DisplayAllForumByUser extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            user_id: 123,
            loading: false
        }
    }

    componentDidMount(){
        window.scrollTo(0,0);
        this.handleUpdateDisplayAll();
    }

    handleUpdateDisplayAll(){
        this.setState({ loading: true });
        var dataBody = {
            'user': '123'
        }
        this.props.updateDisplayAll(this.state.user_id, dataBody, () => {
            this.setState({ loading: false })
        })
    }

    render(){
        const { displayAllForumByUser } = this.props;
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
            displayAllForumByUser.data.map((item, index) => (
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
              <Card title={loading ? spinner : 'Display all from by user'} content={table}/>
            </div>
        )
    }
}

DisplayAllForumByUser.propTypes = {
    displayAllForumByUser: PropTypes.object,
};
  
DisplayAllForumByUser.defaultProps = {
    displayAllForumByUser: {
        data: []
    },
};

const mapStateToProps = state => {
    return {
        displayAllForumByUser: state.dataForum.displayAllForumByUser
    }
}

const mapDispatchToProps = dispatch => ({
    updateDisplayAll: (param, dataBody, callback) => {
        dispatch(fetchDisplayAllForumByUser(param, dataBody, callback))
    }
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(DisplayAllForumByUser);