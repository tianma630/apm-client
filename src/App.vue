<template>
  <a-layout id="app">
    <a-layout-sider class="sider" theme="dark">
      <div class="logo">性能平台</div>
      <a-menu
        theme="dark"
        mode="inline"
        :selected-keys="selectedKeys"
        :open-keys="openKeys"
        @openChange="onOpenChange"
      >
        <a-sub-menu :key="m.key" v-for="m in menus">
          <span slot="title"
            ><a-icon :type="m.type" /><span>{{ m.title }}</span></span
          >
          <a-menu-item :key="item.key" v-for="item in m.items">
            <router-link :to="item.to">
              <a-icon type="area-chart" /><span>{{ item.title }}</span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content class="content">
        <router-view @on-key-init="onKeyInit"></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      menus: [
        {
          key: "1",
          title: "Web",
          type: "chrome",
          items: [
            {
              key: "11",
              title: "h5 LoveStock",
              to: "/web/love-stock",
            },
            {
              key: "12",
              title: "h5 live",
              to: "/web/live",
            },
          ],
        },
        {
          key: "2",
          title: "Android",
          type: "android",
          items: [
            {
              key: "21",
              title: "安卓 LoveStock",
              to: "/android/love-stock",
            },
          ],
        },
        {
          key: "3",
          title: "iOS",
          type: "apple",
          items: [
            {
              key: "31",
              title: "ios LoveStock",
              to: "/ios/love-stock",
            },
          ],
        },
      ],
      selectedKeys: [],
      openKeys: [],
    };
  },
  mounted() {},
  methods: {
    onKeyInit(meta) {
      this.selectedKeys = meta.selectedKeys || [];
      this.openKeys = meta.openKeys || [];
    },

    onOpenChange(k) {
      this.openKeys = k.filter((x) => this.openKeys.indexOf(x) === -1);
    },
  },
};
</script>

<style>
#app .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#app .trigger:hover {
  color: #1890ff;
}

#app .logo {
  text-align: center;
  font-size: 20px;
  line-height: 48px;
  color: #FFF;
  /* border-bottom: 0.5px solid #eee; */
}
.sider {
  /* height: 100vh; */
  position: fixed;
}
.content {
  padding: 12px;
  background-color: #fff;
  margin-left: 8px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  height: 100vh;
}
content::-webkit-scrollbar {
  width: 0 !important;
}
</style>
