// Axios calls will need to be formatted like this:
// axios.get("your endpoint url",
//     {
//       "x-api-key": "your API Key
//     })

// https://api.thecatapi.com/v1/images/search?category_ids=${categoryId}



// ====================================
// ========GLOBAL VARIABLES============
// ====================================

const api_key = { "x-api-key": "6f27dff2-af88-44c8-8512-4a144eef205c" };
const select = document.querySelector("select");
const tryMeButton = document.querySelector("#try-me");




// ====================================
// ========SELECT DROP DOWN============
// ====================================

const getCategories = async () => {

  const response = await axios.get("https://api.thecatapi.com/v1/categories", { api_key });
  response.data.forEach((category) => {
    select.innerHTML += `
<option value=${category.id}>${category.name}</option>`
  })
}

getCategories();



// ====================================
// =======IMAGE GET REQUEST============
// ====================================

tryMeButton.addEventListener('click', async () => {
  const response = await axios.get(`https://api.thecatapi.com/v1/images/search?category_ids=${select.value}`, api_key)
  const catPicDiv = document.querySelector("#catpic");
  catPicDiv.innerHTML = `
  <img src=${response.data[0].url} />`

});
