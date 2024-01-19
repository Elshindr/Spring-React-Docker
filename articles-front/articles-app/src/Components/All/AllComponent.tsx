import React, { useEffect, useState } from "react"
import ArticleInterface from "../../Interfaces/ArticleInterace.ts";
import ArticleService from "../../Services/ArticleService.ts";
import { Table } from 'react-bootstrap';

export default function AllComponent() {

    const [lstArticles, setLstArticles] = useState<ArticleInterface[]>([]);
    useEffect((() => {
        (async () => {
            const dataLstArticles = await ArticleService.getAll();

            setLstArticles(dataLstArticles);
        })()
    }), []);
    return (<div className="d-flex flex-column justify-content-center my-4">
        <div className="text-center my-4 mx-4">
            <Table responsive>

                <thead>
                    <tr>
                        <th className="table-subtitle">Nom</th>
                        <th className="table-subtitle">Montant (€)</th>
                    </tr>
                </thead>

                <tbody>

                    {(lstArticles === undefined || lstArticles.length === 0) && (
                        <tr>
                            <td colSpan={8} className="text-center">
                                Aucun résultat
                            </td>
                        </tr>
                    )}

                    {lstArticles !== undefined && lstArticles.length !== 0 &&
                            lstArticles.map((article) => {
                            return (

                                <tr key={article.id}>
                                    <td>{article.libelle}</td>
                                    <td>{article.prix}</td>
                                </tr>
                            )
                        })}

                </tbody>

            </Table>
        </div>
    </div>
    )
}