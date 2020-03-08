<template>
  <v-app>
    <Navbar />
    <Maincontent/>
    <v-content>
      <router-view></router-view>
    </v-content>    
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
 import Maincontent from "@/components/Maincontent";

export default {
  components: {
    Navbar,
     Maincontent
  }
};
</script>