export const list = [
    {
        title: {
            name: '盈立智投-SG中台',
            date: '2022.01 - 2022.05'
        },
        content: [
            {
                title: '项目介绍',
                children: [
                    '盈立智投APP中台管理系统（港美股交易APP中台）。使用qiankun 微前端架构，整合权限、证券、营销、交易等多个子应用；PM、运营可以通过中台管理、审核客户的入金、交易等操作，并配置活动和营销策略投放到APP和H5。'
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
                    '负责 qiankun 微前端架构设计，从0到1 推动微前端实践，搭建营销、证券等项目、设计项目结构、代码规范等；',
                    '负责中台性能优化方案文档输出和实施，比如：首屏性能优化，提升 fp 、 fcp 等指标，渲染性能提高 24%；',
                    '负责 ElementUI 公共组件的二次开发，封装出10多个公共组件，比如： usmart-table组件 实现了通过配置JSON渲染页面，提升开发效率50%，代码量减少70%；',
                    '负责卡券管理、活动管理开发，带领1人，一个月从0 设计、开发、测试并发布、无延期。'
                ]
            }
        ]
    },
    {
        title: {
            name: '盈立智投APP-H5',
            date: '2021.09 - 2022.01'
        },
        content: [
            {
                title: '项目介绍',
                children: [
                    '盈立智投APP 为全球投资者提供美股、港股、A股、ETF、共同基金等品类的投资交易服务。负责 H5 项目搭建、方案设计和开发。'
                ]
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
                    '负责 登录、注册、分享、自定义弹窗 等公共组件的抽离 Hook ，100% 统一H5项目中相关的逻辑复用；',
                    '负责 H5 性能优化方案文档输出和实施，比如：结合 prefeatch、preload 首屏做到秒级渲染；',
                    '负责 奖励中心、个人中心等 的开发，通过 JSBridge 和 APP、Electron 通讯，满足了APP、PC客户端 的多端适配；',
                    '推动 前端线上错误收集报警系统的使用， 实时监控 生产错误并通知企业微信，提高了错误、bug的修复率。'
                ]
            }
        ]
    },
    {
        title: {
            name: '我抢特斯拉活动H5',
            date: '2021.08 - 2021.09'
        },
        content: [
            {
                title: '项目介绍',
                children: [
                    '我抢特斯拉活动，领取盈立豆并猜涨跌，进行模拟下注、平仓操作。提供登录注册、线上开户、兑换、股票池、猜涨跌、好友邀请等功能。'
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
                    '参与 react项目 的搭建，参与 redux 数据结构、项目结构、代码规范 等的设计；',
                    '负责 我抢特斯拉活动页面的开发，一期、二期活动投放期间，吸引2000新用户注册，300人入金（金额>1亿港币）。'
                ]
            }
        ]
    },
    {
        title: {
            name: 'UP-Logs 日志检测工具',
            date: '2021.07 - 2021.08'
        },
        content: [
            {
                title: '项目介绍',
                children: [
                    '为了解决前端报错、bug 发现不及时的问题。采用 nodejs+corntab 的方案， 实时获取 ElasticSearch 前端错误日志，并通知企业微信群。'
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
                    '负责 实时日志监控方案的设计和开发。对接 ElasticSearch API 多条件搜索、企业微信多接收人、实时检测等功能；',
                    '推动 前端线上错误收集报警系统的使用，让监控可视化、数据化，极大提高生产错误、bug 的发现率，减少了公司的损失、优化了用户体验。获得团队一致好评。'
                ]
            }
        ]
    }
]
