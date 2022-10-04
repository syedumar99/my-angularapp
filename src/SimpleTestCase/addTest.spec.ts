import { addTest } from "./addTest";

fdescribe('Addition Test Case', ()=>{
    it('10 + 20 = 30', ()=>{
        const result = addTest(10 , 20);
        expect(result).toBe(30);
    });
    it('10 + 20 != 40', ()=>{
        const result = addTest(10 , 20);
        expect(result).not.toBe(40);
    });
});