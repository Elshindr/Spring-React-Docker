import React, { useRef } from "react"
import { Form, Button } from 'react-bootstrap';
import ArticleService from "../../Services/ArticleService.ts";

export default function AddComponent() {


    const libelleInput = useRef<HTMLInputElement>(null);
    const prixInput = useRef<HTMLInputElement>(null);

    const  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (libelleInput.current !== null && prixInput.current !== null) {
            const resPromise = await ArticleService.insertArticle(libelleInput.current.value, parseInt(prixInput.current.value))
            console.log(`resPromise`,resPromise)
        }

    };

    return (<>
        <h1>Ajouter un Article</h1>

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Libelle</Form.Label>
                <Form.Control
                    type="text"
                    ref={libelleInput}
                    placeholder="Libelle de l'article"
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Prix</Form.Label>
                <Form.Control
                    type="number"
                    step={1}
                    ref={prixInput}
                />
            </Form.Group>


            <Button type="submit">Submit form</Button>

        </Form>
    </>);
}