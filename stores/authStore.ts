import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth-store', {
    state: () => {
        return {
            authUser: {} as any,
            isLogged: false
        }
    },
    persist: true,
    actions: {
        async login(body: any) {
            const data: any = await useCustomFetch('/api/auth/login', {
                method: 'POST',
                body: body
            })
            if (data.error.value) {
                return data;
            }
            this.authUser = data.data._rawValue.data;
            this.isLogged = true;
            return data;
        },
        async register(body: any) {
            const data: any = await useCustomFetch('/api/auth/register', {
                method: 'POST',
                body: body
            })
            return data;
        },
        async loginWithGoogle(body: any) {
            const data: any = await useCustomFetch('/api/auth/google', {
                method: 'POST',
                body: {
                    idToken: body,
                }
            })
            this.authUser = data.data._rawValue.data;
            this.isLogged = true;
            navigateTo('/');
            return data;
        },
        async refreshToken() {
            const data: any = await useCustomFetch('/api/auth/refresh', {
                method: 'POST',
                body: { refreshToken: this.authUser.token.refreshToken }
            })
            this.authUser.token.accessToken = data.data._rawValue.data.accessToken;
            return data;
        },
        logout() {
            this.authUser = {};
            this.isLogged = false;
            navigateTo('/');
        },
        async getProfile() {
            const data: any = await useCustomFetch('/api/auth/profile')
            return data;
        }
    }
})