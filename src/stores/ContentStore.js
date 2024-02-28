import { defineStore } from 'pinia';
import axios from 'axios';

export const useContentStore = defineStore('content', {
  state: () => ({
    content: null,
    isLoading: false, 
  }),
  actions: {
    async fetchContentById(id_event) {
      this.isLoading = true; 
      const response = await axios.get(`http://localhost:8080/api/v1/allevents/${id_event}`);
      this.content = response.data;
      this.isLoading = false; 
  },
},

});