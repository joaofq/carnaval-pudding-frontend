import Chart from 'react-apexcharts';
import data from '../../../utils/avalIncome';

function AvalIncomeChart() {
  const categories = data.categories;
  const seriesData = data.data.map((num) => {
    return Math.round(num * 10) / 10;
  });

  const options = {
    xaxis: { categories: categories },
    dataLabels: {
      enabled: false,
    },
    colors: ['#0455BF', '#05C7F2', '#D95204', '#EEAF24', '#90BFE0'],
    plotOptions: {
      bar: {
        distributed: true,
        horizontal: true,
      },
    },
    title: {
      text: 'Avaliação geral por faixa de renda',
      align: 'center',
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#263238',
      },
    },
    legend: {
      show: false,
    },
    accessibility: {
      enabled: true,
      description: 'Gráfico de barras de avaliação geral por faixa etária',
    },
  };

  const series = [{ data: seriesData }];

  return <Chart options={options} series={series} type='bar' width='100%' />;
}

export default AvalIncomeChart;
