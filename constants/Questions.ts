

const categoriesTitles = ["Przyszłość", "Erotyczne", "Emocje", "Zdrowie"] as const;

export interface Question {
    question: string;
    category: typeof categoriesTitles[number];
}

export type Questions = Question[];

export interface CategoryProps {
    title: typeof categoriesTitles[number];
    color?: string;
    lightColor?: string;
}

export const categories: CategoryProps[] = [
    {
        title: "Przyszłość",
        color: '#334466',
        lightColor: '#334466',
    },
    {
        title: "Emocje",
        color: '#7d5b5b',
        lightColor: '#7d5b5b',
    },
    {
        title: "Zdrowie",
        color: '#6a4a6a',
        lightColor: '#6a4a6a',
    },
    {
        title: "Erotyczne",
        color: '#567567',
        lightColor: '#567567',
    },
]

export const questions: Questions = [
    {
        question: "Jak widzisz nasz związek za 5 lat?",
        category: "Przyszłość",
    },
    {
        question: "Jakie emocje towarzyszą Ci w naszym związku?",
        category: "Emocje",
    },
    {
        question: "Jak dbasz o swoje zdrowie?",
        category: "Zdrowie",
    },
    {
        question: "Jakie masz fantazje erotyczne?",
        category: "Erotyczne",
    },
    {
        "question": "Jakie cele chcesz osiągnąć w ciągu najbliższych 5 lat?",
        category: "Przyszłość",
    },
    {
        "question": "Jak wyobrażasz sobie naszą sytuację finansową za kilka lat?",
        category: "Przyszłość",
    },
    {
        "question": "Czy myślisz o zmianie miejsca zamieszkania w przyszłości?",
        category: "Przyszłość",
    },
    {
        "question": "Jakie wartości chcesz przekazać przyszłym pokoleniom?",
        category: "Przyszłość",
    },
    {
        "question": "Jakie kraje chciałbyś odwiedzić w przyszłości?",
        category: "Przyszłość",
    },
    {
        "question": "Jakie cele zawodowe chciałbyś osiągnąć za 5 lat?",
        category: "Przyszłość",
    },
    {
        "question": "Czy myślisz o założeniu rodziny w ciągu najbliższych kilku lat?",
        category: "Przyszłość",
    },
    {
        "question": "Jak wyobrażasz sobie naszą relację, kiedy będziemy starsi?",
        category: "Przyszłość",
    },
    {
        "question": "Jakie zmiany chciałbyś wprowadzić w swoim stylu życia w przyszłości?",
        category: "Przyszłość",
    },
    {
        "question": "Jakie pasje chciałbyś rozwijać w ciągu następnych lat?",
        category: "Przyszłość",
    },
    {
        "question": "Czy masz plany dotyczące edukacji lub dalszego rozwoju osobistego?",
        category: "Przyszłość",
    },
    {
        "question": "Czy chciałbyś zamieszkać w innym kraju w przyszłości?",
        category: "Przyszłość",
    },
    {
        "question": "Jakie są twoje priorytety w życiu na najbliższe 5-10 lat?",
        category: "Przyszłość",
    },
    {
        "question": "Jak wyobrażasz sobie naszą przyszłość z dziećmi?",
        category: "Przyszłość",
    },
    {
        "question": "Czy myślisz o zmianie kariery zawodowej za kilka lat?",
        category: "Przyszłość",
    },
    {
        "question": "Jakie umiejętności chciałbyś rozwijać w przyszłości?",
        category: "Przyszłość",
    },
    {
        "question": "Czy wyobrażasz sobie, że będziemy mieli dom na wsi lub nad morzem?",
        category: "Przyszłość",
    },
    {
        "question": "Jakie wspólne cele chciałbyś, żebyśmy osiągnęli jako para?",
        category: "Przyszłość",
    },
    {
        "question": "Jakie wyzwania w naszym związku przewidujesz w przyszłości?",
        category: "Przyszłość",
    },
    {
        "question": "Jakie są twoje marzenia dotyczące podróży, które chciałbyś zrealizować?",
        category: "Przyszłość",
    },
    {
        "question": "Jakie nawyki chciałbyś zmienić lub rozwijać w przyszłości?",
        category: "Przyszłość",
    },
    {
        "question": "Czy widzisz nas w przyszłości jako rodzinę z dziećmi, zwierzętami, czy oboma?",
        category: "Przyszłość",
    },
    {
        "question": "Jakie zmiany społeczne uważasz za ważne w nadchodzących latach?",
        category: "Przyszłość",
    },
    {
        "question": "Jakie są twoje plany na rozwój duchowy lub osobisty w przyszłości?",
        category: "Przyszłość",
    },
    {
        "question": "Czy widzisz siebie w przyszłości jako osobę na wyższym stanowisku zawodowym?",
        category: "Przyszłość",
    },
    {
        "question": "Jak wyobrażasz sobie naszą emeryturę?",
        category: "Przyszłość",
    },
    {
        "question": "Czy chciałbyś założyć własną firmę w przyszłości?",
        category: "Przyszłość",
    },
    {
        "question": "Jakie cele zdrowotne chcesz osiągnąć za kilka lat?",
        category: "Przyszłość",
    },
    {
        "question": "Czy myślisz o adopcji zwierzęcia w przyszłości?",
        category: "Przyszłość",
    },
    {
        "question": "Jakie wydarzenia w życiu osobistym uważasz za kluczowe w nadchodzących latach?",
        category: "Przyszłość",
    },
    {
        "question": "Jakie projekty artystyczne chciałbyś zrealizować w ciągu najbliższych 5 lat?",
        category: "Przyszłość",
    },
    {
        "question": "Jakie zmiany klimatyczne uważasz za najważniejsze dla naszej przyszłości?",
        category: "Przyszłość",
    },
    {
        "question": "Jakie cele finansowe chciałbyś osiągnąć do emerytury?",
        category: "Przyszłość",
    },
    {
        "question": "Czy widzisz nas w przyszłości w większym domu, czy mniejszym mieszkaniu?",
        category: "Przyszłość",
    },
    {
        "question": "Jakie zmiany społeczne chciałbyś wspierać w przyszłości?",
        category: "Przyszłość",
    },
    {
        "question": "Jakie nowe technologie uważasz, że wpłyną na nas w nadchodzących latach?",
        category: "Przyszłość",
    },
    {
        "question": "Jakie wyzwania zawodowe przewidujesz dla siebie w przyszłości?",
        category: "Przyszłość",
    },
    {
        "question": "Jakie są twoje cele związane z równowagą między pracą a życiem prywatnym w przyszłości?",
        category: "Przyszłość",
    },
    {
        "question": "Czy chciałbyś pracować zdalnie przez większość swojego życia zawodowego?",
        category: "Przyszłość",
    },
    {
        "question": "Jakie wartości chciałbyś, aby nasze dzieci przejęły od nas?",
        category: "Przyszłość",
    },
    {
        "question": "Czy wyobrażasz sobie wspólne projekty charytatywne w przyszłości?",
        category: "Przyszłość",
    },
    {
        "question": "Jakie wyzwania zdrowotne chciałbyś przezwyciężyć w przyszłości?",
        category: "Przyszłość",
    },
    {
        "question": "Jakie są twoje cele związane z samorozwojem w ciągu najbliższych 10 lat?",
        category: "Przyszłość",
    },
    {
        "question": "Czy widzisz nasz związek w przyszłości bardziej stabilny, czy pełen wyzwań?",
        category: "Przyszłość",
    },
    {
        "question": "Jakie plany emerytalne uważasz za najważniejsze dla naszej przyszłości?",
        category: "Przyszłość",
    },
    {
        "question": "Jakie są twoje cele związane z ochroną środowiska na nadchodzące lata?",
        category: "Przyszłość",
    },
    {
        "question": "Jakie wspólne plany wakacyjne chciałbyś realizować w przyszłości?",
        category: "Przyszłość",
    },
    {
        "question": "Jakie są twoje długoterminowe cele zdrowotne na najbliższe 5 lat?",
        category: "Zdrowie"
    },
    {
        "question": "Jakie nawyki żywieniowe chciałbyś zmienić w przyszłości, aby poprawić swoje zdrowie?",
        category: "Zdrowie"
    },
    {
        "question": "Jak wyobrażasz sobie swoją kondycję fizyczną za 10 lat?",
        category: "Zdrowie"
    },
    {
        "question": "Czy widzisz w swojej przyszłości regularne uprawianie jakiegoś sportu?",
        category: "Zdrowie"
    },
    {
        "question": "Jakie metody relaksacyjne chciałbyś wdrożyć, aby poprawić swoje zdrowie psychiczne?",
        category: "Zdrowie"
    },
    {
        "question": "Jakie są twoje plany związane z regularnymi badaniami profilaktycznymi w przyszłości?",
        category: "Zdrowie"
    },
    {
        "question": "Czy myślisz o rozpoczęciu jakiejś diety w przyszłości, aby poprawić swoje zdrowie?",
        category: "Zdrowie"
    },
    {
        "question": "Jakie zmiany w codziennej aktywności fizycznej planujesz w nadchodzących latach?",
        category: "Zdrowie"
    },
    {
        "question": "Jakie kroki chcesz podjąć, aby w przyszłości lepiej dbać o swoje zdrowie psychiczne?",
        category: "Zdrowie"
    },
    {
        "question": "Czy myślisz o wprowadzeniu rutyny medytacyjnej lub mindfulness w swoim życiu?",
        category: "Zdrowie"
    },
    {
        "question": "Jakie cele związane z wagą ciała chciałbyś osiągnąć za kilka lat?",
        category: "Zdrowie"
    },
    {
        "question": "Jakie formy aktywności fizycznej planujesz włączyć do swojego życia w przyszłości?",
        category: "Zdrowie"
    },
    {
        "question": "Czy planujesz zrezygnować z jakichś niezdrowych nawyków, aby poprawić swoje zdrowie?",
        category: "Zdrowie"
    },
    {
        "question": "Jakie kroki chcesz podjąć, aby wzmocnić swoją odporność w przyszłości?",
        category: "Zdrowie"
    },
    {
        "question": "Czy widzisz potrzebę większej dbałości o zdrowie psychiczne w nadchodzących latach?",
        category: "Zdrowie"
    },
    {
        "question": "Jakie są twoje cele dotyczące jakości snu na najbliższe lata?",
        category: "Zdrowie"
    },
    {
        "question": "Jakie zmiany chciałbyś wprowadzić w swojej diecie, aby poprawić zdrowie?",
        category: "Zdrowie"
    },
    {
        "question": "Jakie cele związane z redukcją stresu chcesz osiągnąć w przyszłości?",
        category: "Zdrowie"
    },
    {
        "question": "Czy planujesz w przyszłości regularnie odwiedzać fizjoterapeutę lub specjalistę od zdrowia ruchowego?",
        category: "Zdrowie"
    },
    {
        "question": "Jakie działania chcesz podjąć, aby zapobiegać problemom zdrowotnym w przyszłości?",
        category: "Zdrowie"
    },
    {
        "question": "Czy widzisz siebie w przyszłości jako osobę bardziej aktywną fizycznie niż teraz?",
        category: "Zdrowie"
    },
    {
        "question": "Jakie formy odpoczynku planujesz wdrożyć w przyszłości, aby poprawić swoje samopoczucie?",
        category: "Zdrowie"
    },
    {
        "question": "Czy w przyszłości myślisz o rozpoczęciu praktyki jogi lub innej formy aktywności związanej z ciałem i umysłem?",
        category: "Zdrowie"
    },
    {
        "question": "Jakie cele związane z zarządzaniem stresem chcesz osiągnąć za kilka lat?",
        category: "Zdrowie"
    },
    {
        "question": "Czy myślisz o detoksykacji organizmu jako elementu dbałości o zdrowie w przyszłości?",
        category: "Zdrowie"
    },
    {
        "question": "Jakie suplementy lub naturalne metody poprawy zdrowia planujesz wprowadzić w najbliższych latach?",
        category: "Zdrowie"
    },
    {
        "question": "Czy masz plany dotyczące częstszych wizyt u specjalistów w celu monitorowania stanu zdrowia?",
        category: "Zdrowie"
    },
    {
        "question": "Jakie działania profilaktyczne planujesz wprowadzić, aby zmniejszyć ryzyko chorób w przyszłości?",
        category: "Zdrowie"
    },
    {
        "question": "Jakie cele zdrowotne związane z siłą fizyczną chciałbyś osiągnąć za kilka lat?",
        category: "Zdrowie"
    },
    {
        "question": "Jakie są twoje plany dotyczące zdrowia stawów i kręgosłupa w przyszłości?",
        category: "Zdrowie"
    },
    {
        "question": "Czy planujesz wprowadzić do swojej rutyny codzienne ćwiczenia umysłowe w celu poprawy zdrowia psychicznego?",
        category: "Zdrowie"
    },
    {
        "question": "Jakie zmiany chciałbyś wprowadzić w swoim trybie życia, aby zapobiegać problemom zdrowotnym?",
        category: "Zdrowie"
    },
    {
        "question": "Jakie są twoje długoterminowe plany dotyczące zdrowego stylu życia?",
        category: "Zdrowie"
    },
    {
        "question": "Czy widzisz potrzebę większej dbałości o dietę w nadchodzących latach?",
        category: "Zdrowie"
    },
    {
        "question": "Jakie cele związane z aktywnością fizyczną chciałbyś osiągnąć w ciągu następnych kilku lat?",
        category: "Zdrowie"
    },
    {
        "question": "Czy planujesz zmienić swoje nawyki związane z higieną snu, aby poprawić swoje zdrowie?",
        category: "Zdrowie"
    },
    {
        "question": "Jakie działania planujesz podjąć, aby zwiększyć swoją energię w przyszłości?",
        category: "Zdrowie"
    },
    {
        "question": "Czy widzisz potrzebę większego zaangażowania w dbanie o zdrowie emocjonalne w przyszłości?",
        category: "Zdrowie"
    },
    {
        "question": "Jakie kroki chcesz podjąć, aby w przyszłości poprawić swoją wytrzymałość fizyczną?",
        category: "Zdrowie"
    },
    {
        "question": "Jakie są twoje plany dotyczące zdrowia oczu i słuchu w nadchodzących latach?",
        category: "Zdrowie"
    },
    {
        "question": "Czy widzisz potrzebę większej uwagi na zdrowie serca w przyszłości?",
        category: "Zdrowie"
    },
    {
        "question": "Jakie cele związane z redukcją spożycia cukru chciałbyś osiągnąć w przyszłości?",
        category: "Zdrowie"
    },
    {
        "question": "Jakie plany dotyczące zdrowia skóry chciałbyś wdrożyć w najbliższych latach?",
        category: "Zdrowie"
    },
    {
        "question": "Jakie są twoje cele związane z utrzymaniem zdrowych relacji społecznych jako elementu dbania o zdrowie?",
        category: "Zdrowie"
    },
    {
        "question": "Czy myślisz o wprowadzeniu regularnych masaży lub innych form regeneracji do swojej rutyny zdrowotnej?",
        category: "Zdrowie"
    },
    {
        "question": "Jakie cele zdrowotne związane z pracą nad równowagą między ciałem a umysłem chciałbyś osiągnąć?",
        category: "Zdrowie"
    },
    {
        "question": "Czy widzisz potrzebę regularnych wizyt u dietetyka lub specjalisty ds. żywienia w przyszłości?",
        category: "Zdrowie"
    },
    {
        "question": "Jak wyobrażasz sobie swoją zdolność do radzenia sobie z emocjami za kilka lat?",
        category: "Emocje"
    },
    {
        "question": "Jakie emocje chciałbyś częściej odczuwać w przyszłości?",
        category: "Emocje"
    },
    {
        "question": "Jakie kroki chciałbyś podjąć, aby lepiej zarządzać negatywnymi emocjami w przyszłości?",
        category: "Emocje"
    },
    {
        "question": "Jakie strategie chcesz wdrożyć, aby w przyszłości być bardziej świadomym swoich emocji?",
        category: "Emocje"
    },
    {
        "question": "Czy widzisz potrzebę większej otwartości na wyrażanie emocji w nadchodzących latach?",
        category: "Emocje"
    },
    {
        "question": "Jakie emocje chciałbyś w przyszłości lepiej kontrolować?",
        category: "Emocje"
    },
    {
        "question": "Jakie są twoje plany dotyczące pracy nad emocjonalnym zdrowiem w przyszłości?",
        category: "Emocje"
    },
    {
        "question": "Jakie kroki chcesz podjąć, aby w przyszłości być bardziej empatycznym wobec innych?",
        category: "Emocje"
    },
    {
        "question": "Czy masz jakieś cele związane z rozwijaniem swojej inteligencji emocjonalnej?",
        category: "Emocje"
    },
    {
        "question": "Jak wyobrażasz sobie zarządzanie emocjami w trudnych sytuacjach za kilka lat?",
        category: "Emocje"
    },
    {
        "question": "Czy myślisz o wprowadzeniu regularnych technik radzenia sobie ze stresem emocjonalnym w przyszłości?",
        category: "Emocje"
    },
    {
        "question": "Jakie emocje chciałbyś w przyszłości częściej wyrażać w relacjach z bliskimi?",
        category: "Emocje"
    },
    {
        "question": "Jakie wyzwania emocjonalne przewidujesz dla siebie w przyszłości i jak chcesz sobie z nimi radzić?",
        category: "Emocje"
    },
    {
        "question": "Jakie są twoje plany dotyczące pracy nad większą stabilnością emocjonalną?",
        category: "Emocje"
    },
    {
        "question": "Czy widzisz potrzebę większego dbania o swoje emocje w przyszłości?",
        category: "Emocje"
    },
    {
        "question": "Jakie emocje chciałbyś częściej odczuwać w pracy zawodowej w nadchodzących latach?",
        category: "Emocje"
    },
    {
        "question": "Jakie działania planujesz podjąć, aby poprawić swoją samoświadomość emocjonalną?",
        category: "Emocje"
    },
    {
        "question": "Jakie są twoje plany związane z lepszym wyrażaniem emocji w przyszłości?",
        category: "Emocje"
    },
    {
        "question": "Czy widzisz w przyszłości potrzebę pracy z terapeutą lub coachem, aby lepiej rozumieć swoje emocje?",
        category: "Emocje"
    },
    {
        "question": "Jakie kroki chcesz podjąć, aby w przyszłości być bardziej autentycznym w wyrażaniu emocji?",
        category: "Emocje"
    },
    {
        "question": "Czy widzisz potrzebę pracy nad zdolnością do wybaczania w przyszłości?",
        category: "Emocje"
    },
    {
        "question": "Jakie emocje chciałbyś w przyszłości lepiej rozumieć i kontrolować?",
        category: "Emocje"
    },
    {
        "question": "Jakie są twoje cele związane z większą otwartością emocjonalną w relacjach osobistych?",
        category: "Emocje"
    },
    {
        "question": "Czy planujesz w przyszłości wprowadzić jakieś techniki pracy z emocjami, takie jak medytacja lub terapia?",
        category: "Emocje"
    },
    {
        "question": "Jakie emocje chciałbyś częściej wywoływać w innych poprzez swoje działania w przyszłości?",
        category: "Emocje"
    },
    {
        "question": "Jakie są twoje plany dotyczące pracy nad lepszym radzeniem sobie z emocjami w stresujących sytuacjach?",
        category: "Emocje"
    },
    {
        "question": "Czy widzisz potrzebę wzmocnienia swojego wsparcia emocjonalnego dla bliskich w nadchodzących latach?",
        category: "Emocje"
    },
    {
        "question": "Jakie kroki chcesz podjąć, aby w przyszłości czuć większą radość z małych rzeczy?",
        category: "Emocje"
    },
    {
        "question": "Jakie emocje chciałbyś częściej odczuwać w swojej codzienności?",
        category: "Emocje"
    },
    {
        "question": "Jakie są twoje plany związane z redukcją negatywnych emocji w przyszłości?",
        category: "Emocje"
    },
    {
        "question": "Czy widzisz potrzebę większego dbania o emocje innych w nadchodzących latach?",
        category: "Emocje"
    },
    {
        "question": "Jakie emocje chciałbyś w przyszłości skuteczniej identyfikować w relacjach z innymi?",
        category: "Emocje"
    },
    {
        "question": "Jakie są twoje cele związane z radzeniem sobie z frustracją i gniewem w przyszłości?",
        category: "Emocje"
    },
    {
        "question": "Czy planujesz rozwijać w przyszłości zdolność do bardziej pozytywnego myślenia?",
        category: "Emocje"
    },
    {
        "question": "Jakie emocje chciałbyś częściej odczuwać w sytuacjach zawodowych w przyszłości?",
        category: "Emocje"
    },
    {
        "question": "Jakie kroki chcesz podjąć, aby w przyszłości lepiej radzić sobie z emocjami w konfliktach?",
        category: "Emocje"
    },
    {
        "question": "Jakie cele związane z lepszym rozumieniem emocji innych ludzi chciałbyś osiągnąć w nadchodzących latach?",
        category: "Emocje"
    },
    {
        "question": "Czy widzisz potrzebę większej pracy nad samoakceptacją i miłością własną w przyszłości?",
        category: "Emocje"
    },
    {
        "question": "Jakie działania chciałbyś podjąć, aby w przyszłości skuteczniej wyrażać swoje uczucia?",
        category: "Emocje"
    },
    {
        "question": "Jakie są twoje plany dotyczące radzenia sobie z lękiem i stresem emocjonalnym w przyszłości?",
        category: "Emocje"
    },
    {
        "question": "Jakie kroki chcesz podjąć, aby w przyszłości odczuwać większe spełnienie emocjonalne?",
        category: "Emocje"
    },
    {
        "question": "Jakie są twoje cele związane z radzeniem sobie z emocjami w trudnych relacjach w przyszłości?",
        category: "Emocje"
    },
    {
        "question": "Czy planujesz w przyszłości rozwijać umiejętność lepszego słuchania i rozumienia emocji innych?",
        category: "Emocje"
    },
    {
        "question": "Jakie działania chcesz podjąć, aby w przyszłości bardziej świadomie reagować na swoje emocje?",
        category: "Emocje"
    },
    {
        "question": "Jakie emocje chciałbyś lepiej rozumieć i wyrażać w relacjach z najbliższymi?",
        category: "Emocje"
    },
    {
        "question": "Jakie są twoje cele związane z budowaniem większej wewnętrznej równowagi emocjonalnej?",
        category: "Emocje"
    },
    {
        "question": "Czy widzisz potrzebę pracy nad lepszym wyrażaniem emocji pozytywnych, takich jak wdzięczność, w przyszłości?",
        category: "Emocje"
    },
    {
        "question": "Jakie są twoje plany związane z rozwijaniem większej odporności emocjonalnej?",
        category: "Emocje"
    },
    {
        "question": "Jakie są twoje największe pragnienia erotyczne?",
        category: "Erotyczne"
    },
    {
        "question": "Czy są jakieś fantazje, które chciałbyś zrealizować wspólnie?",
        category: "Erotyczne"
    },
    {
        "question": "Jakie są twoje ulubione sposoby na budowanie intymności?",
        category: "Erotyczne"
    },
    {
        "question": "Jak często chciałbyś wprowadzać nowe doświadczenia erotyczne do naszego życia?",
        category: "Erotyczne"
    },
    {
        "question": "Czy są jakieś granice, które chciałbyś omówić w naszym życiu erotycznym?",
        category: "Erotyczne"
    },
    {
        "question": "Jakie gesty lub dotyk najbardziej pobudzają twoje zmysły?",
        category: "Erotyczne"
    },
    {
        "question": "Jakie miejsca na twoim ciele są najbardziej wrażliwe na dotyk?",
        category: "Erotyczne"
    },
    {
        "question": "Czy są jakieś elementy zmysłowej gry, które chciałbyś wypróbować razem?",
        category: "Erotyczne"
    },
    {
        "question": "Czy myślałeś kiedyś o wprowadzeniu roli odgrywania w nasze życie erotyczne?",
        category: "Erotyczne"
    },
    {
        "question": "Jak ważne dla ciebie jest tworzenie odpowiedniego nastroju w czasie intymnych chwil?",
        category: "Erotyczne"
    },
    {
        "question": "Czy chciałbyś, aby nasze życie erotyczne było bardziej spontaniczne, czy raczej zaplanowane?",
        category: "Erotyczne"
    },
    {
        "question": "Jakie rodzaje pieszczot najbardziej cię ekscytują?",
        category: "Erotyczne"
    },
    {
        "question": "Czy są jakieś erotyczne gadżety, które chciałbyś wypróbować?",
        category: "Erotyczne"
    },
    {
        "question": "Czy chciałbyś eksperymentować z różnymi pozycjami w naszym życiu intymnym?",
        category: "Erotyczne"
    },
    {
        "question": "Jaką rolę odgrywa dla ciebie rozmowa w czasie erotycznych zbliżeń?",
        category: "Erotyczne"
    },
    {
        "question": "Jakie są twoje ulubione sposoby na budowanie napięcia erotycznego?",
        category: "Erotyczne"
    },
    {
        "question": "Czy są jakieś miejsca, w których szczególnie lubisz uprawiać seks?",
        category: "Erotyczne"
    },
    {
        "question": "Jakie są twoje myśli na temat wprowadzania nowości i eksperymentowania w naszym życiu erotycznym?",
        category: "Erotyczne"
    },
    {
        "question": "Czy kiedykolwiek miałeś erotyczne sny, którymi chciałbyś się podzielić?",
        category: "Erotyczne"
    },
    {
        "question": "Jakie są twoje odczucia na temat długiego wstępu przed aktem seksualnym?",
        category: "Erotyczne"
    },
    {
        "question": "Czy myślałeś o wprowadzeniu masażu erotycznego do naszego życia intymnego?",
        category: "Erotyczne"
    },
    {
        "question": "Czy są jakieś szczególne fantazje, które cię najbardziej ekscytują?",
        category: "Erotyczne"
    },
    {
        "question": "Czy kiedykolwiek rozważałeś wypróbowanie innych form wyrażania erotyzmu, jak tantra czy slow sex?",
        category: "Erotyczne"
    },
    {
        "question": "Jakie są twoje ulubione sposoby na inicjowanie zbliżeń?",
        category: "Erotyczne"
    },
    {
        "question": "Jakie są twoje myśli na temat namiętnych pocałunków w naszym związku?",
        category: "Erotyczne"
    },
    {
        "question": "Czy są jakieś filmy, książki lub muzyka, które szczególnie cię pobudzają erotycznie?",
        category: "Erotyczne"
    },
    {
        "question": "Czy chciałbyś wprowadzić więcej gry wstępnej do naszego życia erotycznego?",
        category: "Erotyczne"
    },
    {
        "question": "Jakie są twoje odczucia na temat odkrywania nowych form przyjemności?",
        category: "Erotyczne"
    },
    {
        "question": "Jakie są twoje ulubione sposoby na spędzanie czasu po erotycznym zbliżeniu?",
        category: "Erotyczne"
    },
    {
        "question": "Czy chciałbyś, abyśmy częściej omawiali nasze pragnienia i potrzeby seksualne?",
        category: "Erotyczne"
    },
    {
        "question": "Jak ważna dla ciebie jest bliskość emocjonalna w kontekście erotycznym?",
        category: "Erotyczne"
    },
    {
        "question": "Czy są jakieś techniki lub sposoby, które chciałbyś poprawić w naszym życiu erotycznym?",
        category: "Erotyczne"
    },
    {
        "question": "Jakie są twoje odczucia na temat seksu poza sypialnią?",
        category: "Erotyczne"
    },
    {
        "question": "Czy są jakieś miejsca publiczne, w których fantazjujesz o intymnych chwilach?",
        category: "Erotyczne"
    },
    {
        "question": "Czy lubisz, gdy inicjatywa w erotycznych zbliżeniach jest obustronna?",
        category: "Erotyczne"
    },
    {
        "question": "Jakie emocje najczęściej towarzyszą ci podczas erotycznych zbliżeń?",
        category: "Erotyczne"
    },
    {
        "question": "Jakie są twoje ulubione chwile podczas intymnych zbliżeń?",
        category: "Erotyczne"
    },
    {
        "question": "Czy w naszym życiu erotycznym chciałbyś więcej rozmów o tym, co nas pobudza?",
        category: "Erotyczne"
    },
    {
        "question": "Czy jest coś, co chciałbyś dodać lub zmienić w naszej relacji erotycznej, aby czuć większą satysfakcję?",
        category: "Erotyczne"
    },
    {
        "question": "Jakie są twoje ulubione fantazje erotyczne, które chciałbyś zrealizować?",
        category: "Erotyczne"
    },
    {
        "question": "Jak ważna jest dla ciebie rola eksperymentowania w sferze erotycznej?",
        category: "Erotyczne"
    },
    {
        "question": "Czy myślałeś kiedyś o wypróbowaniu różnych form erotycznej komunikacji, jak sexting?",
        category: "Erotyczne"
    },
    {
        "question": "Czy chciałbyś w przyszłości bardziej eksplorować swoją seksualność?",
        category: "Erotyczne"
    },
    {
        "question": "Jak ważna dla ciebie jest spontaniczność w naszym życiu erotycznym?",
        category: "Erotyczne"
    },
    {
        "question": "Czy są jakieś rzeczy, które moglibyśmy wprowadzić do naszej intymności, aby zwiększyć naszą bliskość?",
        category: "Erotyczne"
    },
    {
        "question": "Jakie są twoje preferencje dotyczące budowania erotycznego napięcia między nami?",
        category: "Erotyczne"
    }
]