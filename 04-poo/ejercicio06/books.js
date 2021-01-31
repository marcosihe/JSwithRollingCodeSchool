class Books{
    constructor(isbn, title, author, pages){
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    get showISBN(){return this.isbn;}
    get showTitle(){return this.title;}
    get showAuthor(){return this.author;}
    get showPages(){return this.pages;}

    set modifyISBN(newISBN){this.isbn = newISBN;}
    set modifyTitle(newTitle){this.title = newTitle;}
    set modifyAuthor(newAuthor){this.author = newAuthor;}
    set modifyPages(newPages){this.pages = newPages;}

    showBook(){
        document.write(`<h4>Datos del libro</h4>
        El libro ${this.title} 
        con ISBN ${this.isbn} 
        creado por el autor ${this.author} 
        tiene ${this.pages}`);
    }
}

let libro1 = new Books(457845124, 'Las olas del nuevo mar', 'Eguardo Daleano', 578);
let libro2 = new Books(451487541, 'Maletin de criaturas', 'newt Scamander', 1456);

libro1.showBook();
libro2.showBook();