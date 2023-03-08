const express = require('express')
const app = express()
const PORT = 8000

app.use(cors())

const signs = {
    'aries' : {
        'planetaryRuler': 'mars',
    },
    'taurus' : {
        'planetaryRuler': 'venus',
    },
    'gemini': {
        'planetaryRuler': 'mercury'
    },
    'cancer': {
        'planetaryRuler': 'moon'
    },
    'leo': {
        'planetaryRuler': 'sun'
    },
    'virgo': {
        'planetaryRuler': 'mercury'
    },
    'libra': {
        'planetaryRuler': 'venus'
    },
   'scorpio': {
        'planetaryRuler':'mars'
    },
    'sagittarius': {
        'planetaryRuler':'jupiter'
    },
    'capricorn': { 
        'planetaryRuler':'saturn'
    },
    'aquarius': {
        'planetaryRuler':'saturn'
    },
    'pisces': {
        'planetaryRuler':'jupiter'
    }   
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:sunSign', (request, response)=>{
    const sunSign = request.params.sunSign.toLowerCase()
    if(signs[sunSign]){
        response.json(signs[sunSign])
    }else{
        response.json('not a zodiac sign')
    }
    // response.json(sunSigns)
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on ${PORT} you better go catch it`)
})
