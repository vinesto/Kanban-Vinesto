<template>
    <div class="column is-narrow">
                <article class="message is-black">
                    <div class="message-header">
                        <p>Back Log</p>
                        <button class="delete" aria-label="delete"></button>
                    </div>
                    <div class="message-body">
                        <div class="board-item" v-for="(item, index) in task.backlog" :key="index">
                            <div class="board-item-content">
                                <span class="card">
                                    <div class="card-head">
                                        <p>{{item.title}}</p>
                                    </div>
                                    <div class="card-content">
                                        <p>{{item.description}}</p>
                                    </div>
                                    <div class="card-footer">
                                        <p class="card-footer-item button">Back</p>
                                        <p class="card-footer-item button" v-on:click="deleteTask(item,index)">Delete</p>
                                        <p class="card-footer-item button" v-on:click="updateTask(item,index)">Next</p>
                                    </div>
                                </span>
                            </div>      
                        </div>
                    </div>
                </article>
            </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    name:'backlog',
    props:['backlog'],
    methods:{
        ...mapActions([
            'removeTask',
            'next',
            'getTask'
        ]),
        updateTask(task,index){
            let data = {
                task:task,
                index:index
            }
            this.removeTask(data)
            data.task.status = 'todo'
            this.next(data)
        },
        deleteTask(task,index){
            let data = {
                task:task,
                index:index
            }
            this.removeTask(data)
        }
    },
    computed:{
        ...mapState([
            'task'
        ])
    },
    created(){
        this.getTask()
    }

};
</script>

<style>
</style>
