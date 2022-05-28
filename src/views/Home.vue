<template>
  <div class="Layout">
    <div class="header">
      <TopNav bc="transparent"/>
      <div class="banner">
        <h1>Dux-UI</h1>
        <h2>一个基于VUE框架的UI库</h2>
        <p class="actions">
          <a>GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="footer">
      <div class="footer-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <div>
          <h2>基于Vue 3</h2>
          <p>使用了Vue3 Composition API</p>
        </div>
      </div>
      <div class="footer-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-typescript"></use>
        </svg>
        <div>
          <h2>基于TypeScript</h2>
          <p>源代码采用TypeScript书写</p>
        </div>
      </div>
      <div class="footer-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-light"></use>
        </svg>
        <div>
          <h2>代码易读</h2>
          <p>每个组件的源代码都简洁易懂</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
	import TopNav from "../components/TopNav.vue";

	export default {
		name: 'Home',
    components:{TopNav,}
	}
</script>

<style scoped lang="scss">
  .Layout{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    > .header{
      width: 100vw;
      height: 55vh;
      background: linear-gradient(139deg, rgba(2,0,36,1) 0%, rgba(153,208,210,1) 0%, rgba(227,255,253,1) 100%);
      clip-path: ellipse(80% 60% at 50% 40%);
      > .banner{
        color:#1ea19b;
        padding-top: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        >.actions{
          margin-top: 30px;
          >a{
            margin:0 16px;
            background: #19b5ba;
            color:#fff;
            $h: 28px;
            height: $h;
            line-height: $h;
            border-radius: $h/4;
            padding: 10px 24px;
            &:hover{
              border-bottom: none;
              background: #1ac1c6;
            }
          }
        }
      }
    }
    > .footer{
      width: 100vw;
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 100px;
      flex-wrap: wrap;
      @media (max-width: 800px) {
        padding-bottom: 60px;
        flex-direction: column;
      }
      >.footer-icon{
        width: 100px;
        margin: 0 5em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media (max-width: 800px) {
          width: 50%;
          height: 80px;
          flex-direction: row;
        }
        >svg{
          width: 64px;
          height: 64px;
        }
        >div{
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-top: 10px;
          >h2{
            white-space: nowrap;
          }
          >p{
            white-space: nowrap;
            margin-top: 5px;
          }
        }
      }
    }
  }
</style>