import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { PieChart, Pie, Cell } from 'recharts';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Footer from '../components/Home/Footer'

const data = [
  {
    name: "15/02",
    uv: 4000,
    profit: 2400,
    amt: 2400
  },
  {
    name: "15/03",
    uv: 3000,
    profit: 1398,
    amt: 2210
  },
  {
    name: "15/04",
    uv: 2000,
    profit: 9800,
    amt: 2290
  },
  {
    name: "15/05",
    uv: 2780,
    profit: 3908,
    amt: 2000
  },
  {
    name: "15/06",
    uv: 1890,
    profit: 4800,
    amt: 2181
  },
  {
    name: "15/07",
    uv: 2390,
    profit: 3800,
    amt: 2500
  },
  {
    name: "15/08",
    uv: 3490,
    profit: 4300,
    amt: 2100
  }
];

const data2 = [
  { name: 'TKM', value: 30, description: 'Tower King Manager' },
  { name: 'TKM2', value: 25, description: 'Tower King Manager 2' },
  { name: 'TKM3', value: 20, description: 'Tower King Manager 3' },
  { name: 'TKM4', value: 25, description: 'Tower King Manager 4' },
];

const data3 = [
  { token: "TKM", cantidad: 30, total: 3000, profit: "25%" },
  { token: "TKM", cantidad: 30, total: 3000, profit: "25%" },
  { token: "TKM", cantidad: 30, total: 3000, profit: "25%" },
  { token: "TKM", cantidad: 30, total: 3000, profit: "25%" },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="custom-tooltip bg-white p-4 rounded-[12px] border-[1px] border-gray200">
        <p>{data.name}</p>
        <p>{data.description}</p>
        <p>{`${data.value}%`}</p>
      </div>
    );
  }
  return null;
};

const Portfolio = () => {
  const [show, setShow] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Función que se ejecutará cuando el componente se monte
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Agregar un event listener para el evento 'resize'
    window.addEventListener('resize', handleResize);

    // Función de limpieza que se ejecuta cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <div className='w-screen min-h-screen flex flex-col items-center pt-[100px] justify-start px-20'>
      <div className='w-full flex flex-col'>
        <h1 className='text-left text-[32px] text-gray500'>Estimated balance</h1>
        <div className='flex flex-row items-center justify-start mb-6'>
          {show ? <h1 className='text-left text-[26px] text-gray500'>$8453,25 USD</h1> : <h1 className='text-left text-[26px] text-gray500'>$******,** USD</h1>}
          <Icon icon="mdi:eye" width="28" className='text-gray500 ml-4' onClick={() => { setShow(!show) }} />
        </div>
      </div>
      <BarChart
        width={windowWidth - 100}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="profit" fill="#493DCF" barSize={40}/>
      </BarChart>
      <div className='flex flex-row items-center justify-between h-[350px] w-full'>
        <div className='h-full w-[30%] '>
          <PieChart width={400} height={400}>
            <Pie
              data={data2}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend />
          </PieChart>
        </div>
        <div className='w-[70%] h-[100%] '>
          <div className='w-full h-full flex items-center justify-center'>
            <DataTable value={data3} tableStyle={{ minWidth: "1000px" }}>
              <Column field="token" header="Token"></Column>
              <Column field="cantidad" header="Amount"></Column>
              <Column field="total" header="Total"></Column>
              <Column field="profit" header="Profit"></Column>
            </DataTable>
          </div>

        </div>
      </div>
         
    </div>
    <Footer   ></Footer>    
    </>
  )
}

export default Portfolio