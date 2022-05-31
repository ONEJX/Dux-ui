<template>
  <template v-if="visible">
    <div class="dux-overlay" @click="close"></div>
    <div class="dux-dialog">
      <header>
        <span>{{title}}</span>
        <p class="dux-dialog-icon" @click="close">
          <span>X</span>
        </p>
      </header>
      <main>
        <slot/>
      </main>
      <footer>
        <Button level="main" @click="ok">确定</Button>
        <Button @click="cancel">取消</Button>
      </footer>
    </div>
  </template>
</template>

<script lang="ts">
  import Button from "./Button.vue"
	export default {
		name: 'Dialog',
    props:{
		  visible:{
		    type:Boolean,
        default:false
      },
      ok:{
		    type:Function,
      },
      cancel:{
		    type:Function,
      },
      title:{
		    type:String,
        default:'提示'
      }
    },
    components:{Button:Button},
    setup(props,context){
      const close = ()=>{
        context.emit('update:visible',false)
      }
      const ok = ()=>{
        if(props.ok && props.ok()!== false){
          close()
        }
      }
      const cancel = ()=>{
          context.emit('cancel')
          close()
      }
      return {close,ok,cancel}
    }
	}
</script>

<style lang="scss">
.dux-overlay{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #808080;
  opacity: 0.6;
}
  .dux-dialog{
    animation: xxx 0.5s linear reverse 1;
    border-radius: 5px;
    position: fixed;
    left: 35%;
    top: 10%;
    width: 30%;
    height: 27%;
    background: white;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    @media (max-width: 500px) {
      width:100%;
      height: 27%;
      left: 0;
      top: auto;
      bottom: 0;
      animation: yyy .4s ease 1;
    }
    >header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      >span{
        font-size: 18px;
        color:#303133;
        margin: 15px 0 0 20px;
      }
      >.dux-dialog-icon{
        display: flex;
        width: 24px;
        height: 24px;
        margin: 15px 10px 0 0;
        color:#303133;
        &:hover{
          color: #66b1ff;
          cursor: pointer;
        }
      }
    }
    >main{
      font-size: 17px;
      flex-grow: 1;
      line-height: 25px;
      margin-top: 20px;
      margin-left: 20px;
      overflow: hidden;
      color: #96989A;
    }
    >footer{
      display: flex;
      flex-direction: row-reverse;
      margin-bottom: 20px;
    }
  }
  @keyframes xxx {
    0%{
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }
@keyframes yyy {
  0%{
    bottom: -27%;
  }
  80%{
    bottom: 10%;
  }
  100%{
    bottom: 0;
  }
}
</style>