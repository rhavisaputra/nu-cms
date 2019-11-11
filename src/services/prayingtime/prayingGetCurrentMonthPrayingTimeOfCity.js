import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrentMonthPrayTimeCity } from '../../services/redux/prayingtime/action';
import Card from '../../component/card';
import Table from '../../component/Table';

class CurrentMonthPrayTimeCity extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            user_id: 1
        }
    }

    componentDidMount() {
        this.handleUpdateCurrentMonthPrayTimeCity();
    }

    handleUpdateCurrentMonthPrayTimeCity = () => {
        this.setState({ loading: true });

        var dataBody = {
            'latitude': '-321',
            'longitude': '321'
        }

        this.props.updateCurrentMonthPrayTimeCity(this.state.user_id, dataBody, () => {
            this.setState({ loading: false });
        })
    }

    render(){
        
        const { currentMonthPrayTimeCity } = this.props;
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
            currentMonthPrayTimeCity.data.map((item, index) => (
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
                <Card title={loading ? spinner : 'Current Month Pray Time Of City'} content={table}/>
            </div>
        )
    }

}

CurrentMonthPrayTimeCity.propTypes = {
    currentMonthPrayTimeCity: PropTypes.object,
};
  
CurrentMonthPrayTimeCity.defaultProps = {
    currentMonthPrayTimeCity: {
        data: []
    },
};

const mapStateToProps = state => {
    return {
        currentMonthPrayTimeCity: state.dataResponse.currentMonthPrayTimeCity
    }
}

const mapDispatchToProps = dispatch => ({
    updateCurrentMonthPrayTimeCity: (param, dataBody, callback) => {
        dispatch(fetchCurrentMonthPrayTimeCity(param, dataBody, callback))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrentMonthPrayTimeCity);