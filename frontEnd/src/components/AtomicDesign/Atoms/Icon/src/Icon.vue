<template>
  <svg :style="svgStyle" aria-hidden="true">
    <use :xlink:href="`#${name}`" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { type IconProps } from "@/components/Interfaces/web/icon";

const props = withDefaults(defineProps<IconProps>(), {
  size: 24,
  color: "currentColor",
});

const svgStyle = computed(() => {
  const s = typeof props.size === "number" ? `${props.size}px` : props.size;
  return {
    width: s,
    height: s,
    fill: props.color,
  };
});
</script>
