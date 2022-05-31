import {createWebHashHistory,createRouter} from 'vue-router'
import {h} from 'vue'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/docComponents/SwitchDemo.vue'
import Button from './components/docComponents/ButtonDemo.vue'
import Dialog from './components/docComponents/DialogDemo.vue'
import Tabs from './components/docComponents/TabsDemo.vue'
import install from './markdown/install.md'
import introduce from './markdown/introduce.md'
import startUsing from './markdown/startUsing.md'
import Markdown from './components/Markdown.vue'
const history = createWebHashHistory()

const md = string => h(Markdown, { content: string, key: string })
const router = createRouter({
  history,
  routes:[
    {path:'/',component:Home},
    {path:'/doc',component:Doc,children:[
        {path:'',redirect:'/doc/introduce'},
        { path: "introduce", component: md(introduce) },
        { path: "startUsing", component: md(startUsing) },
        { path: "install", component: md(install) },
        {path:'switch',component:Switch},
        {path:'button',component:Button},
        {path:'dialog',component:Dialog},
        {path:'tabs',component:Tabs},
      ]}
  ]
})
export default router