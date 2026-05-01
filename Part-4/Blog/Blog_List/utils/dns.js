import dns from "node:dns";

// Set DNS servers explicitly to resolve Atlas SRV records
console.log("DNS Servers:", dns.getServers());
dns.setServers(["1.1.1.1"]);
console.log("DNS Servers:", dns.getServers());

// Database Connection
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://127.0.0.1:27017";

try {
  console.log("Trying to connect to MongoDB...");
  await mongoose.connect(MONGO_URI);
  console.log("Connected to MongoDB successfully");
} catch (error) {
  console.error("MongoDB connection error:", error);
}