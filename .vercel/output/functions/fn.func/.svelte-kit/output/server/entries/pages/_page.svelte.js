import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { N as Navigation, H as Hero, O as Our_story, T as The_venue, S as Stay, I as Image_break, E as Events, G as Gallery, R as Registry, a as Subscribe } from "../../chunks/image-break.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Navigation, "Navigation").$$render($$result, { isPublic: true }, {}, {})} ${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(Our_story, "OurStory").$$render($$result, {}, {}, {})} ${validate_component(The_venue, "Venue").$$render($$result, {}, {}, {})} ${validate_component(Stay, "Stay").$$render($$result, {}, {}, {})} ${validate_component(Image_break, "ImageBreak").$$render($$result, {}, {}, {})} ${validate_component(Events, "Events").$$render($$result, {}, {}, {})} ${validate_component(Gallery, "Gallery").$$render($$result, {}, {}, {})} ${validate_component(Registry, "Registry").$$render($$result, {}, {}, {})} ${validate_component(Subscribe, "Subscribe").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
