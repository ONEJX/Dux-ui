<template>
  <div class="layout">
  <TopNav class="nav" toggle-nav bd="1px solid #F1F1F1"/>
  <div class="content">
    <aside v-if="asideVisible">
      <h2>开发指南</h2>
      <ol>
        <li><router-link to="/doc/introduce">介绍</router-link></li>
        <li><router-link to="/doc/install">安装</router-link></li>
        <li><router-link to="/doc/startUsing">快速使用</router-link></li>
      </ol>
      <h2>组件</h2>
      <ol>
        <li>
          <router-link to="/doc/switch">Switch 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/button">Button 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tssss 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">&nbsp;&nbsp;</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">&nbsp;&nbsp;</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">&nbsp;&nbsp;</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">&nbsp;&nbsp;</router-link>
        </li>
      </ol>
    </aside>
    <main @click="toggleAside">
      <router-view/>
    </main>
  </div>
  </div>
</template>

<script lang="ts">
  import {inject,Ref} from 'vue'
	import TopNav from "../components/TopNav.vue";

	export default {
		name: 'Doc',
    components:{TopNav,},
    setup(){
		  const asideVisible = inject<Ref<boolean>>('xxx')
      const screenWidth = document.body.clientWidth
      const toggleAside = ()=>{
		    if(asideVisible.value & screenWidth<= 800){
          asideVisible.value = false
        }
      }
      return {asideVisible,toggleAside}
    }
	}
</script>

<style lang="scss">
  ::-webkit-scrollbar {
    width:0;
  }
  .layout {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 75%;
    margin: 0 auto;
    @media (max-width: 800px) {
      width: 100%;
      margin: 0;
    }
    > .nav {
      flex-shrink: 0;
    }
    > .content {
      flex-grow: 1;
      padding-left: 256px;
      @media (max-width: 800px) {
        padding-left: 0;
      }
    }
  }
  .content {
    display: flex;
    > aside {
      flex-shrink: 0;
    }
    > main {
      flex-grow: 1;
      padding: 16px;
    }
  }
  aside {
    width: 250px;
    padding: 20px;
    position: fixed;
    top:60px;
    left: 11%;
    z-index: 1;
    height: 100vh;
    overflow: auto;
    @media (max-width: 800px) {
      left: 0;
    }
    &::-webkit-scrollbar{
      width: 5px;
      height: 5px;
      display: none;
    }
    &::-webkit-scrollbar-thumb{
      border-radius: 3px;
      -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
      background: rgba(0,0,0,0.2);
      scrollbar-arrow-color: #898989;
    }
    &::-webkit-scrollbar-track{
      -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
      border-radius: 0;
      background: #F1F1F1;
    }
    &:hover::-webkit-scrollbar{
      display: inline-block;
    }
    @media (max-width: 800px) {
      background: #F9F9F9;
    }
    > h2 {
      margin-bottom: 4px;
    }
    > ol {
      > li {
        padding: 10px 0;
        >a{
          &:hover{
            display: block;
            color: #409eff;
            border-bottom: 0;
          }
          &.router-link-active{
            color: #409eff;
          }
        }
        }
      }
    }
  main {
    overflow: auto;
    margin-top: 60px;
  }
</style>