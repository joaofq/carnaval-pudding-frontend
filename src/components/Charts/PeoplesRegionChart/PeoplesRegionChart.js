import Chart from 'react-apexcharts';

function PeoplesRegionChart() {
  const options = {
    stroke: {
      width: 0,
    },
    colors: ['#D95204', '#0455BF', '#05C7F2', '#EEAF24', '#0468BF'],
    labels: ['Centro-Oeste', 'Nordeste', 'Norte', 'Sudeste', 'Sul'],
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
    accessibility: {
      enabled: true,
      description: 'Gráfico de barras de avaliação geral por faixa etária',
    },
  };

  const series = [7, 13, 1, 28, 5];

  return <Chart options={options} series={series} type='pie' width='100%' />;
}

export default PeoplesRegionChart;
