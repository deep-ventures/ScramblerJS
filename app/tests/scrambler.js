describe('scrambler tests', function(){
    beforeEach(function(){
        fixture.setBase('fixtures')
    });

    beforeEach(function(){
        this.sample = fixture.load('sample.html');
    });

    afterEach(function(){
        fixture.cleanup()
    });

    it('plays with the html fixture', function(){
        console.log(this.sample);
    });
});
