import { c as create_ssr_component, a as add_attribute, d as compute_rest_props, b as subscribe, s as setContext, v as validate_component, f as spread, h as escape_attribute_value, i as escape_object, g as getContext, e as escape, j as compute_slots, k as each, l as createEventDispatcher } from "./ssr.js";
import { F as Frame, T as ToolbarButton, i as is_void } from "./ToolbarButton.js";
import { twMerge } from "tailwind-merge";
import { w as writable } from "./index2.js";
import z from "zod";
const NavContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fluid = false } = $$props;
  if ($$props.fluid === void 0 && $$bindings.fluid && fluid !== void 0)
    $$bindings.fluid(fluid);
  return `<div${add_attribute("class", twMerge("mx-auto flex flex-wrap justify-between items-center ", fluid ? "w-full" : "container", $$props.class), 0)}>${slots.default ? slots.default({}) : ``}</div> `;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["fluid"]);
  let $hidden, $$unsubscribe_hidden;
  let { fluid = false } = $$props;
  let hidden = writable(true);
  $$unsubscribe_hidden = subscribe(hidden, (value) => $hidden = value);
  setContext("navHidden", hidden);
  let toggle = () => hidden.update((hidden2) => !hidden2);
  if ($$props.fluid === void 0 && $$bindings.fluid && fluid !== void 0)
    $$bindings.fluid(fluid);
  {
    {
      $$restProps.color = $$restProps.color ?? "navbar";
    }
  }
  $$unsubscribe_hidden();
  return `${validate_component(Frame, "Frame").$$render(
    $$result,
    Object.assign({}, { tag: "nav" }, $$restProps, {
      class: twMerge("px-2 sm:px-4 py-2.5 w-full", $$props.class)
    }),
    {},
    {
      default: () => {
        return `${validate_component(NavContainer, "NavContainer").$$render($$result, { fluid }, {}, {
          default: () => {
            return `${slots.default ? slots.default({ hidden: $hidden, toggle, NavContainer }) : ``}`;
          }
        })}`;
      }
    }
  )} `;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let { ariaLabel = "bars 3" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> `;
  let svgsolid = `<path fill="${color}" clip-rule="evenodd" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path> `;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    switch (variation) {
      case "outline":
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
        break;
      case "solid":
        svgpath = svgsolid;
        viewBox = "0 0 24 24";
        break;
      default:
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
    }
  }
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { role: "button" },
      { tabindex: "0" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      {
        class: escape_attribute_value($$props.class)
      },
      escape_object($$restProps),
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      { "stroke-width": "2" }
    ],
    {}
  )}><!-- HTML_TAG_START -->${svgpath}<!-- HTML_TAG_END --></svg> `;
});
let btnClass = "ms-3 md:hidden";
const NavHamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["menuClass", "onClick"]);
  let { menuClass = "h-6 w-6 shrink-0" } = $$props;
  let { onClick = void 0 } = $$props;
  getContext("navHidden") ?? writable(true);
  if ($$props.menuClass === void 0 && $$bindings.menuClass && menuClass !== void 0)
    $$bindings.menuClass(menuClass);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, Object.assign({}, { name: "Open main menu" }, $$restProps, { class: twMerge(btnClass, $$props.class) }), {}, {
    default: () => {
      return `${validate_component(Menu, "Menu").$$render(
        $$result,
        {
          class: twMerge(menuClass, $$props.classMenu)
        },
        {},
        {}
      )}`;
    }
  })} `;
});
function quintOut(t) {
  return --t * t * t * t * t + 1;
}
const NavUl = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "activeUrl",
    "divClass",
    "ulClass",
    "hidden",
    "slideParams",
    "activeClass",
    "nonActiveClass"
  ]);
  let $hiddenStore, $$unsubscribe_hiddenStore;
  const activeUrlStore = writable("");
  let { activeUrl = "" } = $$props;
  let { divClass: divClass2 = "w-full md:block md:w-auto" } = $$props;
  let { ulClass = "flex flex-col p-4 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:text-sm md:font-medium" } = $$props;
  let { hidden = void 0 } = $$props;
  let { slideParams = {
    delay: 250,
    duration: 500,
    easing: quintOut
  } } = $$props;
  let { activeClass = "text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent" } = $$props;
  let { nonActiveClass = "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" } = $$props;
  setContext("navbarContext", { activeClass, nonActiveClass });
  setContext("activeUrl", activeUrlStore);
  let hiddenStore = getContext("navHidden");
  $$unsubscribe_hiddenStore = subscribe(hiddenStore, (value) => $hiddenStore = value);
  let _hidden;
  let _divClass;
  let _ulClass;
  if ($$props.activeUrl === void 0 && $$bindings.activeUrl && activeUrl !== void 0)
    $$bindings.activeUrl(activeUrl);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass2 !== void 0)
    $$bindings.divClass(divClass2);
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  if ($$props.slideParams === void 0 && $$bindings.slideParams && slideParams !== void 0)
    $$bindings.slideParams(slideParams);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass !== void 0)
    $$bindings.nonActiveClass(nonActiveClass);
  {
    {
      activeUrlStore.set(activeUrl);
    }
  }
  _hidden = hidden ?? $hiddenStore ?? true;
  _divClass = twMerge(divClass2, $$props.class);
  _ulClass = twMerge(
    ulClass,
    // 'divide-y md:divide-y-0 divide-gray-100 dark:divide-gray-700',
    $$props.classUl
  );
  $$unsubscribe_hiddenStore();
  return `${!_hidden ? `<div${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(_divClass) },
      { role: "button" },
      { tabindex: "0" }
    ],
    {}
  )}>${validate_component(Frame, "Frame").$$render(
    $$result,
    {
      tag: "ul",
      border: true,
      rounded: true,
      color: "navbarUl",
      class: _ulClass
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}</div>` : `<div${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(_divClass) },
      { hidden: _hidden || null }
    ],
    {}
  )}><ul${add_attribute("class", _ulClass, 0)}>${slots.default ? slots.default({}) : ``}</ul></div>`} `;
});
const NavLi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active;
  let liClass;
  let $$restProps = compute_rest_props($$props, ["href", "activeClass", "nonActiveClass"]);
  let { href = "" } = $$props;
  let { activeClass = void 0 } = $$props;
  let { nonActiveClass = void 0 } = $$props;
  const context = getContext("navbarContext") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let navUrl = "";
  activeUrlStore.subscribe((value) => {
    navUrl = value;
  });
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass !== void 0)
    $$bindings.nonActiveClass(nonActiveClass);
  active = navUrl ? href === navUrl : false;
  liClass = twMerge(
    "block py-2 pe-4 ps-3 md:p-0 rounded md:border-0",
    active ? activeClass ?? context.activeClass : nonActiveClass ?? context.nonActiveClass,
    $$props.class
  );
  return `<li>${((tag) => {
    return tag ? `<${href ? "a" : "div"}${spread(
      [
        {
          role: escape_attribute_value(href ? void 0 : "link")
        },
        { href: escape_attribute_value(href) },
        escape_object($$restProps),
        { class: escape_attribute_value(liClass) }
      ],
      {}
    )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "div")}</li> `;
});
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isPublic = true } = $$props;
  if ($$props.isPublic === void 0 && $$bindings.isPublic && isPublic !== void 0)
    $$bindings.isPublic(isPublic);
  return `${validate_component(Navbar, "Navbar").$$render(
    $$result,
    {
      class: "bg-transparent fixed z-20 top-0 start-0"
    },
    {},
    {
      default: () => {
        return `${validate_component(NavContainer, "NavContainer").$$render($$result, { class: "justify-end" }, {}, {
          default: () => {
            return `<div>${validate_component(NavHamburger, "NavHamburger").$$render($$result, { classMenu: "text-white" }, {}, {})}</div> ${validate_component(NavUl, "NavUl").$$render($$result, { class: "mx-auto uppercase" }, {}, {
              default: () => {
                return `${!isPublic ? `${validate_component(NavLi, "NavLi").$$render(
                  $$result,
                  {
                    class: "text-white tracking-[2.50px]",
                    href: "#save-the-date"
                  },
                  {},
                  {
                    default: () => {
                      return `Save the date`;
                    }
                  }
                )}` : ``} ${validate_component(NavLi, "NavLi").$$render(
                  $$result,
                  {
                    class: "text-white tracking-[2.50px]",
                    href: "#our-story"
                  },
                  {},
                  {
                    default: () => {
                      return `Our story`;
                    }
                  }
                )} ${validate_component(NavLi, "NavLi").$$render(
                  $$result,
                  {
                    class: "text-white tracking-[2.50px]",
                    href: "#the-venue"
                  },
                  {},
                  {
                    default: () => {
                      return `The venue`;
                    }
                  }
                )} ${validate_component(NavLi, "NavLi").$$render(
                  $$result,
                  {
                    class: "text-white tracking-[2.50px]",
                    href: "#where-you-can-stay"
                  },
                  {},
                  {
                    default: () => {
                      return `Where you can stay`;
                    }
                  }
                )} ${validate_component(NavLi, "NavLi").$$render(
                  $$result,
                  {
                    class: "text-white tracking-[2.50px]",
                    href: "#events"
                  },
                  {},
                  {
                    default: () => {
                      return `Events`;
                    }
                  }
                )} ${validate_component(NavLi, "NavLi").$$render(
                  $$result,
                  {
                    class: "text-white tracking-[2.50px]",
                    href: "#gallery"
                  },
                  {},
                  {
                    default: () => {
                      return `Gallery`;
                    }
                  }
                )} ${validate_component(NavLi, "NavLi").$$render(
                  $$result,
                  {
                    class: "text-white tracking-[2.50px]",
                    href: "#gift-registry"
                  },
                  {},
                  {
                    default: () => {
                      return `Gift registry`;
                    }
                  }
                )} ${validate_component(NavLi, "NavLi").$$render(
                  $$result,
                  {
                    class: "text-white tracking-[2.50px]",
                    href: "#subscribe"
                  },
                  {},
                  {
                    default: () => {
                      return `Subscribe`;
                    }
                  }
                )}`;
              }
            })}`;
          }
        })}`;
      }
    }
  )}`;
});
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="bg-[url('$lib/assets/images/hero-bg.png')] h-svh text-white bg-center bg-cover flex flex-col" data-svelte-h="svelte-18wbnyg"><div class="m-auto text-center"> <div class="flex flex-col md:hidden gap-[20px]"><div class="flex flex-col gap-[10px]"><h1 class="text-[40px] font-serif uppercase tracking-[20px] me-[-20px]">Matthew</h1> <h1 class="text-[30px] font-serif italic font-medium">and</h1> <h1 class="text-[40px] font-serif uppercase tracking-[20px] me-[-20px]">Ella</h1></div> <div class="flex flex-col gap-[10px]"><h2 class="uppercase text-[14px] tracking-[2.8px]">03 . 01 . 2025</h2> <h2 class="uppercase text-[14px] tracking-[2.8px]">Villa Plenilunio, Uluwatu Bali</h2></div></div>  <div class="md:flex hidden flex-col gap-[55px]"><div class="flex flex-wrap gap-[40px] items-baseline"><h1 class="text-[80px] font-serif uppercase tracking-[20px] me-[-20px]">Matthew</h1> <h1 class="text-[50px] font-serif italic font-medium">and</h1> <h1 class="text-[80px] font-serif uppercase tracking-[20px]">Ella</h1></div> <div><h2 class="uppercase text-[20px] tracking-[4px]">03 . 01 . 2025 | Villa Plenilunio, Uluwatu Bali</h2></div></div></div> <p class="uppercase mb-[24px] mx-auto text-[10px] tracking-[5px]">Scroll down</p> <div class="h-[50px] mx-auto bg-white w-[1px]"></div></div>`;
});
const Timeline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { order = "default" } = $$props;
  setContext("order", order);
  let olClasses = {
    group: "p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700",
    horizontal: "sm:flex",
    activity: "relative border-s border-gray-200 dark:border-gray-700",
    vertical: "relative border-s border-gray-200 dark:border-gray-700",
    default: "relative border-s border-gray-200 dark:border-gray-700"
  };
  if ($$props.order === void 0 && $$bindings.order && order !== void 0)
    $$bindings.order(order);
  return `<ol${add_attribute("class", twMerge(olClasses[order], $$props.class), 0)}>${slots.default ? slots.default({}) : ``}</ol> `;
});
const TimelineItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { date = "" } = $$props;
  let { svgClass = "w-3 h-3 text-primary-600 dark:text-primary-400" } = $$props;
  let order = "default";
  order = getContext("order");
  const liClasses = {
    default: "mb-10 ms-4",
    vertical: "mb-10 ms-6",
    horizontal: "relative mb-6 sm:mb-0",
    activity: "mb-10 ms-6",
    group: ""
  };
  const divClasses = {
    default: "absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700",
    vertical: "flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900",
    horizontal: "flex items-center",
    activity: "flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900",
    group: "p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700"
  };
  const timeClasses = {
    default: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
    vertical: "block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
    horizontal: "block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
    activity: "mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0",
    group: "text-lg font-semibold text-gray-900 dark:text-white"
  };
  let liCls = twMerge(liClasses[order], $$props.classLi);
  let divCls = twMerge(divClasses[order], $$props.classDiv);
  let timeCls = twMerge(timeClasses[order], $$props.classTime);
  const h3Cls = twMerge(
    order === "vertical" ? "flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white" : "text-lg font-semibold text-gray-900 dark:text-white",
    $$props.classH3
  );
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.svgClass === void 0 && $$bindings.svgClass && svgClass !== void 0)
    $$bindings.svgClass(svgClass);
  return `<li${add_attribute("class", liCls, 0)}><div${add_attribute("class", divCls, 0)}></div> ${order !== "default" ? `${slots.icon ? slots.icon({}) : ` <svg aria-hidden="true"${add_attribute("class", svgClass, 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg> `}` : `${date ? `<time${add_attribute("class", timeCls, 0)}>${escape(date)}</time>` : ``}`} ${title ? `<h3${add_attribute("class", h3Cls, 0)}>${escape(title)}</h3>` : ``} ${order !== "default" ? `${date ? `<time${add_attribute("class", timeCls, 0)}>${escape(date)}</time>` : ``}` : ``} ${slots.default ? slots.default({}) : ``}</li> `;
});
const OurStory1 = "/_app/immutable/assets/our-story-1.JKackQ7S.png";
const OurStory2 = "/_app/immutable/assets/our-story-2.HzHjofkG.png";
const Our_story = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="bg-[url('$lib/assets/images/our-story-bg.png')] bg-center bg-cover px-[50px] py-[60px]" id="our-story"><div class="max-w-[1248px] mx-auto"><h3 class="font-serif text-[50px] text-white mb-[20px]" data-svelte-h="svelte-1koqp2b">Our Story</h3> ${validate_component(Timeline, "Timeline").$$render($$result, { class: "border-dashed" }, {}, {
    default: () => {
      return `${validate_component(TimelineItem, "TimelineItem").$$render(
        $$result,
        {
          date: "2016",
          classTime: "text-white font-serif text-[20px] font-semibold",
          classLi: "mb-[24px]"
        },
        {},
        {
          default: () => {
            return `<p class="mb-4 text-base font-normal text-white font-sans dark:text-gray-400" data-svelte-h="svelte-155c9ye">Matt left MedSpecialized for Singapore, Ella joined Medspecialized
					<br>Lived one block away from each other. Never crossed paths.</p>`;
          }
        }
      )} ${validate_component(TimelineItem, "TimelineItem").$$render(
        $$result,
        {
          date: "2020",
          classTime: "text-white font-serif text-[20px] font-semibold",
          classLi: "mb-[24px]"
        },
        {},
        {
          default: () => {
            return `<p class="mb-4 text-base font-normal text-white font-sans dark:text-gray-400" data-svelte-h="svelte-1aasdla">Matt got heartbroken, Ella got heartbroken</p>`;
          }
        }
      )} ${validate_component(TimelineItem, "TimelineItem").$$render(
        $$result,
        {
          date: "11/2021",
          classTime: "text-white font-serif text-[20px] font-semibold",
          classLi: "mb-[24px]"
        },
        {},
        {
          default: () => {
            return `<p class="mb-4 text-base font-normal text-white font-sans dark:text-gray-400" data-svelte-h="svelte-18i1d0u">Matt went to Argao to visit friends, Ella left Argao from same friends Matt visited</p>`;
          }
        }
      )} ${validate_component(TimelineItem, "TimelineItem").$$render(
        $$result,
        {
          date: "11/25/2021",
          classTime: "text-white font-serif text-[20px] font-semibold",
          classLi: "mb-[24px]"
        },
        {},
        {
          default: () => {
            return `<p class="mb-4 text-base font-normal text-white font-sans dark:text-gray-400" data-svelte-h="svelte-1kcasqj">Unplanned lunch</p>`;
          }
        }
      )} ${validate_component(TimelineItem, "TimelineItem").$$render(
        $$result,
        {
          date: "12/2021",
          classTime: "text-white font-serif text-[20px] font-semibold",
          classLi: "mb-[24px]"
        },
        {},
        {
          default: () => {
            return `<p class="mb-4 text-base font-normal text-white font-sans dark:text-gray-400" data-svelte-h="svelte-1xolu24">Online dated each other</p>`;
          }
        }
      )} ${validate_component(TimelineItem, "TimelineItem").$$render(
        $$result,
        {
          date: "02/2022",
          classTime: "text-white font-serif text-[20px] font-semibold",
          classLi: "mb-[24px]"
        },
        {},
        {
          default: () => {
            return `<p class="mb-4 text-base font-normal text-white font-sans dark:text-gray-400" data-svelte-h="svelte-1qpuwx4">In a relationship</p>`;
          }
        }
      )} ${validate_component(TimelineItem, "TimelineItem").$$render(
        $$result,
        {
          date: "09/2023",
          classTime: "text-white font-serif text-[20px] font-semibold",
          classLi: "mb-[24px]"
        },
        {},
        {}
      )}`;
    }
  })} <div class="flex flex-col gap-[6px] md:flex-row" data-svelte-h="svelte-1nr2o0c"><img${add_attribute("src", OurStory1, 0)} alt="Our Story 1" class="md:flex-1"> <img${add_attribute("src", OurStory2, 0)} alt="Our Story 2" class="md:flex-1"></div></div></div>`;
});
const Indicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { color = "gray" } = $$props;
  let { rounded = false } = $$props;
  let { size = "md" } = $$props;
  let { border = false } = $$props;
  let { placement = void 0 } = $$props;
  let { offset = true } = $$props;
  const colors = {
    gray: "bg-gray-200",
    dark: "bg-gray-900 dark:bg-gray-700",
    blue: "bg-blue-600",
    orange: "bg-orange-600",
    green: "bg-green-500",
    red: "bg-red-500",
    purple: "bg-purple-500",
    indigo: "bg-indigo-500",
    yellow: "bg-yellow-300",
    teal: "bg-teal-500",
    none: ""
  };
  const sizes = {
    xs: "w-2 h-2",
    sm: "w-2.5 h-2.5",
    md: "w-3 h-3",
    lg: "w-3.5 h-3.5",
    xl: "w-6 h-6"
  };
  const placements = {
    // top
    "top-left": "top-0 start-0",
    "top-center": "top-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 rtl:translate-x-1/2",
    "top-right": "top-0 end-0",
    // center
    "center-left": "top-1/2 -translate-y-1/2 start-0",
    center: "top-1/2 -translate-y-1/2 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 rtl:translate-x-1/2",
    "center-right": "top-1/2 -translate-y-1/2 end-0",
    // bottom
    "bottom-left": "bottom-0 start-0",
    "bottom-center": "bottom-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 rtl:translate-x-1/2",
    "bottom-right": "bottom-0 end-0"
  };
  const offsets = {
    // top
    "top-left": "-translate-x-1/3 rtl:translate-x-1/3 -translate-y-1/3",
    "top-center": "-translate-y-1/3",
    "top-right": "translate-x-1/3 rtl:-translate-x-1/3 -translate-y-1/3",
    // center
    "center-left": "-translate-x-1/3 rtl:translate-x-1/3",
    center: "",
    "center-right": "translate-x-1/3 rtl:-translate-x-1/3",
    // bottom
    "bottom-left": "-translate-x-1/3 rtl:translate-x-1/3 translate-y-1/3",
    "bottom-center": "translate-y-1/3",
    "bottom-right": "translate-x-1/3 rtl:-translate-x-1/3 translate-y-1/3"
  };
  let dotClass;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  dotClass = twMerge("flex-shrink-0", rounded ? "rounded" : "rounded-full", border && "border-2 border-white dark:border-gray-800", sizes[size], colors[color], $$slots.default && "inline-flex items-center justify-center", placement && "absolute " + placements[placement], placement && offset && offsets[placement], $$props.class);
  return `<div${add_attribute("class", dotClass, 0)}>${slots.default ? slots.default({}) : ``}</div> `;
});
const ControlButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { forward } = $$props;
  let { name } = $$props;
  let buttonCls;
  if ($$props.forward === void 0 && $$bindings.forward && forward !== void 0)
    $$bindings.forward(forward);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  buttonCls = twMerge("flex absolute top-0 z-30 justify-center items-center px-4 h-full group focus:outline-none text-white dark:text-gray-300", forward ? "end-0" : "start-0", $$props.class);
  return `<button type="button"${add_attribute("class", buttonCls, 0)}>${slots.default ? slots.default({}) : ` <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">${forward ? `<svg aria-hidden="true" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>` : `<svg aria-hidden="true" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>`} <span class="sr-only">${escape(name)}</span></span> `}</button> `;
});
const canChangeSlide = ({ lastSlideChange, slideDuration, slideDurationRatio = 1 }) => {
  if (lastSlideChange && (/* @__PURE__ */ new Date()).getTime() - lastSlideChange.getTime() < slideDuration * slideDurationRatio) {
    console.warn("Can't change slide yet, too soon");
    return false;
  }
  return true;
};
const Controls = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $state, $$unsubscribe_state;
  const state = getContext("state");
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  const { update } = state;
  function changeSlide(forward) {
    if (!canChangeSlide({
      lastSlideChange: $state.lastSlideChange,
      slideDuration: $state.slideDuration,
      slideDurationRatio: 0.75
    })) {
      return;
    }
    if (forward) {
      update((_state) => {
        _state.forward = true;
        _state.index = _state.index >= _state.images.length - 1 ? 0 : _state.index + 1;
        _state.lastSlideChange = /* @__PURE__ */ new Date();
        return { ..._state };
      });
    } else {
      update((_state) => {
        _state.forward = false;
        _state.index = _state.index <= 0 ? _state.images.length - 1 : _state.index - 1;
        _state.lastSlideChange = /* @__PURE__ */ new Date();
        return { ..._state };
      });
    }
  }
  $$unsubscribe_state();
  return ` ${slots.default ? slots.default({ ControlButton, changeSlide }) : ` ${validate_component(ControlButton, "ControlButton").$$render(
    $$result,
    {
      name: "Previous",
      forward: false,
      class: twMerge($$props.class)
    },
    {},
    {}
  )} ${validate_component(ControlButton, "ControlButton").$$render(
    $$result,
    {
      name: "Next",
      forward: true,
      class: twMerge($$props.class)
    },
    {},
    {}
  )} `}`;
});
const Indicators = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $state, $$unsubscribe_state;
  let { activeClass = "opacity-100" } = $$props;
  let { inactiveClass = "opacity-60" } = $$props;
  const state = getContext("state");
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.inactiveClass === void 0 && $$bindings.inactiveClass && inactiveClass !== void 0)
    $$bindings.inactiveClass(inactiveClass);
  $$unsubscribe_state();
  return `<div${add_attribute("class", twMerge("flex absolute bottom-5 start-1/2 z-30 space-x-3 rtl:space-x-reverse -translate-x-1/2 rtl:translate-x-1/2", $$props.class), 0)}>${each($state.images, (_, idx) => {
    let selected = $state.index === idx;
    return ` <button>${slots.default ? slots.default({ Indicator, selected, index: idx }) : ` ${validate_component(Indicator, "Indicator").$$render(
      $$result,
      {
        class: twMerge("bg-gray-100 hover:bg-gray-300", selected ? activeClass : inactiveClass)
      },
      {},
      {}
    )} `} </button>`;
  })}</div> `;
});
const Slide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let imgClass;
  let $$restProps = compute_rest_props($$props, ["image", "transition"]);
  let $state, $$unsubscribe_state;
  const state = getContext("state");
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  let { image } = $$props;
  let { transition = null } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  ({
    x: $state.forward ? "100%" : "-100%",
    opacity: 1,
    width: "100%",
    height: "100%",
    duration: $state.slideDuration
  });
  ({
    x: $state.forward ? "-100%" : "100%",
    opacity: 0.9,
    width: "100%",
    height: "100%",
    duration: $state.slideDuration
  });
  imgClass = twMerge("absolute block !w-full h-full object-cover", $$props.class);
  $$unsubscribe_state();
  return `${transition ? `<img${spread(
    [
      { alt: "..." },
      escape_object(image),
      escape_object($$restProps),
      { class: escape_attribute_value(imgClass) }
    ],
    {}
  )}>` : `<img${spread(
    [
      { alt: "..." },
      escape_object(image),
      escape_object($$restProps),
      { class: escape_attribute_value(imgClass) }
    ],
    {}
  )}>`} `;
});
let divClass = "grid overflow-hidden relative rounded-lg h-56 sm:h-64 xl:h-80 2xl:h-96";
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "images",
    "index",
    "slideDuration",
    "transition",
    "duration",
    "ariaLabel",
    "imgClass"
  ]);
  let { images } = $$props;
  let { index = 0 } = $$props;
  let { slideDuration = 1e3 } = $$props;
  let { transition = null } = $$props;
  let { duration = 0 } = $$props;
  let { ariaLabel = "Draggable Carousel" } = $$props;
  let { imgClass = "" } = $$props;
  const dispatch = createEventDispatcher();
  const { set, subscribe: subscribe2, update } = writable({
    images,
    index,
    forward: true,
    slideDuration,
    lastSlideChange: /* @__PURE__ */ new Date()
  });
  const state = {
    set: (_state) => set({
      index: _state.index,
      images: _state.images,
      lastSlideChange: /* @__PURE__ */ new Date(),
      slideDuration,
      forward
    }),
    subscribe: subscribe2,
    update
  };
  let forward = true;
  setContext("state", state);
  subscribe2((_state) => {
    index = _state.index;
    forward = _state.forward;
    dispatch("change", images[index]);
  });
  let carouselDiv;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.slideDuration === void 0 && $$bindings.slideDuration && slideDuration !== void 0)
    $$bindings.slideDuration(slideDuration);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.imgClass === void 0 && $$bindings.imgClass && imgClass !== void 0)
    $$bindings.imgClass(imgClass);
  return ` ${$$result.head += `<!-- HEAD_svelte-h5oyes_START -->${images.length > 0 ? `${each(images, (image) => {
    return `<link rel="preload"${add_attribute("href", image.src, 0)} as="image">`;
  })}` : ``}<!-- HEAD_svelte-h5oyes_END -->`, ""}   <div class="relative" role="button"${add_attribute("aria-label", ariaLabel, 0)} tabindex="0"${add_attribute("this", carouselDiv, 0)}><div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(
          divClass,
          "transition-transform",
          $$props.class
        ))
      }
    ],
    {}
  )}>${slots.slide ? slots.slide({ Slide, index }) : ` ${validate_component(Slide, "Slide").$$render(
    $$result,
    {
      image: images[index],
      class: imgClass,
      transition
    },
    {},
    {}
  )} `}</div> ${slots.default ? slots.default({ index, Controls, Indicators }) : ``}</div> `;
});
const Wrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "show", "use"]);
  let { tag = "div" } = $$props;
  let { show } = $$props;
  let { use = () => {
  } } = $$props;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  return `${show ? `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps)], {})}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}` : `${slots.default ? slots.default({}) : ``}`} `;
});
function clampSize(s) {
  return s && s === "xs" ? "sm" : s === "xl" ? "lg" : s;
}
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _size;
  let $$restProps = compute_rest_props($$props, ["type", "value", "size", "defaultClass", "color", "floatClass"]);
  let $$slots = compute_slots(slots);
  let { type = "text" } = $$props;
  let { value = void 0 } = $$props;
  let { size = void 0 } = $$props;
  let { defaultClass = "block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right" } = $$props;
  let { color = "base" } = $$props;
  let { floatClass = "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400" } = $$props;
  const borderClasses = {
    base: "border-gray-300 dark:border-gray-600",
    tinted: "border-gray-300 dark:border-gray-500",
    green: "border-green-500 dark:border-green-400",
    red: "border-red-500 dark:border-red-400"
  };
  const ringClasses = {
    base: "focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500",
    green: "focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500",
    red: "focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
  };
  const colorClasses = {
    base: "bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400",
    tinted: "bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400",
    green: "bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700",
    red: "bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700"
  };
  let background = getContext("background");
  let group = getContext("group");
  const textSizes = {
    sm: "sm:text-xs",
    md: "text-sm",
    lg: "sm:text-base"
  };
  const leftPadding = { sm: "ps-9", md: "ps-10", lg: "ps-11" };
  const rightPadding = { sm: "pe-9", md: "pe-10", lg: "pe-11" };
  const inputPadding = { sm: "p-2", md: "p-2.5", lg: "p-3" };
  let inputClass;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.floatClass === void 0 && $$bindings.floatClass && floatClass !== void 0)
    $$bindings.floatClass(floatClass);
  _size = size || clampSize(group?.size) || "md";
  {
    {
      const _color = color === "base" && background ? "tinted" : color;
      inputClass = twMerge([
        defaultClass,
        inputPadding[_size],
        $$slots.left && leftPadding[_size] || $$slots.right && rightPadding[_size],
        ringClasses[color],
        colorClasses[_color],
        borderClasses[_color],
        textSizes[_size],
        group || "rounded-lg",
        group && "first:rounded-s-lg last:rounded-e-lg",
        group && "border-s-0 first:border-s last:border-e",
        $$props.class
      ]);
    }
  }
  return `${validate_component(Wrapper, "Wrapper").$$render(
    $$result,
    {
      class: "relative w-full",
      show: $$slots.left || $$slots.right
    },
    {},
    {
      default: () => {
        return `${$$slots.left ? `<div class="${escape(twMerge(floatClass, $$props.classLeft), true) + " start-0 ps-2.5 pointer-events-none"}">${slots.left ? slots.left({}) : ``}</div>` : ``} ${slots.default ? slots.default({
          props: { ...$$restProps, class: inputClass }
        }) : ` <input${spread(
          [
            escape_object($$restProps),
            escape_object({ type }),
            {
              class: escape_attribute_value(inputClass)
            }
          ],
          {}
        )}${add_attribute("value", value, 0)}> `} ${$$slots.right ? `<div class="${escape(twMerge(floatClass, $$props.classRight), true) + " end-0 pe-2.5"}">${slots.right ? slots.right({}) : ``}</div>` : ``}`;
      }
    }
  )} `;
});
const Villa1 = "/_app/immutable/assets/villa-1.vr3Lnzk1.png";
const Villa2 = "/_app/immutable/assets/villa-2.TpR_erGx.png";
const Villa3 = "/_app/immutable/assets/villa-3.yani4SBK.png";
const Villa4 = "/_app/immutable/assets/villa-4.1QH7lvho.png";
const Villa5 = "/_app/immutable/assets/villa-5.DxKXbqJd.png";
const css$2 = {
  code: ":root{--tw-translate-y:translateY(-50%)}",
  map: null
};
const The_venue = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const images = [
    { alt: "Villa 1", src: Villa1 },
    { alt: "Villa 2", src: Villa2 },
    { alt: "Villa 3", src: Villa3 },
    { alt: "Villa 4", src: Villa4 },
    { alt: "Villa 5", src: Villa5 }
  ];
  $$result.css.add(css$2);
  return `<div class="bg-bgDark py-[40px] px-[30px] min-h-svh md:h-svh md:py-[100px] md:px-[60px]" id="the-venue"><div class="max-w-[1248px] mx-auto md:grid md:grid-cols-[1fr_300px] md:gap-[60px]"><div>${validate_component(Carousel, "Carousel").$$render(
    $$result,
    {
      images,
      class: "rounded-none md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[800px]",
      imgClass: "md:object-contain md:h-full md:w-fit",
      duration: 3e3
    },
    {},
    {
      default: ({ Indicators: Indicators2 }) => {
        return `${validate_component(Indicators2, "Indicators").$$render(
          $$result,
          {
            class: "translate-y-[50px] md:-translate-y-[10px]"
          },
          {},
          {}
        )}`;
      }
    }
  )}</div> <div class="mt-[80px]" data-svelte-h="svelte-o1xf18"><h3 class="font-serif text-[20px] font-semibold uppercase">The Venue</h3> <h4 class="font-serif text-[50px] font-medium tracking-[0.5px] my-[30px] flex gap-2">Villa Plenilunio
				<a href="https://www.instagram.com/villaplenilunio/" rel="noopener noreferrer" target="_blank" class="pt-2 hover:opacity-70"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" fill="none"><path d="M10.001 7.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm6.5-.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-6.5-2.75c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.408.15-.778.39-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C2.007 7.575 2 7.961 2 10.5c0 2.475.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333 1.104.052 1.49.058 4.029.058 2.475 0 2.878-.007 4.029-.058.782-.037 1.308-.142 1.797-.331a2.91 2.91 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08.19-.492.296-1.018.332-1.8.052-1.103.058-1.49.058-4.028 0-2.474-.007-2.878-.058-4.029-.037-.782-.143-1.31-.332-1.798a2.912 2.912 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331-1.103-.052-1.488-.058-4.028-.058ZM10 .5c2.717 0 3.056.01 4.123.06 1.064.05 1.79.217 2.427.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.884 4.884 0 0 1-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.427.465-1.067.047-1.406.06-4.123.06-2.717 0-3.056-.01-4.123-.06-1.064-.05-1.789-.218-2.427-.465a4.89 4.89 0 0 1-1.772-1.153A4.904 4.904 0 0 1 .525 17.05C.277 16.413.11 15.687.06 14.622.012 13.556 0 13.217 0 10.5c0-2.717.01-3.056.06-4.122.05-1.065.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 3.45 1.025C4.087.777 4.812.61 5.877.56 6.945.513 7.283.5 10 .5Z" fill="#1B1B1B"></path></svg></a></h4> <p class="font-sans text-[14px]">The venue is situated in Uluwatu, Bali. It is best to book for an accomodation in the Pecatu
				area. From there, all major things to do in Uluwatu is a 20 minute motorbike ride. Please
				consider checking the maps to see how far your intended accomodation from Villa Plenilunio,
				for easy pick up and drop off on our wedding day.
				<br><br>
				You can also stay outside Uluwatu. If surfing is your priority, Uluwatu waves is not beginner
				friendly. You can stay somewhere Kuta, Seminyak, or Canggu instead-- one hour away from Uluwatu.
				We can still help you arrange for a transportation.</p></div></div> </div>`;
});
const ArrowRightOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "strokeLinecap", "strokeLinejoin", "strokeWidth", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { strokeLinecap = ctx.strokeLinecap || "round" } = $$props;
  let { strokeLinejoin = ctx.strokeLinejoin || "round" } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { ariaLabel = "arrow right outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.strokeLinecap === void 0 && $$bindings.strokeLinecap && strokeLinecap !== void 0)
    $$bindings.strokeLinecap(strokeLinecap);
  if ($$props.strokeLinejoin === void 0 && $$bindings.strokeLinejoin && strokeLinejoin !== void 0)
    $$bindings.strokeLinejoin(strokeLinejoin);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}><path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="M19 12H5m14 0-4 4m4-4-4-4"></path></svg> `;
});
const BaliMap = "/_app/immutable/assets/bali-map.AtjarpcE.png";
const Stay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="min-h-svh py-[40px] px-[30px] md:py-[160px]" id="where-you-can-stay"><div class="max-w-[1248px] mx-auto"><div class="flex flex-col gap-[30px]" data-svelte-h="svelte-1n9io9g"><h3 class="font-serif text-[50px] font-medium text-center leading-[55px]">Where can you stay?</h3> <p class="text-center text-[14px]">Bali has everything for everyone. From five-star resorts, to thousands of smaller, yet just
				as amazing accommodations, and affordable Airbnbs</p></div> <div class="mt-[30px] flex flex-col gap-[30px] md:grid md:grid-cols-2"><div class="bg-[#E3E1DA] p-[30px] flex flex-col gap-[40px]"><p class="text-[14px]" data-svelte-h="svelte-155f1lt">If you are planning on staying for just a few days (3 nights 4days), and be there just for
					the wedding, you can opt to stay in these hotels:</p> <ul class="font-serif text-[16px]"><li class="font-bold py-[20px] border-b border-[#D2D0D0]"><a href="https://www.pleniluniovilla.com/terrazza-plenilunio/" target="_blank" rel="noopener noreferrer" class="flex justify-between items-center">Villa Plenilunio Terazza
							${validate_component(ArrowRightOutline, "ArrowRight").$$render($$result, { strokeWidth: "1px", size: "lg" }, {}, {})}</a></li> <li class="font-bold py-[20px] border-b border-[#D2D0D0]"><a href="https://www.fourseasons.com/jimbaranbay/" target="_blank" rel="noopener noreferrer" class="flex justify-between items-center">Four Seasons
							${validate_component(ArrowRightOutline, "ArrowRight").$$render($$result, { strokeWidth: "1px", size: "lg" }, {}, {})}</a></li> <li class="font-bold py-[20px] border-b border-[#D2D0D0]"><a href="https://www.marriott.com/en-us/hotels/dpsuw-renaissance-bali-uluwatu-resort-and-spa/overview/" target="_blank" rel="noopener noreferrer" class="flex justify-between items-center">Renaissance Uluwatu
							${validate_component(ArrowRightOutline, "ArrowRight").$$render($$result, { strokeWidth: "1px", size: "lg" }, {}, {})}</a></li> <li class="font-bold py-[20px] border-b border-[#D2D0D0] last:border-b-0"><a href="https://www.booking.com/hotel/id/swiss-belresort-pecatu.en-gb.html" target="_blank" rel="noopener noreferrer" class="flex justify-between items-center">Swissbel Hotel
							${validate_component(ArrowRightOutline, "ArrowRight").$$render($$result, { strokeWidth: "1px", size: "lg" }, {}, {})}</a></li></ul> <p data-svelte-h="svelte-j60chf">These are full-service hotels and are close to our venue. Of the four hotels, we have made
					an arrangement with Villa Plenilunio Terazza. They can offer our guests a 15% discount.
					Our coordinators from <a href="https://www.instagram.com/voweverwedding" target="_blank" rel="noopener noreferrer" class="font-serif italic font-bold">@voweverwedding</a> will be more than happy to make the arrangements for your bookings.</p></div> <div class="bg-[#E3E1DA]" data-svelte-h="svelte-aymjx1"><img${add_attribute("src", BaliMap, 0)} alt="Bali Map"></div></div> <p class="text-center text-[14px] mt-[50px]" data-svelte-h="svelte-1qkd0n2">If you plan on staying for a week or more, we suggest you try booking a villa thorugh AirBnb.
			You can book as a group.<br> If you are looking for a group to share a villa with, please message
			us and we will introduce you to the other guests. It will be a good way to meet other people too.</p></div></div>`;
});
const css$1 = {
  code: ".underline-hover.svelte-ueco7g{--underline-hover-color:#1B1B1B}",
  map: null
};
const Button_white = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  let btnClass2 = "";
  $$result.css.add(css$1);
  btnClass2 = twMerge("underline-hover py-[20px] px-[40px] font-serif text-[14px] italic font-normal bg-bgLight transition-colors duration-300 ease-in-out text-black border-black border disabled:cursor-not-allowed disabled:bg-white/50", $$props.class);
  return `<button${spread([escape_object($$restProps), { class: escape_attribute_value(btnClass2) }], { classes: "svelte-ueco7g" })}><div class="relative inline-block">${slots.default ? slots.default({}) : ``}</div> </button>`;
});
const Events = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="bg-[url('$lib/assets/images/events-bg.png')] bg-right bg-cover min-h-svh py-[60px] px-[30px]" id="events"><div class="max-w-[1248px] mx-auto"><div data-svelte-h="svelte-iizysi"><h3 class="font-serif text-[50px] text-white">Events</h3> <p class="text-white text-[14px]">Details of the events shall be announced around December. Please make sure to enable
				notification to receive updates.<br>Thank you.</p></div> ${validate_component(Timeline, "Timeline").$$render($$result, { class: "border-dashed mt-[30px]" }, {}, {
    default: () => {
      return `${validate_component(TimelineItem, "TimelineItem").$$render(
        $$result,
        {
          date: "Feb 28, 2025",
          classTime: "text-white font-serif text-[20px] font-semibold",
          classLi: "mb-[24px]"
        },
        {},
        {
          default: () => {
            return `<div class="bg-bgLight py-[30px] px-[20px] flex flex-col gap-[15px]" data-svelte-h="svelte-5qzkmo"><h3 class="font-serif text-[24px] font-medium">Welcome Dinner</h3> <h4 class="uppercase text-[14px]">Motif and Dress Code:</h4> <p class="text-[14px]">For the welcome dinner, may we request our guests to wear a comfortable <span class="font-serif italic font-bold">white cocktail or beach dress or pantsuits</span>
						for women, and for men
						<span class="font-serif italic font-bold">white button down shirts and pants.</span> Any
						comfortable footwear.</p></div>`;
          }
        }
      )} ${validate_component(TimelineItem, "TimelineItem").$$render(
        $$result,
        {
          date: "Mar 1, 2025",
          classTime: "text-white font-serif text-[20px] font-semibold",
          classLi: "mb-[24px]"
        },
        {},
        {
          default: () => {
            return `<div class="bg-bgLight py-[30px] px-[20px] flex flex-col gap-[15px]"><h3 class="font-serif text-[24px] font-medium" data-svelte-h="svelte-1nwvxtz">Wedding Day</h3> <h4 class="uppercase text-[14px]" data-svelte-h="svelte-1kz3us">Motif and Dress Code:</h4> <p class="text-[14px]" data-svelte-h="svelte-1np5v6z">Our wedding will be taking place outdoors. May we suggest <span class="font-serif italic font-bold">chic sundresses or gowns that are ankle to floor length.</span>
						The ceremony will be held poolside,
						<span class="font-serif italic font-bold">sandals, wedge or any comfortable heels</span>
						can be worn.
						<br>
						For men, <span class="font-serif italic font-bold">formal and simple.</span> We ask the
						men to wear a <span class="font-serif italic font-bold">dark suit and tie.</span><br>Sunglasses and sunscreens are a must too! <br>Our motif is
						<span class="font-serif italic font-bold">simple and sophisticated.</span> Wear your color.</p> ${validate_component(Button_white, "ButtonWhite").$$render($$result, { class: "font-sans not-italic" }, {}, {
              default: () => {
                return `<a href="https://www.pinterest.ph/ellasarmago/wedding-guests/?invite_code=1c39e90353f64d49ba5ab9def23e7fe5&sender=448038000337627362" target="_blank" rel="noopener noreferrer" data-svelte-h="svelte-tenw2y">View Pinterest Board</a>`;
              }
            })}</div>`;
          }
        }
      )}`;
    }
  })}</div></div>`;
});
const css = {
  code: ".underline-hover.svelte-1bx12nl{--underline-hover-color:#ffffff}",
  map: null
};
const Button_black = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  let btnClass2 = "";
  $$result.css.add(css);
  btnClass2 = twMerge("underline-hover py-[20px] px-[40px] bg-black text-white font-serif text-[14px] italic font-normal transition-colors duration-300 ease-in-out border disabled:cursor-not-allowed disabled:bg-white/50", $$props.class);
  return `<button${spread([escape_object($$restProps), { class: escape_attribute_value(btnClass2) }], { classes: "svelte-1bx12nl" })}><div class="relative inline-block">${slots.default ? slots.default({}) : ``}</div> </button>`;
});
const Gallery1 = "/_app/immutable/assets/gallery-1.XZGn3kAr.png";
const Gallery2 = "/_app/immutable/assets/gallery-2.UrnHGY0N.png";
const Gallery3 = "/_app/immutable/assets/gallery-3.eyw3X9E6.png";
const Gallery4 = "/_app/immutable/assets/gallery-4.UM6UVPMA.png";
const Gallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="min-h-svh py-[100px] flex flex-col items-center gap-[90px] bg-bgDark" id="gallery"><h3 class="font-serif text-[60px] text-center" data-svelte-h="svelte-1l6wcbb">Gallery</h3> <div class="grid grid-cols-2 md:grid-cols-4" data-svelte-h="svelte-18b15bu"><img${add_attribute("src", Gallery1, 0)} alt="Matt and Ella in red"> <img${add_attribute("src", Gallery2, 0)} alt="Matt and Ella in white laughing"> <img${add_attribute("src", Gallery3, 0)} alt="Matt and Ella running towards the camera" class="hidden md:block"> <img${add_attribute("src", Gallery4, 0)} alt="Matt and Ella riding a bicycle" class="hidden md:block"></div> ${validate_component(Button_black, "ButtonBlack").$$render($$result, {}, {}, {
    default: () => {
      return `<a href="/gallery" data-svelte-h="svelte-12wj958">View all photos</a>`;
    }
  })}</div>`;
});
const Registry = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="h-svh flex flex-col items-center justify-center px-[30px]" id="gift-registry"><h3 class="font-serif text-[60px]" data-svelte-h="svelte-1dbt0td">Gift Registry</h3> <p class="text-center mb-[70px] mt-[50px]" data-svelte-h="svelte-1dffmoq">We&#39;re so thrilled you&#39;re making the trip to Bali to share in our joy. Celebrating with you after
		we say &quot;I do&quot; is all we could ask for.
		<br>
		Should you insist on giving us gifts, please consider making a contribution to our honeymoon fund.
		<br>
		We would love to create lifelong memories filled with adventures.</p> ${validate_component(Button_black, "ButtonBlack").$$render($$result, {}, {}, {
    default: () => {
      return `<a href="/registry" data-svelte-h="svelte-qhvz3z">I would like to send something!</a>`;
    }
  })}</div>`;
});
const createSubscription = () => {
  const store = writable(false);
  const { subscribe: subscribe2, set, update } = store;
  return {
    subscribe: subscribe2,
    set: (val) => {
      set(val);
    },
    toggle: () => {
      update((val) => {
        return !val;
      });
    }
  };
};
const subscribed = createSubscription();
const Subscribe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $subscribed, $$unsubscribe_subscribed;
  $$unsubscribe_subscribed = subscribe(subscribed, (value) => $subscribed = value);
  z.object({
    email: z.string({ required_error: "email is required" }).email("must be a valid email"),
    code: z.string().optional()
  });
  let disabled = false;
  $$unsubscribe_subscribed();
  return `<form class="min-h-svh bg-[url('$lib/assets/images/subscribe-bg.png')] bg-cover bg-center flex flex-col items-center justify-center text-white py-[80px] px-[30px]" id="subscribe"><h3 class="font-serif text-[60px]" data-svelte-h="svelte-1hfekjc">Subscribe</h3> <p class="text-[16px] text-center my-[65px]" data-svelte-h="svelte-14gz8v2">Stay tuned for more updates about our wedding! You can message either of us but let&#39;s make use
		of this site we created.
		<br>
		We will be updating this site with all the exciting details leading up to our big day. Thank you
		for joining us on this incredible ride.</p> ${$subscribed ? `<p data-svelte-h="svelte-ld1w49">Thank you for Subscribing! We will email you for any updates!</p>` : `${validate_component(Input, "Input").$$render(
    $$result,
    {
      size: "lg",
      name: "email",
      placeholder: "johndoe@mail.com",
      type: "email",
      class: "rounded-none md:w-2/4 w-3/4"
    },
    {},
    {}
  )} ${``} ${validate_component(Button_black, "ButtonBlack").$$render(
    $$result,
    {
      class: "font-sans not-italic bg-transparent mt-[30px]",
      type: "submit",
      disabled
    },
    {},
    {
      default: () => {
        return `Submit`;
      }
    }
  )}`} <p class="my-[65px]" data-svelte-h="svelte-19mw4un">Love lots,</p> <div class="flex flex-col gap-[30px] items-center" data-svelte-h="svelte-1be80a9"><h3 class="text-[40px] tracking-[20px] uppercase font-serif leading-none me-[-20px]">Matthew</h3> <h3 class="text-[30px] font-serif italic">and</h3> <h3 class="text-[40px] tracking-[20px] uppercase font-serif leading-none me-[-20px]">Ella</h3></div></form>`;
});
const BreakImage1 = "/_app/immutable/assets/break-img-1.ss59eGVp.png";
const BreakImage2 = "/_app/immutable/assets/break-img-2.Supn-9vI.png";
const Image_break = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="grid grid-cols-1 md:grid-cols-2" data-svelte-h="svelte-1m55z59"><img${add_attribute("src", BreakImage1, 0)} alt="Matt and Ella sitting"> <img${add_attribute("src", BreakImage2, 0)} alt="Matt and Ella laughing while walking"></div>`;
});
export {
  Button_black as B,
  Events as E,
  Gallery as G,
  Hero as H,
  Image_break as I,
  Navigation as N,
  Our_story as O,
  Registry as R,
  Stay as S,
  The_venue as T,
  Subscribe as a,
  Button_white as b
};
