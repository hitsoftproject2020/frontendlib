<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">修改房客信息</h3>
</div>
<div class="box-body">
  <form  method="post" v-on:submit.prevent="modify()">
	  <div class="form-group">
	  		<label for="exampleInputEmail1">房客用户名</label>
	  		<input type="text" class="form-control" v-model="customer.cnameString"  >
	  		<small id="emailHelp" class="form-text text-muted"></small>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">房客账号密码</label>
	  		<input type="text" class="form-control" v-model="customer.cpassWord" >
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">房客真实姓名</label>
	  		<input type="text" class="form-control" v-model="customer.crealName" >
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">房客性别</label>
	  		<input type="text" class="form-control" v-model="customer.csex" >
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">房客身份证号码</label>
	  		<input type="text" class="form-control" v-model="customer.cidno" >
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">房客电话号码</label>
	  		<input type="text" class="form-control" v-model="customer.cphoneno" >
	  </div>
	  <button type="submit" class="btn btn-primary">提交</button>
	 <router-link to="/customer/list" class="btn btn-default">取消</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
<!-- /.box -->
</template>

<script>
	//import axios from "axios";
	//修改组件
	export default {
		name:"CustomerModify",
		data(){
			return {
				customer:{
					cnameString:"",
					cpassWord:"",
					crealName:"",
					csex:"",
					cidno:"",
					cphoneno:"",
					cid:0
				}
			};
		},
		created(){ //组件的创建生命周期函数
			let customerId=this.$route.params.cid;
			this.getCustomer(customerId);
			
		},
		methods:{
			getCustomer(cid){
				
				this.axiosJSON.get("/customer/getbyno?no="+cid).then(result=>{
					this.customer=result.data.result;
				});
			},
			modify(){
				this.axiosJSON.post("/customer/modify",this.customer).then(result=>{
					if(result.data.status=="OK"){
						alert(result.data.message);
						this.$router.push("/customer/list"); //编程方式跳转到列表组件
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
