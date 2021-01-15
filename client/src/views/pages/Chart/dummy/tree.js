const data = {
  "name": "flare",
  "children": [
      {
          "name": "data",
          "children": [
              {
                   "name": "converters",
                   "children": [
                    {"name": "Converters", "value": 721},
                    {"name": "DelimitedTextConverter", "value": 4294}
                   ]
              },
              {
                  "name": "DataUtil",
                  "value": 3322
              }
          ]
      },
      {
          "name": "display",
          "children": [
              {"name": "DirtySprite", "value": 8833},
              {"name": "LineSprite", "value": 1732},
              {"name": "RectSprite", "value": 3623}
         ]
      },
      {
          "name": "flex",
          "children": [
              {"name": "FlareVis", "value": 4116}
          ]
      },
      {
         "name": "query",
         "children": [
          {"name": "AggregateExpression", "value": 1616},
          {"name": "And", "value": 1027},
          {"name": "Arithmetic", "value": 3891},
          {"name": "Average", "value": 891},
          {"name": "BinaryExpression", "value": 2893},
          {"name": "Comparison", "value": 5103},
          {"name": "CompositeExpression", "value": 3677},
          {"name": "Count", "value": 781},
          {"name": "DateUtil", "value": 4141},
          {"name": "Distinct", "value": 933},
          {"name": "Expression", "value": 5130},
          {"name": "ExpressionIterator", "value": 3617},
          {"name": "Fn", "value": 3240},
          {"name": "If", "value": 2732},
          {"name": "IsA", "value": 2039},
          {"name": "Literal", "value": 1214},
          {"name": "Match", "value": 3748},
          {"name": "Maximum", "value": 843},
          {
           "name": "methods",
           "children": [
            {"name": "add", "value": 593},
            {"name": "and", "value": 330},
            {"name": "average", "value": 287},
            {"name": "count", "value": 277},
            {"name": "distinct", "value": 292},
            {"name": "div", "value": 595},
            {"name": "eq", "value": 594},
            {"name": "fn", "value": 460},
            {"name": "gt", "value": 603},
            {"name": "gte", "value": 625},
            {"name": "iff", "value": 748},
            {"name": "isa", "value": 461},
            {"name": "lt", "value": 597},
            {"name": "lte", "value": 619},
            {"name": "max", "value": 283},
            {"name": "min", "value": 283},
            {"name": "mod", "value": 591},
            {"name": "mul", "value": 603},
            {"name": "neq", "value": 599},
            {"name": "not", "value": 386},
            {"name": "or", "value": 323},
            {"name": "orderby", "value": 307},
            {"name": "range", "value": 772},
            {"name": "select", "value": 296},
            {"name": "stddev", "value": 363},
            {"name": "sub", "value": 600},
            {"name": "sum", "value": 280},
            {"name": "update", "value": 307},
            {"name": "variance", "value": 335},
            {"name": "where", "value": 299},
            {"name": "xor", "value": 354},
            {"name": "_", "value": 264}
           ]
          },
          {"name": "Minimum", "value": 843},
          {"name": "Not", "value": 1554},
          {"name": "Or", "value": 970},
          {"name": "Query", "value": 13896},
          {"name": "Range", "value": 1594},
          {"name": "StringUtil", "value": 4130},
          {"name": "Sum", "value": 791},
          {"name": "Variable", "value": 1124},
          {"name": "Variance", "value": 1876},
          {"name": "Xor", "value": 1101}
         ]
        },
      {
         "name": "scale",
         "children": [
          {"name": "IScaleMap", "value": 2105},
          {"name": "LinearScale", "value": 1316},
          {"name": "LogScale", "value": 3151},
          {"name": "OrdinalScale", "value": 3770},
          {"name": "QuantileScale", "value": 2435},
          {"name": "QuantitativeScale", "value": 4839},
          {"name": "RootScale", "value": 1756},
          {"name": "Scale", "value": 4268},
          {"name": "ScaleType", "value": 1821},
          {"name": "TimeScale", "value": 5833}
         ]
      }
  ]
};

const data2 = {
  "name": "flare",
  "children": [
      {
          "name": "flex",
          "children": [
              {"name": "FlareVis", "value": 4116}
          ]
      },
      {
          "name": "scale",
          "children": [
              {"name": "IScaleMap", "value": 2105},
              {"name": "LinearScale", "value": 1316},
              {"name": "LogScale", "value": 3151},
              {"name": "OrdinalScale", "value": 3770},
              {"name": "QuantileScale", "value": 2435},
              {"name": "QuantitativeScale", "value": 4839},
              {"name": "RootScale", "value": 1756},
              {"name": "Scale", "value": 4268},
              {"name": "ScaleType", "value": 1821},
              {"name": "TimeScale", "value": 5833}
         ]
      },
      {
          "name": "display",
          "children": [
              {"name": "DirtySprite", "value": 8833}
         ]
      }
  ]
};

