import React from 'react';
import  styles from './app.module.css';

import {Cards, Chart, CountryPicker} from './components';
import {fetchData} from './api/api';
import coronaImage from './images/virus.png'

class App extends React.Component {

    state = {
        data: {},
        country: ''
    }
s
   async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({data: fetchedData})
        // console.log(fetchedData);
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        console.log(fetchedData)
        console.log(country);
        this.setState({data: fetchedData, country : country})
    }

    render() {
        const { data, country } = this.state;

        return(
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt='Covid-19'/>
               <Cards data = {data}/>
               <CountryPicker handleCountryChange={this.handleCountryChange}/>
               <Chart data={data} country={country}/>
              
            </div>
        )
    }
}

export default App;