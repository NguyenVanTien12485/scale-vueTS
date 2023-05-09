import { HttpRequestType } from "./Constants";

/**
* @name HttpRequestParamsInterface
* @description
* Interface represents an object we'll use to pass arguments into our HttpClient re\
quest method.
* This allow us to specify the type of request we want to execute, the end-point ur\
l,
* if the request should include an authentication token, and an optional payload (i\
f POST or PUT for example)
*/

export interface HttpRequestParamsInterface<P = void> {
  requestType: HttpRequestType;
  endpoint: string;
  requiresToken: boolean;
  headers?: { [key: string]: string };
  payload?: P;
  mockDelay?: number;
}
