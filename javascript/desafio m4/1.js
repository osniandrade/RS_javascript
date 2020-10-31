function wait(miliseconds) {
  return new Promise(resolve => setTimeout(resolve, miliseconds));
}

async function checaIdade(idade) {
  await wait(3000);
  return new Promise(function (resolve, reject) {
    if (idade > 18) {
      resolve();
    } else {
      reject();
    }
  });
}

checaIdade(20)
  .then(function () {
    console.log("Maior que 18");
  })
  .catch(function () {
    console.log("Menor que 18");
  });
