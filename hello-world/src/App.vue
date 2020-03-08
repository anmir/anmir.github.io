<template>
  <v-app>
    <Navbar/>
    <Maincontent/>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Maincontent from "@/components/Maincontent";

export default {
  components: { Navbar, Maincontent }
};
</script>