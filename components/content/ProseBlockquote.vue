<template>
  <blockquote class="quote">
    <v-row no-gutters>
      <v-col cols="1" style="position: relative;">
        <div class="before">
          "
        </div>
      </v-col>
      <v-col >
        <div class="quote__content">
          <slot />
        </div>
      </v-col>
    </v-row>
    
    
    
  </blockquote>
</template>

<style scope>
.quote {
}

.quote .before {
  position: absolute;
  color: rgba(var(--v-theme-secondary), 0.4);
  font-weight: 800;
  font-size: 5.5em;
  font-style: italic;
  top: -20px;
}

.quote .quote__content {
  padding-top: 20px;
}
</style>
