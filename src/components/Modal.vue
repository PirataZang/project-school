<template>
  <div v-if="show" class="modal-overlay">
    <div :class="`modal-content ${size}`">
      <div class="modal-title">
        <h2 v-if="title">{{ title }}</h2>
        <button class="modal-close" @click="close">×</button>
      </div>

      <div class="modal-body">
        <slot></slot>
      </div>

      <div style="display: flex; justify-content: flex-end; text-align: right; margin-top: 20px; gap:5px;">
        <slot name="footer">
        </slot>
        <button class="button-close" @click="close">Fechar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  show: Boolean,
  title: String,
  size: String,
});

const size = "mid"
const emit = defineEmits(['close']);

const close = () => emit('close');

</script>
