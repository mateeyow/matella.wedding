import { e as error, j as json } from "../../../../chunks/index.js";
import { ClientResponseError } from "pocketbase";
const POST = async ({ request, locals }) => {
  const payload = await request.json();
  try {
    await locals.pb.collection("invites").update(payload.id, payload);
  } catch (err) {
    console.error("Error updating invites with payload: ", payload);
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
