<template>
    <!-- Default box -->
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">修改房间信息</h3>
        </div>
        <div class="box-body">
            <form  method="post" v-on:submit.prevent="modify()">
                <div class="form-group">
                    <label for="exampleInputEmail1">房间状态</label>
                    <input type="text" class="form-control" v-model="room.rstate" >
                    <small id="emailHelp" class="form-text text-muted"></small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">备注</label>
                    <input type="text" class="form-control" v-model="room.rremark">
                </div>
                <button type="submit" class="btn btn-primary">提交</button>
                <router-link to="/room/list" class="btn btn-default">取消</router-link>
            </form>

        </div>
        <!-- /.box-body -->
    </div>
    <!-- /.box -->
</template>

<script>
    import axios from "axios";
    //部门修改组件
    export default {
        name:"RoomModify",
        data(){
            return {
                room:{
                    rstate:"",
                    rremark:"",
					rid:0
                }
            };
        },
        created(){ //组件的创建生命周期函数
            let roomId=this.$route.params.rid;
            this.getRoom(roomId);

        },
        methods:{
            getRoom(rid){

                axios.get("http://localhost:8200/room/getbyno?no="+rid).then(result=>{
                    this.room=result.data.result;
                });
            },
            modify(){
                axios.post("http://localhost:8200/room/modify",this.room).then(result=>{
                    if(result.data.status=="OK"){
                        alert(result.data.message);
                        this.$router.push("/room/list"); //编程方式跳转到爱好列表组件
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
