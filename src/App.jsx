import "./App.css";
import ModulePractice from "./Hero-section/Module-31";
import Todo from "./Hero-section/Todo";
import Conditional from "./Hero-section/Conditional";
import ActorDetails from "./Hero-section/ActorDetails";
import Developers from "./Hero-section/Developers";
import FuncationP from "./Hero-section/FuncationP";
import FunctionParam from "./Hero-section/FunctionParam";
import State from "./Hero-section/State";
import Batsman from "./Hero-section/Batsman";
import NestProperty from "./Hero-section/NestProperty";
import Style from "./Hero-section/Style";
import { Suspense, useState } from "react";
import List from "./Hero-section/List";
import FreeCodeCampCounter from "./Hero-section/FreeCodeCampCounter";
import Products from "./Hero-section/Products";
import Cart from "./Hero-section/Cart";
import Button from "./Button";

const userLists = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};
const productApi = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
};
const products = productApi();

function App() {
  const userListsResponse = userLists();
  const developerObj = [
    {
      name: "Aminul Islam",
      age: 23,
      profession: "Frontend Developer",
      country: "UK",
    },
    {
      name: "Khadijah Islam",
      age: 27,
      profession: "Backend Developer",
      country: "Spain",
    },
    {
      name: "Kenji Tanaka",
      age: 30,
      profession: "Mobile Developer",
      country: "Japan",
    },
    {
      name: "Amara Okafor",
      age: 25,
      profession: "DevOps Engineer",
      country: "Nigeria",
    },
    {
      name: "Lucas Dupont",
      age: 28,
      profession: "Full Stack Developer",
      country: "France",
    },
    {
      name: "Priya Sharma",
      age: 26,
      profession: "UI/UX Designer",
      country: "India",
    },
  ];
  const [cart, setCart] = useState([]);

  const handleButton = (product) => {
    setCart((prevCart) => {
      const exist = prevCart.find((item) => item.id === product.id);
      if (exist) {
        return prevCart.map((prevItem) =>
          prevItem.id === product.id
            ? { ...prevItem, quantity: prevItem.quantity + 1 }
            : prevItem,
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <>
      <ModulePractice name="I Phone 12 Pro Max" brand="Apple" price="$1200" />
      <ModulePractice name="Samsung s25 Ultra" brand="Samsung" price="$1300" />
      <ModulePractice name="I Phone 17 Pro Max" brand="Apple" price="$1399" />
      <Todo
        isDone={true}
        task="Practice React.js today at least 30 Minutes "
        time="30 Minutes"
      />
      <Todo
        isDone={false}
        task="Practice React.js today at least 30 Minutes "
        time="30 Minutes"
      />
      <Todo
        isDone={true}
        task="Read JavaScript documentation for 20 minutes"
        time="55 Minutes"
      />
      <Conditional
        isDone={false}
        task="Read JavaScript documentation for 20 minutes"
        time="34 Minutes"
      />
      <ActorDetails />
      <Developers />
      <FuncationP />
      <FunctionParam />
      <State />
      <Batsman />
      <div className="grid grid-cols-3 gap-2">
        {developerObj.map((developer) => (
          <NestProperty {...developer}></NestProperty>
        ))}
      </div>
      <Style isImportant={true} />
      <Suspense callBack={<h3>Loading</h3>} className="hi">
        <List userListsResponse={userListsResponse}></List>
      </Suspense>
      <FreeCodeCampCounter />
      <Suspense callBack={<h1>Loading</h1>}>
        <Products products={products} handleButton={handleButton} />
      </Suspense>
      <Cart cart={cart} handleDelete={handleDelete}></Cart>
    </>
  );
}

export default App;
