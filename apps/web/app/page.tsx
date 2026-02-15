import { prisma } from "@repo/db";

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <div>
      {users.map((user) => (
        <div
          key={user.id}
          style={{ border: "1px solid #222121", margin: "12px", padding: "4px" }}
        >
          Username: {user.username}
        </div>
      ))}
      <p>New @ddd</p>
    </div>
  );
}
