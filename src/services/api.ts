import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://api.salic.cultura.gov.br/v1/projetos/?limit=100&format=json',
});