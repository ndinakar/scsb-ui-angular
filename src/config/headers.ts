
import { HttpHeaders } from "@angular/common/http";

export class appHeaders {
  
    public static getHeaders() {
        return new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Accept': 'application/json',
            'api_key':'recap'
        });
    }
    public static getHeadersXmlUpload() {
        return new HttpHeaders({
            'Accept': 'application/json',
            'api_key':'recap'
        });
    }
    public static getHeaders_formData() {
        return new HttpHeaders({
        });
    }
    public static httpOptions(){
        const httpOptions = {
          headers: appHeaders.getHeaders(),
          withCredentials: true
        };
        return httpOptions;
      }
}