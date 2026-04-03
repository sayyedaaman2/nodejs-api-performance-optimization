import cors from "cors";

export const corsSetup = () => {
  const env = process.env.NODE_ENV;

  let corsOptions;

  if (env === "development") {
    corsOptions = {
      origin: "http://localhost:3000",
      credentials: true,
    };
  }

  else if (env === "test") {
    corsOptions = {
      origin: "http://localhost:3001",
      credentials: true,
    };
  }

  else if (env === "production") {
    const allowedOrigins = [
      process.env.CLIENT_URL,
    ];

    corsOptions = {
      origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error(`CORS blocked: ${origin}`));
        }
      },
      credentials: true,
    };
  }

  else {
    throw new Error(`Invalid NODE_ENV: ${env}`);
  }

  return cors(corsOptions);
};