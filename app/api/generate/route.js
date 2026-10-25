import { portraits, imageUrl } from "@/data/mock";
export async function POST(request) {
  const { searchParams } = new URL(request.url);
  if (searchParams.has("error")) return Response.json({ error: "Generation failed" }, { status: 500 });
  const { prompt, type = "image", count = 4, model = "Model", aspect = "1:1" } = await request.json();
  await new Promise(resolve => setTimeout(resolve, 1200 + Math.random() * 800));
  return Response.json({ id: `generation-${Date.now()}`, prompt, type, model, aspect, images: Array.from({ length: Math.min(Number(count) || 4, 6) }, (_, i) => imageUrl(portraits[(Date.now() + i) % portraits.length])) });
}
