function removeWhitespace(string) {
    return string.replace(/\s+/g, '');
}

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
        var originalContent = removeWhitespace(this.sample[0].textContent);

        scrambler.scramble(this.sample[0], false);

        expect(runSpy.calls.count()).toEqual(1);
        jasmine.clock().tick(501);
        expect(runSpy.calls.count()).toEqual(3);

        expect(originalContent).not.toEqual(removeWhitespace(this.sample[0].textContent))
    });

    it('defaults on body when calling the go function', function() {
        var scramblerSpy = spyOn(scrambler, "scramble");

        scrambler.go('en');

        expect(scramblerSpy.calls.count()).toEqual(1);
        expect(scramblerSpy).toHaveBeenCalledWith(document.querySelector('body'), true);
    });

    it('the go function accepts a custom element', function() {
        var scramblerSpy = spyOn(scrambler, "scramble");

        scrambler.go('en', this.sample[0]);

        expect(scramblerSpy.calls.count()).toEqual(1);
        expect(scramblerSpy).toHaveBeenCalledWith(this.sample[0], true);
    });
});
