export const list = [
    {
        title: {
            name: '盈立智投APP-中台',
            date: '2022.01 - 2022.05'
        },
        content: [
            {
                title: '项目介绍',
                children: [
                    '盈立智投APP中台（港美股交易APP中台）。使用qiankun 微前端架构，整合权限、证券、营销、交易等多个子应用；PM 可以使用中台管理、审核 客户的入金、交易等操作，并配置各种活动和营销策略。'
                ]
            },
            {
                title: '技术栈',
                children: [
                    '框架： Vue3 + Vuex + Vue-router + ElementUI + qiankun ；',
                    '构建、CI/CD ： webpack + babel + gitlab CI + SVN + jenkins + 腾讯云；',
                    '项目管理： Jira 、 Confluence ；'
                ]
            },
            {
                title: '工作和成就',
                children: [
                    '负责 qiankun 微前端架构设计；搭建营销项目、设计项目结构、代码规范等；',
                    '负责营销需求的评审、设计、排期、分工和开发，协调资源。把控DEV、SIT、UAT、PRO整体的时间；',
                    '负责营销中心、活动管理开发。带领1人，一个月从0 设计、开发、测试并发布、无延期；',
                    '负责公共组件的开发和抽离。对ElementUI 二次封装，抽离出10多个公共组件。'
                ]
            }
        ]
    },
    {
        title: {
            name: '盈立智投H5',
            date: '2021.08 - 2022.05'
        },
        content: [
            {
                title: '项目介绍',
                children: ['营销、账户模块H5页面开发迭代、公共组件的抽离。']
            },
            {
                title: '技术栈',
                children: [
                    '框架： Vue3 + Vuex + Vue-router + VantUI ；',
                    '构建、CI/CD ： webpack + babel + gitlab CI + SVN + jenkins + 腾讯云；',
                    '统计和监控：GA 、 神策；'
                ]
            },
            {
                title: '工作和成就',
                children: [
                    '负责 登录、注册、自定义弹窗 等公共组件的抽离 Hook ，100% 统一H5项目中相关逻辑的组件复用；',
                    '负责 奖励中心等 的开发和迭代，通过 JSBridge 和 APP、Electron 通讯；满足了APP、PC 的多端适配；',
                    '负责 实时日志监控项目（ nodejs+contab方案 ）， 实时监控 生产错误并通知企业微信，提高了错误、bug的修复率。'
                ]
            }
        ]
    },
    {
        title: {
            name: '我抢特斯拉活动H5',
            date: '2021.08 - 2021.12'
        },
        content: [
            {
                title: '项目介绍',
                children: [
                    '我抢特斯拉活动推广。实现登录注册、盈立豆任务、兑换、股票池、猜涨跌等功能。'
                ]
            },
            {
                title: '技术栈',
                children: [
                    '框架： React + React-router + redux ；',
                    '构建、CI/CD ：webpack + babel + gitlab CI + SVN + jenkins + 腾讯云；',
                    '统计和监控：GA 、 神策；'
                ]
            },
            {
                title: '工作和成就',
                children: [
                    '负责 react项目 的搭建，从0到1 完成 redux 数据结构、项目结构、代码规范 等的设计；',
                    '负责 我抢特斯拉活动页面的开发，一期、二期活动投放期间，吸引2000新用户注册，300人入金（金额>1亿港币）。'
                ]
            }
        ]
    },
    {
        title: {
            name: 'UP-Logs 日志检测工具',
            date: '2022.03 - 2022.04'
        },
        content: [
            {
                title: '项目介绍',
                children: [
                    '为了解决前端报错发现滞后的问题。采用 nodejs+corntab 的方案， 实时获取 ElasticSearch 日志，并通知企业微信群。'
                ]
            },
            {
                title: '技术栈',
                children: [
                    '框架：NodeJS 、 ElasticSearch 、Kibana；',
                    '构建、CI/CD ： Gitlab CI 、Crontab；'
                ]
            },
            {
                title: '工作和成就',
                children: [
                    '负责 实时日志监控方案的设计和开发。实现了 多条件（与、或、非）搜索、企业微信多接收人、实时检测等功能；',
                    '工具上线后，极大提高生产错误、bug 的修复率，减少了公司的损失、优化了用户体验。获得团队一致好评。'
                ]
            }
        ]
    }
]
