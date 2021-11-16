import { d as default_1 } from "./index.2c0c3466.js";
import { _ as _export_sfc } from "./index.465aaa1c.js";
import { r as resolveComponent, o as openBlock, c as createElementBlock, i as createBaseVNode, t as toDisplayString, a as createVNode, w as withCtx, F as Fragment, e as createTextVNode } from "./vendor.6149d32b.js";
var About_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  async setup() {
    const url = document.querySelector(".import-meta-url").textContent;
    return {
      msg: "About",
      url
    };
  },
  components: {
    Button: default_1
  }
};
const _hoisted_1 = { class: "import-meta-url" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode("DynamicButton");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Button = resolveComponent("Button");
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("h1", null, toDisplayString($setup.msg), 1),
    createBaseVNode("p", _hoisted_1, toDisplayString($setup.url), 1),
    createVNode(_component_Button, null, {
      default: withCtx(() => [
        _hoisted_2
      ]),
      _: 1
    })
  ], 64);
}
var About = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6cc18f66"]]);
export { About as default };
