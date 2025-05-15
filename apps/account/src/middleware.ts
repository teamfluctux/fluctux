import { NextRequest, NextResponse } from "next/server";
export { default } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;

  // If user is NOT logged in and trying to access any route [excluded authorization pages], show & redirect to the login page instead
  if (!token && pathname !== "/") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if(!token && pathname === "/"){
    return NextResponse.rewrite(new URL("/login", req.url));
  }
}

export const config = {
  matcher: [
    "/((?!^$|_next/static|_next/image|favicon.ico|login|signup|register|signin|sign-in|sign-up|log-in).*)",
  ],
};
