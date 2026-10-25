import { initialHistory } from "@/data/mock";
export async function GET() { return Response.json(initialHistory); }
