<template>
	<!-- Default box -->
	<div class="box">
	<div class="box-header with-border">
	  <h3 class="box-title">查看服务信息</h3>
	</div>
	<div class="box-body">
		<form  method="post" >
		  <div class="form-group">
			<label for="exampleInputEmail1">服务ID</label>
			<span>{{service.sid}}</span>
			
		  </div>
		  <div class="form-group">
			<label for="exampleInputPassword1">服务名称</label>
			<span>{{service.sname}}</span>
		  </div>
		  
		  <div class="form-group">
		  		<label for="exampleInputPassword1">服务价格</label>
		  		<span>{{service.sprice}}</span>
		  </div>
		  
		  
		  
		  
		  
		  
		  <router-link to="/service/list" class="btn btn-default">返回</router-link>
		</form>
	
	</div>
	<!-- /.box-body -->
	</div>
	<!-- /.box -->
</template>

<script>
	//查看组件
	export default {
		name:"ServiceView",
		data(){
			return {
				service:{}
			};
		},
		props:{
			sid:{required:true}			
		},
		created(){ //组件的创建生命周期函数
			this.getService();
		},
		methods:{
			getService(){
				this.axiosJSON.get("/service/getbyno",{
					params:{
						sid:this.sid				
					}
				}).then(result=>{
					this.service=result.data.result;
				});
			}
		}
	}
</script>

<style>
</style>
