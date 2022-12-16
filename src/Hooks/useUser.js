import { useContext } from "react";
import { userContext } from "../context/userContext";

export function useUser () {
    return useContext(userContext)
}

