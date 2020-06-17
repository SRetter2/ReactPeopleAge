import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';

class AddSinglePerson extends React.Component {
    state = {
        birthday: new Date(),
        firstName: '',
        lastName: ''
    }
    onChange = date => this.setState({ birthday: date });

    onFirstChange = e => {
        this.setState({ firstName: e.target.value });
    }
    onLastChange = e => {
        this.setState({ lastName: e.target.value });
    }
    onAddPerson = async () => {
        const { firstName, lastName, birthday } = this.state;
        await axios.post('/api/home/addperson', { firstName, lastName, birthday });
        this.props.history.push('/');
    }
  
    render() {
        const { firstName, lastName } = this.state;
        return (
            <div className='well'>
                <div>
                    <div className='col-md-3'>
                        <input type='text' name={firstName} value={firstName}
                            className='form-control' onChange={this.onFirstChange} placeholder='First Name' />
                    </div>
                    <div className='col-md-3'>
                        <input type='text' name={lastName} value={lastName}
                            className='form-control' onChange={this.onLastChange} placeholder='Last Name' />
                    </div>
                </div>
                <br />

                <div>
                    <button className='btn btn-block btn-primary' onClick={this.onAddPerson}>Add Person</button>
                </div>
                <div style={{ height: 200 }}>
                    <Calendar
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                </div>
            </div>
        );
    }

}

export default AddSinglePerson;