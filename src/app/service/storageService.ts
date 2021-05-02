import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class StorageService {
    store(key, value): void {
        localStorage[key] = JSON.stringify(value);
    }

    load(key, defaultValue = null) {
        var value = localStorage[key] || defaultValue;
        return JSON.parse(value);
    }
}