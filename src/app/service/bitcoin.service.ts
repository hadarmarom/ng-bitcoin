import { Injectable } from "@angular/core";
import { StorageService } from "./storageService";
import { HttpClient } from '@angular/common/http';
import { of } from "rxjs";
import { map, tap } from 'rxjs/operators';

const RATE_KEY = 'bitcoin-rate';
const MARKET_PRICE_KEY = 'market-price';
const TRANSACTIONS_KEY = 'transactions';

@Injectable({
    providedIn: 'root'
})
export class BitcoinService {

    constructor(private storageService: StorageService, private http: HttpClient) {}

    getRate(coins: number) {
        const localRate = this.storageService.load(RATE_KEY)
        if (!localRate) {
            console.log('api rate...');
            const coinsApi = `https://blockchain.info/tobtc?currency=USD&value=${coins}`
            return this.http.get<number>(coinsApi)
                .pipe(tap(res => this.storageService.store(RATE_KEY, res)))
        } else {
            console.log('local rate...');
            return of(localRate)
        }
    }

    getMarketPrice() {
        const localMarketPrice = this.storageService.load(MARKET_PRICE_KEY);
        if (!localMarketPrice) {
            const marketApi = `https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`
            return this.http.get<any>(marketApi)
                .pipe(tap(res => {
                    console.log('res:', res)
                    this.storageService.store(MARKET_PRICE_KEY, res)
                }))
        } else {
            console.log('rate local...');
            return of(localMarketPrice)
        }
    }

    getConfirmedTransactions() {
        const localTransactions = this.storageService.load(TRANSACTIONS_KEY);
        if (!localTransactions) {
            const tradeVolume = `https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true`
            return this.http.get<any>(tradeVolume)
                .pipe(tap(res => this.storageService.store(TRANSACTIONS_KEY, res)))
        } else {
            console.log('rate local...');
            return of(localTransactions)
        }
    }
}