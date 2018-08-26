<template>
    <div class="container">
      <h1 class="title"> Add Task Form</h1>
        <div class="field">
            <div class="control">
            <label class="label">Title:</label>
                <input class="input" type="text" placeholder="Title for your article" v-model="title">
            </div>
        </div>
        <div class="field">
            <div class="control">
            <label class="label">Description:</label>
                <input class="input" type="text" placeholder="Content for your article" v-model="description">
            </div>
        </div>
        <div class="field">
            <p class="control">
                <button class="button is-success" @click="submitTask">
                Submit
                </button>
            </p>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions} from 'vuex'

export default {
    name:'AddForm',
    data:function(){
        return{
            title:'',
            description:'',
        }
    },
    computed:{
        ...mapState([

        ])
    },
    methods:{
        ...mapActions([
            'addTask'
        ]),
        submitTask:function(){
            let data = {
                title : this.title,
                description : this.description,
                status : 'backlog'
            }
            console.log(data);
            this.addTask(data)
        }
    }
}
</script>

<style>

</style>
