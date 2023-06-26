import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, w as withCtx, e as createStaticVNode, d as createTextVNode } from "./app.88f11622.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="type-moon-games" tabindex="-1"><a class="header-anchor" href="#type-moon-games" aria-hidden="true">#</a> Type-Moon Games</h1><h2 id="fate-extra-games" tabindex="-1"><a class="header-anchor" href="#fate-extra-games" aria-hidden="true">#</a> Fate/EXTRA Games</h2><hr><ul><li>Fate/Extella - WIP</li></ul><h2 id="side-games" tabindex="-1"><a class="header-anchor" href="#side-games" aria-hidden="true">#</a> Side Games</h2><hr><p><strong>Capsule Servant</strong></p>', 7);
const _hoisted_8 = /* @__PURE__ */ createTextVNode("Opening");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("Shirou Route");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("Rin Route");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("Ending");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Games/CapsuleServant/opening.html" }, {
          default: withCtx(() => [
            _hoisted_8
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Games/CapsuleServant/shirou-route.html" }, {
          default: withCtx(() => [
            _hoisted_9
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Games/CapsuleServant/rin-route.html" }, {
          default: withCtx(() => [
            _hoisted_10
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Games/CapsuleServant/ending.html" }, {
          default: withCtx(() => [
            _hoisted_11
          ]),
          _: 1
        })
      ])
    ])
  ]);
}
var games_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "games.html.vue"]]);
export { games_html as default };
