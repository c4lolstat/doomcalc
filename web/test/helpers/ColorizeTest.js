/**
 * Created by Zoltan_Biro on 3/30/2015.
 */

describe('Colorize',function(){
    describe('',function(){
        var model = new Colorize();

        it('should give white for undefined percentage',function(){
            var color=model.getColor();
            expect(color).toEqual('rgba(255, 255, 255, 1)');
        });
        it('should give black for 100 percentage',function(){
            var color=model.getColor(25);
            expect(color).toEqual('rgba(255, 5, 0, 0.5)');
        });
        it('should give green for 10 percentage',function(){
            var color=model.getColor(-25);
            expect(color).toEqual('rgba(0, 128, 0, 0.5)');
        });
    });
});
