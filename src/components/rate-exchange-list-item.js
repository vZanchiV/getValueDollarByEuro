import React, { Component } from 'react'
import reactChartKick  , {AreaChart} from 'react-chartkick';
import Chart from 'chart.js';
reactChartKick.addAdapter(Chart);
export default class RateExchangeListItem extends Component {
    render() {
        console.log(this.props.rateExchange)
        const {flag, name, rates, currencyCode} = this.props.rateExchange;
        return (
            <tr>
                 <td>
                   {name}<br/><img src={flag} height="60"/>
                </td>
                <td className="col-md-12">
                    <AreaChart 
                    xtitle="Date" 
                    data={formatData(rates,currencyCode)} 
                    ytitle={currencyCode}></AreaChart>
                </td>
            </tr>
           
        )
    }
}


function formatData(rates, currencyCode) {
   return Object.keys(rates).map(date => {
        return [date, rates[date][currencyCode]]
   })


}