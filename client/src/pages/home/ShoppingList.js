import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { useDispatch } from "react-redux";
import { setItems } from "../../store";

import { data } from "../../data";
import Item from "../../components/item";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [items, setItems] = useState(data);
  const [category, setCategory] = useState("all");

  async function getItems() {
    const items = await fetch("http://localhost:2000/api/items", {
      method: "GET",
    });
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
  }

  useEffect(() => {
    getItems();
  }, []);

  const handleChange = (e, newValue) => {
    setCategory(newValue);
  };
  const newArrivals = items.filter((item) => item.category === "new");
  const bestSellers = items.filter((item) => item.category === "best");

  return (
    <Box width="80%" margin="80px auto">
      <h2>Our Produts</h2>
      <Tabs textColor="primary" value={items} onChange={handleChange}>
        <Tab label="All" value="all" />
        <Tab label="New arrivals" value="newArrivals" />
        <Tab label="Best sellers" value="bestSellers" />
      </Tabs>
      <Box>
        {value === "all" && items.map((item) => <Item item={item} />)}
        {value === "newArrivals" &&
          newArrivals.map((item) => <Item item={item} />)}
        {value === "bestSellers" &&
          bestSellers.map((item) => <Item item={item} />)}
      </Box>
    </Box>
  );
};

export default ShoppingList;
