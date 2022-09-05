describe ('Selectors Demo', () => {
    beforeEach (async () => {
        await browser.url('https://demoqa.com/links')
    })

  /*   it('Link example', async () =>{
        const createdLink = await $('#created')
        const responseLink = await $('#linkResponse')

        createdLink.scrollIntoView();
        createdLink.click()

        responseLink.scrollIntoView()
        await expect(responseLink).toHaveTextContaining('Link has responded with staus 201 and status text Created')
    })
 */


    /* para que sea buscado por etiqueta a como el de Moved, seleccionando por su texto especifico que compare e identifique */


   /*  it('Partial linkTest', async () =>{
        const movedLink = await $('a=Moved')
        const responseLink = await $('#linkResponse')

        movedLink.scrollIntoView();
        movedLink.click()

        responseLink.scrollIntoView()
        await expect(responseLink).toHaveTextContaining('Link has responded with staus 301 and status text Moved Permanently')
    }) */

/* En este no es especifico, puede ser cualquier etiqueta de texto y también se puede agregar entrecortado para que busque el programa */
    it('Partial Element Text', async () =>{
        const movedLink = await $('a*=Mov')
        const responseLink = await $('#linkResponse')

        movedLink.scrollIntoView();
        movedLink.click()

        responseLink.scrollIntoView()
        await expect(responseLink).toHaveTextContaining('Link has responded with staus 301 and status text Moved Permanently')
    })
})