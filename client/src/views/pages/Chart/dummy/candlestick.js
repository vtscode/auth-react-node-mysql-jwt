import echarts from 'echarts';

let upColor = '#ec0000';
let upBorderColor = '#8A0000';
let downColor = '#00da3c';
let downBorderColor = '#008F28';

let dataCount = 2e3;
export const generateOHLC = (count) => {
  let data = [];

  let xValue = +new Date(2011, 0, 1);
  let minute = 60 * 1000;
  let baseValue = Math.random() * 12000;
  let boxVals = new Array(4);
  let dayRange = 12;

  for (let i = 0; i < count; i++) {
    baseValue = baseValue + Math.random() * 20 - 10;

    for (let j = 0; j < 4; j++) {
      boxVals[j] = (Math.random() - 0.5) * dayRange + baseValue;
    }
    boxVals.sort();

    let openIdx = Math.round(Math.random() * 3);
    let closeIdx = Math.round(Math.random() * 2);
    if (closeIdx === openIdx) {
      closeIdx++;
    }
    let volumn = boxVals[3] * (1000 + Math.random() * 500);

    // ['open', 'close', 'lowest', 'highest', 'volumn']
    // [1, 4, 3, 2]
    data[i] = [
      echarts.format.formatTime('yyyy-MM-dd\nhh:mm:ss', xValue += minute),
      +boxVals[openIdx].toFixed(2), // open
      +boxVals[3].toFixed(2), // highest
      +boxVals[0].toFixed(2), // lowest
      +boxVals[closeIdx].toFixed(2),  // close
      volumn.toFixed(0),
      getSign(data, i, +boxVals[openIdx], +boxVals[closeIdx], 4) // sign
    ];
  }

  return data;

  function getSign(data, dataIndex, openVal, closeVal, closeDimIdx) {
    let sign;
    if (openVal > closeVal) {
      sign = -1;
    }
    else if (openVal < closeVal) {
      sign = 1;
    }
    else {
      sign = dataIndex > 0
      // If close === open, compare with close of last record
      ? (data[dataIndex - 1][closeDimIdx] <= closeVal ? 1 : -1)
      // No record of previous, set to be positive
      : 1;
    }
    return sign;
  }
}
export let data0 = generateOHLC(dataCount);
const splitData = (oldData) => {
  let rawData = [...oldData];
  let categoryData = [];
  let values = [];
  for (let i = 0; i < rawData.length; i++) {
    categoryData.push(rawData[i][0]);
    values.push(rawData[i].slice(1,rawData[i].length));
  }
  return {
    categoryData: categoryData,
    values: values
  };
}
let dataMA = splitData(data0);
const calculateMA = (dayCount) => {
  let result = [];
  for (let i = 0, len = dataMA.values.length; i < len; i++) {
    if (i < dayCount) {
      result.push('-');
      continue;
    }
    let sum = 0;
    for (let j = 0; j < dayCount; j++) {
      sum += dataMA.values[i - j][1];
    }
    result.push((sum / dayCount).toFixed(8));
  }
  return result;
}
const optionsData = {
  dataset: {
    source: data0
  },
  title: {
    left: 'center',
    text: 'Example Data Amount (per Menit): ' + echarts.format.addCommas(dataCount)
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  toolbox: {
    feature: {
      dataZoom: {
        yAxisIndex: false
      },
      brush: {
        type: ['lineX', 'clear']
      }
    }
  },
  brush: {
    xAxisIndex: 'all',
    brushLink: 'all',
    outOfBrush: {
      colorAlpha: 0.1
    }
  },
  grid: [
    {
      left: '10%',
      right: '10%',
      bottom: 200
    },{
      left: '10%',
      right: '10%',
      height: 50,
      bottom: 80
    }
  ],
  legend: {
    data: ['OHLC','Volumn', 'MA5', 'MA10', 'MA20', 'MA30'],
    left : 0
  },
  xAxis: [
    {
      type: 'category',
      scale: true,
      boundaryGap: false,
      // inverse: true,
      axisLine: {onZero: false},
      splitLine: {show: false},
      splitNumber: 20,
      min: 'dataMin',
      max: 'dataMax'
    },
    {
      type: 'category',
      gridIndex: 1,
      scale: true,
      boundaryGap: false,
      axisLine: {onZero: false},
      axisTick: {show: false},
      splitLine: {show: false},
      axisLabel: {show: false},
      splitNumber: 20,
      min: 'dataMin',
      max: 'dataMax'
    }
  ],
  yAxis: [
    {
      scale: true,
      splitArea: {
        show: true
      }
    },
    {
      scale: true,
      gridIndex: 1,
      splitNumber: 2,
      axisLabel: {show: false},
      axisLine: {show: false},
      axisTick: {show: false},
      splitLine: {show: false}
    }
  ],
  dataZoom: [
    {
      type: 'inside',
      xAxisIndex: [0, 1],
      start: 10,
      end: 100
    },
    {
      show: true,
      xAxisIndex: [0, 1],
      type: 'slider',
      bottom: 10,
      start: 10,
      end: 100,
      handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
      handleSize: '105%'
    }
  ],
  visualMap: {
    show: false,
    seriesIndex: 1,
    dimension: 6,
    pieces: [{
      value: 1,
      color: upColor
    }, {
      value: -1,
      color: downColor
    }]
  },
  series: [
    {
      name: 'OHLC',
      type: 'candlestick',
      itemStyle: {
        color: upColor,
        color0: downColor,
        borderColor: upBorderColor,
        borderColor0: downBorderColor
      },
      encode: {
        x: 0,
        y: [1, 4, 3, 2]
      }
    },
    {
      name: 'Volumn',
      type: 'bar',
      xAxisIndex: 1,
      yAxisIndex: 1,
      itemStyle: {
        color: '#7fbe9e'
      },
      large: true,
      encode: {
        x: 0,
        y: 5
      }
    },
    {
      name: 'MA5',
      type: 'line',
      data: calculateMA(5),
      smooth: true,
      lineStyle: {
        opacity: 0.5
      }
    },
    {
      name: 'MA10',
      type: 'line',
      data: calculateMA(10),
      smooth: true,
      lineStyle: {
        opacity: 0.5
      }
    },
    {
      name: 'MA20',
      type: 'line',
      data: calculateMA(20),
      smooth: true,
      lineStyle: {
        opacity: 0.5
      }
    },
    {
      name: 'MA30',
      type: 'line',
      data: calculateMA(30),
      smooth: true,
      lineStyle: {
        opacity: 0.5
      }
    },
  ]
};

export default optionsData;