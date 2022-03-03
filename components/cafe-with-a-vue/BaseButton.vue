<template>
  <!-- This v-on="$listeners" is a way
  to assign events to an element in a component.
  Without it, Vue does not know where to listen
  for the events. -->

  <button class="bouton" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton'
}
</script>

<style>
.bouton {
  color: black;
  background-color: #E9CC77;
  padding-inline: 10px;
  display: inline-block;
  padding: .60rem 1.25rem;
  border-radius: 10rem;
  transition: all .3s;
  font-family: 'Italiana';
  font-weight: bold;
}

.bouton:hover {
  color: #fff;
  background-color: #B37E1D;
  cursor: pointer;
}
</style>
E9CC77
