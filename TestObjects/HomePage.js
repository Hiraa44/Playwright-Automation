exports.HomePage = class HomePage{

constructor (page){ 
   this.page=page;

   this.username_click =  page.locator('[data-test="username"]');
  // this.username =  page.locator('[data-test="username"]').fill('standard_user')
   this.password_click =  page.locator('[data-test="password"]');
  // this.password =  page.locator('[data-test="password"]').fill('secret_sauce');
   this.login_button = page.getByRole('button', { name: 'LOGIN' });

}
   async enterUsername(){
       await this.username_click.fill('standard_user');

    }
   async enterPassword(){
       await this.password_click.fill('secret_user');
    }
async loginbutton_click(){
    this.login_button.click();
}

}