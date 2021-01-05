import { Validation } from "@/presentation/protocols/validation"
import { ERROR_MESSAGES } from "@/presentation/utils/contants"

class ValidatiorCompose implements Validation {
  errorMessage: string
  fieldName: string
  fieldValue: string

  validate(fieldName: string, fieldValue: string): string {
    this.fieldName = fieldName
    this.fieldValue = fieldValue
    
    if (this.fieldName === "email") {
      const isEmailValid = this.checkEmail(fieldValue)
      if(!isEmailValid) {
        return ERROR_MESSAGES.REQUIRED_FIELD
      } else {
        return ''
      }
    }

    if (this.fieldName === "password") {
      const isPasswordValid = this.checkPassword(fieldValue)
      if(!isPasswordValid) {
        return ERROR_MESSAGES.REQUIRED_FIELD
      } else {
        return ''
      }
    }
  }

  checkEmail(email: string) {
    return false
  }

  checkPassword(email: string) {
    return false
  }
}

export default ValidatiorCompose