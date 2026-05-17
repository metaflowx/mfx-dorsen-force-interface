import {  useUserStore } from "@/store"
import axios from "axios"

export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'
 

export const User_Endpoint =  `/api/v1/user`

export const Referral_Endpoint =  `/api/v1/referral`

export const Asset_Endpoint =  `/api/v1/assets`

export const Invesment_Endpoint =  `/api/v1/investment`

export const Transaction_Endpoint =  `/api/v1/transaction`

export const Dashboard_Endpoint =  `/api/v1/dashboard`

export const Wallet_Endpoint =  `/api/v1/wallet`



export const ApiConfigs = {
    ///  User
    
    /// login
    login_with_email:`${User_Endpoint}/login`,

    /// signup
    signup_with_email:`${User_Endpoint}/signup`,

    /// reset
    reset_password:`${User_Endpoint}/reset`,
    change_password: `${User_Endpoint}/change/password`,

    /// verify
    verify_email:`${User_Endpoint}/verify/email`,
    verify_reset:`${User_Endpoint}/verify/reset`,


    /// Profile
    profile_me: `${User_Endpoint}/me`,

    /// Asset
    asset_create: `${Asset_Endpoint}/create`,
    asset_read_list: `${Asset_Endpoint}/read/list`,
    asset_remove: `${Asset_Endpoint}/remove`,
    asset_modify: `${Asset_Endpoint}/modify`,
    asset_read_one: `${Asset_Endpoint}/read/one`,

    /// invesment 
    invesment_invest: `${Invesment_Endpoint}/invest`,
    invesment_redeem: `${Invesment_Endpoint}/redeem`,
    invesment_read_stats: `${Invesment_Endpoint}/read/stats`,
    invesment_read_list: `${Invesment_Endpoint}/read/list`,
    invesment_read_admin_list: `${Invesment_Endpoint}/read/admin/list`,

    /// transaction
    tx_deposit_request: `${Transaction_Endpoint}/deposit/request`,
    tx_deposit_confirmed: `${Transaction_Endpoint}/deposit/confirmed`,
    tx_read_list: `${Transaction_Endpoint}/read/list`,
    tx_read_admin_list: `${Transaction_Endpoint}/read/admin/list`,
    tx_read_one: `${Transaction_Endpoint}/read/one`,
    tx_withdraw: `${Transaction_Endpoint}/withdraw`,


    /// wallet
    wallet_read_one: `${Wallet_Endpoint}/read/one`,

    /// referral
    referral_read_stats: `${Referral_Endpoint}/read/stats`,
    referral_read_upline: `${Referral_Endpoint}/read/upline`,
    referral_read_downline: `${Referral_Endpoint}/read/downline`,
    referral_read_one: `${Referral_Endpoint}/read/one`,
    
    ///  Admin
    /// dashboard
    admin_dashboard_read_summary: `${Dashboard_Endpoint}/read/summary`,
    admin_dashboard_read_portfolio: `${Dashboard_Endpoint}/read/portfolio`,



}

 export const BaseAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },

})

/// Request interceptor to add auth token
BaseAxios.interceptors.request.use(
  (config) => {
    const token = useUserStore.getState().token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/// Response interceptor to handle auth errors
BaseAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      useUserStore.getState().logout()
    }
    return Promise.reject(error)
  }
)
