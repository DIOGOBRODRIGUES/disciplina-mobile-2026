const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemons = async (limit = 30) => {
  try {
    const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Erro ao buscar Pokémons:", error);
    return [];
  }
};