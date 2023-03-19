import Chart from 'react-apexcharts';

function AvalBlocoChart() {
  const options = {
    xaxis: {
      categories: [
        'Alô Abacaxi',
        'Baianas Ozadas',
        'Batiza',
        'Beiço do Wando',
        'Angola Janga',
        'Despedida de Carnaval',
        'Bloco Havayanas Usadas',
        'Bloco da Calixto',
        'Bloco é o Amô',
        'Então Brilha',
        'Funk You',
        'Juventude Bronzeada',
        'Monobloco',
        'Quando come se lambuza',
        'Tchanzinho Zona Norte',
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
      text: 'Avaliação geral por bloco',
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
      data: [
        5.3, 5.1, 5.6, 6.5, 4.5, 5.9, 7.0, 5.1, 5.3, 5.7, 5.0, 5.2, 4.3, 4.4,
        6.2,
      ],
    },
  ];

  return <Chart options={options} series={series} type='bar' width='100%' />;
}

export default AvalBlocoChart;