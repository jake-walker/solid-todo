<template>
  <v-layout row>
    <v-flex s12 sm6 offset-sm3>
      <v-card>
        <v-list two-line>
          <v-list-tile v-for="task in tasks" :key="task.title" @click="">
            <v-list-tile-action>
              <v-checkbox v-model="task.done"></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content @click="task.done = !task.done">
              <v-list-tile-title v-html="task.name" v-bind:class="{ done: task.done }"></v-list-tile-title>
              <v-list-tile-sub-title>
                {{ task.created | moment("calendar") }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-btn
          dark
          fab
          fixed
          bottom
          right
          color="green"
          @click="test()">
          <v-icon>add</v-icon>
        </v-btn>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>

<script>
export default {
  data() {
    return {};
  },
  name: 'Todo',
};

// eslint-disable-next-line
//console.log("Hello");
</script>