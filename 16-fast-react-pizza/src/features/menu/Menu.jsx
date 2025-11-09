import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

// loaders : Data loading feature,It fetches data from API
// Provide theloader function to one of the routes.
// Data gets fetched as soon as the application goes on that route
// Once the data has arrived it will be provided to page component using custom hook

//
// creation of Loader
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
