import Image from "next/image";
import { connectDB } from "@/lib/connectDB";
import { User } from "@/models/user";
import UserGrid from "./components/UserGrid";

export default async function Home() {
  await connectDB();
  const usersFromDb = await User.find({}, { name: 1, email: 1, image: 1 }).lean();

  // Convert to plain serializable objects (no Mongoose types or toJSON methods)
  const users = usersFromDb.map((u) => ({
    _id: String(u._id),
    name: u.name || '',
    email: u.email || '',
    image: u.image || null,
  }));

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans py-10">
      <main className="mx-auto max-w-5xl space-y-8 px-6">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/icon.png" alt="Vault" width={44} height={44} />
            <div>
              <h1 className="text-2xl font-bold text-emerald-800">Vault — Users</h1>
              <p className="text-sm text-zinc-600">Compact list of users (image, name, email)</p>
            </div>
          </div>
        </header>

        <section className="bg-white p-4 rounded-lg shadow-sm">
          <UserGrid users={users} />
        </section>
      </main>
    </div>
  );
}
