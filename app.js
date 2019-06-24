const ch=require('chalk')
const yargs = require('yargs')
const notes= require('./notes.js')
yargs.command({
	command:"add",
	describe:"adding a note",
	builder:{
		title:{
			desribe:'Note title',
			type:'string'
			
			 
		},
		body:{
			describe:'Note body',
			type:'string'
		}			
	},
	handler:function(argv){
		notes.addnotes(argv.title,argv.body)
	}
}
)
yargs.command({
	command:"remove",
	describe:"removing a note",
	builder:{
		describe:"remove title",
		type:'string'
		},
	handler:function(argv){
		notes.remove(argv.title)
	}
}
)

yargs.command({
	command:"list",
	describe:"listing titles",
	handler:function(){
		notes.listnotes()
	}
	
})
	




yargs.parse()