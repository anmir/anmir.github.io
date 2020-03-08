
<template>
  <v-carousel cycle hide-delimiter-background show-arrows-on-hover style="height:100%">
    <v-carousel-item v-for="(slide, i) in slides" :key="i" height="100%" style="100%">
      <div id="inspire1" height="100%" width="100%">
        <v-sheet color="orange lighten-2" height="200%">Hello, world! I'm a simple v-sheet</v-sheet>
      </div>
      <!-- <v-layout row wrap align-center> -->
      <!-- <v-content>
            <v-sheet :color="colors[i]" height="100%" width="100%" />
      </v-content>-->
      <!-- <v-sheet :color="colors[i]"  style="height:200%">
            <v-spacer/>  
              <v-row class="fill-height" height="100%" style="height:100%" align="center" justify="center">
              <div class="display-4">{{ slide }} Slide</div> 
            </v-row>
            
      </v-sheet>-->

      <!-- </v-layout> -->

      <!-- <v-row class="fill-height" height="100%" align="center" justify="center">
              <div class="display-3">{{ slide }} Slide</div> 
      </v-row>-->
      <!-- <p>aslkdfj</p> -->
      <!-- </v-sheet> -->
    </v-carousel-item>
  </v-carousel>
</template> 
<script>
export default {
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"]
    };
  }
};
</script>

<style>
#inspire {
  height: 100vh;
}

#inspire1 {
  height: 200vh;
}
</style>