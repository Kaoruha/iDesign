<template>
  <q-drawer show-if-above v-model="left" side="left" bordered>
    <div style="max-width: 351px; padding-right:-1px">
      <q-scroll-area
        :thumb-style="thumbStyle"
        :content-style="contentStyle"
        :content-active-style="contentActiveStyle"
        style="height: 100vh;"
      >
        <div class="title">
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
        </div>

        <q-list bordered class="rounded-borders nav_list">
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
                name: '修订记录',
                url: "/history",
              },
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
                url: "/dark_mode",
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
                url: "/message_box",
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
                name: '创建云主机',
                url: "/create_instance",
              },
              {
                name: '云主机管理',
                url: "/manage_instance",
              },
              {
                name: '镜像',
                url: "/images",
              },
              {
                name: '密钥对',
                url: "/keys",
              }
            ]
          },
          {
            title: '云硬盘',
            icon: 'mail',
            defaultOpen: false,
            subtitles: [
              {
                name: '创建云硬盘',
                url: "/create_volumes",
              },
              {
                name: '云硬盘管理',
                url: "/manage_volumes",
              },
              {
                name: '备份',
                url: "/back_up",
              },
              {
                name: '快照',
                url: "/snapshot",
              },
              {
                name: '快照策略',
                url: "/snapshot_strategy",
              }
            ]
          },
          {
            title: '云网络',
            icon: 'mail',
            defaultOpen: false,
            subtitles: [
              {
                name: '网络拓扑',
                url: "/network_topology",
              },
              {
                name: '创建云网络',
                url: "/create_network",
              },
              {
                name: '云网络管理',
                url: "/manage_network",
              },
              {
                name: '路由',
                url: "/router",
              },
              {
                name: '安全组',
                url: "/security_groups",
              },
              {
                name: '浮动IP',
                url: "/floating_ips",
              },
              {
                name: '负载均衡',
                url: "/load_balance",
              },
              {
                name: '网络限速',
                url: "/network_qos",
              },
              {
                name: '防火墙',
                url: "/firewalls",
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
              },
              {
                name: '对象存储',
                url: "/containers",
              },
              {
                name: '数据处理',
                url: "/data_processing",
              },
              {
                name: '资源编排',
                url: "/resource_arrangement",
              },
              {
                name: '应用目录',
                url: "/catalog",
              },
              {
                name: '数据库',
                url: "/databases",
              },
              {
                name: '运维工具',
                url: "/orders",
              },
            ]
          },
          {
            title: '平台管理',
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
    background-color: rgba(#1976D2, 0.01)

  .title
    position: fixed
    background-color: rgba(#FFFFFF, 1)
    z-index: 1
    height: 140px
    width: 100%

  .nav_list
    margin: 140px 0 160px
</style>
