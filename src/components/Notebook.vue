<template>
        <div class="notebook">
            <ul>
                <li v-for="(page, index) of pages" class="page" v-bind:class="{ 'active': index === activePage }" @click="changePage(index)" v-bind:key="index">
                    <div>{{page.title}}</div>
                </li>
                <li class="new-page" @click="newPage()">New Page +</li>
            </ul>
        </div>
</template>

<script>
    export default {
        name: 'Notebook',
        props: ['pages', 'activePage'],
        methods: {
            changePage (index) {
                this.$emit('change-page', index)
            },
            newPage () {
                this.$emit('new-page')
            }
        }
    }
</script>

<style scoped>
    .notebook {
        
        width: 30rem;
        background: #333;
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        height: 100%;
        position: relative;
    }

    li {
        padding: 1rem;
        font-size: 1.25rem;
        min-height: 1.5rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: whitesmoke;
    }

    li:hover {
        cursor: pointer;
        background-color: gray;
        color: black;
    }

    .active {
        background-color: #262626;
        color: whitesmoke;
    }

    .active:hover {
        background-color: grey;
        color: black;
    }

    .new-page {
        background-color: #182c48;
        color: white;
        position: absolute;
        bottom: 0;
        width: 100%;
        box-sizing: border-box;
    }

    .new-page:hover {
        background-color: gray ;
    }
</style>