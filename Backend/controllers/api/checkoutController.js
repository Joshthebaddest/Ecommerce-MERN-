const SECRET_KEY = 'sk_test_7f9644e7679bc7efff77eb465704a73b41abf93f'

const https = require('https')

const params = JSON.stringify({
    "email": "customer@email.com",
    "amount": "20000"
})

const options = {
    hostname: 'api.paystack.co',
    port: 443,
    path: '/transaction/initialize',
    method:'POST',
    headers: {
        Authorization: `Bearer ${SECRET_KEY}`,
        'Content-Type': 'application/json'
    }
}



const checkout = (req, res) => {

    const paystackReq = https.request(options, response => {
        let data = ''
    
        response.on('data', (chunk) => {
            data += chunk
        });
    
        response.on('end', () => {
            res.send(data)
            console.log(JSON.parse(data))
        })
    
    }).on('error', error => {
        console.error(error)
    })

    paystackReq.write(params);
    paystackReq.end()


}

const verifyPayment = (req, res) => {
    const refrence = req.params.refrence 
    console.log(refrence)

    const options = {
        hostname: 'api.paystack.co',
        port: 443,
        path: `/transaction`,
        method: 'GET',
        headers: {
            Authorization: `Bearer ${SECRET_KEY}`
        }
    }

    https.request(options, res => {
        let data = ''

        res.on('data', (chunk) => {
            data += chunk
        });

        res.on('end', () => {
            console.log(JSON.parse(data))
        })
    }).on('error', error => {
        console.error(error)
    })

}

module.exports = {checkout, verifyPayment}