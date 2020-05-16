<template>
    <div class="container">
        <div
            class="card item"
            v-for="item in todos"
            :key="item.id"
            @click="removeTodo(item.id)"
            title="Click to remove."
        >
            <div class="card-header">
                <div class="card-header-title">
                    {{ item.title }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        todos() {
            return this.$store.state.todos;
        }
    },
    methods: {
        removeTodo(id) {
            this.$store.commit('removeTodo', id);
        }
    }
};
</script>

<style scoped>
.item {
    transition: all 0.5s;
}

.item:hover {
    cursor: pointer;
    filter: brightness(0.9);
    text-decoration-line: line-through;
}
</style>
