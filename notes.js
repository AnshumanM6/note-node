const fs =require('fs')

const addnotes =function(title,body){
const notes=loadnotes()
const duplicate=notes.filter(function(note){
	return note.title===title
	
})
if (duplicate.length==0){
notes.push({
	title:title,
	body:body

})
savenotes(notes)
	
}
else{
	console.log("Alredy added")
}

}
const savenotes=function (notes){
	const dataJSON=JSON.stringify(notes)
	fs.writeFileSync('notes.json',dataJSON)

}

const loadnotes=function(){
	try{
		const databuffer=fs.readFileSync('notes.json')
		const dataJSON=databuffer.toString()
		return JSON.parse(dataJSON)
		
}
catch(e)
{return []
}
}

const remove=function(title){
	const notes=loadnotes()
	const notestokeep = notes.filter(function(note){
		return note.title!=title
})
savenotes(notestokeep)
}
const listnotes=function(){
	console.log("Your notes")
	const notes=loadnotes()
	notes.forEach((note)=>{
		console.log(note.title)
	}
	)
}


module.exports={
	addnotes:addnotes,
	loadnotes:loadnotes,
	remove:remove,
	listnotes:listnotes
}