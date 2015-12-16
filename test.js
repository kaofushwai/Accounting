var Acc = new Account();

describe('Test Some function',function(){
  $("body").append("<input id=\"costTitle\">");
  $("body").append("<input id=\"costDetails\">");
  $("body").append("<div id=\"Cost-list\">");
  
  describe('Clear the textbox',function(){
    $("#costTitle").val("Prostitute/1h/1s");
    $("#costDetails").val("3000");
    Acc.clean();
    it('Clear costTitle',function(){
      assert.equal($("#costTitle").val,'');
    })
    it('Clear costDetails',function(){
      assert.equal($("#costDetails").val,'');
    })
  })
  
  describe('Clear the Cost-list',function(){
    it('Clear the list',function(){
      $("#Cost-list").val("TATFATATAUTATATACTATATATATKATA");
      Acc.cleanall();
      assert.equal($("#costTitle").val,'');
    })
  })
  
})