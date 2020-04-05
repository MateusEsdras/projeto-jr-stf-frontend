import { Injectable } from '@angular/core';
import { LocalUser } from 'src/model/local.user';
import { STORAGE_KEYS } from 'src/config/storage.config';

@Injectable()
export class StorageService{

    getLocalUser() : LocalUser{
        let user = localStorage.getItem(STORAGE_KEYS.localUser);
        if(user == null){
            return null;
        }else{
            return JSON.parse(user);
        }
    }

    setLocalUser(obj : LocalUser){
        if(obj == null){
            localStorage.removeItem(STORAGE_KEYS.localUser);
        }else{
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
        }
    }
}