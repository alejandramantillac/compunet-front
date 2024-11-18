import axiosInstance from '../config/axiosConfig'
import { Ingredient } from '../types/model'

const API_PATH = 'v1/ingredients'

/**
 * Fetches ingredients from the server.
 * @param {number} page - The page number to fetch.
 * @param {number} size - The number of ingredients per page.
 * @returns {Promise<Ingredient[]>} A promise that resolves to an array of ingredients.
 */
const getIngredients = async (
  page: number = 0,
  size: number = 10
): Promise<Ingredient[]> => {
  const response = await axiosInstance.get<Ingredient[]>(API_PATH, {
    params: { page, size },
  })
  return response.data
}

export default {
  getIngredients,
}
