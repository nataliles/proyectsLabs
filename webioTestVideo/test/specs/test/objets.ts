/* import { isRegularExpressionLiteral } from "typescript"; */
import loginPage from "../../../pageObjets/bookStore/loginPage";

describe('Login Page Suite', () => {
    beforeEach(async () => {
        loginPage.open()
    })
/* nataliles natalileS43@ */
    it('Debería loguearse', async () => {
        loginPage.login('nataliles', 'natalileS43@')
        await expect(loginPage.usernameLabel).toHaveTextContaining('nataliles')
        loginPage.open()
        loginPage.clickLogout()
        await expect(loginPage.usernameLabel).not.toBeExisting()
    })

    it('deberia no loguearse', async () => {
        loginPage.login('nataliles','natalileS43@a')
        await expect(loginPage.usernameLabel).not.toBeExisting()
    })
})