fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => json.forEach((m) => console.log(m.name)));
