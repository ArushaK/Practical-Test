import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Item = ({ item }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  return (
    <Box>
      <img alt={item.title} width="300px" height="400px" src={item.img} />
      <Typography>{item.name}</Typography>
      <Typography>{item.price}</Typography>
      <Typography>{item.desc}</Typography>
      <Button onClick={dispatch(add({ item: { ...item, count } }))}></Button>
    </Box>
  );
};

export default Item;
