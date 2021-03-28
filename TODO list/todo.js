let input = '';
const notes = [];

setTimeout(() => {
    while(input !== 'quit') {
        input = prompt("What would you like to do?")
        if(input) {
            input = input.trim().toLowerCase();
        }
        switch(input) {
            case 'new': {
                let newNote = prompt("New note:");
                notes.push(newNote);
                console.log(`Added '${newNote}' to the list!`)
                break;
            }
            case 'list': {
                console.log("*********");
                for(let i = 0; i < notes.length; i++) {
                    console.log(`${i}: ${notes[i]}`);
                }
                console.log("*********");
                break;
            }
            case 'delete': {
                let index = parseInt(prompt("Delete idx"));
                if(Number.isInteger(index)) {
                    let deleted = notes.splice(index, 1);
                    console.log(`Deleted '${deleted}'`)
                } else {
                    console.log("Failed to delete.");
                }
                break;
            }
            default:
                // Do nothing
        }
    }
}, 3000);