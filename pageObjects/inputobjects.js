class inputObjects{


    constructor(page){
         this.searchInput = page.getByPlaceholder('enter github user name');

    }
  async  EnterInput(){

            await this.searchInput.type('Hira Ali',{timeout:80000});
            // Assertion to confirm the input value was set correctly
            await expect(searchInput).toHaveValue('Hira Ali');
    }
}
module.exports={inputObjects}


