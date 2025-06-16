class inputObjects{


    constructor(pgae){
         this.searchInput = page.getByPlaceholder('enter github user name');


    }
  async  EnterInput(){

            await this.searchInput.fill('Hira Ali');
        
            // Assertion to confirm the input value was set correctly
            await expect(searchInput).toHaveValue('Hira Ali');
    }
}
module.exports={inputObjects}

