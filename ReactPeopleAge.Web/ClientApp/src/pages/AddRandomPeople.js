import React from 'react';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import "bootstrap-slider/dist/css/bootstrap-slider.css";
import axios from 'axios';

class AddRandomPeople extends React.Component{
    state = {
        currentAmountValue: 0,
        min: 1,
        max: 100,
        currentAgeValue: [1, 100],
    }
    changeAmountValue = e => {
        this.setState({ currentAmountValue: e.target.value })
    }
    currentAgeValue = e => {
        this.setState({ currentAgeValue: e.target.value })
    }
    onAddPeople = async () => {
        const Amount = this.state.currentAmountValue;
        const Min = this.state.currentAgeValue[0];
        const Max = this.state.currentAgeValue[1];
        await axios.post('/api/home/addrange', { Amount, Min, Max } );
        this.props.history.push('/');
    }

    render() {

        return (
            <div>
                <div>
                    <h4>Generate {this.state.currentAmountValue} people</h4>
                <ReactBootstrapSlider
                    value={this.state.currentAmountValue}
                    slideStop={this.changeAmountValue}
                    max={this.state.max}
                    min={this.state.min} />
            </div>
                <div>
                    <h4>Generate people in this age range {this.state.currentAgeValue[0]}, {this.state.currentAgeValue[1]} </h4>
                <ReactBootstrapSlider
                        value={this.state.currentAgeValue}
                        slideStop={this.currentAgeValue}
                    max={this.state.max}
                    min={this.state.min} />
                </div>
                <div>
                    <button className='btn btn-block btn-primary' onClick={this.onAddPeople}>Add Random people</button>
                    </div>
                </div>
        );
    }

}

export default AddRandomPeople;