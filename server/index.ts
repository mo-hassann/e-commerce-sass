import { AuthConfig, initAuthConfig } from "@hono/auth-js";
import { Context, Hono } from "hono";
import { logger } from "hono/logger";
import provider from "@/auth.config";
import v1 from "./v1";

const app = new Hono().basePath("/api");

app.all("*", logger());
app.use("*", initAuthConfig(getAuthConfig));
app.onError((err, c) => {
  console.error(`${err}`);
  return c.json({ errorMessage: err.message, fullError: err }, 500);
});

const routes = app.route("/v1", v1);

export type AppType = typeof routes;
export default app;

function getAuthConfig(c: Context): AuthConfig {
  return {
    secret: c.env.AUTH_SECRET,
    ...provider,
  };
}
