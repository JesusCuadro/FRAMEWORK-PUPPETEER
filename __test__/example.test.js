describe('Google ', () => {
    it('abrir el navegador', async() =>{
        await page.goto('https://google.com/')
        await new Promise((resolve) => setTimeout(resolve, 5000))
    }, 30000 ) 
})