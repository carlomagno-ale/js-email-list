//axios
axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then(response => {
    console.log(response);
    console.log(response.data.response);

  })
  .catch(error => console.error(error));