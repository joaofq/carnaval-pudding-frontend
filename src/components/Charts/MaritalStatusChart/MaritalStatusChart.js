import Chart from 'react-apexcharts';

function MaritalStatusChart() {
  const options = {
    stroke: {
      width: 0,
    },
    colors: ['#0455BF', '#05C7F2', '#D95204', '#90BFE0', '#EEAF24'],
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
    },
    title: {
      text: 'Percentual de foliões de cada estado civil',
      align: 'center',
      margin: 20,
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#263238',
      },
    },
    legend: { offsetY: 20 },
    accessibility: {
      enabled: true,
      description: 'Gráfico de barras de avaliação geral por faixa etária',
    },
  };

  const series = [309, 72, 1174, 15, 11];

  return <Chart options={options} series={series} type='pie' width='100%' />;
}

export default MaritalStatusChart;
