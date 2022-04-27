import { v4 } from 'uuid';

console.log("hello World");

function add(x: string,y: string): string {
    return x + y
}

console.log(add("test","test"))

function first(text: string): Todo<Metadata> {
    const todo: Todo<Metadata> = {
        description: "TypeScript lernen",
        status: "done",
        data: {
            assignee: "Marc",
            assignee_email: "marc@codingschule.de"
        } 
    }
    return todo
  }

let testarray : (number|string|boolean)[] = [12, "Test", true, true, 12, "Musik"]
let testarray2 : [string, number] = ["test", 12]


type Status = "open" | "done" | "discarded";

interface Todo<TData> {
    description: string;
    status: Status  // Union Type
    assignee?: string;
    data: TData; // Generische Datentyp
    firstname?: string;
}

interface Metadata {
    assignee: string,
    assignee_email: "marc@codingschule.de"
}

const todo:Todo<Metadata> = {
    description: "TypeScript lernen",
    status: "done",
    data: {
        assignee: "Marc",
        assignee_email: "marc@codingschule.de"
    } 
}

console.log(todo.firstname)

console.log(v4())


