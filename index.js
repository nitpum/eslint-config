module.exports = {
  rules: {
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["./*/**/*", "../**"],
            message:
              "Sub-folder and parent directory relative imports are not allowed. Use absolute imports or same-directory imports (./xxx) instead.",
          },
        ],
      },
    ],
  },
};
