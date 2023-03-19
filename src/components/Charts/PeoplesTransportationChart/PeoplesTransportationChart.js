import Chart from 'react-apexcharts';
import data from '../../../utils/peoplesTransportation';

function PeoplesTransportationChart() {
  const labels = data.categories;
  const seriesData = data.data.map((num) => {
    return Math.round(num * 10) / 10;
  });

  const options = {
    stroke: {
      width: 0,
    },
    colors: ['#0455BF', '#05C7F2', '#EEAF24', '#90BFE0', '#D95204'],
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
      text: 'Meios de transporte utilizados pelos visitantes',
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

export default PeoplesTransportationChart;
