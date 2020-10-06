describe("isEmpty Tests", function() {

    it("Should return false when passing any non-empty string", function(){
        expect(isEmpty("test")).toEqual(false);
    })

    it("Should return true when passing an empty string", function(){
        expect(isEmpty("")).toEqual(true);
    })

    it("Should return true when passing an undefined var", function(){
        expect(isEmpty(undefined)).toEqual(true);
    })
})