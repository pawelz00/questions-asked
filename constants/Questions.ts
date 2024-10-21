

const categoriesTitles = ["Przyszłość", "Erotyczne", "Emocje", "Zdrowie"] as const;

export interface QuestionProps {
    question: string;
    category: typeof categoriesTitles[number];
}

export interface CategoryProps {
    title: typeof categoriesTitles[number];
    color?: string;
}

export const categories: CategoryProps[] = [
    {
        title: "Przyszłość",
        color: '#334466',
    },
    {
        title: "Emocje",
        color: '#7d5b5b',
    },
    {
        title: "Zdrowie",
        color: '#6a4a6a',
    },
    {
        title: "Erotyczne",
        color: '#567567',
    },
]