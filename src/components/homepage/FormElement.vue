<script setup>
import CheckBoxElement from '@/components/generic/CheckBoxElement.vue'
import ButtonElement from '@/components/generic/ButtonElement.vue'
</script>

<template>
  <form>
    <input type="text" name="name" id="name" placeholder="Name" />
    <hr />
    <div class="status-area">
      <CheckBoxElement inner="Alive" chacked="true" />
      <CheckBoxElement inner="Dead" chacked="true" />
      <CheckBoxElement inner="Unknown" chacked="true" />
    </div>
    <hr />
    <div class="species">
      <div class="col">
        <CheckBoxElement inner="Human" chacked="true" />
        <CheckBoxElement inner="Humanoid" chacked="true" />
        <CheckBoxElement inner="Mythological" chacked="true" />
        <CheckBoxElement inner="Disease" chacked="true" />
        <CheckBoxElement inner="Cronenberg" chacked="true" />
      </div>
      <div class="col">
        <CheckBoxElement inner="Alien" chacked="true" />
        <CheckBoxElement inner="Poopybutthole" chacked="true" />
        <CheckBoxElement inner="Animal" chacked="true" />
        <CheckBoxElement inner="Robot" chacked="true" />
        <CheckBoxElement inner="UnknownSpacies" chacked="true" />
      </div>
    </div>
    <ButtonElement type="submit" />
  </form>
</template>

<style></style>
