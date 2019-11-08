import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrentMonthPrayTime } from '../../services/redux/prayingtime/action';
import Card from '../../component/card';
import Table from '../../component/Table';

class CurrentMonthPrayTime extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            user_id: 1
        }
    }

    componentDidMount() {
        this.handleUpdateCurrentMonthPrayTime();
    }

    handleUpdateCurrentMonthPrayTime = () => {
        this.setState({ loading: true });

        this.props.updateCurrentMonthPrayTime(this.state.user_id, () => {
            this.setState({ loading: false });
        })
    }

    render(){
        
        const { currentMonthPrayTime } = this.props;
        const { loading } = this.state;

        const th = (
            <tr>
              <th>Date</th>
              <th>Subuh</th>
              <th>Duhur</th>
              <th>Ashar</th>
              <th>Magrib</th>
              <th>Isya</th>
            </tr>
        )
        const td = (
            currentMonthPrayTime.data.map((item, index) => (
                <tr key={index}>
                    <td>{item.date}</td>
                    <td>{item.fajr}</td>
                    <td>{item.duhr}</td>
                    <td>{item.asr}</td>
                    <td>{item.maghrib}</td>
                    <td>{item.isya}</td>
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
                <Card title={loading ? spinner : 'Current Month Pray Time'} content={table}/>
            </div>
        )
    }

}

CurrentMonthPrayTime.propTypes = {
    currentMonthPrayTime: PropTypes.object,
};
  
CurrentMonthPrayTime.defaultProps = {
    currentMonthPrayTime: {
        data: []
    },
};

const mapStateToProps = state => {
    return {
        currentMonthPrayTime: state.dataResponse.currentMonthPrayTime
    }
}

const mapDispatchToProps = dispatch => ({
    updateCurrentMonthPrayTime: (param, callback) => {
        dispatch(fetchCurrentMonthPrayTime(param, callback))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrentMonthPrayTime);