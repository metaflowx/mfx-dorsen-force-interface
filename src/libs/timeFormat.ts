/**
 * Convert UTC ISO string to local date with Intl.DateTimeFormat
 * @param {string} isoString - ISO string
 * @param {Intl.DateTimeFormatOptions} options - DateTimeFormat options
 * @returns {string} Formatted local date
 */
export const formatLocalDate = (
  isoString: string, 
  options: Intl.DateTimeFormatOptions = {}
): string => {
  if (!isoString) return '';
  
  const date = new Date(isoString);
  
  if (isNaN(date.getTime())) {
    return '';
  }
  
  return new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    ...options
  }).format(date);
};

/**
 * Convert UTC ISO string to local datetime with Intl.DateTimeFormat
 * @param {string} isoString - ISO string
 * @param {Intl.DateTimeFormatOptions} options - DateTimeFormat options
 * @returns {string} Formatted local datetime
 */
export const formatLocalDateTime = (
  isoString: string, 
  options: Intl.DateTimeFormatOptions = {}
): string => {
  if (!isoString) return '';
  
  const date = new Date(isoString);
  
  if (isNaN(date.getTime())) {
    return '';
  }
  
  return new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    ...options
  }).format(date);
};

/**
 * Convert UTC ISO string to local time only
 * @param {string} isoString - ISO string
 * @param {Intl.DateTimeFormatOptions} options - DateTimeFormat options
 * @returns {string} Formatted local time
 */
export const formatLocalTime = (
  isoString: string,
  options: Intl.DateTimeFormatOptions = {}
): string => {
  if (!isoString) return '';
  
  const date = new Date(isoString);
  
  if (isNaN(date.getTime())) {
    return '';
  }
  
  return new Intl.DateTimeFormat('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    ...options
  }).format(date);
};

/**
 * Get date in different formats
 */
export const dateUtils = {
  /**
   * Get date in YYYY-MM-DD format
   */
  getDateOnly: (isoString: string): string => {
    if (!isoString) return '';
    
    const date = new Date(isoString);
    if (isNaN(date.getTime())) return '';
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  },
  
  /**
   * Get time in HH:MM:SS format
   */
  getTimeOnly: (isoString: string): string => {
    if (!isoString) return '';
    
    const date = new Date(isoString);
    if (isNaN(date.getTime())) return '';
    
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    return `${hours}:${minutes}:${seconds}`;
  },
  
  /**
   * Get relative time (e.g., "2 hours ago")
   */
  getRelativeTime: (isoString: string): string => {
    if (!isoString) return '';
    
    const date = new Date(isoString);
    if (isNaN(date.getTime())) return '';
    
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);
    
    if (diffSec < 60) {
      return 'just now';
    } else if (diffMin < 60) {
      return `${diffMin} minute${diffMin > 1 ? 's' : ''} ago`;
    } else if (diffHour < 24) {
      return `${diffHour} hour${diffHour > 1 ? 's' : ''} ago`;
    } else if (diffDay < 7) {
      return `${diffDay} day${diffDay > 1 ? 's' : ''} ago`;
    } else {
      return formatLocalDate(isoString);
    }
  },
  
  /**
   * Check if date is today
   */
  isToday: (isoString: string): boolean => {
    if (!isoString) return false;
    
    const date = new Date(isoString);
    if (isNaN(date.getTime())) return false;
    
    const today = new Date();
    
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  },
  
  /**
   * Check if date is yesterday
   */
  isYesterday: (isoString: string): boolean => {
    if (!isoString) return false;
    
    const date = new Date(isoString);
    if (isNaN(date.getTime())) return false;
    
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    return date.getDate() === yesterday.getDate() &&
           date.getMonth() === yesterday.getMonth() &&
           date.getFullYear() === yesterday.getFullYear();
  },
  
  /**
   * Add days to a date
   */
  addDays: (isoString: string, days: number): string => {
    if (!isoString) return '';
    
    const date = new Date(isoString);
    if (isNaN(date.getTime())) return '';
    
    date.setDate(date.getDate() + days);
    return date.toISOString();
  }
};