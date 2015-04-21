/**
 * Created by Zoltan_Biro on 3/30/2015.
 */

describe('Colorize',function(){
    describe('',function(){
        it('should give white for undefined percentage',function(){
            var color=colorize();
            expect(color).toEqual('rgb(255,255,255)');
        });
        it('should give black for 100 percentage',function(){
            var color=colorize(100);
            expect(color).toEqual('rgb(0,0,0)');
        });
        it('should give green for 10 percentage',function(){
            var color=percentToRGB(10);
            expect(color).toEqual('rgb(51,255,0)');
        });
    });
});
