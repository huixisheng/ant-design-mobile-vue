# ant-design-mobile-vue

> 入个坑，使用 Vue 实现 ant-design-mobile，希望对 Vue 、React 有更全新的认识。业界已经有很成熟的案例，该项目会借鉴 [ant-design-vue](https://github.com/vueComponent/ant-design-vue) 。

## TypeScript 支持

目前主要有 2 中方式

1. `Vue.extend()`
2. [kaorun343/vue-property-decorator](https://github.com/kaorun343/vue-property-decorator) / [vuejs/vue-class-component](https://github.com/vuejs/vue-class-component)

主要是在类型检测支持还不完善，或者要添加很多额外的代码。Vue 3.0 将采用 TypeScript 重构，相信以上问题都可以得到完美的解决。

更多可以阅读
- [TypeScript 支持 — Vue.js](https://cn.vuejs.org/v2/guide/typescript.html)
- [在 Vue 中使用 TypeScript 的一些思考（实践） - 云+社区 - 腾讯云](https://cloud.tencent.com/developer/article/1198800)
- [TypeScript 在 Vue 的实践 - 知乎](https://zhuanlan.zhihu.com/p/50179498)
- [Microsoft/TypeScript-Vue-Starter: A starter template for TypeScript and Vue with a detailed README describing how to use the two together.](https://github.com/Microsoft/TypeScript-Vue-Starter)
- [TypeScript 不适合在 vue 业务开发中使用吗？ - 知乎](https://www.zhihu.com/question/310485097/answer/591869966)