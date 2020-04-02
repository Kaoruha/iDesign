# 容器服务

容器服务是xxxx

## 创建集群模板

集群模板是创建集群的前置步骤，

### Step1.基本信息

创建集群模板第一步需要填写模板的基本信息。

![avatar](https://kaoruha.github.io/iDesign/idesign/src/statics/images/cluster_template_1.png)

模板名称：<font color=#E46161>「必填」</font>允许用户自定义集群模板的名称，<font color=#E46161>字符上限？？。</font>

Docker源：<font color=#119BE4>「选填」</font>允许用户自定义Docker源路径，默认填写研究院地址。

Kubernetes版本：<font color=#E46161>「必选」</font>允许用户选择 Kubernetes 版本，当前仅有一个，默认选中，当未来有多个版本时，默认选择一个最常用的版本。

Docker版本：<font color=#E46161>「必选」</font>允许用户选择 Docker 版本，当前仅有一个，默认选中，当未来有多个版本时，默认选择一个最常用的版本。

公开： 若勾选该模板将会跨项目显示，不勾选仅在当前项目显示。<font color=#E46161>默认关闭</font>

开启负载均衡：若勾选，创建集群时，平台会自动创建额外的Nginx虚拟机，自动配置集群各节点的负载均衡。<font color=#E46161>默认关闭</font>

### Step2.节点规格

![avatar](https://kaoruha.github.io/iDesign/idesign/src/statics/images/cluster_template_2.png)

主节点类型：<font color=#E46161>「必填」</font>允许用户从云平台云主机配置中选择主节点的虚拟机配置

计算节点类型：<font color=#E46161>「必填」</font>允许用户从云平台云主机配置中选择计算节点的虚拟机配置

存储驱动：#TODO

容器云硬盘大小：<font color=#E46161>「必填」</font>集群节点所使用的 Docker 数据盘大小。<font color=#E46161>最小10G</font>

### Step3.网络设置

![avatar](https://kaoruha.github.io/iDesign/idesign/src/statics/images/cluster_template_3_2.png)

外部网络：<font color=#E46161>「必填」</font>允许用户设置集群内部节点访问外部网络时所用的网络

固定网络：<font color=#119BE4>「选填」</font>允许用户在已创建的私有网络中，选择特定的私有网络，若不选择，平台在集群创建的时候会自动生成一个私有网络。

固定子网：<font color=#119BE4>「选填」</font>当选择了固定网络时，允许用户选择固定的子网，若不选择，平台在集群创建的时候会自动在选择的网络内创建一个子网。

DNS：<font color=#119BE4>「选填」</font>允许用户自定义集群内所有节点的 DNS 服务地址，默认为 114.114.114.114。

TLS：若取消勾选集群内所有节点将不使用 TLS 证书，可以提高集群的传输效率，但是通信保密性与数据完整性将会下降。<font color=#E46161>默认关闭</font>

分配浮动IP：若勾选，平台在集群创建时，会自动给每个节点分配浮动IP。<font color=#E46161>默认关闭</font>

### Step4.插件

![avatar](https://kaoruha.github.io/iDesign/idesign/src/statics/images/cluster_template_4_3.png)

kubeapps：若勾选则在Kubernetes集群中安装kubeapps插件，为集群添加「服务目录」功能。<font color=#E46161>默认关闭</font>

helm下载地址：<font color=#119BE4>「选填」</font>当kubeapps勾选时，允许用户设置helm下载地址。

容器下载地址：<font color=#119BE4>「选填」</font>允许用户设置容器下载地址。

监控：若勾选，平台在启动集群时，会自动安装 Prometheus 插件，为集群增加监控功能。<font color=#E46161>默认关闭</font>

用户管理：若勾选，平台在启动集群时，会自动安装 KeyCloak 插件，为集群增加用户管理功能。<font color=#E46161>默认关闭</font>

istio：若勾选，平台在启动集群时，会自动安装 istio 插件，为集群增加容器微服务治理功能。<font color=#E46161>默认关闭</font>

istio下载地址：<font color=#119BE4>「选填」</font>允许用户设置istio下载地址



## 创建集群

在拥有集群模板后，用户可以按照给定的模板创建集群。

![avatar](https://kaoruha.github.io/iDesign/idesign/src/statics/images/create_cluster_2.png)

### Step1.设置集群名称

用户可以为将要创建的集群命名，<font color=#E46161>字符上限255。#TODO</font>

### Step2.选择集群模板

通过下拉选择器，用户可以从自己创建的集群模板和平台公共的集群模板中选择模板。

如果没有合适的模板，用户可以通过点击「创建集群模板」，打开新的浏览器页面，进行创建模板操作。

### Step3.设置集群规模

用户可以按照需求，设置集群规模。

当内核、内存、硬盘资源超过平台配额时，给与告警提示，联系管理员。

如果模板勾选了获取浮动IP，每个主节点与计算节点都会试图去获取一个浮动IP，如果可用的浮动IP数量不够，允许用户通过点击「获取更多浮动IP」，打开新的浏览器页面，跳转至「获取浮动IP」页面。

### Step4.设置密钥对

<font color=#E46161>「必填」</font>用户可以选择特定的密钥对，<font color=#E46161>默认不选择</font>。已有密钥对如果不能满足用户需求，用户可以通过点击「新建密钥对」，打开新的浏览器页面，跳转至「新建密钥要对」页面。

### Step5.信息校对

表单右侧在选择了集群模板后，将模板信息展示在右侧，仅作展示用，<font color=#E46161>不可编辑</font>。确认信息无误后点击「创建集群」开始创建。
