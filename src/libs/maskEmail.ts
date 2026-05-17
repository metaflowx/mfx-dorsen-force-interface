export const  maskEmail = (fullEmail: string): string => {
    /**
     * Takes a full email address and returns it in md***@gmail.com format
     * @param fullEmail - The complete email address to be masked
     * @returns Masked email in format md***@domain
     */
    
    /// Split the email into local part and domain
    const [localPart, domain] = fullEmail.split('@');
    
    if (localPart.length <= 2) {
        return `${localPart}***@${domain}`;
    }
    
    const maskedLocalPart = localPart.slice(0, 2) + '***';
    return `${maskedLocalPart}@${domain}`;
}