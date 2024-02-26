import { r as redirect } from "../../../chunks/index.js";
const load = async ({ params, locals, cookies }) => {
  cookies.set("code", params.code, { path: "/" });
  try {
    const record = await locals.pb.collection("invites").getFirstListItem(`code = "${params.code}"`);
    return record;
  } catch (err) {
    console.error("err", err);
    return redirect(302, "/");
  }
};
export {
  load
};
