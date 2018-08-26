<template>
<div>
  <nav class="navbar has-shadow">
        <div class="container">
            <div class="navbar-brand"><a class="navbar-item" href="../"><img src="http://bulma.io/images/bulma-logo.png"
                        alt="Bulma: a modern CSS framework based on Flexbox" /></a>
                <div class="navbar-burger burger" data-target="navMenu"><span></span><span></span><span></span></div>
            </div>
            <div class="navbar-menu" id="navMenu">
                <div class="navbar-end">
                </div>
            </div>
        </div>
    </nav>
    <!-- <router-view></router-view> -->
    <AddForm></AddForm>
    <section class="container">
        <div class="columns is-mobile is-centered" id="sectioncontainer">
            <Backlog></Backlog>
            <Todo></Todo>
            <Doing></Doing>
            <Done></Done>
            <!-- <div class="column is-narrow">
                <article class="message is-black">
                    <div class="message-header">
                        <p>Back Log</p>
                        <button class="delete" aria-label="delete"></button>
                    </div>
                    <div class="message-body">
                        <div class="board-item">
                            <div class="board-item-content"><span>The Fort</span></div>
                        </div>
                        <div class="board-item">
                            <div class="board-item-content"><span>Fist Like a bullet</span></div>
                        </div>
                        <div class="board-item">
                            <div class="board-item-content"><span>White Stork Spreads Wings</span></div>
                        </div>
                    </div>
                </article>
            </div>
            <div class="column is-narrow">
                <article class="message is-primary">
                    <div class="message-header">
                        <p>To-Do</p>
                        <button class="delete" aria-label="delete"></button>
                    </div>
                    <div class="message-body">
                        <div class="board-item">
                            <div class="board-item-content"><span>Tiger Pushes Mountain</span></div>
                        </div>
                        <div class="board-item">
                            <div class="board-item-content"><span>Force of Eagle's Claw</span></div>
                        </div>
                        <div class="board-item">
                            <div class="board-item-content"><span>Red Sun, Silver Moon</span></div>
                        </div>
                    </div>
                </article>
            </div>
            <div class="column is-narrow">
                <article class="message is-info">
                    <div class="message-header">
                        <p>Ongoing</p>
                        <button class="delete" aria-label="delete"></button>
                    </div>
                    <div class="message-body">
                        <div class="board-item">
                            <div class="board-item-content"><span>Enter the Phoenix</span></div>
                        </div>
                        <div class="board-item">
                            <div class="board-item-content"><span>Moon Rises, Raven Seeks</span></div>
                        </div>
                        <div class="board-item">
                            <div class="board-item-content"><span>Leopard Snares Rabbit</span></div>
                        </div>
                    </div>
                </article>
            </div>
            <div class="column is-narrow">
                <article class="message is-success">
                    <div class="message-header">
                        <p>Done</p>
                        <button class="delete" aria-label="delete"></button>
                    </div>
                    <div class="message-body">
                        <div class="board-item">
                            <div class="board-item-content"><span>Enter the Phoenix</span></div>
                        </div>
                        <div class="board-item">
                            <div class="board-item-content"><span>Moon Rises, Raven Seeks</span></div>
                        </div>
                        <div class="board-item">
                            <div class="board-item-content"><span>Leopard Snares Rabbit</span></div>
                        </div>
                    </div>
                </article>
            </div> -->
        </div>
    </section>
    <div class="columns is-mobile is-centered">
        <div class="column is-half is-narrow"></div>
    </div>
    <footer>
        <div class="box cta">
            <div class="columns is-mobile is-centered">
                <div class="field is-grouped is-grouped-multiline">
                    <div class="control">
                        <div class="tags has-addons"><a class="tag is-link" href="https://github.com/dansup/bulma-templates">Created By
                            </a><span class="tag is-light">Vinesto</span></div>
                    </div>
                    <div class="control">
                        <div class="tags has-addons"><a class="tag is-link">The source code is licensed</a><span class="tag is-light">MIT
                        </span></div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>

</template>
<script>
import Backlog from '@/components/Backlog.vue'
import Doing from '@/components/Doing.vue'
import Done from '@/components/Done.vue'
import Todo from '@/components/Todo.vue'
import AddForm from '@/components/AddForm.vue'

export default {
  data() {
    return {
      formProps: {
        email: "evan@you.com",
        password: "testing"
      }
    };
  },
  components:{
      AddForm,
      Backlog,
      Doing,
      Done,
      Todo,
  }
};
</script>

<style>
</style>
