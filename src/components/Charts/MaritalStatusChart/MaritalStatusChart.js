import Chart from 'react-apexcharts';

function MaritalStatusChart() {
  const options = {
    colors: ['#0455BF', '#05C7F2', '#D95204', '#0468BF', '#EEAF24'],
    labels: [
      'Casado (a)',
      'Divorciado (a)',
      'Solteiro (a)',
      'Viúvo (a)',
      'Outro',
    ],
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
      stroke: {
        width: 0,
      },
    },
    title: {
      text: 'Percentual de foliões de cada estado civil',
      align: 'center',
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#263238',
      },
    },
  };

  const series = [309, 72, 1174, 15, 11];

  return <Chart options={options} series={series} type='pie' width='100%' />;
}

export default MaritalStatusChart;
