export class Post {
    content: string;
    like: number;
    date: string;

    constructor(private title: string) {
        this.date = new Date().toString();
        this.like = 0;
    }
}