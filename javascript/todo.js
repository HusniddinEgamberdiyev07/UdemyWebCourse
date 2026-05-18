console.log("Hello World");

// ask what they want to do.

// new -> creates new task takes string.

// list -> shows all tasks. INdex and task contnet

// delete -> deletes task. takes index

// quit stops app. and tells it stopped

let quit = false;

const tasks = [];

while(!quit){
    let action = prompt("What do you want to do?");
    
    switch(action){
        case "new":
            
            let task = prompt("What is you task?");
            tasks.push(task)
            console.log(`new task added: ${task}`);
            
            break;

        case "list":
            
            console.log("Your tasks:\n");
            
            for(let i = 0; i<tasks.length; i++){
                console.log(`${i+1}: ${tasks[i]}`);
            }
            
            break;

        case "delete":
            let index = parseInt(prompt("Which task to delete"))
            console.log(`delete task ${index}`);
            tasks.pop(tasks[index-1])

            break;

        case "quit":
            quit = true;
            break;
            
    }
}