import React from "react"

import { makeLoginValidation } from "../validation/validation-factory"
import { makeAuthentication } from "../authentication/authentication-factory"
import { Login } from "@/presentation/pages"

export const makeLogin: React.FC = () => {
  return (
    <Login
      validation={makeLoginValidation()}
      authentication={makeAuthentication()}
    />
  )
}