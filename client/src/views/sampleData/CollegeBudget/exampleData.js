/* eslint-disable */
import { randomString } from 'utils/generate';
const defaultData = {
  monthlyIncome : [
    {
      id : randomString(7),
      name_field : 'Fixed Income',
      amount : 1500,
    },
    {
      id : randomString(7),
      name_field : 'Financial Aid',
      amount : 500,
    },
    {
      id : randomString(7),
      name_field : 'Loans',
      amount : 500,
    },
    {
      id : randomString(7),
      name_field : 'Other Income',
      amount : 250,
    },
  ],
  monthlyExpenses : [
    {
      id : randomString(7),
      name_field : 'Rent',
      amount : 350,
    },
    {
      id : randomString(7),
      name_field : 'Utilities',
      amount : 50,
    },
    {
      id : randomString(7),
      name_field : 'Cell Phone',
      amount : 75,
    },
    {
      id : randomString(7),
      name_field : 'Groceries',
      amount : 250,
    },
    {
      id : randomString(7),
      name_field : 'Auto Expenses',
      amount : 50,
    },
    {
      id : randomString(7),
      name_field : 'Student Loans',
      amount : 500,
    },
    {
      id : randomString(7),
      name_field : 'Credit Score',
      amount : 275,
    },
    {
      id : randomString(7),
      name_field : 'Insurance',
      amount : 125,
    },
    {
      id : randomString(7),
      name_field : 'Hair Cut',
      amount : 50,
    },
    {
      id : randomString(7),
      name_field : 'Entertainment',
      amount : 0,
    },
    {
      id : randomString(7),
      name_field : 'Miscellaneous',
      amount : 0,
    },
  ],
  semesterExpenses : [
    {
      id : randomString(7),
      name_field : 'Tuition',
      amount : 750,
      perMonth : 188
    },
    {
      id : randomString(7),
      name_field : 'Lab fees',
      amount : 300,
      perMonth : 75
    },
    {
      id : randomString(7),
      name_field : 'Books',
      amount : 500,
      perMonth : 125
    },
    {
      id : randomString(7),
      name_field : 'Deposits',
      amount : 0,
      perMonth : 0
    },
    {
      id : randomString(7),
      name_field : 'Transportation',
      amount : 0,
      perMonth : 0
    },
    {
      id : randomString(7),
      name_field : 'Other Fees',
      amount : 0,
      perMonth : 0
    },
  ],
};

const optBase = {
  color: ['#1890ff'],
  title: {
    text: 'Overview',
    subtext: 'Detail Chart',
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
    max: function (value) {
      return value.max + 500;
    },
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    axisLabel : {
      rotate : 30
    },
    data: []
  },
  series: [
    {
      name: 'Category',
      type: 'bar',
      data: []
    }
  ]
};
const optMonthExpenses = {...optBase,
  color: ['#FD9212'],
  title: {
    ...optBase.title,
    text: 'Monthly Expenses',
  },
  yAxis: {
    ...optBase.yAxis,
    data: defaultData.monthlyExpenses.sort((a,b) => a.amount - b.amount).map(x => x.name_field)
  },
  series: [
    {
      name: 'Monthly Expenses',
      type: 'bar',
      data: defaultData.monthlyExpenses.sort((a,b) => a.amount - b.amount).map(x => x.amount)
    }
  ]
};
const optMonthIncome = {...optBase,
  color: ['#3EAE08'],
  title: {
    ...optBase.title,
    text: 'Monthly Income',
  },
  yAxis: {
    ...optBase.yAxis,
    data: defaultData.monthlyIncome.sort((a,b) => a.amount - b.amount).map(x => x.name_field)
  },
  series: [
    {
      name: 'Monthly Income',
      type: 'bar',
      data: defaultData.monthlyIncome.sort((a,b) => a.amount - b.amount).map(x => x.amount)
    }
  ]
};
const optSmstrExpense = {...optBase,
  title: {
    ...optBase.title,
    text: 'Semester Expenses (per month)',
  },
  yAxis: {
    ...optBase.yAxis,
    data: defaultData.semesterExpenses.sort((a,b) => a.amount - b.amount).map(x => x.name_field)
  },
  series: [
    {
      name: 'Semester Expenses (per month)',
      type: 'bar',
      data: defaultData.semesterExpenses.sort((a,b) => a.amount - b.amount).map(x => x.perMonth)
    }
  ]
};
export default defaultData;
export { optMonthExpenses,optMonthIncome,optSmstrExpense };