<template>
    <!-- Default box -->
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">修改服务信息</h3>
        </div>
        <div class="box-body">
            <form  method="post" v-on:submit.prevent="modify()">
                <div class="form-group">
                    <label for="exampleInputEmail1">服务名称</label>
                    <input type="text" class="form-control" v-model="service.sname" >
                    <small id="emailHelp" class="form-text text-muted"></small>
                </div>
				<div class="form-group">
				    <label for="exampleInputEmail1">服务价格</label>
				    <input type="text" class="form-control" v-model="service.sprice" >
				    <small id="emailHelp" class="form-text text-muted"></small>
				</div>
                <div class="form-group">
                    <label for="exampleInputPassword1">备注</label>
                    <input type="text" class="form-control" v-model="roomtype.tremark">
                </div>
                <button type="submit" class="btn btn-primary">提交</button>
                <router-link to="/service/list" class="btn btn-default">取消</router-link>
            </form>

        </div>
        <!-- /.box-body -->
    </div>
    <!-- /.box -->
</template>

<script>
    import axios from "axios";
    //部门修改组件
    export default {
        name:"ServiceModify",
        data(){
            return {
                service:{
                    sname:"",
                    sprice:0,
					sid:0
                }
            };
        },
        created(){ //组件的创建生命周期函数
            let serviceId=this.$route.params.sid;
            this.getService(serviceId);

        },
        methods:{
            getService(sid){

                axios.get("http://localhost:8200/service/getbyno?no="+sid).then(result=>{
                    this.service=result.data.result;
                });
            },
            modify(){
                axios.post("http://localhost:8200/service/modify",this.service).then(result=>{
                    if(result.data.status=="OK"){
                        alert(result.data.message);
                        this.$router.push("/service/list"); //编程方式跳转到爱好列表组件
                    }
                    else{
                        alert(result.data.message);
                    }
                });
            }
        }
    }
</script>

<style>
</style>
