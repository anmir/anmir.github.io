<template>
<v-app>
    <navbar>
    </navbar>
      
    <v-toolbar dense>
      <v-app-bar-nav-icon @click="drawer= !drawer" ></v-app-bar-nav-icon>
      <v-toolbar-title>Programmer's notes</v-toolbar-title>
      <v-spacer></v-spacer>      
    </v-toolbar>
    <v-navigation-drawer v-model="drawer">
    <v-item-group>
      <v-item>database</v-item>
      <v-spacer></v-spacer>
      <v-item>docker</v-item>
    </v-item-group>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      s: 0
    }
  }
}
</script>