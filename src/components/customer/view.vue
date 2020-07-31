<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">查看房客信息</h3>
</div>
<div class="box-body">
	<form  method="post" >
	  <div class="form-group">
	  		<label for="exampleInputPassword1">房客ID</label>
	  		<span>{{customer.cid}}</span>
	  </div>
	  <div class="form-group">
		<label for="exampleInputEmail1">房客用户名</label>
		<span>{{customer.cnameString}}</span>
		
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">房客账号密码</label>
		<span>{{customer.cpassWord}}</span>
	  </div>
	  
	  <div class="form-group">
	  		<label for="exampleInputPassword1">房客真实姓名</label>
	  		<span>{{customer.crealName}}</span>
	  </div>
	  
	  <div class="form-group">
	  		<label for="exampleInputPassword1">房客性别</label>
	  		<span>{{customer.csex}}</span>
	  </div>
	  
	  <div class="form-group">
	  		<label for="exampleInputPassword1">房客身份证号码</label>
	  		<span>{{customer.cidno}}</span>
	  </div>
	  
	  <div class="form-group">
	  		<label for="exampleInputPassword1">房客电话号码</label>
	  		<span>{{customer.cphoneno}}</span>
	  </div>
	  <router-link to="/customer/list" class="btn btn-default">返回</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
<!-- /.box -->
</template>

<script>
	//部门查看组件
	export default {
		name:"CustomerView",
		data(){
			return {
				customer:{}
			};
		},
		props:{
			no:{required:true}			
		},
		created(){ //组件的创建生命周期函数
			this.getCustomer();
		},
		methods:{
			getCustomer(){
				this.axiosJSON.get("/customer/getbyno",{
					params:{
						cid:this.cid				
					}
				}).then(result=>{
					this.customer=result.data.result;
				});
			}
		}
	}
</script>

<style>
</style>
