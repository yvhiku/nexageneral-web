export const dynamic = "force-static";

const BODY = "google-site-verification: google167835fadb409db0.html\n";

export function GET() {
  return new Response(BODY, {
    headers: {
      "Content-Type": "text/html; charset=UTF-8",
    },
  });
}
