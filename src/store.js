import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import axios from './axios'

export const useAuthStore = create(
  persist(
    set => ({
      token: '',
      role: '',
      user: '',
      email: '',
      isLoggedIn: false,
      setIsLoggedIn: isLoggedIn => set(state => ({ isLoggedIn: isLoggedIn })),
      setRole: role => set(state => ({ role: role })),
      setName: user => set(state => ({ user: user })),
      setEmail: email => set(state => ({ email: email })),
      setToken: token => set(state => ({ token: token }))
    }),
    {
      name: 'global',
      getStorage: () => localStorage
    }
  )
)


export const useContentStoe = create(
  set => ({
    courses:[],
    fetchCourses: async () => {
      const data = await (await axios.get('/getcourse')).data;
      set((state) => ({ courses: data }));
    },
  })
)

