module.exports = {
  rules: {
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["./*/*", "../*"],
            message:
              "Sub-directory and parent directory relative imports are not allowed. Use absolute imports or same-directory imports (./xxx) instead.",
          },
        ],
      },
    ],
  },
};