const option = {
  tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
  },
  legend: {
      top: '2%',
      left: '3%',
      orient: 'vertical',
      data: [{
          name: 'tree1',
          icon: 'rectangle'
      },
      {
          name: 'tree2',
          icon: 'rectangle'
      }],
      borderColor: '#c23531'
  },
  series:[
      {
          type: 'tree',

          name: 'tree1',

          data: [data],

          top: '5%',
          left: '7%',
          bottom: '2%',
          right: '60%',

          symbolSize: 7,

          label: {
              position: 'left',
              verticalAlign: 'middle',
              align: 'right'
          },

          leaves: {
              label: {
                  position: 'right',
                  verticalAlign: 'middle',
                  align: 'left'
              }
          },

          expandAndCollapse: true,

          animationDuration: 550,
          animationDurationUpdate: 750

      },
      {
          type: 'tree',
          name: 'tree2',
          data: [data2],

          top: '20%',
          left: '60%',
          bottom: '22%',
          right: '18%',

          symbolSize: 7,

          label: {
              position: 'left',
              verticalAlign: 'middle',
              align: 'right'
          },

          leaves: {
              label: {
                  position: 'right',
                  verticalAlign: 'middle',
                  align: 'left'
              }
          },

          expandAndCollapse: true,

          animationDuration: 550,
          animationDurationUpdate: 750
      }
  ]
};
export default option;

