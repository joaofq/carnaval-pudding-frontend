import Chart from 'react-apexcharts';

function SpentCategoriesChart() {
  const options = {
    xaxis: {
      categories: [
        'Hospedagem',
        'Passeios',
        'Transporte',
        'Compras',
        'Ingressos',
      ],
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#0455BF', '#05C7F2', '#D95204', '#0468BF', '#EEAF24'],
    plotOptions: {
      bar: {
        distributed: true,
      },
    },
    title: {
      text: 'Gastos dos visitantes por categoria',
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
      description: 'Gráfico de barras de gastos dos visitantes por categoria',
    },
  };

  const series = [
    {
      data: [737, 266, 201, 177, 173],
    },
  ];

  return <Chart options={options} series={series} type='bar' width='100%' />;
}

export default SpentCategoriesChart;