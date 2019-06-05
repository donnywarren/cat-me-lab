const apiKey = "4033e7eb-4a51-47ba-9e46-3e37b44b2404"
const button = document.querySelector("#try-me")
const picSection = document.querySelector("#catpic")
const dropdown = document.querySelector("select")

const getCategories = async () => {
  const response = await axios.get("https://api.thecatapi.com/v1/categories",
    {
      "x-api-key": apiKey
    })
  const categories = response.data;
  for (let i = 0; i < categories.length; i++) {
    dropdown.innerHTML += `<option id=${categories[i].id}>${categories[i].name}</option>`
  }
}
getCategories();

button.addEventListener("click", async () => {
  // picSection.innerHTML = "<h2>Loading...</h2>"
  const category = dropdown[dropdown.selectedIndex].id
  const response = await axios.get(`https://api.thecatapi.com/v1/images/search?category_ids=${category}`,
    {
      "x-api-key": apiKey
    })
  const catPic = response.data[0].url;
  picSection.innerHTML = `<img src=${catPic}>`
})