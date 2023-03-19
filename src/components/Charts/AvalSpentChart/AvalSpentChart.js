import Chart from 'react-apexcharts';

function AvalSpentChart() {
  const options = {
    xaxis: {
      categories: ['Baixo', 'Médio', 'Alto', 'Muito alto'],
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#0455BF', '#05C7F2', '#D95204', '#EEAF24'],
    plotOptions: {
      bar: {
        distributed: true,
      },
    },
    title: {
      text: 'Avaliação geral por nível de gastos',
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
      data: [5.2, 4.8, 4.9, 1],
    },
  ];

  return <Chart options={options} series={series} type='bar' width='100%' />;
}

export default AvalSpentChart;