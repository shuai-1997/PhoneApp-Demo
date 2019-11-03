~function  () {
				let html= document.documentElement
				let w=html.clientWidth
				html.style.fontSize=(w/750)*100+"px"
				window.onresize=()=>{
				arguments.callee()
			}
	
		
}()
