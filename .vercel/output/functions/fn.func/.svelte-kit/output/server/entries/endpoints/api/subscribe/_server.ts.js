import { e as error, j as json } from "../../../../chunks/index.js";
import { ClientResponseError } from "pocketbase";
const POST = async ({ request, locals, cookies }) => {
  console.log("here");
  const { email } = await request.json();
  console.log("email", email);
  const code = cookies.get("code");
  try {
    await locals.pb.collection("subscribers").create({ email, code });
  } catch (err) {
    if (err instanceof ClientResponseError) {
      return error(500, err.message);
    }
    console.error("unhandled error: ", err);
    return error(500, "An error occurred");
  }
  return json({ success: true });
};
export {
  POST
};
