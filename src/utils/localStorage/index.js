export default function localStorage(key, value) {
  if (typeof window === 'undefined') return null;

  return {
    get() {
      const data = window.localStorage.getItem(key);
      if (!data) return null;
      return JSON.parse(data);
    },
    set() {
      window.localStorage.setItem(key, JSON.stringify(value));
    },
  };
}
