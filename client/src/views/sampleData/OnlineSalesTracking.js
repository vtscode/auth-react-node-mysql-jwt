import { randomString } from "utils/generate";
export default (props) => {
  const years = ['Tahun 1', 'Tahun 2', 'Tahun 3'];
  const products = ['Product 1', 'Product 2', 'Product 3','Product 4', 'Product 5'];

  const data = [[0,0,9.3],[0,1,13.2],[0,2,7.3],[1,0,15.2],[1,1,4],[1,2,5],[2,0,3.5],[2,1,1.4],[2,2,5.1],[3,0,17.2],[3,1,12],[3,2,10],[4,0,7],[4,1,19],[4,2,8]];
  const barData = {
      tooltip: {
        trigger: 'item',
      },
      title: {
        text: 'Profit Product per Product (%)',
        left: 'center',
        top: 20,
        textStyle: {
          color: '#262626'
        }
      },
      visualMap: {
        max: 20,
        inRange: {
          color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        }
      },
      xAxis3D: {
        type: 'category',
        name : '',
        data: years
      },
      yAxis3D: {
        type: 'category',
        name : '',
        data: products
      },
      zAxis3D: {
        type: 'value',
        name : 'Profit (%)',
      },
      grid3D: {
        boxWidth: 300,
        boxDepth: 100,
        viewControl: {
          // projection: 'orthographic'
        },
        light: {
          main: {
            intensity: 1.2,
            shadow: true
          },
          ambient: {
            intensity: 0.3
          }
        }
      },
      series: [{
        type: 'bar3D',
        data: data.map(function (item) {
          return {
            value: [item[1], item[0], item[2]],
          }
        }),
        shading: 'lambert',

        label: {
          textStyle: {
            fontSize: 16,
            borderWidth: 1
          }
        },

        emphasis: {
          label: {
            textStyle: {
              fontSize: 20,
              color: '#900'
            }
          },
          itemStyle: {
            color: '#900'
          }
        }
      }]
  }
  return {
    pieData :  {
      backgroundColor: '#fff',
      title: {
        text: '% Income per Product',
        left: 'center',
        top: 20,
        textStyle: {
          color: '#262626'
        }
      },
  
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
  
      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [
          {
              name: 'Income per Product',
              type: 'pie',
              radius: '55%',
              center: ['50%', '50%'],
              data: [
                  {value: 196.75, name: 'Product 1'},
                  {value: 224.63, name: 'Product 2'},
                  {value: 244, name: 'Product 3'},
                  {value: 300, name: 'Product 4'},
                  {value: 218.4, name: 'Product 5'}
              ].sort(function (a, b) { return a.value - b.value; }),
              roseType: 'radius',
              label: {
                  color: '#262626'
              },
              labelLine: {
                  lineStyle: {
                      color: '#262626'
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20
              },
              itemStyle: {
                  color: '#abd9e9',
                  shadowBlur: 200,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
  
              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx) {
                  return Math.random() * 200;
              }
          }
      ]
    },
    barData,
    tableData : [
      {
        id: randomString(8),
        product_name: 'Item 1',
        product_cost: 10,
        percent_markup: 1,
        total_sold: 15,
        total_revenue: 300,
        product_shipping_charge: 10,
        product_shipping_cost: 5.75,
        product_profit: 14.25,
        returns: 2,
        total_income: 196.75,
      },
      {
        id: randomString(8),
        product_name: 'Item 2',
        product_cost: 11.5,
        percent_markup: 0.75,
        total_sold: 18,
        total_revenue: 362.25,
        product_shipping_charge: 10,
        product_shipping_cost: 5.75,
        product_profit: 12.88,
        returns: 1,
        total_income: 224.63,
      },
      {
        id: randomString(8),
        product_name: 'Item 3',
        product_cost: 13,
        percent_markup: 0.65,
        total_sold: 20,
        total_revenue: 429,
        product_shipping_charge: 10,
        product_shipping_cost: 6.25,
        product_profit: 12.2,
        returns: 0,
        total_income: 244,
      },
      {
        id: randomString(8),
        product_name: 'Item 4',
        product_cost: 5,
        percent_markup: 0.9,
        total_sold: 50,
        total_revenue: 475,
        product_shipping_charge: 5,
        product_shipping_cost: 3.5,
        product_profit: 6,
        returns: 0,
        total_income: 300,
      },
      {
        id: randomString(8),
        product_name: 'Item 5',
        product_cost: 4,
        percent_markup: 0.9,
        total_sold: 42,
        total_revenue: 319,
        product_shipping_charge: 5,
        product_shipping_cost: 3.25,
        product_profit: 5.35,
        returns: 3,
        total_income: 218.4,
      },
    ],
    columnTable : [
      {
        title: 'Product',
        dataIndex: 'product_name',
        key: 'product_name',
      },
      {
        title: 'Cost per Product',
        dataIndex: 'product_cost',
        key: 'product_cost',
      },
      {
        title: 'Percent Markup',
        dataIndex: 'percent_markup',
        key: 'percent_markup',
      },
      {
        title: 'Total Sold',
        dataIndex: 'total_sold',
        key: 'total_sold',
      },
      {
        title: 'Total Revenue',
        dataIndex: 'total_revenue',
        key: 'total_revenue',
      },
      {
        title: 'Shipping Charge/Product',
        dataIndex: 'product_shipping_charge',
        key: 'product_shipping_charge',
      },
      {
        title: 'Shipping Cost/Product',
        dataIndex: 'product_shipping_cost',
        key: 'product_shipping_cost',
      },
      {
        title: 'Profit per Product (incl. shipping)',
        dataIndex: 'product_profit',
        key: 'product_profit',
      },
      {
        title: 'Returns',
        dataIndex: 'returns',
        key: 'returns',
      },
      {
        title: 'Total Income',
        dataIndex: 'total_income',
        key: 'total_income',
      },
    ]
  }
  
};