import { redirect } from "react-router-dom";

export function auth() {
    let access_token = localStorage.getItem("access_token");

    // jika tidak ada access_token di localstorage
    if(!access_token) {
        // navigate() untuk fungsi yang menangani event
        // redirect() untk fungsi biasa(bukan penangananan event), digunakan unutk return
        return redirect("/login");
    }

    // jika ada access_token, dilanjutkan proses nya
    return null;
}