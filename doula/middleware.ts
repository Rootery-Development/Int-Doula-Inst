import {
  clerkMiddleware,
  createRouteMatcher
} from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([ '/api/uploadthing','/test', '/sign-in(.*)', '/sign-up(.*)']);
// the test isn't working as intended , it will only redirect u to sign in
export default clerkMiddleware((auth, request) => {
  if(!isPublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}