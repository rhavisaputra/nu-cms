import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPrayingTimeThreeDay } from '../../services/redux/prayingtime/action';
import Card from '../../component/card';
import Table from '../../component/Table';

class PrayingGetThreeDayPrayingTime extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            user_id: 1
        }
    }

    componentDidMount() {
        this.handleUpdateThreeDayPrayTIme();
    }

    handleUpdateThreeDayPrayTIme = () => {
        this.setState({ loading: true });

        var bodyData = {
            'latitude' : '-1231',
            'longitude' : '1231'
        }

        this.props.updateThreeDayPrayTime(this.state.user_id, bodyData, () => {
            this.setState({ loading: false });
        })
    }

    render(){
        
        const { threeDayPrayTime } = this.props;
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
            threeDayPrayTime.data.map((item, index) => (
                <tr key={index}>
                    <td>{item.city}</td>
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
                <Card title={loading ? spinner : 'Three Day Praying Time'} content={table}/>
            </div>
        )
    }

}

PrayingGetThreeDayPrayingTime.propTypes = {
    threeDayPrayTime: PropTypes.object,
};
  
PrayingGetThreeDayPrayingTime.defaultProps = {
    threeDayPrayTime: {
        data: []
    },
};

const mapStateToProps = state => {
    return {
        threeDayPrayTime: state.dataResponse.threeDayPrayTime
    }
}

const mapDispatchToProps = dispatch => ({
    updateThreeDayPrayTime: (param, bodyData, callback) => {
        dispatch(fetchPrayingTimeThreeDay(param, bodyData, callback))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PrayingGetThreeDayPrayingTime);