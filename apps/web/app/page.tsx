import { prisma } from "@repo/db";

type User = {
  id: string;
  username: string;
  password: string;
};

export default async function Home() {
  const users: User[] = await prisma.user.findMany();

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Users</h1>

      <div>
        {users.map((user: User) => (
          <div
            key={user.id}
            style={{
              border: "1px solid #dddddd00",
              borderRadius: "8px",
              padding: "12px",
              marginBottom: "10px",
              backgroundColor: "#fafafa33",
            }}
          >
            <strong>Username:</strong> {user.username}
          </div>
        ))}
      </div>

      <p style={{ textAlign: "center", marginTop: "20px", color: "gray" }}>
        Total Users: {users.length}
      </p>
    </div>
  );
}
