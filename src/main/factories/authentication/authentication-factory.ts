import RemoteAuthentication from "@/data/usecases/authentication/remote-authentication"
import { makeApiUrl } from "../http/api-url-factory"
import { makeAxiosHttpClient } from "../http"

export const makeAuthentication = () => {
  return new RemoteAuthentication(makeApiUrl('/login'), makeAxiosHttpClient())
}