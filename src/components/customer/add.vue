<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">增加房客</h3>
</div>
<div class="box-body">
	<form method="post" v-on:submit.prevent="add()" >
	  <div class="form-group">
		<label for="exampleInputEmail1">房客用户名</label>
		<input type="text" class="form-control" v-model="customer.cnameString" required >
		<small id="emailHelp" class="form-text text-muted"></small>
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">房客账号密码</label>
		<input type="text" class="form-control" v-model="customer.cpassWord" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">房客真实姓名</label>
	  		<input type="text" class="form-control" v-model="customer.crealName" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">房客性别</label>
	  		<input type="text" class="form-control" v-model="customer.csex" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">房客身份证号码</label>
	  		<input type="text" class="form-control" v-model="customer.cidno" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">房客电话号码</label>
	  		<input type="text" class="form-control" v-model="customer.cphoneno" required>
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
	//部门增加组件
	//import axios from "axios";
	export default {
		name:"CustomerAdd",
		data(){
			return {
				customer:{
					cnameString:"",
					cpassWord:"",
					crealName:"",
					csex:"",
					cidno:"",
					cphoneno:""
				}
			};
		},
		methods:{
			add(){
				this.axiosJSON.post("/customer/add",this.customer).then(result=>{
					if(result.data.status=="OK"){
						alert(result.data.message);
						this.$router.push("/customer/list"); //编程方式跳转到部门列表组件
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
