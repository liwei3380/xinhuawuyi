import Vue from 'vue'
import Router from 'vue-router'

const Page1 = r => require.ensure([], () => r(require('@/components/Page1')), 'page1')
const Page2 = r => require.ensure([], () => r(require('@/components/Page2')), 'page2')
const Page3 = r => require.ensure([], () => r(require('@/components/Page3')), 'page3')
const WorldMap = r => require.ensure([], () => r(require('@/components/WorldMap')), 'worldmap')
const Dazhou = r => require.ensure([], () => r(require('@/components/Dazhou')), 'dazhou')
const Roll = r => require.ensure([], () => r(require('@/components/Roll')), 'roll')
const Rollsucc = r => require.ensure([], () => r(require('@/components/Rollsucc')), 'rollsucc')
const Lingqu = r => require.ensure([], () => r(require('@/components/Lingqu')), 'lingqu')
const Rollfail = r => require.ensure([], () => r(require('@/components/Rollfail')), 'rollfail')
const Nochance = r => require.ensure([], () => r(require('@/components/Nochance')), 'nochance')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Page1
    },{
      path: '/page2',
      component: Page2
    },{
      path: '/page3',
      component: Page3
    },{
      path: '/worldmap',
      component: WorldMap
    },{
      path: '/dazhou/:id',
      component: Dazhou
    },{
      path: '/roll',
      component: Roll
    },{
      path: '/rollsucc',
      component: Rollsucc
    },{
      path: '/rollfail',
      component: Rollfail
    },{
      path: '/lingqu',
      component: Lingqu
    },{
      path: '/nochance',
      component: Nochance
    }
  ]
})
