import React, { Component } from 'react';
import { connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import {fetchCountries,fetchRateExchange} from '../actions/index';
import lodash from 'lodash'

 class SearchBar extends Component {
     componentWillMount() {
        this.props.fetchCountries();
     }
     renderSelectCountries() {
         return (
            <select  onChange={e => this.onChangeCountry(e)} className="form-control search-bar">
             {this.props.countries.map( (res, index) =>(
                  <option key={index}  value={res.code}>
                     {res.name} 
                 </option>
             ))}
             </select>
         )
     }
     onChangeCountry= e => {
       const countryCode = e.target.value
       const country = lodash.find(this.props.countries, {code : countryCode})
       this.props.fetchRateExchange(country);
    }
    render() {
        return (
            <form className="form-group">
                 {this.renderSelectCountries()}
            </form>
        )
    }
}

const mapStateToProps= (store) => {
    return {
        countries : store.countries.countries
        // ----------------- name in routeReducer --- name Reducer
    }
   
}

const mapDispatchToProps = {
    fetchCountries,
    fetchRateExchange
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);


