/* Multiples ventanas y pestañas */

/* Es el main suit de las pruebas/it */
describe('Escenarios de navegador y ventanas', () => {

    /* callback asincrono donde en el browser se espera que esté el link de la página */
    beforeEach(async () => {
        await browser.url('https://demoqa.com/browser-windows')
    })

     it('Debería abrir una nueva pestaña despues de clickear un botón', async () => {
      await $('#tabButton').click()
      await browser.switchToWindow('sample')
      await expect($('#sampleHeading')).toHaveTextContaining('This is a sample page')
      await browser.closeWindow()
      await browser.switchToWindow('browser-windows')
    }) 

    it('Deberia abrir una nueva pestaña con comando', async () => {
        await browser.newWindow('https://demoqa.com/sample')
        await browser.switchToWindow('sample')
        await expect($('#sampleHeading')).toHaveTextContaining('This is a sample page')
        await browser.closeWindow()
        await browser.switchToWindow('browser-windows')
    })
 
    it.only('Deberia abrir una nueva ventana despues de clickear un botón', async () => {
        await $('//#region windowButton').click()
        const handles = await browser.getWindowHandles()/* Devuelve una promesa donde devuelve un 3 de array  */
        await browser.switchToWindow(handles[1])/* Posicion 1, seria el abrir la ventana, y que contenga el texto de abajo */
        await expect($('#sampleHeading')).toHaveTextContaining('This is sample page')
        await browser.closeWindow() /*  */
        await browser.switchToWindow(handles[0])/* En el original se vuelve, y se debe verificar el texto de abajo */
        await expect($('.main-header')).toHaveTextContaining('Browser Windows')
    })

})