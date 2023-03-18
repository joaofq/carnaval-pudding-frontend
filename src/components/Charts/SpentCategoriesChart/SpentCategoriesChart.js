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
  };

  const series = [
    {
      data: [737, 266, 201, 177, 173],
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type='bar'
      width='500px'
      height='400px'
    />
  );
}

export default SpentCategoriesChart;
