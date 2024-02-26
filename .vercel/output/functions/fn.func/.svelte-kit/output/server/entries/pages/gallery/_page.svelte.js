import { c as create_ssr_component, d as compute_rest_props, f as spread, i as escape_object, h as escape_attribute_value, k as each, a as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { twMerge } from "tailwind-merge";
import { M as Modal } from "../../../chunks/Modal.js";
import "../../../chunks/client.js";
import { b as base } from "../../../chunks/paths.js";
const Gallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let divClass;
  let $$restProps = compute_rest_props($$props, ["items", "imgClass"]);
  let { items = [] } = $$props;
  let { imgClass = "h-auto max-w-full rounded-lg" } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.imgClass === void 0 && $$bindings.imgClass && imgClass !== void 0)
    $$bindings.imgClass(imgClass);
  divClass = twMerge("grid", $$props.class);
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(divClass) }], {})}>${items.length ? each(items, (item) => {
    return `${slots.default ? slots.default({ item }) : ` <div><img${add_attribute("src", item.src, 0)}${add_attribute("alt", item.alt, 0)}${add_attribute("class", twMerge(imgClass, $$props.classImg), 0)}></div> `}`;
  }) : `${slots.default ? slots.default({ item: items[0] }) : ``}`}</div> `;
});
const G1 = "/_app/immutable/assets/g1.JYYgqU28.png";
const G2 = "/_app/immutable/assets/g2.q_47yFkM.png";
const G3 = "/_app/immutable/assets/g3.BZ5ATA_5.png";
const G4 = "/_app/immutable/assets/g2.q_47yFkM.png";
const G5 = "/_app/immutable/assets/g5.cc8yvJTZ.png";
const G6 = "/_app/immutable/assets/g6.pWUQnbVs.png";
const G7 = "/_app/immutable/assets/g7.2w58z9q_.png";
const G8 = "/_app/immutable/assets/g8.HSKi2_fl.png";
const G9 = "/_app/immutable/assets/g9._SCpXr8s.png";
const G10 = "/_app/immutable/assets/g10.Ccid9cEC.png";
const G11 = "/_app/immutable/assets/g11.sMCF4w2O.png";
const G12 = "/_app/immutable/assets/g12.EtjvKjNY.png";
const GU1 = "/_app/immutable/assets/gu1.LZD2-MZr.png";
const GU2 = "/_app/immutable/assets/gu2.MyWKPatr.png";
const GU3 = "/_app/immutable/assets/gu3.y53_Uqf5.png";
const GU4 = "/_app/immutable/assets/gu2.MyWKPatr.png";
const GU5 = "/_app/immutable/assets/gu5.39_tQPE1.png";
const GU6 = "/_app/immutable/assets/gu6._5IOP6H5.png";
const GU7 = "/_app/immutable/assets/gu7.GRAnqMlx.png";
const GU8 = "/_app/immutable/assets/gu8.dxJcgZIw.png";
const GU9 = "/_app/immutable/assets/gu9.S6X7AOjq.png";
const GU10 = "/_app/immutable/assets/gu10.J9nJ_ucg.png";
const GU11 = "/_app/immutable/assets/gu11.jJ0SLG8D.png";
const GU12 = "/_app/immutable/assets/gu12.DbO4VCuA.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let previousPage = base;
  let selectedImage = { src: "", alt: "", modal: "" };
  let isOpen = false;
  const col1 = [
    {
      alt: "Matt & Ella in red",
      src: G1,
      modal: GU1
    },
    {
      alt: "Matt & Ella in crossing the road holding hands",
      src: G2,
      modal: GU2
    },
    {
      alt: "Matt & Ella in smiling looking in the camera",
      src: G3,
      modal: GU3
    },
    {
      alt: "Matt & Ella in crossing the road holding hands",
      src: G4,
      modal: GU4
    }
  ];
  const col2 = [
    {
      alt: "Matt & Ella looking afar",
      src: G5,
      modal: GU5
    },
    {
      alt: "Matt & Ella talking to each other with a yellow wall background",
      src: G6,
      modal: GU6
    },
    {
      alt: "Matt & Ella looking at each other lovingly",
      src: G7,
      modal: GU7
    },
    {
      alt: "Matt & Ella in a cafe sipping a drink",
      src: G8,
      modal: GU8
    }
  ];
  const col3 = [
    {
      alt: "Matt & Ella with sunglasses on",
      src: G9,
      modal: GU9
    },
    {
      alt: "Matt & Ella laughing",
      src: G10,
      modal: GU10
    },
    {
      alt: "Matt & Ella crossing a bridge",
      src: G11,
      modal: GU11
    },
    {
      alt: "Matt & Ella in a cafe laughing",
      src: G12,
      modal: GU12
    }
  ];
  return `<div class="min-h-svh px-[40px] py-[80px] md:p-[100px]"><div class="flex flex-col gap-[30px] items-center"><h1 class="font-serif text-[60px] font-medium leading-3" data-svelte-h="svelte-2vb6rh">Gallery</h1> <h2 class="text-[16px]" data-svelte-h="svelte-16e2eni">Vietnam, December 2023</h2> <a${add_attribute("href", `${previousPage}#gallery`, 0)} class="text-[#ACA9A1]">Back to homepage</a></div> <div class="mt-12">${validate_component(Gallery, "Gallery").$$render($$result, { class: "gap-1 grid-cols-3 rounded-none" }, {}, {
    default: () => {
      return `${validate_component(Gallery, "Gallery").$$render($$result, {}, {}, {
        default: () => {
          return `${each(col1, (item) => {
            return `<button><img${add_attribute("src", item.src, 0)}${add_attribute("alt", item.alt, 0)} class="rounded-none h-auto max-w-full"> </button>`;
          })}`;
        }
      })} ${validate_component(Gallery, "Gallery").$$render($$result, {}, {}, {
        default: () => {
          return `${each(col2, (item) => {
            return `<button><img${add_attribute("src", item.src, 0)}${add_attribute("alt", item.alt, 0)} class="rounded-none h-auto max-w-full"> </button>`;
          })}`;
        }
      })} ${validate_component(Gallery, "Gallery").$$render($$result, {}, {}, {
        default: () => {
          return `${each(col3, (item) => {
            return `<button><img${add_attribute("src", item.src, 0)}${add_attribute("alt", item.alt, 0)} class="rounded-none h-auto max-w-full"> </button>`;
          })}`;
        }
      })}`;
    }
  })}</div></div> ${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      open: isOpen,
      size: "xl",
      outsideclose: true,
      classBackdrop: "opacity-90 bg-opacity-90",
      class: "bg-transparent items-center shadow-none",
      bodyClass: "overflow-visible space-y-0 text-white"
    },
    {},
    {
      default: () => {
        return `<img${add_attribute("src", selectedImage.modal, 0)}${add_attribute("alt", selectedImage.alt, 0)} class="h-full max-w-full rounded-lg mt-0 max-h-svh">`;
      }
    }
  )}`;
});
export {
  Page as default
};
