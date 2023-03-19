import Chart from 'react-apexcharts';
import data from '../../../utils/avalGenero';

function AvalGeneroChart() {
  const categories = data.categories;
  const seriesData = data.data.map((num) => {
    return Math.round(num * 10) / 10;
  });
  const options = {
    xaxis: { categories: categories },
    dataLabels: {
      enabled: false,
    },
    colors: ['#D95204', '#0455BF'],

    plotOptions: {
      bar: {
        distributed: true,
      },
    },
    title: {
      text: 'Avaliação geral por gênero',
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

export default AvalGeneroChart;
