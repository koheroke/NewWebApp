<template>
  <textarea
    class="formClass"
    :value="modelValue"
    :placeholder="placeholder"
    :style="computedStyle"
    @keydown.enter.prevent="handleConfirm"
    @input="onInput"
  ></textarea>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "SearchForm",
  props: {
    formName: String,
    modelValue: String,
    placeholder: String,
    numberOfLines: { type: Number, default: 1 },
    width: Number,
  },
  emits: ["update:modelValue", "search"],
  setup(props, { emit }) {
    const lineHeight = 25;
    const fontRatio = 0.7;
    const fontSize = lineHeight * fontRatio;
    const isSingleLine = props.numberOfLines === 1 ? true : false;
    const computedStyle = computed(() => {
      return {
        width: props.width ? `${props.width}px` : "100%",
        height: props.numberOfLines
          ? `${props.numberOfLines * lineHeight}px`
          : "auto",
        fontSize: `${fontSize}px`,
        lineHeight: lineHeight + "px",
        //改行に関する設定
        whiteSpace: isSingleLine ? "nowrap" : "pre-wrap",
        overflowX: isSingleLine ? "auto" : "hidden",
        overflowY: isSingleLine ? "hidden" : "auto",
      } as const;
    });

    const onInput = (e: Event) => {
      const target = e.target as HTMLTextAreaElement;
      let value = target.value;
      if (props.numberOfLines === 1) {
        value = value.replace(/\n/g, "");
      }
      emit("update:modelValue", value);
    };
    const handleConfirm = () => {};
    return {
      handleConfirm,
      computedStyle,
      onInput,
    };
  },
});
</script>
<style scoped>
.formClass {
  scrollbar-width: none;
  resize: none;
}
textarea::placeholder {
  color: #aaa;
}
</style>
