import React, { PureComponent } from 'react';
import Table from './table'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
 


const data = [
  {
    name: 'frameWork', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Backbone.js', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'JQuery', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Vue.js', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'React.js', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Angular.js', uv: 3490, pv: 4300, amt: 2100,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/nptzh7ez/';

  render() {
    return (
      <div className="contanier_Chart">
      <LineChart
        width={700}
        height={400}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
      </LineChart>
    <br>
    </br>
    <br>
    </br>
  <Table/>
     </div>
    
    );
  }
}
