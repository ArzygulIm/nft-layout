fetch('../db/collections.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
