import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface User {
    id: string,
    email: string,
    isEmailVerified: boolean,
    role: string,
    status: string,
    referralCode: string,
}



interface UserState {
    token: string | null
    user: User | null
    isAuthenticated: boolean
    setToken: (token: string | null) => void
    setUser: (user: User | null) => void
    clearUser: () => void
    logout: () => void
}

export const useUserStore = create(
    persist(
        immer<UserState>((set) => {
            return {
                token: null,
                user: null,
                isAuthenticated: false,
                setToken: (token) => set((state) => {
                    state.token = token
                    state.isAuthenticated = !!token
                }),
                setUser: (user) => set((state) => {
                    state.user = user
                }),
                clearUser: () => set((state) => {
                    state.user = null
                }),
                logout: () => set((state) => {
                    state.token = null
                    state.isAuthenticated = false
                }),
            }
        }),
        {
            name: 'user-storage',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                token: state.token,
                isAuthenticated: state.isAuthenticated
            }),
        }
    )
)


