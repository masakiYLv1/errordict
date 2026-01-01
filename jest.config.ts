import type { Config } from "jest";

const config: Config = {
  rootDir: "./",
  testEnvironment: "jest-fixed-jsdom",
  setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/mocks/fileMock.js",
    "\\.(css|scss)$": "<rootDir>/test/mocks/fileMock.js",
    "@/lib/supabaseClient$": "<rootDir>/src/__mocks__/supabaseClient.ts",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

export default config;
