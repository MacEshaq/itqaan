// src/utils/authStorage.js
const STORAGE_KEY = "itqaan-user";

// Save user with expiration (default: 60 minutes)
export function setUserWithExpiry(userData, minutes = 60) {
  const item = {
    value: userData,
    expiry: Date.now() + minutes * 60 * 1000, // Convert minutes to milliseconds
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(item));
}

// Get user if not expired; otherwise clear it and return null
export function getUserWithExpiry() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;

  try {
    const item = JSON.parse(raw);

    // Check if expired
    if (!item.expiry || Date.now() > item.expiry) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }

    return item.value;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

export function clearUserStorage() {
  localStorage.removeItem(STORAGE_KEY);
}
