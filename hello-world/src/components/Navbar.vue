<template>
  <nav>
    <v-toolbar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ blogName }}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">{{ blogName }}</v-list-item-title>
          <v-list-item-subtitle>categories</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" router :to="item.links">
          <v-list-item-icon v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      blogName: "Programmer's notes",
      drawer: false,
      items: [
        { title: "Presentation", icon: null, links: "/" },
        { title: "Indexer", icon: null, links: "/indexer" },
        { title: "Articles", icon: null, links: "/articles" },
        { title: "Docker", icon: null, links: "/docker" },
        { title: "Git", icon: null, links: "/git" },
        { title: "Database", icon: null, links: "/db" }
      ]
    };
  }
};
</script>