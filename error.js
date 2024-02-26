setTimeout(() => {
  throw new Error("Oops");
}, 300);

process.on("uncaughtException", () => {
  console.log("error");
});

process.on("unhandledRejection", () => {
  console.log("error");
});
