<template>
  <q-drawer show-if-above v-model="left" side="left" bordered>
    <div style="max-width: 351px; padding-right:-1px">
      <q-scroll-area
        :thumb-style="thumbStyle"
        :content-style="contentStyle"
        :content-active-style="contentActiveStyle"
        style="height: 100vh"
      >
        <img src="~assets/logo.png" alt="" style="height:50px; padding-left: 60px">
        <q-input
          v-model="search"
          debounce="200"
          filled
          placeholder="i-stack spec v3.0"
          hint="2020.03.23"
          style="margin-bottom: 6px"
        >
          <template v-slot:append>
            <q-icon name="search"/>
          </template>
        </q-input>
        <q-list bordered class="rounded-borders">
          <q-expansion-item class="item-father"
                            expand-separator
                            v-for="nav in navList"
                            :key="nav.title"
                            :icon="nav.icon"
                            :label="nav.title"
                            v-model="nav.defaultOpen">
            <q-item v-for="item in nav.subtitles"
                    class="item" :key="item.name"
                    :to="item.url"
                    active-class="item-active">{{item.name}}
            </q-item>
          </q-expansion-item>
        </q-list>

      </q-scroll-area>

    </div>
  </q-drawer>
</template>


<script>
  export default {
    name: 'LeftDrawer',
    data() {
      return {
        left: false,
        search: '',
        navList: [
          {
            title: 'I Design',
            icon: 'mail',
            defaultOpen: true,
            subtitles: [
              {
                name: '介绍',
                url: "/intro",
              },
              {
                name: '价值观',
                url: "/values",
              }
            ]
          },
          {
            title: '全局样式',
            icon: 'mail',
            defaultOpen: false,
            subtitles: [
              {
                name: '颜色',
                url: "/color",
              },
              {
                name: '布局',
                url: "/layout",
              },
              {
                name: '字体',
                url: "/font",
              },
              {
                name: '图标',
                url: "/icon",
              },
              {
                name: '动效',
                url: "/motion",
              },
              {
                name: '深色模式',
                url: "/darkmode",
              }
            ]
          },
          {
            title: '组件',
            icon: 'mail',
            defaultOpen: false,
            subtitles: [
              {
                name: '导航',
                url: "/nav",
              },
              {
                name: '输入框',
                url: "/input",
              },
              {
                name: '按钮',
                url: "/button",
              },
              {
                name: '选择器',
                url: "/select",
              },
              {
                name: '复选框',
                url: "/checkbox",
              },
              {
                name: '开关',
                url: "/toggle",
              },
              {
                name: '状态栏',
                url: "/status",
              },
              {
                name: '搜索框',
                url: "/search",
              },
              {
                name: '滑块',
                url: "/slider",
              },
              {
                name: '日期选择器',
                url: "/date",
              },
              {
                name: '步进器',
                url: "/stepper",
              },
              {
                name: '选项卡',
                url: "/tabs",
              },
              {
                name: '标签提示',
                url: "/tooltips",
              },
              {
                name: '穿梭框',
                url: "/transfer",
              },
              {
                name: '进度条',
                url: "/progress",
              },
              {
                name: '分页器',
                url: "/pagination",
              },
              {
                name: '弹框',
                url: "/messagebox",
              },
              {
                name: '通知',
                url: "/notification",
              }

            ]
          },
          {
            title: '云计算',
            icon: 'mail',
            defaultOpen: false,
            subtitles: [
              {
                name: '概况',
                url: "/situation",
              },
              {
                name: '管理云主机',
                url: "/manage_instance",
              },
              {
                name: '创建云主机',
                url: "/create_instance",
              }
            ]
          },
          {
            title: '云存储',
            icon: 'mail',
            defaultOpen: false,
            subtitles: [
              {
                name: '导航',
                url: "/nav",
              },
              {
                name: '字体',
                url: "/font",
              },
              {
                name: '图标',
                url: "/icon",
              }
            ]
          },
          {
            title: '云网络',
            icon: 'mail',
            defaultOpen: false,
            subtitles: [
              {
                name: '导航',
                url: "/nav",
              },
              {
                name: '字体',
                url: "/font",
              },
              {
                name: '图标',
                url: "/icon",
              }
            ]
          },
          {
            title: '增值服务',
            icon: 'mail',
            defaultOpen: false,
            subtitles: [
              {
                name: '容器服务',
                url: "/clusters",
              }
            ]
          }
        ]
      }
    },
    computed: {
      contentStyle() {
        return {
          backgroundColor: 'rgba(1,1,1,0)',
          color: '#8e8e8e'
        }
      },

      contentActiveStyle() {
        return {
          backgroundColor: 'rgba(1,1,1,0)',
          color: 'red'
        }
      },

      thumbStyle() {
        return {
          right: '2px',
          borderRadius: '10px',
          backgroundColor: 'rgba(0,0,0,0.2)',
          width: '5px',
          opacity: 0.75
        }
      }
    }
  }
</script>


<style lang="sass">
  .item-father
    color: rgba(#3e3e3e, 1)


    .item
      color: rgba(#8e8e8e, 1)
      line-height: 2.2em !important
      padding-left: 72px
      cursor: pointer

      &:hover
        cursor: pointer
        color: #1976D2

    .item-active
      color: rgba(#1976D2, 1) !important
      background-color: rgba(#1976D2, 0.01);
</style>
