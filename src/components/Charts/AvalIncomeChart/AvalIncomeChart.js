import Chart from 'react-apexcharts';

function AvalIncomeChart() {
  const options = {
    xaxis: {
      categories: [
        'Até um salário mínimo (R$ 954,00)',
        'De 2 a 4 salários (R$ 1.908,00 - R$ 3.816,00)',
        'De 4 a 8 salários (R$ 3.816,00 - R$ 7.632,00)',
        'Acima de 8 salários (acima de R$ 7.632,00)',
      ],
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#0455BF', '#05C7F2', '#D95204', '#0468BF'],
    plotOptions: {
      bar: {
        distributed: true,
        horizontal: true,
      },
    },
    title: {
      text: 'Avaliação geral por faxa de renda',
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
      data: [5.2, 5.0, 5.3, 5.09],
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

export default AvalIncomeChart;
