import { Pie } from "@ant-design/charts";

function PieChart(props) {
    var data = props.data
      var config = {
        appendPadding: 10,
        data: data,
        angleField: 'pop',
        colorField: 'age_grp',
        radius: 0.8,
        label: {
          type: 'outer',
          content: '{percentage}',
        },
        interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }],
      };
      return <Pie {...config} />;
};

export default PieChart;
