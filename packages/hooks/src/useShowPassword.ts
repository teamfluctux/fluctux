import { useRef, useState } from 'react'

export const useShowPassword = () => {
    const [showPass, setShowPass] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const handleStateLessTogglePasswdShow = () => {
        if (!inputRef.current) return
        if (inputRef.current.type === "password") {
            inputRef.current.type = "text"
        } else {
            inputRef.current.type = "password"

        }
    }

    const handleStateFullTogglePasswdShow = () => {
        setShowPass(!showPass)
    }
    return {
        inputRef,
        handleStateLessTogglePasswdShow,
        handleStateFullTogglePasswdShow,
        showPass
    }
}

