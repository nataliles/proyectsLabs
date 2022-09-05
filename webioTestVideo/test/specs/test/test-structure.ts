describe ('mocha js demo - Main Suite', () => {

    before(async () => {
        console.log('Soy un before HOOK')
    })
    beforeEach(async () => {
        console.log('Soy un before EACH HOOK')
    })


    it/* .only */('Soy el primer test utilizando IT', async () => {
        console.log('Primer Test')
    })

    it/* .skip */('Soy el segundo test utilizando IT', async () => {
        console.log('Segundo Test')

     await browser.debug()
    })

    afterEach(async () => {
        console.log('Soy un after EACH HOOK')
    })
    after(async () => {
        console.log('Soy un after HOOK')
    })

})