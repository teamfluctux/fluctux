import { NextRequest, NextResponse } from "next/server";
export { default } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;

  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // If user is NOT logged in and trying to access "/", show the login page instead
  if (!token && pathname === "/") {
    return NextResponse.rewrite(new URL("/login", req.url));
  }
}

// Apply middleware to only the homepage
export const config = {
  matcher: ["/:path*"],
};
