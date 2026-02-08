import "dotenv/config";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   console.log("khushi");
//   console.error("ERROR: MONGODB_URI must be set in .env");
//   process.exit(1);
// }

async function main() {
  try {
    const startedAt = Date.now();

    await mongoose.connect(MONGODB_URI, { bufferCommands: false });

    const elapsed = Date.now() - startedAt;

    console.log(
      `OK: Connected to MongoDB [db="${mongoose.connection.name}", host="${mongoose.connection.host}", time=${elapsed}ms]`
    );

    await mongoose.connection.close();
    process.exit(0);
  } catch (err) {
    console.error("ERROR: Database connection failed");
    console.error(err);
    process.exit(1);
  }
}

main();
