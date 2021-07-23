import { useState } from 'react'

const useTheme=():[string,()=>void]=> {
    const [theme,setTheme]=useState("dark");

    const toggleTheme=():void=>{
        theme==="dark"? setTheme("light"):setTheme("dark");
    }
    
    return [theme,toggleTheme];
}

export default useTheme;