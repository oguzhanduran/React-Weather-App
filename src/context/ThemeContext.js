import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const values = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  ); // Burdaki children App.js dosyasındaki componentleri temsil eder. Yani buradan componentlerimize children aracılığı ile veri gönderiyoruz.
};

export default ThemeContext;

export const useTheme = () => useContext(ThemeContext); // ThemeContext'i diğer componentlerde kullanmak için hook haline getirdik.

// Normalde ThemeContext.Provider'ı app.js dosyasında içine componentleri yazarak tanımlıyorduk burda children ile ordaki componentleri buraya aktarıp Theme Provider'ı export ederek aslında aynı şeyi yaptık. Böylece ilgili context ile ilgili yapacağımız her şeyi ilgili context dosyasına aktarmıs olduk.
