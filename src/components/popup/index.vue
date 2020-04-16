<template lang="pug">
    <div class="cover">   
        <a-result class="result" status="warning" :title="title" :subTitle="subTitle">
            <template v-slot:extra>         
            <a-button key="buy">{{button.cancel}}</a-button>
            <a-button type="primary" key="console">{{button.confirm}}</a-button>
            </template>
        </a-result>
    </div>  
</template>
<script>
export default {
    props:{
        title:"",
        subTitle:"",
        button:{
            cancel:'',
            confirm:''
        }
    },
    data(){
        return {
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .cover{
        position: fixed;
        background-color: rgba(0,0,0,0.5);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        .result{
          width: 320px;
          height: 270px;
          padding: 10px;
          background-color: #fff;
          position: fixed;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          margin: auto;
          border-radius: 4px;
        }
    }
</style>