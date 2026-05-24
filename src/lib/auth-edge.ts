export const ADMIN_COOKIE = "zahra_admin_session";

function getSecret(): string {
  return process.env.ADMIN_SECRET ?? process.env.ADMIN_PASSWORD ?? "";
}

function toBase64Url(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

async function signPayload(payload: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
  return toBase64Url(new Uint8Array(signature));
}

function fromBase64Url(str: string): string {
  const base64 = str.replace(/-/g, "+").replace(/_/g, "/");
  const pad = base64.length % 4;
  const padded = pad ? base64 + "=".repeat(4 - pad) : base64;
  return atob(padded);
}

export async function verifySessionTokenEdge(token: string | undefined): Promise<boolean> {
  if (!token) return false;

  try {
    const secret = getSecret();
    if (!secret) return false;

    const [payload, sig] = token.split(".");
    if (!payload || !sig) return false;

    const expected = await signPayload(payload, secret);
    if (!timingSafeEqual(sig, expected)) return false;

    const decoded = JSON.parse(fromBase64Url(payload)) as { exp: number };
    return Date.now() < decoded.exp;
  } catch {
    return false;
  }
}
