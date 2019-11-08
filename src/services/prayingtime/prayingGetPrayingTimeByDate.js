import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPrayTimeByDate } from '../../services/redux/prayingtime/action';
import Card from '../../component/card';
import Table from '../../component/Table';

class PrayingGetPrayingTimeByDate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            user_id: 1
        }
    }

    componentDidMount() {
        this.handleUpdatePrayTimeByDate();
    }

    handleUpdatePrayTimeByDate = () => {
        this.setState({ loading: true });

        var bodyData = {
            'latitude' : '-1231',
            'longitude' : '1231',
            'date' : '20191024'
        }

        this.props.updatePrayTimeByDate(this.state.user_id, bodyData, () => {
            this.setState({ loading: false });
        })
    }

    render(){
        
        const { prayTimeByDate } = this.props;
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
                <td>{prayTimeByDate.data.city}</td>
                <td>{prayTimeByDate.data.date}</td>
                <td>{prayTimeByDate.data.fajr}</td>
                <td>{prayTimeByDate.data.duhr}</td>
                <td>{prayTimeByDate.data.asr}</td>
                <td>{prayTimeByDate.data.maghrib}</td>
                <td>{prayTimeByDate.data.isya}</td>
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
                <Card title={loading ? spinner : 'Praying Time By Date'} content={table}/>
            </div>
        )
    }

}

PrayingGetPrayingTimeByDate.propTypes = {
    prayTimeByDate: PropTypes.object,
};
  
PrayingGetPrayingTimeByDate.defaultProps = {
    prayTimeByDate: {
        data: []
    },
};

const mapStateToProps = state => {
    return {
        prayTimeByDate: state.dataResponse.prayTimeByDate
    }
}

const mapDispatchToProps = dispatch => ({
    updatePrayTimeByDate: (param, bodyData, callback) => {
        dispatch(fetchPrayTimeByDate(param, bodyData, callback))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PrayingGetPrayingTimeByDate);