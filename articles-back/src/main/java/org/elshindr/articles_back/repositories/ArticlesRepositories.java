package org.elshindr.articles_back.repositories;

import org.elshindr.articles_back.models.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ArticlesRepositories extends JpaRepository<Article, Integer> {



}