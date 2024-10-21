

const categoriesTitles = ["Przyszłość", "Erotyczne", "Emocje", "Zdrowie"] as const;

export interface Question {
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

export const questions: Question[] = [
    {
        question: "Jak widzisz nasz związek za 5 lat?",
        category: "Przyszłość",
    },
    {
        question: "Jakie emocje towarzyszą Ci w naszym związku?",
        category: "Emocje",
    }
]