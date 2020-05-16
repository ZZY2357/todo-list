<template>
    <div class="container">
        <h1 class="title">TODO-LIST</h1>
        <p class="subtitle">By ZZY2357</p>
        <div class="field has-addons">
            <div class="control is-expanded">
                <input
                    type="text"
                    class="input"
                    v-model="todoOnChange.title"
                    @keyup.enter="addTodo"
                />
            </div>
            <div class="control">
                <button class="button is-primary control" @click="addTodo">
                    Add
                </button>
            </div>
        </div>
        <list></list>
    </div>
</template>

<script>
import list from './components/list';
export default {
    data() {
        return {
            todoOnChange: {
                title: '写作业'
            }
        };
    },
    methods: {
        addTodo() {
            this.$store.commit('addTodo', {
                title: this.todoOnChange.title,
                id: new Date().getTime() + '' + Math.random()
            });
        }
    },
    components: {
        list
    }
};
</script>
