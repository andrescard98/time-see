import { fetchSignInMethodsForEmail } from "firebase/auth";
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./";


export const checkingAuthentication = ( email, password) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
    }
}

export const startGoogleSignIn = ( email, password) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        const result = await singInWithGoogle();
        const userExiste = await fetchSignInMethodsForEmail(result.email);
        console.log('hola', userExiste)
        console.log(result);
        if ( !result.ok && userExiste ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ));
    }
}

/* export const startLoginWithEmailPassword = ({ email, password }) => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );

        const result = await loginWithEmailPassword({ email, password });
        console.log(result);

        if( !result.ok ) return dispatch ( logout(result ));

        dispatch( login( result ));
    }
} */

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        const result = await registerUserWithEmailPassword({email, password, displayName});

        if( !result.ok ) return dispatch ( logout(result.errorMessage));
        
        dispatch( login({ uid, displayName, email, photoURL }));
    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );

        const result = await loginWithEmailPassword({ email, password });
        console.log(result);

        if( !result.ok ) return dispatch ( logout(result ));

        dispatch( login( result ));
    }
}

export const startLogout = () => {
    return async( dispatch) => {
        await logoutFirebase();
        
        dispatch( logout() );
    }
}