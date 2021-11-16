import { a3 as defineComponent, a as createVNode, e as createTextVNode } from "./vendor.6149d32b.js";
var foo = "";
const Foo = defineComponent({
  name: "foo",
  setup() {
    return () => createVNode("div", {
      "class": "jsx"
    }, [createTextVNode("from JSX")]);
  }
});
export { Foo };
