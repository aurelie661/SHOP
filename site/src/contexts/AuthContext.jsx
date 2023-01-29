import { useEffect,useState,createContext } from "react";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({role:0, id: 0});

    useEffect(() => {
        fetch("http://localhost:5000/auth", {credentials: 'include'})
        .then((resp) => resp.text())
        .then((text) => {
            const data = text.toJson();
            // console.log(data);
            if(data.result){
                setAuth({role:data.role});
            }else{
                document.cookie = `auth=null;max-age=0`;
                setAuth({role:0})
            }
        });
    },[])

    return(
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider};