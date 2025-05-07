const dbUrl = process.env.DB_URL

export default {
  dialect: "sqlite",
  schema: "./infrastructure/schema.ts",
  out: "./infrastructure/migrations/",
  // driver: "better-sqlite",
  dbCredentials: {
    // url: './infrastructure/db.sqlite',
    url: dbUrl as string,
  },
};
