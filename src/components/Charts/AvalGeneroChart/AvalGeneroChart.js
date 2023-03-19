import Chart from 'react-apexcharts';

function AvalGeneroChart() {
  const options = {
    xaxis: {
      categories: ['Feminino', 'Masculino'],
    },
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

  const series = [
    {
      data: [5.1, 5.3],
    },
  ];

  return <Chart options={options} series={series} type='bar' width='100%' />;
}

export default AvalGeneroChart;