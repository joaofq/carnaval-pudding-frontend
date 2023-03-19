import Chart from 'react-apexcharts';

function AvalGeneroChart() {
  const options = {
    xaxis: {
      categories: [
        '16 a 24 anos',
        '25 a 39 anos',
        '40 a 59 anos',
        'acima de 60 anos',
      ],
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#0455BF', '#05C7F2', '#D95204'],
    plotOptions: {
      bar: {
        distributed: true,
      },
    },
    title: {
      text: 'Avaliação geral por faixa etária',
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
      data: [5.2, 5.1, 5.3, 5.8],
    },
  ];

  return <Chart options={options} series={series} type='bar' width='100%' />;
}

export default AvalGeneroChart;