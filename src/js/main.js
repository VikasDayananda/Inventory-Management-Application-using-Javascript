/**
 * Created by VIKAS on 1/17/2018.
 */

var objects=new Array();
function items(item,quantity,price,cateogry){
    this.item=item;
    this.price=price;
    this.quantity=quantity;
    this.category=cateogry;

    this.buy=function(num){
        alert(num);
        alert(this.quantity);
        if(this.quantity>=num){
            this.quantity=this.quantity-num;
            alert("Bought item :"+item);
        }
        else{
            alert("Stock not available. Choose different quantity");

        }

    }

};
function showForm() {
    document.getElementById("myPopup").style.display="block";

}
function  addItem() {

    var form = document.getElementById('itemDesc');
    var name = form.elements.name.value;
    var stk = form.elements.stk.value;
    var pc = form.elements.pc.value;
    var cat = form.elements.cat.value;
    // alert(objects.indexOf(window[name]));
    if(objects.indexOf(window[name])>=0){
        alert("Item already exists. Quantity added to it")
        var index = objects.indexOf(window[name]);
        objects[index].quantity=objects[index].quantity+stk;
        Test("buy",name,index);
    }
    else {
        window[name] = new items(name, stk, pc, cat);
        objects.push(window[name]);

        // alert(JSON.stringify(objects, null, 4));
        Test("add");
    }

}
function  buyItem() {
    var popup = document.getElementById("buyItem");
    popup.classList.remove("show");

    var form = document.getElementById('buyItem');
    var name = form.elements.name.value;
    var stk = form.elements.stk.value;
    var index = objects.indexOf(window[name]);
    // alert("Available stock:"+objects[index].quantity);
    // objects[index].buy(stk);
  if(objects[index].quantity>=stk){
      objects[index].quantity=objects[index].quantity-stk;
      confirm("Bought item");
  }
  else{
      alert("Stock not available. Choose different quantity !!!!");

  }

    Test("buy",name,index);


}
