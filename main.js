function crawl(){
	if(1 != document.querySelector(".page.S_bg1").innerText){
		console.error("请先手动跳转到粉丝列表的第一页后再次执行此脚本！");
		return;
	}
  
	var result = "";
	var page = 1;
	var count = 0;
	var timer = setInterval(function(){
		if(page != document.querySelector(".page.S_bg1").innerText){
			return;
		}
		console.log("正在采集第 "+page+" 页...");
		page++;

		var list = document.querySelectorAll(".icon_supervisor");
		for(var i = 0; i < list.length;i++){
			var item = list[i].parentNode.childNodes[1];
			var usercard = item.attributes["usercard"].value;
			var uid = usercard.match(/id=\d+/)[0].match(/\d+/)[0];
			result += uid + "\n";
			count++;
		}
		console.log("第 "+page+" 页采集完毕。");
		if(page < 6){
			document.querySelector(".page.next").click();
		}else{
      clearInterval(timer);
			console.info("采集完毕，共获取到 uid "+count +" 个：\n"+result);
		}
		
	},1000);
}

crawl();
