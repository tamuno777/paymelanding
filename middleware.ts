// middleware.ts
import { NextPageContext } from 'next';

const isRouteAccessible = (pathname: string) => {
  // Define the routes that are accessible without restriction
  const accessibleRoutes = ['/'];

  return accessibleRoutes.includes(pathname);
};

const redirectIfNotAccessible = (pathname: string, ctx: NextPageContext) => {
  if (!isRouteAccessible(pathname)) {
    // Redirect to the landing page or any other page
    if (typeof window === 'undefined') {
      // Server-side redirect
      ctx.res?.writeHead(302, { Location: '/' });
      ctx.res?.end();
    } else {
      // Client-side redirect
      window.location.href = '/';
    }
  }
};

export default redirectIfNotAccessible;

// import { isAuthenticated } from "@auth";
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";


// const protectedRoutes = ["/settings"];


// export default function middleware(req: NextRequest) {
//   if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
//     const absoluteURL = new URL("/", req.nextUrl.origin);
//     return NextResponse.redirect(absoluteURL.toString());
//   }
// }
