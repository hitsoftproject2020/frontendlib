<template>
	<!-- Default box -->
	<div class="box">
	<div class="box-header with-border">
	  <h3 class="box-title">查看房间信息</h3>
	</div>
	<div class="box-body">
		<form  method="post" >
		  <div class="form-group">
			<label for="exampleInputEmail1">房间ID</label>
			<span>{{room.rid}}</span>
			
		  </div>
		  <div class="form-group">
			<label for="exampleInputPassword1">房间楼层</label>
			<span>{{room.floor}}</span>
		  </div>
		  
		  <div class="form-group">
		  		<label for="exampleInputPassword1">房间房型</label>
		  		<span>{{room.roomtype.tid}}</span>
		  </div>
		  
		  <div class="form-group">
		  		<label for="exampleInputPassword1">房间状态</label>
		  		<span>{{room.cstate}}</span>
		  </div>
		  
		  <div class="form-group">
		  		<label for="exampleInputPassword1">备注</label>
		  		<span>{{room.cremark}}</span>
		  </div>
		  
		  
		  <router-link to="/room/list" class="btn btn-default">返回</router-link>
		</form>
	
	</div>
	<!-- /.box-body -->
	</div>
	<!-- /.box -->
</template>

<script>
	//查看组件
	export default {
		name:"RoomView",
		data(){
			return {
				room:{
					floor:0,
					roomtype:{
						tid:0
					}
					
				}
			};
		},
		props:{
			no:{required:true}			
		},
		created(){ //组件的创建生命周期函数
			this.getRoom();
		},
		methods:{
			getRoom(){
				this.axiosJSON.get("/room/getbyno",{
					params:{
						rid:this.rid				
					}
				}).then(result=>{
					this.room=result.data.result;
				});
			}
		}
	}
</script>

<style>
</style>
