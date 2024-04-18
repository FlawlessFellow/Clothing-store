import benefitsListFirstImg from '../../../assets/images/benefits-first-img.svg';
import benefitsListSecondImg from '../../../assets/images/benefits-second-img.svg';
import benefitsListThirdImg from '../../../assets/images/benefits-third-img.svg';
import benefitsListFourthImg from '../../../assets/images/benefits-fourth-img.svg';
import benefitsListFifthImg from '../../../assets/images/benefits-fifth-img.svg';

type BenefitsList = {
    id: number;
    img: string;
    text: string;
};

const BenefitsListItems: BenefitsList[] = [
    {
        id: 1,
        img: benefitsListFirstImg,
        text: 'Пошито з натуральної тканини - Ангори.',
    },
    {
        id: 2,
        img: benefitsListSecondImg,
        text: 'Підтримує оптимальну температуру.',
    },
    {
        id: 3,
        img: benefitsListThirdImg,
        text: 'Відповідає сучасним модним тенденціям.',
    },
    {
        id: 4,
        img: benefitsListFourthImg,
        text: 'Створює повну свободу рухів.',
    },
    {
        id: 5,
        img: benefitsListFifthImg,
        text: 'Практичний одяг для будь-якого випадку.',
    },
];

export default BenefitsListItems;
