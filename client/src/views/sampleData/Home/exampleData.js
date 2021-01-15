import echarts from 'echarts';
const option = {
  title: {
    left: 'center',
    text: 'Temperature change in the next week',
    subtext: 'Purely Fictitious'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    bottom : 0
  },
  toolbox: {
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex: 'none',
        title : 'Zoom Data'
      },
      dataView: {
        readOnly: false,
        title : 'View Data',
        lang : ['All Data', 'Close', 'Refresh']
      },
      magicType: {
        type: ['line', 'bar'],
        title : {
          line : 'Line',
          bar : 'Bar'
        }
      },
      restore: {
        title : 'Restore'
      },
      saveAsImage: {
        title : 'Download Image'
      }
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data : ['2020-11-01','2020-11-02','2020-11-03','2020-11-04','2020-11-05','2020-11-06','2020-11-07','2020-11-08','2020-11-09','2020-11-10','2020-11-11','2020-11-12','2020-11-13','2020-11-14','2020-11-15','2020-11-16','2020-11-17','2020-11-17','2020-11-18','2020-11-19','2020-11-20'],
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} °C'
    }
  },
  series: [
    {
      name: 'Highest Temperature',
      type: 'line',
      smooth: true,
      data: [
        ['2020-11-01',11],
        ['2020-11-02',11], 
        ['2020-11-03',15], 
        ['2020-11-04',13],
        ['2020-11-05',12],
        ['2020-11-06',13],
        ['2020-11-07',10]
      ],
      markPoint: {
        itemStyle: {
          color : 'rgba(46, 144, 28, 0.7)'
        },
        data: [
          {type: 'average', name: 'Average Value'},
        ]
      },
      markLine: {
        data: [
          {type: 'average', name: 'average'}
        ]
      },
      lineStyle: {
        color: '#1890FF',
        width: 3
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#143C4A'
        },{
          offset: 0.5,
          color: '#3095B8'
        }, {
          offset: 1,
          color: '#eee'
        }])
      },
    },
  ]
};
export default option;

export const optionGauge = {
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%'
  },
  toolbox: {
    feature: {
      restore: {
        title : 'Restore',
      },
      saveAsImage: {
        title : 'Download Image'
      }
    }
  },
  series: [
    {
      name: 'Business indicators',
      type: 'gauge',
      detail: {formatter: '{value}%'},
      data: [{value: (Math.random() * 100).toFixed(2) - 0, name: 'Completion rate'}]
    }
  ]
};