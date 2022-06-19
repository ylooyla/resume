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
                    '盈立智投APP中台管理系统使用 qiankun 微前端架构，拆分权限、证券、营销、交易、账户等多个子应用；PM、运营可以通过中台管理、审核客户的入金、交易等操作，并配置活动和营销策略投放到APP和H5。'
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
                    '1. 负责 qiankun 微前端架构，从0到1 推动微前端实践，搭建营销、证券等项目、设计项目结构、代码规范等；',
                    '2. 负责中台性能优化方案文档输出和实施，比如：首屏性能优化，提升 fp 、 fcp 等指标，渲染性能提高 24%；',
                    '3. 基于 ElementUI 的公共组件库二次开发，发布 table 、 form 、 upload 等共用组件，权限审核、股票搜索等业务组件。比如： usmart-table组件 配置 JsonSchema 渲染页面，提升开发效率50%，代码量减少70%；',
                    '4. 重构 卡券管理、活动管理模块，重构父、子组件的数据交互逻辑，将父组件代码量减少80%。'
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
                    '1. 负责 登录、注册、分享、自定义弹窗等公共逻辑的抽离 Hook ，100% 统一H5登录、注册等组件的逻辑复用；',
                    '2. 负责 H5 性能优化方案，比如：离线包方案 提前定义需要加载的网页资源，提高APP内页面渲染速度；',
                    '3. 封装 Native（IOS/Android） 与 H5 的前端通信框架，制定公共的交互方法及编写规范，解决了Native与H5的协作效率低下的问题；',
                    '4. 负责 前端日志上报 SDK 设计、 Nodejs 开发日志告警方案，完善 前端日志监控流程，让监控可视化、数据化；提高了错误日志、bug的发现率，减少了公司的损失，获得团队一致好评。'
                ]
            }
        ]
    },
    // {
    //     title: {
    //         name: '我抢特斯拉活动H5',
    //         date: '2021.08 - 2021.09'
    //     },
    //     content: [
    //         {
    //             title: '项目介绍',
    //             children: [
    //                 '我抢特斯拉活动，领取盈立豆并猜涨跌，进行模拟下注、平仓操作。提供登录注册、线上开户、兑换、股票池、猜涨跌、好友邀请等功能。'
    //             ]
    //         },
    //         {
    //             title: '技术栈',
    //             children: [
    //                 '框架： React + React-router + redux ；',
    //                 '构建、CI/CD ：webpack + babel + gitlab CI + SVN + jenkins + 腾讯云；',
    //                 '统计和监控：GA 、 神策；'
    //             ]
    //         },
    //         {
    //             title: '工作和成就',
    //             children: [
    //                 '参与 react项目 的搭建，参与 redux 数据结构、项目结构、代码规范 等的设计；',
    //                 '负责 我抢特斯拉活动页面的开发，一期、二期活动投放期间，吸引2000新用户注册，300人入金（金额>1亿港币）。'
    //             ]
    //         }
    //     ]
    // },
    {
        title: {
            name: 'UMS IT云运维管理平台（中国移动）',
            date: '2020.07 - 2021.06'
        },
        content: [
            {
                title: '项目介绍',
                children: [
                    '中国移动Ums运维管理平台，集监控、告警、CMDB、流程、自动化、运营等6大模块，满足 一线、二线运维、产品、现场团队的运维和运营等综合需求。'
                ]
            },
            {
                title: '技术栈',
                children: [
                    '框架： Vue2 + Vuex + Vue-router + ElementUI ；',
                    '构建、CI/CD ：webpack + babel + gitlab CI + jenkins + IT私有云；'
                ]
            },
            {
                title: '工作和成就',
                children: [
                    '1. 负责 Webpack 优化，组件库按需引入，配置提取公共代码、自动分包和手动分包策略，项目总体积缩减50%；同时优化打包顺序，解决线上重复打包部分组件加载不稳定问题；',
                    '2. 负责 告警模块、自动化模块开发，使用 WebSocket ，对自动化任务执行日志进行实时反馈和进度显示；',
                    '3. 重构 Axios 的封装类，并设置拦截器统一处理错误及配置请求信息;',
                    '4. 使用 xlsx 、 saveAs 封装表格导出组件。'
                ]
            }
        ]
    }
]
