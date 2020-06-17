import React, { Component } from 'react';
import { PieChart } from "react-minimal-pie-chart";
import axios from 'axios';

export class Home extends Component {
    state = {
        ppl: [],
        ageRange: [],
        showChart: false
    }

    componentDidMount = async () => {
        const { data } = await axios('/api/home/getall');
        this.setState({ ppl: data });
    }
    onToggleClick = () => {       
        this.setState({ showChart: !this.state.showChart });
    }


    render() {
        const { ppl } = this.state;
        return (
            <div>
                <button className='btn btn-success' onClick={this.onToggleClick}>Toggle Pie Chart</button>
                {this.state.showChart && <div style={{ height: 200 }}>
                    <PieChart
                        data={[
                            { title: "1 - 10", value: ppl.filter(p => p.age > 0 && p.age < 10).length, color: "#E38626" },
                            { title: "10 - 20", value: ppl.filter(p => p.age > 10 && p.age < 20).length, color: "#E38687" },
                            { title: "20 - 30", value: ppl.filter(p => p.age > 20 && p.age < 30).length, color: "#E35627" },
                            { title: "30 - 40", value: ppl.filter(p => p.age > 30 && p.age < 40).length, color: "#E32607" },
                            { title: "40 - 50", value: ppl.filter(p => p.age > 40 && p.age < 50).length, color: "#E45627" },
                            { title: "50 - 60", value: ppl.filter(p => p.age > 50 && p.age < 60).length, color: "#E38677" },
                            { title: "60 - 70", value: ppl.filter(p => p.age > 60 && p.age < 70).length, color: "#E31627" },
                            { title: "70 - 80", value: ppl.filter(p => p.age > 70 && p.age < 80).length, color: "#E38987" },
                            { title: "80 - 90", value: ppl.filter(p => p.age > 80 && p.age < 90).length, color: "#E56497" },
                            { title: "90 - 100", value: ppl.filter(p => p.age > 90 && p.age < 100).length, color: "#E98037" }
                        ]}
                    />
                </div>}
                <table className='table table-striped table-bordered table-hover'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ppl.map(p => <tr key={p.id}><td>{p.firstName}</td><td>{p.lastName}</td><td>{p.age}</td></tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
}
