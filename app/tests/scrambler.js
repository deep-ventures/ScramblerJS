describe('scrambler tests', function(){
    beforeEach(function() {
        fixture.setBase('fixtures')
    });

    beforeEach(function(){
        this.sample = fixture.load('sample.html');

        runSpy = spyOn(scrambler._scrambler, "run").and.callThrough();
        jasmine.clock().install();
    });

    afterEach(function() {
        fixture.cleanup();
        jasmine.clock().uninstall();
    });

    it('plays with the html fixture', function() {
        scrambler.scramble(this.sample[0], false);

        expect(runSpy.calls.count()).toEqual(1);
        jasmine.clock().tick(501);
        expect(runSpy.calls.count()).toEqual(3);

        // TODO: check if the text has been scrambled
    });
});
