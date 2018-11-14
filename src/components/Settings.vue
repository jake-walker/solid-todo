<template>
  <v-layout row>
    <v-flex s12 sm6 offset-sm3>
      <v-card>
        <v-list two-line subheader>
          <v-subheader>Synchronization</v-subheader>

          <v-list-tile @click="login()">
            <v-list-tile-content>
              <v-list-tile-title>Log In</v-list-tile-title>
              <v-list-tile-sub-title>Connect your Solid Pod to Solid Todo to sync your tasks.</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile @click="">
            <v-list-tile-avatar>
              <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Logged in as Jake Walker</v-list-tile-title>
              <v-list-tile-sub-title>Last synced yesterday</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>exit_to_app</v-icon>
            </v-list-tile-action>
          </v-list-tile>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-checkbox v-model="settings.showSyncDisabledAlert"></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content @click="settings.showSyncDisabledAlert = !settings.showSyncDisabledAlert">
              <v-list-tile-title>Show 'Sync Disabled' Alerts</v-list-tile-title>
              <v-list-tile-sub-title>You should check this if you don't want to sync.</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Settings',
};
</script>
