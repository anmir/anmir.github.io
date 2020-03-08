<template>
  <v-content>
    <v-layout row wrap align-center>
      <v-flex xs8 offset-md2>
        <div v-for="article in articles" :key="article.title">
          <v-card class="my-3" hover>
            <v-img height="350px" v-bind:src="article.urlToImage"></v-img>
            <v-container fill-height fluid>
              <v-layout>
                <v-flex xs12 align-end d-flex>
                  <span class="headline">{{ article.title }}</span>
                </v-flex>
              </v-layout>
            </v-container>
            <v-card-text>{{ article.description }}</v-card-text>
            <v-card-actions>
              <v-chip small color="secondary" class="white--text">{{article.source.name}}</v-chip>
              <v-spacer></v-spacer>
              <v-btn icon class="red--text">
                <v-icon small>fa-reddit</v-icon>
              </v-btn>
              <v-btn icon class="light-blue--text">
                <v-icon small>fa-twitter</v-icon>
              </v-btn>
              <v-btn icon class="blue--text text--darken-4">
                <v-icon small>fa-facebook</v-icon>
              </v-btn>
              <v-btn icon class="red--text">
                <v-icon small>fa-google-plus</v-icon>
              </v-btn>
              <v-btn icon class="blue--text text--darken-4">
                <v-icon small>fa-linkedin</v-icon>
              </v-btn>
              <v-spacer></v-spacer>

              <v-btn small replace color="info" v-bind:href="article.url" target="_blank">Read More</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          title: "oasis",
          url: null,
          description: "description",
          source: {
            name: "sourceName"
          },
          urlToImage: null
        },
        {
          title: "oasis2",
          url: null,
          description: "description",
          source: {
            name: "sourceName"
          },
          urlToImage: null
        },
        {
          title: "oasis3",
          url: null,
          description: "description",
          source: {
            name: "sourceName"
          },
          urlToImage: null
        },
        {
          title: "oasis4",
          url: null,
          description: "description",
          source: {
            name: "sourceName"
          },
          urlToImage: null
        }
      ]
    };
  }
};
</script>