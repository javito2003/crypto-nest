import { HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import response from 'src/utils/responses';


@Injectable()
export class CryptosService {
    constructor(private readonly httpService: HttpService) {}

    async getCryptos() {
        try {
            let res = await this.httpService.axiosRef.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
            return response.success(res.data, HttpStatus.ACCEPTED)
        } catch (error) {
            return response.error("Error to get cryptos", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
