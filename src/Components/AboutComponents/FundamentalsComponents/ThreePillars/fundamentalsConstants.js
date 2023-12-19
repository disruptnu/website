import num1 from "../../../../img/num1.svg";
import num2 from "../../../../img/num2.svg";
import num3 from "../../../../img/num3.svg";


export const Pillar = [
    {
        key: "pillar1",
        numberIcon: num1,
        header: 
        (
            <span>
                WHAT'S<span className="text-blue-500"> FINTECH</span>
            </span>
        ),
        description: "Fintech is the introduction of technology to elevate financial services.",
        alt: ""
    },
    {
        key: "pillar2",
        numberIcon: num2,
        header: 
        (
            <span>
                WHO'S <span className="text-blue-500"> INVOLVED</span>
            </span>
        ),
        description: "Our community is made up of students, alumni, and professionals with a passion for Fintech.",
        alt: ""
    },
    {
        key: "pillar3",
        numberIcon: num3,
        header:
        (
            <span>
                WHAT'S OUR <span className="text-blue-500"> VISION</span>
            </span>
        ),
        description: `We aim to be a "one-stop-shop" for Fintech at Northeastern University & in the Boston area.`,
        alt: ""
    }
];