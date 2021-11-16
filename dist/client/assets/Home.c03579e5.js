import { _ as _export_sfc, a as __vitePreload } from "./index.465aaa1c.js";
import { d as default_1 } from "./index.2c0c3466.js";
import { a0 as defineAsyncComponent, n as reactive, o as openBlock, c as createElementBlock, i as createBaseVNode, t as toDisplayString, u as unref, a as createVNode, w as withCtx, F as Fragment, a1 as pushScopeId, a2 as popScopeId, e as createTextVNode } from "./vendor.6149d32b.js";
var _imports_0 = "/assets/logo.03d6d6da.png";
var foo = { msg: "hi" };
var Home_vue_vue_type_style_index_0_scoped_true_lang = "";
function __variableDynamicImportRuntime1__(path) {
  switch (path) {
    case "../components/ImportType.vue":
      return __vitePreload(() => import("./ImportType.94b45774.js"), true ? ["assets/ImportType.94b45774.js","assets/vendor.6149d32b.js"] : void 0);
    default:
      return new Promise(function(resolve, reject) {
        (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
      });
  }
}
const _withScopeId = (n) => (pushScopeId("data-v-577b173e"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", null, "Home", -1));
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0,
    alt: "logo"
  })
], -1));
const _hoisted_3 = { class: "virtual" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "inter" }, "this will be styled with a font-face", -1));
const _hoisted_5 = { class: "import-meta-url" };
const _hoisted_6 = { class: "protocol" };
const _hoisted_7 = /* @__PURE__ */ createTextVNode("DynamicButton");
const _sfc_main = {
  setup(__props) {
    const ImportType = load("ImportType");
    const Foo = defineAsyncComponent(() => __vitePreload(() => import("./Foo.e6943633.js"), true ? ["assets/Foo.e6943633.js","assets/Foo.a8752494.css","assets/vendor.6149d32b.js"] : void 0).then((mod) => mod.Foo));
    function load(file) {
      return defineAsyncComponent(() => __variableDynamicImportRuntime1__(`../components/${file}.vue`));
    }
    const url = document.querySelector(".import-meta-url").textContent;
    const protocol = new URL(url).protocol;
    const state = reactive({
      count: 0,
      protocol,
      url
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1,
        _hoisted_2,
        createBaseVNode("button", {
          onClick: _cache[0] || (_cache[0] = ($event) => unref(state).count++)
        }, "count is: " + toDisplayString(unref(state).count), 1),
        createVNode(unref(Foo)),
        createBaseVNode("p", _hoisted_3, "msg from virtual module: " + toDisplayString(unref(foo).msg), 1),
        _hoisted_4,
        createBaseVNode("p", _hoisted_5, toDisplayString(unref(state).url), 1),
        createBaseVNode("p", _hoisted_6, toDisplayString(unref(state).protocol), 1),
        createVNode(unref(default_1), null, {
          default: withCtx(() => [
            _hoisted_7
          ]),
          _: 1
        }),
        createVNode(unref(ImportType))
      ], 64);
    };
  }
};
var Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-577b173e"]]);
export { Home as default };
