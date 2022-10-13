import { HttpException } from "@nestjs/common"

export const response = {
    success: (body: any, statusCode: number) => {
        return {
            error: false,
            body,
            status: statusCode
        }
    },
    error: (body: any, statusCode: number) => {
        throw new HttpException({
            error: false,
            body,
            status: statusCode
        }, statusCode)
    }
}

export default response