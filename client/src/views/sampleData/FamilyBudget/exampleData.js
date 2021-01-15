/* eslint-disable */
import { randomString } from 'utils/generate';
const defaultData = {
  overview : [
    {
      id : randomString(7),
      name_field : 'Balance',
      projected : 1585,
      actual : 1740,
      diff : 155,
    },
    {
      id : randomString(7),
      name_field : 'Expenses',
      projected : 7915,
      actual : 7860,
      diff : 55,
    },
    {
      id : randomString(7),
      name_field : 'Total Income',
      projected : 9500,
      actual : 9600,
      diff : 100,
    },
  ],
  incomeSum : [
    {
      id : randomString(7),
      name_field : 'Income 1',
      projected : 6000,
      actual : 5800,
      diff : 200,
    },
    {
      id : randomString(7),
      name_field : 'Income 2',
      projected : 1000,
      actual : 2300,
      diff : 1300,
    },
    {
      id : randomString(7),
      name_field : 'Extra Income',
      projected : 2500,
      actual : 1500,
      diff : 1000,
    },
  ],
  detailExpenses : [
    {
      id : randomString(7),
      name_field : 'Children',
      projected : 140,
      actual : 140,
      diff : 0,
      row : [
        {
          id : randomString(7),
          name_field : 'Extracurricular Activities',
          projected : 40,
          actual : 40,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'Medical',
          projected : 0,
          actual : 0,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'School Supplies',
          projected : 0,
          actual : 0,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'School Tuition',
          projected : 100,
          actual : 100,
          diff : 0,
        },
      ]
    },
    {
      id : randomString(7),
      name_field : 'Entertainment',
      projected : 400,
      actual : 366,
      diff : 34,
      row : [
        {
          id : randomString(7),
          name_field : 'Concerts',
          projected : 50,
          actual : 40,
          diff : 10,
        },
        {
          id : randomString(7),
          name_field : 'Live Theater',
          projected : 200,
          actual : 150,
          diff : 50,
        },
        {
          id : randomString(7),
          name_field : 'Movies',
          projected : 50,
          actual : 28,
          diff : 22,
        },
        {
          id : randomString(7),
          name_field : 'Music (CDs, Downloads, etc.)',
          projected : 50,
          actual : 38,
          diff : 12,
        },
        {
          id : randomString(7),
          name_field : 'Sporting Events',
          projected : 0,
          actual : 40,
          diff : -40,
        },
        {
          id : randomString(7),
          name_field : 'Video/DVD (Purchase)',
          projected : 20,
          actual : 50,
          diff : -30,
        },
        {
          id : randomString(7),
          name_field : 'Video/DVD (Rental)',
          projected : 30,
          actual : 20,
          diff : 10,
        },
      ]
    },
    {
      id : randomString(7),
      name_field : 'Food',
      projected : 1100,
      actual : 1320,
      diff : -120,
      row : [
        {
          id : randomString(7),
          name_field : 'Dinning Out',
          projected :1000,
          actual : 1200,
          diff : -200,
        },
        {
          id : randomString(7),
          name_field : 'Groceries',
          projected : 100,
          actual : 120,
          diff : -20,
        },
      ]
    },
    {
      id : randomString(7),
      name_field : 'Gift and Charity',
      projected : 100,
      actual : 125,
      diff : -25,
      row : [
        {
          id : randomString(7),
          name_field : 'Charity 1',
          projected :75,
          actual : 100,
          diff : -25,
        },
        {
          id : randomString(7),
          name_field : 'Charity 2',
          projected : 25,
          actual : 25,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'Gift 1',
          projected : 0,
          actual : 0,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'Gift 2',
          projected : 0,
          actual : 0,
          diff : 0,
        },
      ]
    },
    {
      id : randomString(7),
      name_field : 'Housing',
      projected : 2630,
      actual : 2552,
      diff : 78,
      row : [
        {
          id : randomString(7),
          name_field : 'Cable/Satellite',
          projected : 100,
          actual : 100,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'Electric',
          projected : 45,
          actual : 50,
          diff : -5,
        },
        {
          id : randomString(7),
          name_field : 'Gas',
          projected : 300,
          actual : 400,
          diff : -100,
        },
        {
          id : randomString(7),
          name_field : 'House Cleaning Service',
          projected : 200,
          actual : 0,
          diff : 200,
        },
        {
          id : randomString(7),
          name_field : 'Mortgage Or Rent',
          projected : 1700,
          actual : 1700,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'Natural Gas/Oil',
          projected : 0,
          actual : 0,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'Online/Internet Service',
          projected : 100,
          actual : 100,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'Phone (Cellular)',
          projected : 60,
          actual : 60,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'Phone (Home)',
          projected : 35,
          actual : 39,
          diff : -4,
        },
        {
          id : randomString(7),
          name_field : 'Supplies',
          projected : 40,
          actual : 55,
          diff : -15,
        },
        {
          id : randomString(7),
          name_field : 'Waste Removal and Recycle',
          projected : 25,
          actual : 22,
          diff : 3,
        },
        {
          id : randomString(7),
          name_field : 'Water and Sewer',
          projected : 25,
          actual : 26,
          diff : -1,
        },
      ]
    },
    {
      id : randomString(7),
      name_field : 'Insurance',
      projected : 1000,
      actual : 1000,
      diff : 0,
      row : [
        {
          id : randomString(7),
          name_field : 'Health',
          projected : 400,
          actual : 400,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'Home',
          projected : 400,
          actual : 400,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'Life',
          projected : 100,
          actual : 100,
          diff : 0,
        },
      ]
    },
    {
      id : randomString(7),
      name_field : 'Loans',
      projected : 200,
      actual : 200,
      diff : 0,
      row : [
        {
          id : randomString(7),
          name_field : 'Credit Card 1',
          projected : 200,
          actual : 200,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'Credit Card 2',
          projected : 0,
          actual : 0,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'Credit Card 3',
          projected : 0,
          actual : 0,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'Personal',
          projected : 0,
          actual : 0,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'Student',
          projected : 0,
          actual : 0,
          diff : 0,
        },
      ]
    },
    {
      id : randomString(7),
      name_field : 'Personal',
      projected : 150,
      actual : 140,
      diff : 10,
      row : [
        {
          id : randomString(7),
          name_field : 'Clothing',
          projected : 150,
          actual : 140,
          diff : 10,
        },
        {
          id : randomString(7),
          name_field : 'Dry Cleaning',
          projected : 0,
          actual : 0,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'Hair/Nails',
          projected : 0,
          actual : 0,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'Health Club',
          projected : 0,
          actual : 0,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'Medical',
          projected : 0,
          actual : 0,
          diff : 0,
        },
      ]
    },
    {
      id : randomString(7),
      name_field : 'Pets',
      projected : 170,
      actual : 100,
      diff : 70,
      row : [
        {
          id : randomString(7),
          name_field : 'Food',
          projected : 150,
          actual : 75,
          diff : 75,
        },
        {
          id : randomString(7),
          name_field : 'Gromming',
          projected : 20,
          actual : 25,
          diff : -5,
        },
        {
          id : randomString(7),
          name_field : 'Medical',
          projected : 0,
          actual : 0,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'Toys',
          projected : 0,
          actual : 0,
          diff : 0,
        },
      ]
    },
    {
      id : randomString(7),
      name_field : 'Savings',
      projected : 200,
      actual : 200,
      diff : 0,
      row : [
        {
          id : randomString(7),
          name_field : 'Investment Account',
          projected : 200,
          actual : 200,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'Retirement Account',
          projected : 0,
          actual : 0,
          diff : 0,
        },
      ]
    },
    {
      id : randomString(7),
      name_field : 'Taxes',
      projected : 300,
      actual : 300,
      diff : 0,
      row : [
        {
          id : randomString(7),
          name_field : 'Federal',
          projected : 300,
          actual : 300,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'Local',
          projected : 0,
          actual : 0,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'State',
          projected : 0,
          actual : 0,
          diff : 0,
        },
      ]
    },
    {
      id : randomString(7),
      name_field : 'Transportation',
      projected : 1425,
      actual : 1375,
      diff : 50,
      row : [
        {
          id : randomString(7),
          name_field : 'Bus/Taxi Fare',
          projected : 100,
          actual : 150,
          diff : -50,
        },
        {
          id : randomString(7),
          name_field : 'Fuel',
          projected : 450,
          actual : 400,
          diff : 50,
        },
        {
          id : randomString(7),
          name_field : 'Insurance',
          projected : 300,
          actual : 300,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'Lincensing',
          projected : 25,
          actual : 25,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'Maintenance',
          projected : 100,
          actual : 50,
          diff : 50,
        },
        {
          id : randomString(7),
          name_field : 'Parking Fees',
          projected : 0,
          actual : 0,
          diff : 0,
        },
        {
          id : randomString(7),
          name_field : 'Vehicle Payment',
          projected : 450,
          actual : 450,
          diff : 0,
        },
      ]
    },
  ],
};

const optionsChart = {
  color: ['#1890ff'],
  title: {
    text: 'Actual Expenses',
    subtext: 'Chart actual expenses',
    left: 'center',
    textStyle: {
      color: '#262626'
    }
  },
  tooltip: {
    trigger: 'item',
    axisPointer: {
      type: 'shadow'
    }
  },
  toolbox: {
    feature: {
      dataView: {
        show: true, 
        readOnly: false,
        title : 'Data View'
      },
      saveAsImage: {
        show: true,
        title : 'Download Chart'
      }
    }
  },
  legend: {
    show : true,
    bottom : 0
  },
  grid: {
    left: '20%',
    right: '0%',
    width : "100%"
  },
  xAxis: {
    type: 'value',
    axisLabel : {
      formatter : '${value}'
    },
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: defaultData.detailExpenses.sort((a,b) => a.actual - b.actual).map(x => x.name_field)
  },
  series: [
    {
      name: 'Category',
      type: 'bar',
      data: defaultData.detailExpenses.sort((a,b) => a.actual - b.actual).map(x => x.actual)
    }
  ]
}
export default defaultData;
export { optionsChart };