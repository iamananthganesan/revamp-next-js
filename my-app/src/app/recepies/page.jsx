//Recipe Server component we're not suppose to use the useState and useEffect hooks and all in server component
//Server side rendering
const Recipies = async () => {
  //FETCH ALLL THE RECIPES
  const fetchAllRecepies = async () => {
    try {
      const response = await fetch("https://dummyjson.com/recipes",{
        next:{
            revalidate: 40 // revalidate this api in every 40 seconds
        }
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const data = await fetchAllRecepies();

  return (
    <div>
      {data?.recipes.map((recipe) => {
        return <div key={recipe.id}>{recipe.name}</div>;
      })}
    </div>
  );
};

export default Recipies;
