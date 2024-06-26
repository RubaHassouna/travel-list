import { useState } from "react";
import Form from "./Form"
import Logo from "./Logo"
import PackingList from "./PackingList"
import  Stats  from "./Stats";



export default function App() {
  const [items, setItem] = useState([]);
  function handleAddItem(item) {
    setItem((items) => [...items, item]);
  }

  function handleDelet(id) {
    setItem((items) => items.filter((item) => item.id !== id));
    console.log(id);
  }
  function handleToggleItem(id) {
    setItem((items)=>
      items.map((item)=>
      item.id === id ?{...item, packed: !item.packed}
      :item
    )          
  )
  }

  function handleClearList(){
    const confirmed=window.confirm(
      "Are you sure you want to delet all items?"
    )
   if(confirmed) setItem([])
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList items={items} onDeletingItem={handleDelet}
      onTpggleItem={handleToggleItem} onClearList={handleClearList}/>
      <Stats items={items} />
    </div>
  );
}



