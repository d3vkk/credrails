<template>
  <div class="pt-10">
    <div class="slider">
      <input
        type="range"
        :min="minNum"
        :max="maxNum"
        @change="showNumber()"
        v-model="currentNumber"
        :title="`₦${currentNumber}`"
        class="slider"
      />
    </div>
    <div class="flex flex-row justify-between">
      <div>
        <div class="range-details-title">Min</div>
        <div>₦{{ minNum }}</div>
      </div>
      <div>
        <div class="range-details-title text-right">Max</div>
        <div>₦{{ maxNum }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import type { Ref } from "vue";

export default defineComponent({
  props: {
    maxNum: {
      type: Number,
      required: true,
    },
    minNum: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const currentNumber: Ref<number> = ref(0);

    function showNumber(): void {
      console.log(currentNumber.value);
    }
    return {
      maxNum: props.maxNum,
      minNum: props.minNum,
      currentNumber,
      showNumber,
    };
  },
});
</script>

<style scoped>
.slider {
  width: 100%;
}
.slider input {
  outline: none;
}
.range-details-title {
  font-size: var(--font-small);
  color: var(--gray-300);
}
</style>
