<template>
	<!-- Default box -->
	<div class="box">
	<div class="box-header with-border">
	  <h3 class="box-title">查看房型信息</h3>
	</div>
	<div class="box-body">
		<form  method="post" >
		  <div class="form-group">
			<label for="exampleInputEmail1">房型ID</label>
			<span>{{roomtype.tid}}</span>
			
		  </div>
		  <div class="form-group">
			<label for="exampleInputPassword1">房型名称</label>
			<span>{{roomtype.tname}}</span>
		  </div>
		  
		  <div class="form-group">
		  		<label for="exampleInputPassword1">房型价格</label>
		  		<span>{{roomtype.tprice}}</span>
		  </div>
		  
		  <div class="form-group">
		  		<label for="exampleInputPassword1">房型床位数</label>
		  		<span>{{roomtype.bednum}}</span>
		  </div>
		  
		  
		  
		  <div class="form-group">
		  		<label for="exampleInputPassword1">备注</label>
		  		<span>{{roomtype.tremark}}</span>
		  </div>
		  
		  
		  
		  
		  <router-link to="/roomtype/list" class="btn btn-default">返回</router-link>
		</form>
	
	</div>
	<!-- /.box-body -->
	</div>
	<!-- /.box -->
</template>

<script>
	//查看组件
	export default {
		name:"RoomTypeView",
		data(){
			return {
				roomtype:{}
			};
		},
		props:{
			tid:{required:true}			
		},
		created(){ //组件的创建生命周期函数
			this.getRoomType();
		},
		methods:{
			getRoomType(){
				this.axiosJSON.get("/roomtype/getbyno",{
					params:{
						tid:this.tid				
					}
				}).then(result=>{
					this.roomtype=result.data.result;
				});
			}
		}
	}
</script>

<style>
</style>
