import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { getData } from "./api/data";
import MediaCard from "./components/card";

function App() {
  const [d, setData] = useState([]);
  async function getDataFromApi() {
    const { data } = await getData();
    if (data) {
      setData(data);
    }
  }
  
  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <Box>
      {d.map((item) => (
        <MediaCard name={item.name} avatar={item.avatar} />
      ))}
    </Box>
  );
}

export default App;
