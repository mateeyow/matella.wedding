import { e as private_env } from "./internal.js";
import PocketBase from "pocketbase";
async function handle({ event, resolve }) {
  event.locals.pb = new PocketBase(private_env.POCKETBASE_URL);
  const response = await resolve(event);
  if (response.status === 400) {
    const responseMessage = await response.json();
    if (responseMessage.message) {
      try {
        const message = JSON.parse(responseMessage.message);
        return new Response(JSON.stringify({ error: message }), {
          status: 400,
          headers: {
            "content-type": "application/json"
          }
        });
      } catch (err) {
        return response;
      }
    }
  }
  return response;
}
export {
  handle
};
