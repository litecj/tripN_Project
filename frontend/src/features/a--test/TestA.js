import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Icon } from "@iconify/react";
import eyeFill from "@iconify/icons-eva/eye-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";
import {
  Box,
  Typography,
  Radio,
  InputLabel,
  FormControl,
  NativeSelect,
  Modal,
  Container,
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Button,
  Divider,
} from "@mui/material";

export default function App() {
  const selectList = ["apple", "banana", "grape", "orange"];
  const [Selected, setSelected] = useState("");

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="App">
      <h1>Select in React</h1>
      <div>
        <select onChange={handleSelect} value={Selected}>
          {selectList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <hr />
        <p>
          Selected: <b>{Selected}</b>
        </p>
      </div>
    </div>
  );
}
