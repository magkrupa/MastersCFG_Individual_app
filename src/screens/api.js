import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/header';


export default function Data() {

  let poke = {"id": 0, "name": "", "height": 0, "weight": 0, "base_experience": 0, "abilities": [{"ability": {"name": ""}}], "moves": [{"move": {"name": ""}}]};
  let news = {"articles": [{"author": "", "title": "", "publishedAt": "", "url": "", "source": {"Id": 0, "Name": ""}}]}
   
  const [pokeData, setPokeData] = useState(poke);
  const [newsData, setNewsData] = useState(news);

  const fetchPokeData = async (pokemon) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
    try {
      let response = await fetch(url, {
            method: 'GET',
            // headers: {
            // "Accept": "application/json",
            // 'Content-Type': 'application/json'
            // }
        });
      let data = await response.json();
      setPokeData(data);
      console.log(data);
    } catch (e) {
      console.log(e)
    }
  }

  const fetchNewsData = async (query) => {
    let API_KEY = '9daebab03ee54aeab4885288662be845';
    let url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;
    try {
      let response = await fetch(url, {
            method: 'GET',
        });
      let data = await response.json();
      setNewsData(data);
      console.log(data);
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchPokeData("ditto");
    fetchNewsData("Elon musk")
  }, []);
          
  return ( 
    <View style={styles.container}>
      <ScrollView>
      <Header text='Pokemon API'></Header>
      <Text>Pokemon Name: {pokeData.name}</Text>
      <Text>Base experience: {pokeData.base_experience}</Text>
      <Text>Height: {pokeData.height}</Text>
      <Text>Weight: {pokeData.weight}</Text>
      <Text>Abilities: </Text>
      {pokeData.abilities.map((item) => {return <Text>Ability name: {item.ability.name}</Text>})}
      <Text>Moves: </Text>
      {pokeData.moves.map((item) => {return <Text>Move name: {item.move.name}</Text>})}
      <Header text='News API'></Header>
      {newsData.articles.map((item) => {return <Text>{item.title} written by: {item.author} </Text>})}
      </ScrollView>
    </View> 
);}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff1f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});