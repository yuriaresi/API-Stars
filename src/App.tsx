import React, { useEffect, useState } from "react";
import axios from "axios";
import { StarCard } from "./components/cards";
import styled from "styled-components";
import "./App.css";
import { InputStyled, Select } from "./components/cards/styled";

const TitleStyled = styled.h1`
  font-size: 6em;
  font-family: "Arial", sans-serif;
  background: linear-gradient(to right, #106295, #6b90ab, #b6c8d3);
  -webkit-background-clip: text;
  color: transparent;
`;

function App() {
  const [stars, setStars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("isAll");

  const [searchFilteredStars, setSearchFilteredStars] = useState([]);
  const [typeFilteredStars, setTypeFilteredStars] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.le-systeme-solaire.net/rest/bodies/")
      .then((results) => {
        setStars(results.data.bodies);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const filteredBySearch = stars.filter((star: any) =>
      star.englishName.toLowerCase().includes(search.toLowerCase())
    );
    setSearchFilteredStars(filteredBySearch);
  }, [search, stars]);

  useEffect(() => {
    if (typeFilter === "isAll") {
      setTypeFilteredStars(stars);
    } else {
      const filteredByType = stars.filter(
        (star: any) =>
          star.bodyType === typeFilter &&
          star.englishName.toLowerCase().includes(search.toLowerCase())
      );
      setTypeFilteredStars(filteredByType);
    }
  }, [typeFilter, search, stars]);

  const filteredStars =
    search.length > 0 && typeFilter !== "isAll"
      ? searchFilteredStars.filter((star: any) => star.bodyType === typeFilter)
      : search.length > 0
      ? searchFilteredStars
      : typeFilter !== "isAll"
      ? typeFilteredStars
      : stars;

  return (
    <>
      {/* {JSON.stringify(stars)} */}

      <TitleStyled>The Galaxy 🪐</TitleStyled>

      <Select
        name="select"
        value={typeFilter}
        onChange={(e) => setTypeFilter(e.target.value)}
      >
        <option value="isAll">All</option>
        <option value="Star">Star</option>
        <option value="Planet">Planet</option>
        <option value="Dwarf Planet">Dwarf Planet</option>
        <option value="Asteroid">Asteroid</option>
        <option value="Comet">Comet</option>
        <option value="Moon">Moon</option>
      </Select>

      <div>
        <InputStyled
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Name:"
        />
      </div>

      {loading && "Loading..."}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredStars.map((star: any) => (
          <StarCard
            name={star.englishName}
            isPlanet={star.isPlanet}
            density={star.density}
            gravity={star.gravity}
            discoveryDate={star.discoveryDate}
            discoveredBy={star.discoveredBy}
          />
        ))}
      </div>
    </>
  );
}

export default App;
