import Chart from 'react-apexcharts';
import data from '../../../utils/peoplesRegion';

function PeoplesRegionChart() {
  const labels = data.categories;
  const seriesData = data.data.map((num) => {
    return Math.round(num * 10) / 10;
  });

  const options = {
    stroke: {
      width: 0,
    },
    colors: ['#D95204', '#0455BF', '#05C7F2', '#EEAF24', '#1FA7E0'],
    labels: labels,
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        expandOnClick: true,
        offsetX: 0,
        offsetY: 0,
        customScale: 1,
        dataLabels: {
          offset: 0,
          minAngleToShowLabel: 2,
        },
        distributed: true,
      },
    },
    title: {
      text: 'Percentual de foliões por região',
      align: 'center',
      margin: 20,
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#263238',
      },
    },
    legend: { offsetY: 20 },
  };

  const series = seriesData;

  return <Chart options={options} series={series} type='pie' width='100%' />;
}

export default PeoplesRegionChart;
