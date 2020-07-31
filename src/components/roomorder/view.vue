<template>
	<!-- Default box -->
	<div class="box">
	<div class="box-header with-border">
	  <h3 class="box-title">查看房间订单信息</h3>
	</div>
	<div class="box-body">
		<form  method="post" >
		  <div class="form-group">
			<label for="exampleInputEmail1">订单ID</label>
			<span>{{roomorder.roid}}</span>
			
		  </div>
		  <div class="form-group">
			<label for="exampleInputPassword1">房客ID</label>
			<span>{{roomorder.cid}}</span>
		  </div>
		  
		  <div class="form-group">
		  		<label for="exampleInputPassword1">房间ID</label>
		  		<span>{{roomorder.room.rid}}</span>
		  </div>
		  
		  <div class="form-group">
		  		<label for="exampleInputPassword1">预定日期</label>
		  		<span>{{roomorder.rodate}}</span>
		  </div>
		  
		  <div class="form-group">
		  		<label for="exampleInputPassword1">入住日期</label>
		  		<span>{{roomorder.checkinDate}}</span>
		  </div>
		  
		  <div class="form-group">
		  		<label for="exampleInputPassword1">离开日期</label>
		  		<span>{{roomorder.checkoutDate}}</span>
		  </div>
		  
		  <div class="form-group">
		  		<label for="exampleInputPassword1">订单状态</label>
		  		<span>{{roomorder.rostate}}</span>
		  </div>
		  
		  <div class="form-group">
		  		<label for="exampleInputPassword1">备注</label>
		  		<span>{{roomorder.roremark}}</span>
		  </div>
		  
		  
		  <router-link to="/roomorder/list" class="btn btn-default">返回</router-link>
		</form>
	
	</div>
	<!-- /.box-body -->
	</div>
	<!-- /.box -->
</template>

<script>
	//查看组件
	export default {
		name:"RoomOrderView",
		data(){
			return {
				roomorder:{
					rodate:null,
					customer:{
						cid:0,
					},
					room:{
						rid:0
					}
					
				}
			};
		},
		props:{
			roid:{required:true}			
		},
		created(){ //组件的创建生命周期函数
			this.getRoomOrder();
		},
		methods:{
			getRoomOrder(){
				this.axiosJSON.get("/roomorder/getbyno",{
					params:{
						roid:this.roid				
					}
				}).then(result=>{
					this.roomorder=result.data.result;
				});
			}
		}
	}
</script>

<style>
</style>

