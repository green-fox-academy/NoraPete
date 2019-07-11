'use strict';

import { BlogPost } from '../day-03/blogPost';

class Blog {
    listOfBlogPosts: BlogPost[];

    constructor(){
        this.listOfBlogPosts = [];
    }

    add(post: BlogPost): void {
        this.listOfBlogPosts.push(post);
    }

    delete(index: number): void {
        if (index < this.listOfBlogPosts.length) {
            this.listOfBlogPosts.splice(index, 1);
        } else {
            this.listOfBlogPosts.splice(this.listOfBlogPosts.length - 1, 1);
        }
    }

    update(index: number, post: BlogPost): void {
        if (index < this.listOfBlogPosts.length) {
            this.listOfBlogPosts.splice(index, 1, post);
        } else {
            this.listOfBlogPosts.push(post);
        }
    }
}

let myFirstPost: BlogPost = new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.');
let mySecondPost: BlogPost = new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.');
let myThirdPost: BlogPost = new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28.');

let myBlog: Blog = new Blog();
console.log(myBlog.listOfBlogPosts);

myBlog.add(myFirstPost);
myBlog.add(mySecondPost);
myBlog.add(myThirdPost);
console.log(myBlog.listOfBlogPosts);

myBlog.delete(2);
console.log(myBlog.listOfBlogPosts);

let newBlogPost: BlogPost = new BlogPost('Nora Pete', 'Cicero', 'Quo usque tandem abutere Catilina patientia nostra? Quamdiu etiam furor iste tuus nos eludet?', '2019.07.11.');
myBlog.update(0, newBlogPost);
console.log(myBlog.listOfBlogPosts);
