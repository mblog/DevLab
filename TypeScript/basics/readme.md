# TypeScript Basics
![TypeScript](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/240px-Typescript_logo_2020.svg.png)

https://www.typescriptlang.org/

> Jeder JavaScript Code ist auch TypeScript Code!   
*Abwärtskompatibel*

## Warum TypeScript?
* JavaScript mit statischer Typisierung
  * weniger Laufzeitfehler
  * Bessere Struktur bei Zusammenarbeit in großen Teams (Skalierung)
* Pre-Compiler (vgl. Babel)
  * Umwandlung von JavaScript Versionen

> TypeScript nur zur Compile-Zeit nicht zur Laufzeit!

## Lokale Nutzung / Installation
Da weder Browser noch Node.js TypeScript verstehen, ist die Installation eines zusätzlichen NPM Pakets erforderlich.

### Initialisierung des NPM Projekts
```bash
npm init
```

### Installation des NPM Pakets
*als DevDependency*
```bash
npm install typescript --save-dev
```

### Initialisierung des TypeScript Compilers 
```bash
npx tsc --init
```
Die Datei `tsconfig.json` beinhaltet die Konfiguration für die Umwandlung des TypeScript Codes in JavaScript.

### Umwandlung in JavaScript
```bash
npx tsc
```

Die Dateiendung für TypyScript lautet `.ts`.

## Basis Syntax

### Primitive Datentypen

```ts
let text: string = "Hello World";
let zahl: number = 11;
let wahr: boolean = true;
```

Spezial Typen: `unknown` / `any`

### Funktionen

```ts
function first(text: string): number {
  return text.length
}
```

Typ `void`: *keinen Rückgabewert*   
Typ `never`: *Funktion kehrt nie zurück*

## Interface & more
Definition/Beschreibung eines Objekts
```ts
type Status = 'open' | 'done' | 'discarded'; // Union Type

interface Todo<TData> {
  description: string;
  status: Status;
  assignee?: string; // Optionale Properties
  data: TData; // Generische Datentypen
}

interface Metadata { 
  assignee: string;
}

const todo: Todo<Metadata> = {
  description: "TypeScript lernen",
  status: "open",
  data: {
    assignee: "Ada"
  }
}
```

Datentypen und Properties des erzeugten Objekts müssen übereinstimmen.   
**Array**: `string[]` - z.B. Array aus Strings   
`<>`: Generische Datentypen

## Typen Definition
für bestehende Packages   
https://definitelytyped.org/

```bash
npm install @types/<package>
npm install @types/uuid
```

## TypeScript und Create React App

https://create-react-app.dev/docs/adding-typescript/

```bash
npx create-react-app my-app --template typescript
```

https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets
