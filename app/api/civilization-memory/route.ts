import { NextResponse } from "next/server";
import { listSemanticGraphNodes } from "../../../../src/core/semanticKnowledgeGraph";
import { listSemanticVectors } from "../../../../src/core/semanticVectorStore";

export async function GET() {
  const nodes = await listSemanticGraphNodes();
  const vectors = await listSemanticVectors();

  return NextResponse.json({
    status: "success",
    semanticNodes: nodes.length,
    semanticVectors: vectors.length,
    nodes,
    vectors,
  });
}
