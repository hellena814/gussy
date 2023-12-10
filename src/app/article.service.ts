import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { Article } from './article';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    articleUrl = "/api/articles";
    constructor(private http: HttpClient) { }
    //Fetch all articles
    getAllArticles(): Observable<Article[]> {
        return this.http.get<Article[]>(this.articleUrl);
    }
    //Create article
    createArticle(article: Article): Observable<Article> {
        return this.http.post<Article>(this.articleUrl + "/" + article.id, article);
    }
    //Fetch article by id
    getArticleById(articleId: string): Observable<Article> {
        return this.http.get<Article>(this.articleUrl + "/" + articleId);
    }
    //Update article
    updateArticle(article: Article): Observable<Article> {
        return this.http.put<Article>(this.articleUrl + "/" + article.id,article)
    }
    //Delete article	
    deleteArticleById(articleId: string): Observable<number> {
        return this.http.delete<number>(this.articleUrl + "/" + articleId);
    }
    
}