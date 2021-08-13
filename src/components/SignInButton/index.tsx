import {auth,firebase} from "../../services/firebase"

import {FaGithub} from "react-icons/fa";
import {FiX} from "react-icons/fi";

import styles from "./styles.module.scss";
import { useState } from "react";

interface User {
    id:string;
    name:string;
}


export function SignInButton(){
    const [user,setUser] = useState<User>();

    async function signInWithGitHub(){
        const provider = new firebase.auth.GithubAuthProvider();
        const result = await auth.signInWithPopup(provider); 
        if(result.user){
            const {displayName, uid} = result.user;
            if(!displayName)
                throw new Error("Missing information from GitHub Account");
                
            setUser({
                name:displayName,
                id:uid
            })
        }
            
    };

    return user ? (
        <button 
            type="button" 
            className={styles.signInButton}
            onClick={signInWithGitHub}
        >
            <FaGithub color="#04d361"/>
            {user.name}
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : (
        <button 
            type="button" 
            className={styles.signInButton} 
            onClick={signInWithGitHub}

        >
            <FaGithub color="#eba417"/>
            Sign in with GitHub
        </button>
    );
    

    
}