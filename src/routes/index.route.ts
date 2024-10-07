import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";
import { createMessageObjectSchema } from "stoker/openapi/schemas";

import { createRouter } from "@/lib/create-app";

const tags = ["Index"];

const router = createRouter().openapi(
  createRoute({
    tags,
    method: "get",
    path: "/",
    responses: {
      [HttpStatusCodes.OK]: jsonContent(
        createMessageObjectSchema("Syntax Task API"),
        "Syntax Task API Index",
      ),
    },
  }),
  (c) => {
    return c.json({
      message: "Syntax Task API",
    }, HttpStatusCodes.OK);
  },
);

export default router;
