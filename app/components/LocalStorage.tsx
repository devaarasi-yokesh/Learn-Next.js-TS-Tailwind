'use client'
import { useState, useEffect, use } from "react";

export default function useLocalStorage<T>(key: string, initialValue: T) {


  const [value, setValue] = useState<T>(initialValue);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {


  try{
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) {
      setValue(JSON.parse(storedValue) as T);
    } 
  } catch (error) {
    console.error("Error reading from localStorage", error);
    
  } finally {
    setLoaded(true);
  }
}, [key]);



useEffect(() => {

  if (!loaded) return;


  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error writing to localStorage", error);
  }
}, [key, value, loaded]);

return [value, setValue, loaded] as const;
}   