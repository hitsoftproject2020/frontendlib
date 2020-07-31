<template>
    <!-- Default box -->
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">修改服务订单信息</h3>
        </div>
        <div class="box-body">
            <form  method="post" v-on:submit.prevent="modify()">
                <div class="form-group">
                    <label for="exampleInputEmail1">房客ID</label>
                    <input type="text" class="form-control" v-model="serviceorder.customer.cid" >
                    <small id="emailHelp" class="form-text text-muted"></small>
                </div>
				<div class="form-group">
				    <label for="exampleInputEmail1">服务ID</label>
				    <input type="text" class="form-control" v-model="serviceorder.service.sid" >
				    <small id="emailHelp" class="form-text text-muted"></small>
				</div>
				<div class="form-group">
				    <label for="exampleInputEmail1">数量</label>
				    <input type="text" class="form-control" v-model="serviceorder.serviceNum" >
				    <small id="emailHelp" class="form-text text-muted"></small>
				</div>
				<div class="form-group">
				    <label for="exampleInputEmail1">订单日期</label>
				    <input type="text" class="form-control" v-model="serviceorder.sodate" >
				    <small id="emailHelp" class="form-text text-muted"></small>
				</div>
				<div class="form-group">
				    <label for="exampleInputEmail1">订单状态</label>
				    <input type="text" class="form-control" v-model="serviceorder.sostate" >
				    <small id="emailHelp" class="form-text text-muted"></small>
				</div>
				<div class="form-group">
				    <label for="exampleInputEmail1">备注</label>
				    <input type="text" class="form-control" v-model="serviceorder.soremark" >
				    <small id="emailHelp" class="form-text text-muted"></small>
				</div>
     
                <button type="submit" class="btn btn-primary">提交</button>
                <router-link to="/serviceorder/list" class="btn btn-default">取消</router-link>
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
        name:"ServiceOrderModify",
        data(){
            return {
                serviceorder:{
                    customer:{
                    	cid:0
                    },
                    service:{
                    	sid:0
                    },
                    
                    serviceNum:0,
                    sodate:null,
                    sostate:"",
                    soremark:"",
					soid:0
                }
            };
        },
        created(){ //组件的创建生命周期函数
            let serviceorderId=this.$route.params.soid;
            this.getServiceOrder(serviceorderId);

        },
        methods:{
            getServiceOrder(soid){

                axios.get("http://localhost:8200/serviceorder/getbyno?no="+soid).then(result=>{
                    this.serviceorder=result.data.result;
                });
            },
            modify(){
                axios.post("http://localhost:8200/serviceorder/modify",this.serviceorder).then(result=>{
                    if(result.data.status=="OK"){
                        alert(result.data.message);
                        this.$router.push("/serviceorder/list"); //编程方式跳转到爱好列表组件
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
