// 여기에 1번 문제의 답을 작성하세요.
async function B() {
  const data = await fetch("https://dummyjson.com/products");
  const result = await data.json();
  console.log(result);
}
B();

// 여기에 2번 문제의 답을 작성하세요.
async function F() {
  const info = await fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "BMW Pencil",
      /* other product data */
    }),
  });
  const parse = await info.json();
  console.log(parse);
}
F();
