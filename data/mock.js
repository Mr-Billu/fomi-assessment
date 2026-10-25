export const portraits = [
  "photo-1534528741775-53994a69daeb", "photo-1531123897727-8f129e1688ce", "photo-1524504388940-b1c1722653e1", "photo-1529139574466-a303027c1d8b",
  "photo-1508214751196-bcfd4ca60f91", "photo-1526510747491-58f928ec870f", "photo-1534528741775-53994a69daeb", "photo-1524504388940-b1c1722653e1",
  "photo-1531123897727-8f129e1688ce", "photo-1529139574466-a303027c1d8b", "photo-1508214751196-bcfd4ca60f91", "photo-1526510747491-58f928ec870f",
];
export const imageUrl = (id, width = 700) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
export const initialHistory = portraits.slice(0, 14).map((id, i) => ({ id: `hist-${i}`, image: imageUrl(id, 180), prompt: "Portrait study in warm natural light", type: "image" }));
export const initialGeneration = { id: "initial", prompt: "A professional portrait photograph of a smiling 37-year-old red-headed woman with warm brown eyes and softly tousled auburn hair framing her face. She is turned slightly towards the viewer, offering a genuine and approachable expression. She is wearing a cream-colored cashmere sweater and delicate gold earrings. The background is a softly blurred expanse of muted gray and beige tones, suggesting a modern art gallery.", model: "Model", type: "image", images: portraits.slice(0, 8).map(id => imageUrl(id)) };
