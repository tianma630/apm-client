<template>
  <div class="wrap">
    <a-form layout="inline">
      <a-form-item label="统计日期">
        <a-date-picker
          placeholder="统计日期"
          :default-value="moment(date, 'YYYY-MM-DD')"
          @change="onChange"
        />
      </a-form-item>
    </a-form>
    
    <a-divider />

    <div class="static-wrap">
      <div>
        <a-statistic
          title="首次绘制平均值"
          :value="statics.firstPaintAvarage"
          :precision="2"
          :value-style="{ color: last.firstPaintAvarage && statics.firstPaintAvarage ? (parseFloat(statics.firstPaintAvarage) < parseFloat(last.firstPaintAvarage) ? '#3f8600' : 'rgb(207, 19, 34)') : 'rgba(0,0,0,.85)' }"
          style="margin-right: 50px"
        >
          <template #prefix v-if="last.firstPaintAvarage && statics.firstPaintAvarage">
            <a-icon type="arrow-down" v-if="parseFloat(statics.firstPaintAvarage) < parseFloat(last.firstPaintAvarage)" />
            <a-icon type="arrow-up" v-else />
          </template>
          <template #suffix>
            <a-button type="dashed" shape="circle" icon="bar-chart" size="small" @click="onChart('firstPaintAvarage')" />
          </template>
        </a-statistic>
        <a-statistic
          title="首次绘制中位数"
          :value="statics.firstPaintMedian"
          :precision="2"
          :value-style="{ color: last.firstPaintMedian && statics.firstPaintMedian ? (parseFloat(statics.firstPaintMedian) < parseFloat(last.firstPaintMedian) ? '#3f8600' : 'rgb(207, 19, 34)') : 'rgba(0,0,0,.85)' }"
          style="margin-right: 50px"
        >
          <template #prefix v-if="last.firstPaintMedian && statics.firstPaintMedian">
            <a-icon type="arrow-down" v-if="parseFloat(statics.firstPaintMedian) < parseFloat(last.firstPaintMedian)" />
            <a-icon type="arrow-up" v-else />
          </template>
          <template #suffix>
            <a-button type="dashed" shape="circle" icon="bar-chart" size="small" @click="onChart('firstPaintMedian')" />
          </template>
        </a-statistic>
      </div>

      <div>
        <a-statistic
          title="首次内容绘制平均值"
          :value="statics.firstContentfulPaintAvarage"
          :precision="2"
          :value-style="{ color: last.firstContentfulPaintAvarage && statics.firstContentfulPaintAvarage ? (parseFloat(statics.firstContentfulPaintAvarage) < parseFloat(last.firstContentfulPaintAvarage) ? '#3f8600' : 'rgb(207, 19, 34)') : 'rgba(0,0,0,.85)' }"
          style="margin-right: 50px"
        >
          <template #prefix v-if="last.firstContentfulPaintAvarage && statics.firstContentfulPaintAvarage">
            <a-icon type="arrow-down" v-if="parseFloat(statics.firstContentfulPaintAvarage) < parseFloat(last.firstContentfulPaintAvarage)" />
            <a-icon type="arrow-up" v-else />
          </template>
          <template #suffix>
            <a-button type="dashed" shape="circle" icon="bar-chart" size="small" @click="onChart('firstContentfulPaintAvarage')" />
          </template>
        </a-statistic>
        <a-statistic
          title="首次内容绘制中位数"
          :value="statics.firstContentfulPaintMedian"
          :precision="2"
          :value-style="{ color: last.firstContentfulPaintMedian && statics.firstContentfulPaintMedian ? (parseFloat(statics.firstContentfulPaintMedian) < parseFloat(last.firstContentfulPaintMedian) ? '#3f8600' : 'rgb(207, 19, 34)') : 'rgba(0,0,0,.85)' }"
          style="margin-right: 50px"
        >
          <template #prefix v-if="last.firstContentfulPaintMedian && statics.firstContentfulPaintMedian">
            <a-icon type="arrow-down" v-if="parseFloat(statics.firstContentfulPaintMedian) < parseFloat(last.firstContentfulPaintMedian)" />
            <a-icon type="arrow-up" v-else />
          </template>
          <template #suffix>
            <a-button type="dashed" shape="circle" icon="bar-chart" size="small" @click="onChart('firstContentfulPaintMedian')" />
          </template>
        </a-statistic>
      </div>
      <div>
        <a-statistic
          title="最大内容绘制平均值"
          :value="statics.largestContentfulPaintAvarage"
          :precision="2"
          :value-style="{ color: last.largestContentfulPaintAvarage && statics.largestContentfulPaintAvarage ? (parseFloat(statics.largestContentfulPaintAvarage) < parseFloat(last.largestContentfulPaintAvarage) ? '#3f8600' : 'rgb(207, 19, 34)') : 'rgba(0,0,0,.85)' }"
          style="margin-right: 50px"
        >
          <template #prefix v-if="last.largestContentfulPaintAvarage && statics.largestContentfulPaintAvarage">
            <a-icon type="arrow-down" v-if="parseFloat(statics.largestContentfulPaintAvarage) < parseFloat(last.largestContentfulPaintAvarage)" />
            <a-icon type="arrow-up" v-else />
          </template>
          <template #suffix>
            <a-button type="dashed" shape="circle" icon="bar-chart" size="small" @click="onChart('largestContentfulPaintAvarage')" />
          </template>
        </a-statistic>
        <a-statistic
          title="最大内容绘制中位数"
          :value="statics.largestContentfulPaintMedian"
          :precision="2"
          :value-style="{ color: last.largestContentfulPaintMedian && statics.largestContentfulPaintMedian ? (parseFloat(statics.largestContentfulPaintMedian) < parseFloat(last.largestContentfulPaintMedian) ? '#3f8600' : 'rgb(207, 19, 34)') : 'rgba(0,0,0,.85)' }"
          style="margin-right: 50px"
        >
          <template #prefix v-if="last.largestContentfulPaintMedian && statics.largestContentfulPaintMedian">
            <a-icon type="arrow-down" v-if="parseFloat(statics.largestContentfulPaintMedian) < parseFloat(last.largestContentfulPaintMedian)" />
            <a-icon type="arrow-up" v-else />
          </template>
          <template #suffix>
            <a-button type="dashed" shape="circle" icon="bar-chart" size="small" @click="onChart('largestContentfulPaintMedian')" />
          </template>
        </a-statistic>
      </div>
      <div>
        <a-statistic
          title="dom加载平均值"
          :value="statics.domContentLoadedAvarage"
          :precision="2"
          :value-style="{ color: last.domContentLoadedAvarage && statics.domContentLoadedAvarage ? (parseFloat(statics.domContentLoadedAvarage) < parseFloat(last.domContentLoadedAvarage) ? '#3f8600' : 'rgb(207, 19, 34)') : 'rgba(0,0,0,.85)' }"
          style="margin-right: 50px"
        >
          <template #prefix v-if="last.domContentLoadedAvarage && statics.domContentLoadedAvarage">
            <a-icon type="arrow-down" v-if="parseFloat(statics.domContentLoadedAvarage) < parseFloat(last.domContentLoadedAvarage)" />
            <a-icon type="arrow-up" v-else />
          </template>
          <template #suffix>
            <a-button type="dashed" shape="circle" icon="bar-chart" size="small" @click="onChart('domContentLoadedAvarage')" />
          </template>
        </a-statistic>
        <a-statistic
          title="dom加载中位数"
          :value="statics.domContentLoadedMedian"
          :precision="2"
          :value-style="{ color: last.domContentLoadedMedian && statics.domContentLoadedMedian ? (parseFloat(statics.domContentLoadedMedian) < parseFloat(last.domContentLoadedMedian) ? '#3f8600' : 'rgb(207, 19, 34)') : 'rgba(0,0,0,.85)' }"
          style="margin-right: 50px"
        >
          <template #prefix v-if="last.domContentLoadedMedian && statics.domContentLoadedMedian">
            <a-icon type="arrow-down" v-if="parseFloat(statics.domContentLoadedMedian) < parseFloat(last.domContentLoadedMedian)" />
            <a-icon type="arrow-up" v-else />
          </template>
          <template #suffix>
            <a-button type="dashed" shape="circle" icon="bar-chart" size="small" @click="onChart('domContentLoadedMedian')" />
          </template>
        </a-statistic>
      </div>
      <div>
        <a-statistic
          title="资源加载平均值"
          :value="statics.resourceLoadedAvarage"
          :precision="2"
          :value-style="{ color: last.resourceLoadedAvarage && statics.resourceLoadedAvarage ? (parseFloat(statics.resourceLoadedAvarage) < parseFloat(last.resourceLoadedAvarage) ? '#3f8600' : 'rgb(207, 19, 34)') : 'rgba(0,0,0,.85)' }"
          style="margin-right: 50px"
        >
          <template #prefix v-if="last.resourceLoadedAvarage && statics.resourceLoadedAvarage">
            <a-icon type="arrow-down" v-if="parseFloat(statics.resourceLoadedAvarage) < parseFloat(last.resourceLoadedAvarage)" />
            <a-icon type="arrow-up" v-else />
          </template>
          <template #suffix>
            <a-button type="dashed" shape="circle" icon="bar-chart" size="small" @click="onChart('resourceLoadedAvarage')" />
          </template>
        </a-statistic>
        <a-statistic
          title="资源加载中位数"
          :value="statics.resourceLoadedMedian"
          :precision="2"
          :value-style="{ color: last.resourceLoadedMedian && statics.resourceLoadedMedian ? (parseFloat(statics.resourceLoadedMedian) < parseFloat(last.resourceLoadedMedian) ? '#3f8600' : 'rgb(207, 19, 34)') : 'rgba(0,0,0,.85)' }"
          style="margin-right: 50px"
        >
          <template #prefix v-if="last.resourceLoadedMedian && statics.resourceLoadedMedian">
            <a-icon type="arrow-down" v-if="parseFloat(statics.resourceLoadedMedian) < parseFloat(last.resourceLoadedMedian)" />
            <a-icon type="arrow-up" v-else />
          </template>
          <template #suffix>
            <a-button type="dashed" shape="circle" icon="bar-chart" size="small" @click="onChart('resourceLoadedMedian')" />
          </template>
        </a-statistic>
      </div>
    </div>

    <a-divider />

    <a-table
      :columns="columns"
      :data-source="data"
      :scroll="{ x: 1500}"
      :pagination="false"
    >
      <span slot="firstPaintAvarage" slot-scope="firstPaintAvarage">{{
        parseFloat(firstPaintAvarage || 0).toFixed(2)
      }}</span>
      <span slot="firstPaintMedian" slot-scope="firstPaintMedian">{{
        parseFloat(firstPaintMedian || 0).toFixed(2)
      }}</span>
      <span
        slot="firstContentfulPaintAvarage"
        slot-scope="firstContentfulPaintAvarage"
        >{{ parseFloat(firstContentfulPaintAvarage || 0).toFixed(2) }}</span
      >
      <span
        slot="firstContentfulPaintMedian"
        slot-scope="firstContentfulPaintMedian"
        >{{ parseFloat(firstContentfulPaintMedian || 0).toFixed(2) }}</span
      >
      <span
        slot="largestContentfulPaintAvarage"
        slot-scope="largestContentfulPaintAvarage"
        >{{ parseFloat(largestContentfulPaintAvarage || 0).toFixed(2) }}</span
      >
      <span
        slot="largestContentfulPaintMedian"
        slot-scope="largestContentfulPaintMedian"
        >{{ parseFloat(largestContentfulPaintMedian || 0).toFixed(2) }}</span
      >
      <span
        slot="domContentLoadedAvarage"
        slot-scope="domContentLoadedAvarage"
        >{{ parseFloat(domContentLoadedAvarage || 0).toFixed(2) }}</span
      >
      <span slot="domContentLoadedMedian" slot-scope="domContentLoadedMedian">{{
        parseFloat(domContentLoadedMedian || 0).toFixed(2)
      }}</span>
      <span slot="resourceLoadedAvarage" slot-scope="resourceLoadedAvarage">{{
        parseFloat(resourceLoadedAvarage || 0).toFixed(2)
      }}</span>
      <span slot="resourceLoadedMedian" slot-scope="resourceLoadedMedian">{{
        parseFloat(resourceLoadedMedian || 0).toFixed(2)
      }}</span>
      <a-button
        type="link"
        slot="action"
        slot-scope="record"
        @click="onDetail(record)"
      >
        详情
      </a-button>
    </a-table>

    <a-modal
      :title="record.page"
      :visible="pageVisible"
      :closable="false"
      :footer="null"
      :maskClosable="true"
      :width="1048"
      @cancel="pageVisible = false"
    >
      <div style="width: 1000px; height: 300px" id="chart"></div>
      <div style="width: 1000px; height: 300px" id="chart1"></div>
    </a-modal>

    <a-modal
      :title="dayIndex"
      :visible="dayVisible"
      :closable="false"
      :footer="null"
      :maskClosable="true"
      :width="848"
      @cancel="dayVisible = false"
    >
      <div style="width: 800px; height: 300px" id="chart2"></div>
    </a-modal>
  </div>
