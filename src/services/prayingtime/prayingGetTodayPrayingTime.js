import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTodayPrayTime } from '../../services/redux/prayingtime/action';
import Card from '../../component/card';
import Table from '../../component/Table';

class PrayingGetTodayPrayingTime extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            user_id: 1
        }
    }

    componentDidMount() {
        this.handleUpdateTodayPrayTime();
    }

    handleUpdateTodayPrayTime = () => {
        this.setState({ loading: true });

        var bodyData = {
            'latitude' : '-1231',
            'longitude' : '1231'
        }

        this.props.updateTodayPrayTime(this.state.user_id, bodyData, () => {
            this.setState({ loading: false });
        })
    }

    render(){
        
        const { todayPrayTime } = this.props;
        const { loading } = this.state;

        const th = (
            <tr>
              <th>City</th>
              <th>Date</th>
              <th>Subuh</th>
              <th>Duhur</th>
              <th>Ashar</th>
              <th>Magrib</th>
              <th>Isya</th>
            </tr>
        )
        const td = (
                <tr>
                    <td>{todayPrayTime.data.city}</td>
                    <td>{todayPrayTime.data.date}</td>
                    <td>{todayPrayTime.data.fajr}</td>
                    <td>{todayPrayTime.data.duhr}</td>
                    <td>{todayPrayTime.data.asr}</td>
                    <td>{todayPrayTime.data.maghrib}</td>
                    <td>{todayPrayTime.data.isya}</td>
                </tr>
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
              <Card title={loading ? spinner : 'Today Day Praying Time'} content={table}/>
            </div>
        )
    }

}

PrayingGetTodayPrayingTime.propTypes = {
    todayPrayTime: PropTypes.object,
};
  
PrayingGetTodayPrayingTime.defaultProps = {
    todayPrayTime: {
        data: {}
    },
};

const mapStateToProps = state => {
    return {
        todayPrayTime: state.dataResponse.todayPrayTime
    }
}

const mapDispatchToProps = dispatch => ({
    updateTodayPrayTime: (param, bodyData, callback) => {
        dispatch(fetchTodayPrayTime(param, bodyData, callback))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PrayingGetTodayPrayingTime);