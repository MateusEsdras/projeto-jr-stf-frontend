import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
import { CredenciaisDTO } from 'src/model/credenciais.dto';
import { API_CONFIG } from 'src/config/api.config';
import { LocalUser } from 'src/model/local.user';

@Injectable()
export class LoginService {

    constructor(
        private storage: StorageService,
        private http: HttpClient){
    }

    logon(credenciais: CredenciaisDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/autor/login`,
            credenciais,
            {
                observe: "response",
                responseType: "text"
            }
        );
    }

    successfulLogin(response){
        let user : LocalUser = {
            id: response.id,
            email: response.email
        }
        console.log(user)
        this.storage.setLocalUser(user);
    }

    logout() {
        this.storage.setLocalUser(null);
    }
}