</template>

<script>
import * as echarts from "echarts";

import moment from "moment";
import axios from "axios";
import { getNextDay, addDays } from '@/utils/common';

const columns = [
  {
    title: "页面",
    dataIndex: "page",
    key: "page",
    width: 250,
  },
  {
    title: "pv",
    dataIndex: "pv",
    key: "pv",
    width: 100,
    sorter: (a, b) => a.pv - b.pv,
  },

  {
    title: "首次绘制平均值",
    dataIndex: "firstPaintAvarage",
    key: "firstPaintAvarage",
    width: 150,
    scopedSlots: { customRender: "firstPaintAvarage" },
  },
  {
    title: "首次绘制中位数",
    dataIndex: "firstPaintMedian",
    key: "firstPaintMedian",
    width: 150,
    scopedSlots: { customRender: "firstPaintMedian" },
  },

  {
    title: "首次内容绘制平均值",
    dataIndex: "firstContentfulPaintAvarage",
    key: "firstContentfulPaintAvarage",
    width: 180,
    scopedSlots: { customRender: "firstContentfulPaintAvarage" },
  },
  {
    title: "首次内容绘制中位数",
    dataIndex: "firstContentfulPaintMedian",
    key: "firstContentfulPaintMedian",
    width: 180,
    scopedSlots: { customRender: "firstContentfulPaintMedian" },
  },

  {
    title: "最大内容绘制平均值",
    dataIndex: "largestContentfulPaintAvarage",
    key: "largestContentfulPaintAvarage",
    width: 180,
    scopedSlots: { customRender: "largestContentfulPaintAvarage" },
  },
  {
    title: "最大内容绘制中位数",
    dataIndex: "largestContentfulPaintMedian",
    key: "largestContentfulPaintMedian",
    width: 180,
    scopedSlots: { customRender: "largestContentfulPaintMedian" },
  },

  // {
  //   title: "首次有效绘制平均值",
  //   dataIndex: "firstMeaningfulPaintAvarage",
  //   key: "firstMeaningfulPaintAvarage",
  //   width: 180
  // },
  // {
  //   title: "首次有效绘制中位数",
  //   dataIndex: "firstMeaningfulPaintMedian",
  //   key: "firstMeaningfulPaintMedian",
  //   width: 180
  // },

  {
    title: "dom加载平均值",
    dataIndex: "domContentLoadedAvarage",
    key: "domContentLoadedAvarage",
    width: 150,
    scopedSlots: { customRender: "domContentLoadedAvarage" },
  },
  {
    title: "dom加载中位数",
    dataIndex: "domContentLoadedMedian",
    key: "domContentLoadedMedian",
    width: 150,
    scopedSlots: { customRender: "domContentLoadedMedian" },
  },

  {
    title: "资源加载平均值",
    dataIndex: "resourceLoadedAvarage",
    key: "resourceLoadedAvarage",
    width: 150,
    scopedSlots: { customRender: "resourceLoadedAvarage" },
  },
  {
    title: "资源加载中位数",
    dataIndex: "resourceLoadedMedian",
    key: "resourceLoadedMedian",
    width: 150,
    scopedSlots: { customRender: "resourceLoadedMedian" },
  },

  {
    title: "",
    key: "operation",
    fixed: "right",
    width: 100,
    scopedSlots: { customRender: "action" },
  },
];

