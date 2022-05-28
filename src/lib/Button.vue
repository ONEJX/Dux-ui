<template>
    <button class="dux-button" :class="classes" :disabled="disabled">
      <span v-if="loading"></span>
      <slot/>
    </button>
</template>

<script lang="ts">
  import {computed} from 'vue'
	export default {
		name: 'Button',
    props:{
		  theme:{
		    type:String,
        default:'button'
      },
      size:{
		    type:String,
        default: 'normal'
      },
      level:{
		    type:String,
        default:'ordinary'
      },
      disabled:{
		    type:Boolean,
        default:false
      },
      loading:{
        type:Boolean,
        default:false
      }
    },
    setup(props){
		  const {theme,size,level} = props
		  const classes = computed(()=>{
		    return [`dux-theme-${theme}`,`dux-size-${size}`,`dux-level-${level}`]
      })
      return{classes}
    }
	}
</script>

<style lang="scss">
.dux-button {//初始化类
  padding: 10px 20px;
  margin-right: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  white-space: nowrap;
  background: white;
  box-shadow: 0 1px 0 fade_out(black, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #96989A;
  
  &:hover, &:focus {
    cursor: pointer;
    color: #409eff;
  }
  
  &:focus {
    outline: none;
  }
  
  &.dux-theme-text {//初始化类 同时拥有 本文按钮类
    border-color: transparent;
    box-shadow: none;
    color: #40a9ff;
    
    &:hover, &:focus {
      background: darken(white, 5%);
    }
  }
  
  &.dux-theme-link {//初始化类 同时拥有 链接按钮类
    border-color: transparent;
    box-shadow: none;
  }
  
  &.dux-theme-button, &.dux-theme-text, &.dux-theme-link {//初始化类 同时拥有 任意按钮类 同时拥有 字体类
    &.dux-size-normal {
      font-size: 16px;
    }
  
    &.dux-size-big {
      font-size: 24px;
    }
  
    &.dux-size-small {
      font-size: 12px;
    }
  }
  
  &.dux-level-main {
    &.dux-theme-button {//初始化类 同时拥有  main等级类 同时拥有 普通按钮类
      background: #409eff;
      color: white;
      &:hover{
        background: #66b1ff;;
      }
    }
  
    &.dux-theme-text {//同时拥有 文本按钮类
      background: transparent;
      color: #40a9ff;
    }
  
    &.dux-theme-link {//同时拥有 链接按钮类
      background: transparent;
    }
  }
  
  &.dux-level-ordinary {
    &.dux-theme-button {//初始化类 同时拥有  main等级类 同时拥有 普通按钮类
      &:hover{
        border-color: #66b1ff;
      }
    }
    &.dux-theme-text {//初始化类 同时拥有  ordinary等级类 同时拥有 文本按钮类
      background: transparent;
      color: #40a9ff;
    }
  
    &.dux-theme-link {//同时拥有 链接按钮类
      background: transparent;
    }
  }
  
  &.dux-level-danger {//初始化类 同时拥有  danger等级类 同时拥有 普通按钮
    &.dux-theme-button {
      background: #FF1802;
      color: white;
      &:hover{
        border-color: gray;
      }
    }
    
    &.dux-theme-text {//同时拥有 文本按钮类
      background: transparent;
      color: #FF1802;
    }
    
    &.dux-theme-link {//同时拥有 链接按钮类
      background: transparent;
      color: #FF1802;
    }
  }
  &.dux-theme-button{
    &[disabled]{
      color: gray;
      cursor: not-allowed;
      &:hover{
        border-color: gray;
      }
    }
  }
  &.dux-theme-text,&.dux-theme-link {//初始化类 同时拥有 任意按钮类 同时是 禁用属性
    &[disabled]{
      cursor: not-allowed;
      color: gray;
    }
  }
  >span{//加载按钮样式
    display: inline-block;
    width: 14px;
    height: 14px;
    border:2px solid #40a9ff ;
    margin-right: 5px;
    border-radius: 50%;
    border-right-color: transparent;
    animation: loading 1s ease infinite;
  }
  @keyframes loading {
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
  }
  
}
</style>