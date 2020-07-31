<template>
	<!-- Default box -->
	<div class="box">
	<div class="box-header with-border">
	  <h3 class="box-title">查看服务订单信息</h3>
	</div>
	<div class="box-body">
		<form  method="post" >
		  <div class="form-group">
			<label for="exampleInputEmail1">订单ID</label>
			<span>{{serviceorder.soid}}</span>
			
		  </div>
		  <div class="form-group">
			<label for="exampleInputPassword1">房客ID</label>
			<span>{{serviceorder.customer.cid}}</span>
		  </div>
		  
		  <div class="form-group">
		  		<label for="exampleInputPassword1">服务ID</label>
		  		<span>{{serviceorder.service.sid}}</span>
		  </div>
		  
		  <div class="form-group">
		  		<label for="exampleInputPassword1">数量</label>
		  		<span>{{serviceorder.serviceNum}}</span>
		  </div>
		  
		  <div class="form-group">
		  		<label for="exampleInputPassword1">订单日期</label>
		  		<span>{{serviceorder.sodate}}</span>
		  </div>
		  
		  <div class="form-group">
		  		<label for="exampleInputPassword1">订单状态</label>
		  		<span>{{serviceorder.sostate}}</span>
		  </div>
		  
		  <div class="form-group">
		  		<label for="exampleInputPassword1">备注</label>
		  		<span>{{serviceorder.soremark}}</span>
		  </div>
		  
		  
		  
		  
		  <router-link to="/serviceorder/list" class="btn btn-default">返回</router-link>
		</form>
	
	</div>
	<!-- /.box-body -->
	</div>
	<!-- /.box -->
</template>

<script>
	//查看组件
	export default {
		name:"ServiceOrderView",
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
					soremark:""
				}
			};
		},
		props:{
			soid:{required:true}			
		},
		created(){ //组件的创建生命周期函数
			this.getServiceOrder();
		},
		methods:{
			getServiceOrder(){
				this.axiosJSON.get("/serviceorder/getbyno",{
					params:{
						soid:this.soid				
					}
				}).then(result=>{
					this.serviceorder=result.data.result;
				});
			}
		}
	}
</script>

<style>
</style>
