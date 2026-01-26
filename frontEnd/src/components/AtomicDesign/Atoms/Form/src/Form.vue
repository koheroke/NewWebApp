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
import { defineComponent, computed, type PropType } from "vue";
import FormHook from "@/components/Hooks/web/formHook";
import type FormFormat from "@/components/Interfaces/web/formFormat";
export default defineComponent({
  name: "SearchForm",
  props: {
    formName: String,
    modelValue: String,
    placeholder: String,
    numberOfLines: { type: Number, default: 1 },
    size: {
      type: Object as PropType<{ width?: number; height?: number }>,
      default: () => ({}),
    },
  },
  emits: ["update:modelValue", "search"],
  setup(props, { emit }) {
    const formHook = new FormHook();
    const lines = props.numberOfLines ?? 1;
    const totalHeight = props.size?.height;
    const rowHeight = totalHeight ? totalHeight / lines : 20;
    const fontSizeRatio = 0.7;
    const fontSize = rowHeight * fontSizeRatio;
    const isSingleLine = lines === 1 ? true : false;
    const computedStyle = computed(() => {
      return {
        width: props.size?.width ? `${props.size.width}px` : "100%",
        height: props.size?.height ? `${props.size.height}px` : "auto",
        lineHeight: rowHeight + "px",
        fontSize: `${fontSize}px`,
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
    const handleConfirm = () => {
      console.log(props.modelValue);
      formHook.setform({
        name: props.formName,
        data: props.modelValue,
      } as FormFormat);
    };
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
