import ArticleInterface from "../Interfaces/ArticleInterace.ts";

export default class ArticleService {

    static url: string = "http://localhost:8081/";

    public static async getAll(): Promise<ArticleInterface[]> {
        console.log(`articles?`)
        return fetch(this.url + 'articles')
            .then(res => {
                return res.json();
            })
            .then(article => {
                console.log(`articles?`, article)
                return article;
            })
            .catch(error => {
                console.log(`Erreur ArticleService dans getAll`, error);
            });
    }


    public static async insertArticle(libelle: string, prix: number): Promise<boolean> {
        return fetch(this.url + 'articles',
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({ "libelle": libelle, "prix": prix })
            })
            .then((res) => {
                console.log(`res insertArticle`, res);
                return true;
            })
            .catch(error => {// TODO: Gestion affichage de l'erreur
                console.log(`Error ArticleService dans insertArticle`, error);
                return false;
            });
    }
}