const dataSankey = {
  "nodes":[
    {"name":"Agricultural 'waste'"},
    {"name":"Bio-conversion"},
    {"name":"Liquid"},
    {"name":"Losses"},
    {"name":"Solid"},
    {"name":"Gas"},
    {"name":"Biofuel imports"},
    {"name":"Biomass imports"},
    {"name":"Coal imports"},
    {"name":"Coal"},
    {"name":"Coal reserves"},
    {"name":"District heating"},
    {"name":"Industry"},
    {"name":"Heating and cooling - commercial"},
    {"name":"Heating and cooling - homes"},
    {"name":"Electricity grid"},
    {"name":"Over generation / exports"},
    {"name":"H2 conversion"},
    {"name":"Road transport"},
    {"name":"Agriculture"},
    {"name":"Rail transport"},
    {"name":"Lighting & appliances - commercial"},
    {"name":"Lighting & appliances - homes"},
    {"name":"Gas imports"},
    {"name":"Ngas"},
    {"name":"Gas reserves"},
    {"name":"Thermal generation"},
    {"name":"Geothermal"},
    {"name":"H2"},
    {"name":"Hydro"},
    {"name":"International shipping"},
    {"name":"Domestic aviation"},
    {"name":"International aviation"},
    {"name":"National navigation"},
    {"name":"Marine algae"},
    {"name":"Nuclear"},
    {"name":"Oil imports"},
    {"name":"Oil"},
    {"name":"Oil reserves"},
    {"name":"Other waste"},
    {"name":"Pumped heat"},
    {"name":"Solar PV"},
    {"name":"Solar Thermal"},
    {"name":"Solar"},
    {"name":"Tidal"},
    {"name":"UK land based bioenergy"},
    {"name":"Wave"},
    {"name":"Wind"}
  ],
  "links":[
    {"source": "Agricultural 'waste'", "target": "Bio-conversion",  "value": 124.729},
    {"source": "Bio-conversion", "target": "Liquid",  "value": 0.597},
    {"source": "Bio-conversion",  "target": "Losses",  "value": 26.862},
    {"source": "Bio-conversion",  "target": "Solid",  "value": 280.322},
    {"source": "Bio-conversion", "target": "Gas",  "value": 81.144},
    {"source": "Biofuel imports", "target": "Liquid",  "value": 35},
    {"source": "Biomass imports", "target": "Solid",  "value": 35},
    {"source": "Coal imports", "target": "Coal", "value": 11.606},
    {"source": "Coal reserves","target": "Coal", "value": 63.965},
    {"source": "Coal", "target": "Solid", "value": 75.571},
    {"source": "District heating", "target": "Industry", "value": 10.639},
    {"source": "District heating", "target": "Heating and cooling - commercial", "value": 22.505},
    {"source": "District heating", "target": "Heating and cooling - homes", "value": 46.184},
    {"source": "Electricity grid", "target": "Over generation / exports", "value": 104.453},
    {"source": "Electricity grid", "target": "Heating and cooling - homes", "value": 113.726},
    {"source": "Electricity grid", "target": "H2 conversion", "value": 27.14},
    {"source": "Electricity grid", "target": "Industry", "value": 342.165},
    {"source": "Electricity grid", "target": "Road transport", "value": 37.797},
    {"source": "Electricity grid", "target": "Agriculture", "value": 4.412},
    {"source": "Electricity grid", "target": "Heating and cooling - commercial", "value": 40.858},
    {"source": "Electricity grid", "target": "Losses", "value": 56.691},
    {"source": "Electricity grid", "target": "Rail transport", "value": 7.863},
    {"source": "Electricity grid", "target": "Lighting & appliances - commercial", "value": 90.008},
    {"source": "Electricity grid", "target": "Lighting & appliances - homes", "value": 93.494},
    {"source": "Gas imports", "target": "Ngas", "value": 40.719},
    {"source": "Gas reserves", "target": "Ngas", "value": 82.233},
    {"source": "Gas", "target": "Heating and cooling - commercial", "value": 0.129},
    {"source": "Gas", "target": "Losses", "value": 1.401},
    {"source": "Gas", "target": "Thermal generation", "value": 151.891},
    {"source": "Gas", "target": "Agriculture", "value": 2.096},
    {"source": "Gas", "target": "Industry", "value": 48.58},
    {"source": "Geothermal", "target": "Electricity grid", "value": 7.013},
    {"source": "H2 conversion", "target": "H2", "value": 20.897},
    {"source": "H2 conversion", "target": "Losses", "value": 6.242},
    {"source": "H2", "target": "Road transport", "value": 20.897},
    {"source": "Hydro", "target": "Electricity grid", "value": 6.995},
    {"source": "Liquid", "target": "Industry", "value": 121.066},
    {"source": "Liquid", "target": "International shipping", "value": 128.69},
    {"source": "Liquid", "target": "Road transport", "value": 135.835},
    {"source": "Liquid", "target": "Domestic aviation", "value": 14.458},
    {"source": "Liquid", "target": "International aviation", "value": 206.267},
    {"source": "Liquid", "target": "Agriculture", "value": 3.64},
    {"source": "Liquid", "target": "National navigation", "value": 33.218},
    {"source": "Liquid", "target": "Rail transport", "value": 4.413},
    {"source": "Marine algae", "target": "Bio-conversion", "value": 4.375},
    {"source": "Ngas", "target": "Gas", "value": 122.952},
    {"source": "Nuclear", "target": "Thermal generation", "value": 839.978},
    {"source": "Oil imports", "target": "Oil", "value": 504.287},
    {"source": "Oil reserves", "target": "Oil", "value": 107.703},
    {"source": "Oil", "target": "Liquid", "value": 611.99},
    {"source": "Other waste", "target": "Solid", "value": 56.587},
    {"source": "Other waste", "target": "Bio-conversion", "value": 77.81},
    {"source": "Pumped heat", "target": "Heating and cooling - homes", "value": 193.026},
    {"source": "Pumped heat", "target": "Heating and cooling - commercial", "value": 70.672},
    {"source": "Solar PV", "target": "Electricity grid", "value": 59.901},
    {"source": "Solar Thermal", "target": "Heating and cooling - homes", "value": 19.263},
    {"source": "Solar", "target": "Solar Thermal", "value": 19.263},
    {"source": "Solar", "target": "Solar PV", "value": 59.901},
    {"source": "Solid", "target": "Agriculture", "value": 0.882},
    {"source": "Solid", "target": "Thermal generation", "value": 400.12},
    {"source": "Solid", "target": "Industry", "value": 46.477},
    {"source": "Thermal generation", "target": "Electricity grid", "value": 525.531},
    {"source": "Thermal generation", "target": "Losses", "value": 787.129},
    {"source": "Thermal generation", "target": "District heating", "value": 79.329},
    {"source": "Tidal", "target": "Electricity grid", "value": 9.452},
    {"source": "UK land based bioenergy", "target": "Bio-conversion", "value": 182.01},
    {"source": "Wave", "target": "Electricity grid", "value": 19.013},
    {"source": "Wind", "target": "Electricity grid", "value": 289.366}
  ]
};

const sankeyOpt = {
  title: {
    text: 'Sankey Diagram',
    left : 'center'
  },
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove'
  },
  series: [
    {
      type: 'sankey',
      data: dataSankey.nodes,
      links: dataSankey.links,
      focusNodeAdjacency: 'allEdges',
      itemStyle: {
        borderWidth: 1,
        borderColor: '#aaa'
      },
      lineStyle: {
        color: 'source',
        curveness: 0.5
      }
    },
  ]
}

export {sankeyOpt};