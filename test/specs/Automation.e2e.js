const login = require('../pageobjects/login.page')

describe('Sign In Flow ', () => {
    it(`fills out Sign In Form and Is Able to Sign In`, async () => {
        // open login page
        await login.open()

        //fill sign in form
        await login.login("a545ea4d5@fgde4d2.com", "test123");

        //check if it worked
         expect(
            $(".info-account=Welcome to your account. Here you can manage all of your personal information and orders.")).toBeExisting()

    });
})


