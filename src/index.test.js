const { should } = require("chai")

describe('Test', () => {
    it('Should succed', (done)=>{
        setTimeout(done, 1000)
    });

    it('Should fail', () => {
        setTimeout(() => {
        }, 1000)
    });
});