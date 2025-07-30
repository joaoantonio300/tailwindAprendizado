import {db, auth} from "../firebase/config";

//importando o banco

import {
    getAuth,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";

import { useState, useEffect } from "react";

export const useAuthentication = () => {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelled, setCancelled] = useState(false);

    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }

    const logout = () => {
        checkIfIsCancelled();
        signOut(auth);
    }

    const login = async(data) => {

        checkIfIsCancelled();

        setLoading(true);
        setError(false);

        try{
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false)
        } catch (error) {

            let systemErrorMessage;

            if (error.code.includes("invalid-crendetial")) {
                systemErrorMessage = "Usuario ou senha incorretor"
            } else {
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde";
            }

            console.log(error.message)
            console.log(typeof error.message)

            setError(systemErrorMessage)
            setLoading(false)
        }
    }

      useEffect(() => {
            return () => setCancelled(true);
        }, []);

        return {
            auth,
            error,
            loading, 
            logout,
            login
        }
}