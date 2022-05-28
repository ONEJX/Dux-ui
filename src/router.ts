import {createWebHashHistory,createRouter} from 'vue-router'
import {h} from 'vue'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/docComponents/SwitchDemo.vue'
import Button from './components/docComponents/ButtonDemo.vue'
import Dialog from './components/docComponents/DialogDemo.vue'
import Tabs from './components/docComponents/TabsDemo.vue'
import DocIndex from './components/docComponents/DocIndex.vue'
import Markdown from './components/Markdown.vue'
const history = createWebHashHistory()

// const markdown = filename =>{ h(Markdown,{filename:`../markdown/${filename}.md`})}
const router = createRouter({
  history,
  routes:[
    {path:'/',component:Home},
    {path:'/doc',component:Doc,children:[
        {path:'',redirect:'/doc/introduce'},
        {path:'introduce',component:h(Markdown,{filename:`../markdown/introduce.md`,key:1})},
        {path:'install',component:h(Markdown,{filename:`../markdown/install.md`,key:2})},
        {path:'startUsing',component:h(Markdown,{filename:`../markdown/startUsing.md`,key:3})},
        {path:'switch',component:Switch},
        {path:'button',component:Button},
        {path:'dialog',component:Dialog},
        {path:'tabs',component:Tabs},
      ]}
  ]
})
export default router