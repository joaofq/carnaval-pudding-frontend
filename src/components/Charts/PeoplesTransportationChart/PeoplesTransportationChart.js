import Chart from 'react-apexcharts';

function PeoplesTransportationChart() {
  const options = {
    colors: ['#0455BF', '#05C7F2', '#EEAF24', '#0468BF', '#D95204'],
    labels: ['Avião', 'Carro', 'Trem', 'Uber/Taxi/Carona', 'Ônibus'],
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
      text: 'Meios de transporte utilizados pelos visitantes',
      align: 'center',
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#263238',
      },
    },
  };

  const series = [26, 87, 10, 17, 71];

  return (
    <Chart
      options={options}
      series={series}
      type='pie'
      width='500px'
      height='400px'
    />
  );
}

export default PeoplesTransportationChart;
