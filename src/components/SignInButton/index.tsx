import {auth,firebase} from "../../services/firebase"

import {FaGithub} from "react-icons/fa";
import {FiX} from "react-icons/fi";

import styles from "./styles.module.scss";


export function SignInButton(){
    async function signInWithGitHub(){
        const provider = new firebase.auth.GithubAuthProvider();
        const result = await auth.signInWithPopup(provider); 
        if(result.user)
            console.log(result.user);
    };

    const isUserLoggedIn = false;

    return isUserLoggedIn ? (
        <button 
            type="button" 
            className={styles.signInButton}
            onClick={signInWithGitHub}
        >
            <FaGithub color="#04d361"/>
            Felipe Valério
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