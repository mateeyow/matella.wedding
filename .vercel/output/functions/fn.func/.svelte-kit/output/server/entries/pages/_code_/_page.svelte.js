import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { B as Button_black, b as Button_white, N as Navigation, H as Hero, O as Our_story, T as The_venue, S as Stay, I as Image_break, E as Events, G as Gallery, R as Registry, a as Subscribe } from "../../../chunks/image-break.js";
import { M as Modal } from "../../../chunks/Modal.js";
import { w as writable } from "../../../chunks/index2.js";
import { p as page } from "../../../chunks/stores.js";
const createInvites = () => {
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
const invites = createInvites();
const Save = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let plusOne;
  let dinnerText;
  let $invites, $$unsubscribe_invites;
  $$unsubscribe_invites = subscribe(invites, (value) => $invites = value);
  let { data } = $$props;
  let open = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  plusOne = data.partner || "my plus one";
  dinnerText = "Yes, I can make it on Feb 28 for the Welcome Dinner";
  $$unsubscribe_invites();
  return `<div id="save-the-date" class="grid md:grid-cols-2 md:h-svh"><div class="md:h-svh py-[100px] px-[30px] md:px-[60px] md:py-[60px]"><h3 class="font-serif text-[50px] font-medium mb-[40px]" data-svelte-h="svelte-1fyfvw6">Save the date</h3> <p class="text-[14px]">Hi ${escape(data.name)},
			<br> <br> <br>
			With the sound of the waves and the sunset at our backs, we are beyond thrilled to extend our heartfelt
			invitation to you.
			<br> <br>
			Our special day promises a day filled with laughter, sunkissed skin, bottoms up, after-wedding
			hangover and most especially a memory that will linger in our hearts for a lifetime.
			<br> <br>
			Please join us in this &quot;intimate but rowdy&quot; celebration of our love. You are special to us, and
			we hope to share this moment with you like how you have shared your special moments with us.
			<br> <br>
			We are looking forward to celebrating with you. The courtesy of a reply is requested by
			<strong data-svelte-h="svelte-1n7pb59">May 15, 2024</strong>.</p> ${!$invites ? `<div class="flex flex-col gap-[10px] mt-[40px]">${validate_component(Button_black, "ButtonBlack").$$render($$result, { type: "button" }, {}, {
    default: () => {
      return `Yes, I am packed and ready to celebrate in person!`;
    }
  })} ${data.hasPlusOne ? `${validate_component(Button_black, "ButtonBlack").$$render($$result, {}, {}, {
    default: () => {
      return `Yes, and I will be bringing ${escape(plusOne)} with me.`;
    }
  })}` : ``} ${validate_component(Button_white, "ButtonWhite").$$render($$result, {}, {}, {
    default: () => {
      return `No, I will be there in spirit and will forever regret this decision.`;
    }
  })}</div>` : `<p class="text-[14px] mt-[40px]" data-svelte-h="svelte-1pgmho1">Thanks for your response! We hope to see you there!</p>`}</div> <div class="bg-[url('$lib/assets/images/save-the-date.png')] h-svh bg-bottom bg-no-repeat bg-cover"></div></div> ${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      open,
      size: "xl",
      outsideclose: false,
      dismissable: false,
      classBackdrop: "opacity-90 bg-opacity-90",
      class: "min-h-[500px] bg-bgLight shadow-none"
    },
    {},
    {
      default: () => {
        return `<div class="flex flex-col items-center justify-center h-full"><h3 class="text-[60px] font-serif font-medium text-black text-center leading-tight" data-svelte-h="svelte-5uwsy7">See you in Bali!</h3> <p class="text-[16px] text-black my-[40px] text-center" data-svelte-h="svelte-t70pah">Let&#39;s meet for a few drinks before the wedding day.</p> <div class="flex flex-col gap-[10px] w-full md:w-[80%]">${validate_component(Button_black, "ButtonBlack").$$render($$result, { type: "button" }, {}, {
          default: () => {
            return `${escape(dinnerText)}`;
          }
        })} ${validate_component(Button_white, "ButtonWhite").$$render($$result, { type: "button" }, {}, {
          default: () => {
            return `No, we&#39;ll see you on your wedding day.`;
          }
        })} <button class="text-[#ACA9A1] mt-[20px]" data-svelte-h="svelte-1fqt85r">Close</button></div></div>`;
      }
    }
  )}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `<main>${validate_component(Navigation, "Navigation").$$render($$result, { isPublic: false }, {}, {})} ${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(Save, "Save").$$render($$result, { data }, {}, {})} ${validate_component(Our_story, "OurStory").$$render($$result, {}, {}, {})} ${validate_component(The_venue, "Venue").$$render($$result, {}, {}, {})} ${validate_component(Stay, "Stay").$$render($$result, {}, {}, {})} ${validate_component(Image_break, "ImageBreak").$$render($$result, {}, {}, {})} ${validate_component(Events, "Events").$$render($$result, {}, {}, {})} ${validate_component(Gallery, "Gallery").$$render($$result, {}, {}, {})} ${validate_component(Registry, "Registry").$$render($$result, {}, {}, {})} ${validate_component(Subscribe, "Subscribe").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
