fetch("http://localhost:3000/products/11", {
  method: "DELETE",
})
  .then((r) => r.json())
  .then(console.log)
  .catch(console.error);