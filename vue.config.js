module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/" : "/",
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "Demo-task",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },
};
