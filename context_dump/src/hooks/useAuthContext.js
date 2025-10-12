=== File: src/hooks/useAuthContext.js ===
=== Content ===
import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if(!context) {
    throw Error('useAuthContext must be used inside an AuthContextProvider')
  }

  return context
}
=== End of src/hooks/useAuthContext.js ===

