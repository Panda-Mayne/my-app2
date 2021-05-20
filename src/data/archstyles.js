import { baroque } from "./baroque";
import { romanesque } from "./romanesque";
import { gothic } from "./gothic";
import { renaissance } from "./renaissance";

const archStyles = [
  {
    styleName: "Romanesque",
    timeFrame: "11th - mid-12th century",
    image: "/images/archstyles/romanesque.jpg",
    description: "A fusion of Roman, Carolingian and Ottonian, Byzantine, and local Germanic traditions, it was a product of the great expansion of monasticism in the 10th–11th century.",
    placesArray: [...romanesque],
  },
  {
    styleName: "Gothic",
    timeFrame: "mid-12th - 16th century",
    image: "/images/archstyles/gothic.jpg",
    description: "The Gothic style of architecture and art originated in the Middle Ages and was prevalent in Europe. It was heavily ornate and conceptual, with its architecture characterised by high buildings, intricate aesthetics, cavernous spaces and expansive walls.",
    placesArray: [...gothic],
  },
  {
    styleName: "Renaissance",
    timeFrame: "15th - early 17th century",
    image: "/images/archstyles/renaissance.jpg",
    description: "Renaissance architecture is the European architecture, demonstrating a conscious revival and development of certain elements of ancient Greek and Roman thought and material culture. Stylistically, Renaissance architecture followed Gothic architecture and was succeeded by Baroque architecture. Developed first in Florence, with Filippo Brunelleschi as one of its innovators, the Renaissance style quickly spread to other Italian cities. The style was carried to Spain, France, Germany, England, Russia and other parts of Europe at different dates and with varying degrees of impact.",
    placesArray: [...renaissance],
  },
  {
    styleName: "Baroque",
    timeFrame: "17th - 18th century",
    image: "/images/archstyles/baroque.jpg",
    description:
      "Baroque architecture is a highly decorative and theatrical style which appeared in Italy in the early 17th century and gradually spread across Europe. It was originally introduced by the Catholic Church, particularly by the Jesuits, as a means to combat the Reformation and the Protestant church with a new architecture that inspired surprise and awe. It reached its peak in the High Baroque (1625–1675), when it was used in churches and palaces in Italy, Spain, Portugal and France, and Austria.",
    placesArray: [...baroque],
  },
];

export default archStyles;
