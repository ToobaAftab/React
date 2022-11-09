
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react';

function App() {

  const [name,setName] = useState("Tooba");
  const [count,setCount] = useState(0);
  const [items,setItems] = useState([
      {
          id: 1,
          checked: false,
          item: "Item 1"
      },
      {
          id: 2,
          checked: true,
          item: "Item 2"
      },
      {
          id: 3,
          checked: false,
          item: "Item 3"
      }
  ]);

  const nameHandler = () => {
    const names = ["Tooba", "Kinza", "Hadia"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  }

  const handleClick = () => {
      setCount(count+1);
      console.log(count);
      setCount(count+1);
      console.log(count);
  }

  const handleClick2 = (name) => {
      console.log(count);
  }

  const handleClick3 = (e) => {
      console.log(e.target);
  }

  const handleCheck = (id) => {
      const listItems = items.map((item)=>item.id === id ? {...item, checked: !item.checked} : item);
      console.log(listItems)
      setItems(listItems);
      localStorage.setItems('shoppinglist' , JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id);
      setItems(listItems);
      localStorage.setItems('shoppinglist' , JSON.stringify(listItems));
  }

  return (
    <div className="App">
      <Header title="Grocery List"/>
      <Content 
        name = {name}
        items = {items}
        nameHandler = {nameHandler}
        handleClick = {handleClick}
        handleClick2 = {handleClick2}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}     
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
