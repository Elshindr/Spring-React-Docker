package org.elshindr.articles_back.controllers;

import org.elshindr.articles_back.models.Article;
import org.elshindr.articles_back.repositories.ArticlesRepositories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpStatusCodeException;

import java.util.List;

@RestController
@RequestMapping("/articles")
public class ArticleController {

    @Autowired
    ArticlesRepositories articleRepo;


    @GetMapping
    public List<Article> getAll(){
        return articleRepo.findAll();
    }

    @PostMapping()
    public ResponseEntity<?> insert(@RequestBody Article article){

        System.out.println(article.toString());
        if(article.getId() != null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("ID must be null for a new article");
        }

        Article savedArticle = articleRepo.save(article);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedArticle);
    }
}
