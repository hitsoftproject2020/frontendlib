<template>
	<!-- Default box -->
	      <div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">增加房间订单</h3>

	        </div>
	        <div class="box-body">
	       	  <form method="post" v-on:submit.prevent="add()">
				  <div class="form-group">
				    <label for="exampleInputPassword1">预定日期</label>
				    <input type="text" class="form-control" v-model="roomorder.rodate">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">房客ID</label>
				    <input type="text" class="form-control" v-model="roomorder.customer.cid">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">房间ID</label>
				    <input type="text" class="form-control" v-model="roomorder.room.rid">
				  </div>
				  <button type="submit" class="btn btn-primary">提交</button>
				  <a href="/roomorder/list" class="btn btn-default">取消</a>
				</form>

	        </div>
	        <!-- /.box-body -->
	      </div>
	      <!-- /.box -->

</template>

<script>
	import axios from "axios";
	export default {
		name:"RoomOrderAdd",
		data(){
			return {
				roomorder:{
					rodate:null,
					customer:{
						cid:0
					},
					room:{
						rid:0
					}
					
				}
			};
		},
		methods:{
			add(){
				axios.post("http://localhost:8200/roomorder/add",this.roomorder).then(result=>{
					if(result.data.status=="OK"){
						alert(result.data.message);
						this.$router.push("/roomorder/list"); //编程方式跳转到部门列表组件
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
