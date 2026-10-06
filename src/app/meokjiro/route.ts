const APP_STORE_URL = "https://apps.apple.com/kr/app/id6800724098";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.fourandsun.meokjiro";

function isAppleMobile(userAgent: string) {
  return (
    /iPhone|iPad|iPod/i.test(userAgent) ||
    (/Macintosh/i.test(userAgent) && /Mobile/i.test(userAgent))
  );
}

export function GET(request: Request) {
  const userAgent = request.headers.get("user-agent") ?? "";
  const storeUrl = isAppleMobile(userAgent) ? APP_STORE_URL : PLAY_STORE_URL;

  return new Response(null, {
    status: 307,
    headers: {
      "Cache-Control": "private, no-store",
      Location: storeUrl,
      Vary: "User-Agent",
    },
  });
}
