//Recipe Server component we're not suppose to use the useState and useEffect hooks and all in server component
//Server side rendering

//FETCH ALLL THE RECIPES
const fetchAllRecipies = async () => {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//FETCH RECIPE BY ID
const fetchRecipeById = async (recipe_id) => {
  try {
    const response = await fetch(`https://dummyjson.com/recipes/${recipe_id}`,{
      next: {
        revalidate: 70, // revalidate every 70 seconds
      }
    });
    const data = await response.json();
    console.log("dta",data)
    return data.name;
  } catch (error) {
    console.log(error);
  }
};

// const generateStaticParams = async () => {
//   const allRecipes = await fetchAllRecipies();
//   allRecipes.recipes.map((recipe) => {
//     return { slug: recipe.id };
//   });
// };

const RecipiesById = async ({ params }) => {
  const { recipe_id } = await params;
  console.log("recipe_id",recipe_id)
  const responseofRecipeId = await fetchRecipeById(recipe_id);

  console.log(responseofRecipeId);

  return <div>Would you like to taste this recipe - {responseofRecipeId}</div>;
};

export default RecipiesById;