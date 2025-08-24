"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Chart, Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    if (!Array.isArray(accounts) || accounts.length === 0) {
    return <p className="text-center text-sm text-gray-400">No data to display</p>;
  }
  
  const accountNames = accounts.map((a) => a.name);  // we get each individual accounts, and for each one we get the name
  const balances = accounts.map((a) => a.currentBalance) // we get each individual account, and for each one we get the balance

  const data = {
    datasets: [
        {
           label: 'Banks',
           data : balances,
           backgroundColor: ["#107060", "#406070", "#706050", "#672e73", "#947844", "#5e6638", "#3d473f", "#8fb093" ]
        }
    ],
    labels: accountNames
  }
  
  return <Doughnut 
    data={data}
    options={{
        responsive: true,
        maintainAspectRatio: false,
        cutout: '60%',
        plugins : {
            legend: {
                display: false
            }
        }
    }} 
  />
}

export default DoughnutChart