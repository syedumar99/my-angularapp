import { greet } from "./greet";

fdescribe('greet', ()=>{
    it('Should include the name in the message', ()=>{
        const name = 'Jayavardhan';
        const name1 = 'M';
        expect(greet(name)).toContain(name);
    });
});