<template>
  <v-layout row>
    <v-flex s12 sm6 offset-sm3>
      <v-alert :value="true" type="warning" icon="warning" v-if="settings.showSyncDisabledAlert">
        <b>You are not logged into your Solid Pod.</b>
        Your data is not being synced to Solid.
      </v-alert>

      <v-card>
        <v-list two-line v-if="tasks.length > 0">
          <v-list-tile v-for="(task, k) in tasks" :key="task.name" @click="">
            <v-list-tile-action>
              <v-checkbox v-model="task.done"></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content @click="task.done = !task.done">
              <v-list-tile-title v-html="task.name" v-bind:class="{ done: task.done }"></v-list-tile-title>
              <v-list-tile-sub-title>
                {{ task.created | moment("calendar") }}
              </v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action v-if="task.done">
              <v-icon color="red" @click="tasks.pop(task)">close</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

        <div v-if="tasks.length < 1" class="text-xs-center pa-5">
          <v-icon x-large color="primary">done_all</v-icon>
          <h1>You're done here.</h1>
          <p>Go relax or add some more tasks.</p>
        </div>

        <v-btn
          dark
          fab
          fixed
          bottom
          right
          color="green"
          @click="dialog = true">
          <v-icon>add</v-icon>
        </v-btn>

        <v-dialog v-model="dialog" max-width="600px">
          <v-card>
            <v-card-title class="headline">New Task</v-card-title>

            <v-card-text>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field label="Task" required clearable v-model="newTask" @keyup.enter="createNewTask()"></v-text-field>
                </v-flex>
              </v-layout>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn flat="flat" @click="dialog = false">
                Cancel
              </v-btn>

              <v-btn flat="flat" @click="createNewTask()" :disabled="newTask.trim() == ''">
                Create
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
    return {
      dialog: false,
      newTask: '',
    };
  },
  methods: {
    createNewTask() {
      this.addTask(this.newTask);
      this.dialog = false;
      this.newTask = '';
    },
  },
  name: 'Todo',
};
</script>
