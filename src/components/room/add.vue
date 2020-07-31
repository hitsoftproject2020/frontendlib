<template>
	<!-- Default box -->
	      <div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">增加房间</h3>

	        </div>
	        <div class="box-body">
	       	  <form method="post" v-on:submit.prevent="add()">
				  <div class="form-group">
				    <label for="exampleInputPassword1">房间楼层</label>
				    <input type="text" class="form-control" v-model="room.floor">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">房间房型</label>
				    <input type="text" class="form-control" v-model="room.roomtype.tid">
				  </div>
				  <button type="submit" class="btn btn-primary">提交</button>
				  <a href="/room/list" class="btn btn-default">取消</a>
				</form>

	        </div>
	        <!-- /.box-body -->
	      </div>
	      <!-- /.box -->

</template>

<script>
	import axios from "axios";
	export default {
		name:"RoomAdd",
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
		methods:{
			add(){
				axios.post("http://localhost:8200/room/add",this.room).then(result=>{
					if(result.data.status=="OK"){
						alert(result.data.message);
						this.$router.push("/room/list"); //编程方式跳转到部门列表组件
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
