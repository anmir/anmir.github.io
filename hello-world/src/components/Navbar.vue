<template>
  <nav>
    <v-toolbar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Programmer's notes</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer">
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>mdi-docker</v-icon>
          </v-list-tile-action>
          <v-list-tile-content right>
              <v-list-tile-title class="black--text font-weight-bold">Docker</v-list-tile-title>                    
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false      
    };
  }
};
</script>