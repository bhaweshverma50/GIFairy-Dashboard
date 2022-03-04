import { GetServerSidePropsContext } from "next";

export const validateCookies = async (ctx: GetServerSidePropsContext) => {
  const sessionId = ctx.req.cookies["connect.sid"];
  return sessionId
    ? {
        cookie: `connect.sid=${sessionId}`,
      }
    : false;
};
