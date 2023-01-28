import { mount } from "@vue/test-utils";
import Dashboard from "./Dashboard.vue";
import { expect, test } from "vitest";

test("mount component", async () => {
  expect(Dashboard).toBeTruthy();

  const wrapper = mount(Dashboard, {
    props: {
      title: "Vue3 Typescript Tailwind Starter",
    },
  });
  expect(wrapper.text()).toContain("Vue3 Typescript Tailwind Starter");
});