export default {
  name: "front",
  props: {},
  data() {
    return {
      data: [],
      columns,
      date: getNextDay(-1),
      pageVisible: false,
      record: {},
      statics: {},
      last: {},
      lastStatics: {},
      dayVisible: false,
      dayIndex: '',
    };
  },
  mounted() {
    this.$emit("on-key-init", this.$route.meta);

    this.getDayStatics();
    this.getPageStatics();
  },
  methods: {
    moment,
    getDayStatics() {
      axios
        .get("http://127.0.0.1:7001/getDayStatics?date=" + this.date)
        .then((rep) => {
          this.statics = rep.data.today[0] || {};
          this.last = rep.data.last[0] || {};
          this.last7Chart = rep.data.last7Chart || []
        });
    },
    getPageStatics() {
      axios
        .get("http://127.0.0.1:7001/getPageStatics?date=" + this.date)
        .then((rep) => {
          this.data = rep.data;
        });
    },
    
    onChange(date, dateString) {
      this.date = dateString;

      this.getDayStatics();
      this.getPageStatics();
    },
    onDetail(record) {
      let firstPaintChart = Object.values(JSON.parse(record.firstPaintChart));
      let firstContentfulPaintChart = Object.values(
        JSON.parse(record.firstContentfulPaintChart)
      );
      let largestContentfulPaintChart = Object.values(
        JSON.parse(record.largestContentfulPaintChart)
      );
      let domContentLoadedChart = Object.values(
        JSON.parse(record.domContentLoadedChart)
      );
      let resourceLoadedChart = Object.values(
        JSON.parse(record.resourceLoadedChart)
      );
      let chart1 = [
        "0.2s",
        "0.4s",
        "0.6s",
        "0.8s",
        "1s",
        "1.2s",
        "1.4s",
        "1.6s",
        "1.8s",
        "2s",
      ];

      let data1 = chart1.map((x, i) => {
        return {
          product: x,
          firstPaint: firstPaintChart[i],
          firstContentfulPaint: firstContentfulPaintChart[i],
          largestContentfulPaint: largestContentfulPaintChart[i],
        };
      });

      let chart2 = [
        "0.5s",
        "1s",
        "1.5s",
        "2s",
        "2.5s",
        "3s",
        "3.5s",
        "4s",
        "4.5s",
        "5",
      ];

      let data2 = chart2.map((x, i) => {
        return {
          product: x,
          domContentLoaded: domContentLoadedChart[i],
          resourceLoaded: resourceLoadedChart[i],
        };
      });

      this.record = record;
      this.pageVisible = true;
      this.$nextTick(() => {
        this.renderChart1(data1);
        this.renderChart2(data2);
      });
    },
    onChart(index) {
      this.dayVisible = true

      let chart = [
        addDays(this.date, -6),
        addDays(this.date, -5),
        addDays(this.date, -4),
        addDays(this.date, -3),
        addDays(this.date, -2),
        addDays(this.date, -1),
        this.date,
      ];

      let data = chart.map((x, i) => {
        let item = this.last7Chart.find(l => l.st_date === x);
        return {
          product: x,
          [index]: item ? item[index] : 0,
        };
      });

      console.log(data, this.last7Chart);

      this.$nextTick(() => {
        this.renderChart3(data, index);
      });
    },

    renderChart1(data) {
      let EChart = echarts.init(document.getElementById("chart"));

      let option = {
        color: ["#8DC1A9", "#EA7F53", "#EEDD79"],
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: [
            "product",
            "firstPaint",
            "firstContentfulPaint",
            "largestContentfulPaint",
          ],
          source: data,
        },
        xAxis: { type: "category" },
        yAxis: {},
        series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
      };

      EChart.setOption(option);
    },
    renderChart2(data) {
      let EChart = echarts.init(document.getElementById("chart1"));

      let option = {
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: ["product", "domContentLoaded", "resourceLoaded"],
          source: data,
        },
        xAxis: { type: "category" },
        yAxis: {},
        series: [{ type: "bar" }, { type: "bar" }],
      };

      EChart.setOption(option);
    },
    renderChart3(data, index) {
      let EChart = echarts.init(document.getElementById("chart2"));

      let option = {
        color: ["#EEDD79"],
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: ["product", index],
          source: data,
        },
        xAxis: { type: "category" },
        yAxis: {},
        series: [{ type: "line", label: {
          normal: {
              color: '#42a1fe',
              show: true,
              position: 'top',
              formatter: function(v) {
                return parseFloat(v.data[index]).toFixed(2);
              },
          }
        } }],
      };

      EChart.setOption(option);
    },
  },
};
</script>

<style scoped>
.static-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.static {
  width: 124px;
}
.chart {
  display: flex;
  flex-direction: row;
}
</style>
