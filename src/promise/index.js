const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("plus Ultra!!");
    } else {
      reject("Opps! fail");
    }
  });
};

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("pluuuus Ultra!!");
      }, 3000);
    } else {
      setTimeout(() => {
        reject("Opps! you fail");
      }, 3000);
    }
  });
};

somethingWillHappen()
  .then(response => console.log(response))
  .catch(err => console.error(err))

somethingWillHappen2()
  .then(response => console.log(response))
  .catch(err => console.error(err))