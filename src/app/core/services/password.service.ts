import {Injectable} from '@angular/core';
import {invoke} from "@tauri-apps/api/tauri";
import {fromPromise} from "rxjs/internal/observable/innerFrom";
import {Observable} from "rxjs";
import {PasswordModel} from "../models/password-model";

@Injectable()
export class PasswordService {

    public findAll(): Observable<Array<PasswordModel>> {
        return fromPromise(invoke<Array<PasswordModel>>("find_all", {}));
    }

    public findById(id: number): Observable<PasswordModel> {
        return fromPromise(invoke<PasswordModel>("find_one", {id: id}))
    }

    public save(model: PasswordModel): Observable<void> {
        return fromPromise(invoke("save", {model: model}));
    }

    public update(id: number, model: PasswordModel): Observable<void> {
        return fromPromise(invoke("update", {id: id, model: model}));
    }

    public deleteById(id: number): Observable<void> {
        return fromPromise(invoke("delete", {id: id}));
    }
}
