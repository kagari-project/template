/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: [
    "js",
    "json",
    "ts"
  ],
  collectCoverageFrom: [
    "{apps}**/*.(t|j)s"
  ],
  coverageDirectory: "../coverage",

  projects: [
    {
      displayName: 'apps/admin',
      testMatch: [
        '<rootDir>/apps/admin/src/*.spec.(t|j)s'
      ]
    },
    {
      displayName: 'apps/server',
      testMatch: [
        '<rootDir>/apps/server/src/*.spec.(t|j)s'
      ]
    },
  ]
};
