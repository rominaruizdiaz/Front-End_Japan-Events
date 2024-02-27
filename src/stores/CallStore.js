import { defineStore } from 'pinia';
import axios from 'axios';
import { ref, reactive, computed } from 'vue'

export const useEventStore = defineStore('event', () => {

  const events = reactive([])
  const isLoading = ref(false)

  const getEvents = async () => {

    const uri = import.meta.env.VITE_API_ENDPOINT_EVENTS

    try {
      isLoading.value = true
      
      const options = {
        baseURL: uri
      }

      const response = await axios.get('/allevents', options)
      const data = await response.data
      await Object.assign(events, data)
      isLoading.value = false
    } catch (error) {
      throw new Error('Error Loading API: ' + error)
    }
  }

  const deleteEvent = async (id) => {
    const uri = import.meta.env.VITE_API_ENDPOINT_EVENTS
    const options = {
      baseURL: uri,
      withCredentials: true,
    }

    try {
      const response = await axios.delete(`/allevents/${id}`, options)
      const status = response.status

      if (status == 202) {
        await getEvents()
        return true
      }
    } catch (error) {
      console.error('Error Deleting Event:', error);
    }
  }

  return { events, getEvents, deleteEvent }
})
