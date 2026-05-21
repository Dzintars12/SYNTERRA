import { NextResponse } from "next/server";
import { listUsers } from "../../../../src/server/userRepository";

export async function GET() {
  const users = await listUsers();

  return NextResponse.json({
    status: "success",
    count: users.length,
    users,
  });
}
