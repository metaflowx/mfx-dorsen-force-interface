import { serialize } from 'cookie'
import { decodeJWT } from "./decodeJWT";

export const setAuthCookies = (token: string) => {
  try {
    /// Decode token to get role and user info
    const tokenPayload = decodeJWT(token)
    if (!tokenPayload) return null

    const userRole = tokenPayload.role
    const userId = tokenPayload.id 

    /// 1. Set auth token cookie (middleware)
    const authCookie = serialize('auth_cookie_token', token, {
      httpOnly: false,
      maxAge: 60 * 60 * 24 * 2, /// 2 days 
      path: '/',
    })
    document.cookie = authCookie

    /// 2. Set role cookie (easy access)
    const roleCookie = serialize('user_role', userRole, {
      httpOnly: false,
      maxAge: 60 * 60 * 24 * 2,
      path: '/',
    })
    document.cookie = roleCookie

    /// 3. Set user ID cookie
    const userIdCookie = serialize('user_id', userId, {
      httpOnly: false,
      maxAge: 60 * 60 * 24 * 2,
      path: '/',
    })
    document.cookie = userIdCookie

    return userRole
  } catch (error) {
    console.error('Cookie setting error:', error)
    return null
  }
}

/// Clear all auth data
export const clearAuthCookies = () => {
  try {
    // Clear cookies
    document.cookie = 'auth_cookie_token=;max-age=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    document.cookie = 'user_role=;,max-age=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    document.cookie = 'user_id=;,max-age=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    // Clear localStorage
    if (typeof window !== "undefined") {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('userId')
    }
  } catch (error) {
    console.error('Clear cookies error:', error)
  }
}