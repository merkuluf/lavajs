const LAVA_API_URL = 'https://gate.lava.top/api/'
const API_V1 = 'v1'
const API_V2 = 'v2'

class LavaPayments {
    constructor(apiKey) {
        this.baseUrl = LAVA_API_URL
        this.apiKey = apiKey
    }

    async getProducts() {
        const response = await fetch(`${this.baseUrl}/${API_V2}/products`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': this.apiKey,
            },
        })
        return this.handleResponse(response)
    }

    async getWebhooks() {
        const response = await fetch(`${this.baseUrl}/${API_V1}/webhooks`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': this.apiKey,
            },
        })
        return this.handleResponse(response)
    }

    async getSales() {
        const response = await fetch(`${this.baseUrl}/${API_V1}/sales`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': this.apiKey,
            },
        })
        return this.handleResponse(response)
    }

    async getProductSales(uuid) {
        const response = await fetch(
            `${this.baseUrl}/${API_V1}/sales/${uuid}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key': this.apiKey,
                },
            }
        )
        return this.handleResponse(response)
    }

    async getInvoice(id) {
        const response = await fetch(
            `${this.baseUrl}/${API_V1}/invoice?id=${id}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key': this.apiKey,
                },
            }
        )
        return this.handleResponse(response)
    }

    validateInvoiceData(email, offerId, currency, buyerLanguage) {
        if (!email) throw new Error('Email is required')
        if (!offerId) throw new Error('Offer ID is required')
        if (!currency) throw new Error('Currency is required')
        if (!buyerLanguage) throw new Error('Buyer language is required')
    }

    async createInvoice({ email, offerId, currency, buyerLanguage }) {
        this.validateInvoiceData(email, offerId, currency, buyerLanguage)

        const response = await fetch(`${this.baseUrl}/${API_V2}/invoice`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': this.apiKey,
            },
            body: JSON.stringify({ email, offerId, currency, buyerLanguage }),
        })
        return this.handleResponse(response)
    }

    async handleResponse(response) {
        if (!response.ok) {
            const error = await response.text()
            throw new Error(error)
        }
        return response.json()
    }
}

export default LavaPayments
