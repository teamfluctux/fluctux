import { NextRequest, NextResponse } from "next/server";
// export { default } from "next-auth/middleware";
// import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest, res: NextResponse) {
  // const token = await getToken({ req });
  const token = null;
  const { pathname } = req.nextUrl;
  const url = req.nextUrl.clone();

  const redirectStatus = url.searchParams.get("redirect");
  const refreshToken = req.cookies.get("refreshToken");

  if (redirectStatus === "test") {
    return NextResponse.redirect(`${process.env.APP_BASE_URL}/?accessKey=123`);
  }
  // If user is NOT logged in and trying to access any route [excluded authorization pages], show & redirect to the login page instead
  if (!token && pathname !== "/") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (!token && pathname === "/") {
    return NextResponse.rewrite(new URL("/login", req.url));
  }
}

export const config = {
  matcher: [
    "/((?!^$|_next/static|_next/image|favicon.ico|login|signup|register|signin|sign-in|sign-up|log-in).*)",
  ],
};
