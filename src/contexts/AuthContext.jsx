import { createContext, useState } from "react";

// membuat context
export const AuthContext = createContext();

// menyimpan proses data yang akan di buat global (bisa di akses di file mana aja)
export default function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("access_token"));

  function logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setIsLogin(false);
  }

  function login() {
    // ubah state isLogin jadi data llocalstprage. untuk trigger muncul nya btn logout di avatar
    setIsLogin(localStorage.getItem("access_token"));
  }

  //   mendefinisikan context akan digunakan di pages apa saja
  return (
    // value : data/functino yag diperbolehkan di akses global
    <AuthContext.Provider value={{ isLogin, logout, login }}>
      {/* klo gak pake children, perlu manggil satu satu file pages, klo mau berlau semua nya gunakan props children */}
      {children}
    </AuthContext.Provider>
  );
}
