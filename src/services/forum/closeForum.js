import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../component/card';
import Table from '../../component/Table';
import { connect } from 'react-redux';
import { fetchCloseForum } from '../../services/redux/forum/action';

class CloseForum extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            user_id: 123,
            loading: false
        }
    }

    componentDidMount(){
        window.scrollTo(0,0);
        this.handleCloseForum();
    }

    handleCloseForum(){
        this.setState({ loading: true });
        var dataBody = {
            "user":"123",
            "forum_id":"1",
            "status":"0"
        }
        this.props.updateDispatch(this.state.user_id, dataBody, () => {
            this.setState({ loading: false })
        })
    }

    render(){
        const { closeForum } = this.props;
        const { loading } = this.state;

        const th = (
            <tr>
              <th>forum_id</th>
              <th>title</th>
              <th>status</th>
            </tr>
        )
        const td = (
            closeForum.data.map((item, index) => (
                <tr key={index}>
                    <td>{item.forum_id}</td>
                    <td>{item.title}</td>
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
              <Card title={loading ? spinner : 'Close Forum'} content={table}/>
            </div>
        )
    }
}

CloseForum.propTypes = {
    closeForum: PropTypes.object,
};
  
CloseForum.defaultProps = {
    closeForum: {
        data: []
    },
};

const mapStateToProps = state => {
    return {
        closeForum: state.dataForum.closeForum
    }
}

const mapDispatchToProps = dispatch => ({
    updateDispatch: (param, dataBody, callback) => {
        dispatch(fetchCloseForum(param, dataBody, callback))
    }
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CloseForum);