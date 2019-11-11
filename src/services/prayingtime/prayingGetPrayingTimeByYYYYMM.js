import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPraytimeByYYYYMM } from '../../services/redux/prayingtime/action';
import Card from '../../component/card';
import Table from '../../component/Table';

class PrayingGetPrayingTimeByYYYYMM extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            user_id: 1
        }
    }

    componentDidMount() {
        this.handleUpdatePrayTimeByYYYYMM();
    }

    handleUpdatePrayTimeByYYYYMM = () => {
        this.setState({ loading: true });

        var bodyData = {
            'latitude' : '-1231',
            'longitude' : '1231',
            'yyyymm' : '201910'
        }

        this.props.updatePrayTimeByYYYYMM(this.state.user_id, bodyData, () => {
            this.setState({ loading: false });
        })
    }

    render(){
        
        const { prayTimeByYYYYMM } = this.props;
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
            prayTimeByYYYYMM.data.map((item, index) => (
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
                <Card title={loading ? spinner : 'Praying Time By YYYYMM'} content={table}/>
            </div>
        )
    }

}

PrayingGetPrayingTimeByYYYYMM.propTypes = {
    prayTimeByYYYYMM: PropTypes.object,
};
  
PrayingGetPrayingTimeByYYYYMM.defaultProps = {
    prayTimeByYYYYMM: {
        data: []
    },
};

const mapStateToProps = state => {
    return {
        prayTimeByYYYYMM: state.dataResponse.prayTimeByYYYYMM
    }
}

const mapDispatchToProps = dispatch => ({
    updatePrayTimeByYYYYMM: (param, bodyData, callback) => {
        dispatch(fetchPraytimeByYYYYMM(param, bodyData, callback))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PrayingGetPrayingTimeByYYYYMM);