#!/usr/bin/env node
import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const cacheDir = path.join(root, ".build-cache");
const nextDevDir = path.join(root, ".next", "dev");

const pathsToHide = [
  { from: path.join(root, "src", "app", "api"), name: "api" },
  { from: path.join(root, "src", "app", "admin"), name: "admin" },
  { from: path.join(root, "src", "middleware.ts"), name: "middleware.ts" },
];

function moveToCache(from, name) {
  if (!existsSync(from)) return;
  const target = path.join(cacheDir, name);
  rmSync(target, { recursive: true, force: true });
  cpSync(from, target, { recursive: true });
  rmSync(from, { recursive: true, force: true });
}

function restoreFromCache(from, name) {
  const cached = path.join(cacheDir, name);
  if (!existsSync(cached)) return;
  rmSync(from, { recursive: true, force: true });
  cpSync(cached, from, { recursive: true });
}

function hideDevOnlyPaths() {
  mkdirSync(cacheDir, { recursive: true });
  for (const item of pathsToHide) {
    moveToCache(item.from, item.name);
  }
}

function restoreDevOnlyPaths() {
  for (const item of pathsToHide) {
    restoreFromCache(item.from, item.name);
  }
}

console.log("📦 بناء الموقع الثابت (Static Export)...\n");
console.log("   → إخفاء لوحة التحكم و API (للتطوير المحلي فقط)\n");

// Next.js may include stale dev route types during build.
// Clear .next/dev before static export to avoid type collisions.
rmSync(nextDevDir, { recursive: true, force: true });

hideDevOnlyPaths();

const result = spawnSync("npx", ["next", "build"], {
  cwd: root,
  stdio: "inherit",
  shell: true,
  env: { ...process.env, STATIC_EXPORT: "true" },
});

restoreDevOnlyPaths();

if (result.status !== 0) {
  console.error("\n❌ فشل البناء");
  process.exit(result.status ?? 1);
}

console.log("\n✅ تم البناء بنجاح!");
console.log("   → الملفات الجاهزة للنشر في مجلد: out/");
console.log("   → ارفع محتوى out/ على Cloudflare Pages أو أي استضافة static\n");
