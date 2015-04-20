/**
 * Created by Zoltan_Biro on 3/30/2015.
 */

describe('RequestLimiter',function(){
    describe('',function(){
        it('should return 0 if queue is not filled',function(){
            getTimeOut();
            getTimeOut();
            var time = getTimeOut();
            expect(time).toEqual(0);
        });
        it('should give timeout if queue is filled before timelimit',function(){
            getTimeOut();
            getTimeOut();
            getTimeOut();
            getTimeOut();
            getTimeOut();
            getTimeOut();
            getTimeOut();
            getTimeOut();
            getTimeOut();
            getTimeOut();
            var time = getTimeOut();
            expect(time).toBeGreaterThan(5000);
        });
    });
});
