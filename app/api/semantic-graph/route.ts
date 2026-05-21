import { NextResponse } from "next/server";
import { listSemanticGraphNodes } from "../../../../src/core/semanticKnowledgeGraph";

export async function GET() {
  const nodes = await listSemanticGraphNodes();

  return NextResponse.json({
    status: "success",
    count: nodes.length,
    nodes,
  });
}
